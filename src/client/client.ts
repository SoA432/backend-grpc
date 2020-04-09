import grpc from 'grpc';
import { debug } from 'debug';
import { GraphServiceClient } from '../protos/graph_grpc_pb';
import {
    EdgeInfo,
    Edge,
    Game,
    Person,
    UpdateUsersRequest,
    AddEdgeRequest,
    AddEdgeResponse,
    AddGameNodeRequest,
    AddGameNodeResponse,
    AddPersonNodeRequest,
    AddPersonNodeResponse,
    RemoveEdgeRequest,
    RemoveEdgeResponse,
    GetEdgesRequest,
    GetEdgesResponse
} from '../protos/graph_pb';
import { GameInterface } from '../interfaces/game.interface';
import { PersonInterface } from '../interfaces/person.interface';
import { getRandomInt } from '../utils/random-number-generator'

debug('client');

const games: GameInterface[] = [
    {title: 'Ori', description: 'Very Beauty Game'},
    {title: 'GTA V', description: 'Top seller'},
    {title: 'Half-Life3', description: 'Impossible'},
    {title: 'Call Of Duty', description: 'War'},
    {title: 'Super Lucky Tale', description: 'For kids'}
];

const persons: PersonInterface[] = [
    {firstName: 'Denis', lastName: 'Denisov'},
    {firstName: 'Ivan', lastName: 'Ivanov'},
    {firstName: 'Semen', lastName: 'Semenov'},
    {firstName: 'Alex', lastName: 'Alexeev'},
    {firstName: 'Ihor', lastName: 'Ihorov'}
];

const edges: Edge[] = [];

const client = new GraphServiceClient(
    '127.0.0.1:50051',
    grpc.credentials.createInsecure()
);

const callAddPersonNode = async (index: number) => {
    return new Promise<string>((resolve, reject) => {
        const request = new AddPersonNodeRequest();
        const person = new Person();

        const randomPerson = persons[index];
        person.setFirstName(randomPerson.firstName);
        person.setLastName(randomPerson.lastName);
        request.setPerson(person);
        client.addPersonNode(request, (error, response: AddPersonNodeResponse) => {
            if (!error) {
                const personId = response.getPersonId().toString();
                debug.log('AddPersonNodeResponse response:', personId);
                resolve(personId);
            } else {
                debug.log('error >>>>', error);
                reject(error);
                return;
            }
        })
    })
};

const callAddGameNode = async (index: number) => {
    return new Promise<string>((resolve, reject) => {
        const request = new AddGameNodeRequest();
        const game = new Game();
        const randomGame = games[index];
        game.setTitle(randomGame.title);
        game.setDescription(randomGame.description);
        request.setGame(game);
        client.addGameNode(request, (error, response: AddGameNodeResponse) => {
            if (!error) {
                const gameId = response.getGameId();
                debug.log('AddGameNodeResponse response:', gameId);
                resolve(gameId.toString());
            } else {
                debug.log('error >>>>', error);
                reject(error);
                return;
            }
        })
    })
};

const callAddEdge = async (personIndex: number, gameIndex: number, gameId: string, currentPersonId: string) => {
    return new Promise((resolve, reject) => {
        const request = new AddEdgeRequest();
        const edge = new Edge();
        edge.setGameTitle(games[gameIndex].title);
        edge.setPersonFullName(persons[personIndex].firstName + ' ' + persons[personIndex].lastName);
        edge.setPersonId(currentPersonId);
        edge.setGameId(gameId);
        request.setEdge(edge);
        client.addEdge(request, (error, response: AddEdgeResponse) => {
            if (!error) {
                edges.push(response.getEdge())
                debug.log('callAddEdge response');
                resolve();
            } else {
                reject(error);
                return;
            }
        })
    })
};

const callRemoveEdge = async (edge: Edge) => {
    return new Promise((resolve, reject) => {
        const request = new RemoveEdgeRequest();
        request.setEdge(edge);
        client.removeEdge(request, (error, response: RemoveEdgeResponse) => {
            if (!error) {
                debug.log('callRemoveEdge response');
                resolve();
            } else {
                reject(error);
                return;
            }
        })
    })
};

const callGetEdges = () => {
    return new Promise((resolve, reject) => {
        const request = new GetEdgesRequest();
        client.getEdges(request, (error, response: GetEdgesResponse) => {
            if (!error) {
                debug.log('GetEdges response:', response.getEdgeList());
                resolve();
            } else {
                debug.log('error >>>>', error);
                reject(error);
                return;
            }
        })
    })
};

const callUpdateUsers = () => {
    const request = new UpdateUsersRequest();
    const stream: grpc.ClientReadableStream<EdgeInfo> = client.updateUsers(request);
    stream.on('data', (data: EdgeInfo) => {
       debug.log('New update >>> ', data.toObject());
    });
    stream.on('status', (status) => {
        debug.log('status', status);
    });
    stream.on('end', () => {
        debug.log('stream finished');
    });
};

async function main() {
    try {
        const randomPersonIndex = getRandomInt(0, 4);
        const randomGameIndex = getRandomInt(0, 2);
        await callGetEdges();
        await callUpdateUsers();
        const currentPersonId: string = await callAddPersonNode(randomPersonIndex);

        let counter = 0;
        const intervalId = setInterval(async () => {
            const gameId: string = await callAddGameNode(randomGameIndex + (counter % 3));
            await callAddEdge(randomPersonIndex, randomGameIndex + (counter % 3), gameId, currentPersonId);
            if (++counter >= getRandomInt(10, 50)) {
                clearInterval(intervalId)
            }
        }, getRandomInt(1, 5) * 1000)

        // remove existing edge after 10 seconds
        setTimeout(async () => {
            await callRemoveEdge(edges[getRandomInt(0, edges.length - 1)])
        }, 10000)
    } catch (e) {
        debug(e)
    }
}

main().then((_) => _);
