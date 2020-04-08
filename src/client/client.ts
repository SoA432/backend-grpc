import { PersonInterface } from '../interfaces/person.interface';
import grpc from 'grpc';
import { EdgeInfo, UpdateUsersRequest, PrintNodesResponse, AddEdgeRequest, AddEdgeResponse, AddGameNodeRequest, AddGameNodeResponse, AddPersonNodeRequest, AddPersonNodeResponse, Edge, Game, Person, PrintNodesRequest, RemoveEdgeRequest, RemoveEdgeResponse } from '../protos/graph_pb';
import { GraphServiceClient } from '../protos/graph_grpc_pb';
import { GameInterface } from '../interfaces/game.interface';
import { getRandomInt } from '../utils/random-number-generator'
import { debug } from 'debug';

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

const client = new GraphServiceClient(
    '127.0.0.1:50051',
    grpc.credentials.createInsecure()
);

const callAddPersonNode = async (index: number) => {
    return new Promise((resolve, reject) => {
        const request = new AddPersonNodeRequest();
        const person = new Person();

        const randomPerson = persons[index];
        person.setFirstName(randomPerson.firstName);
        person.setLastName(randomPerson.lastName);
        request.setPerson(person);
        client.addPersonNode(request, (error, response: AddPersonNodeResponse) => {
            if (!error) {
                debug.log('AddPersonNodeResponse response:', response.getResult());
                resolve();
            } else {
                debug.log('error >>>>', error);
                reject(error);
                return;
            }
        })
    })
};

const callAddGameNode = async (index: number) => {
    return new Promise((resolve, reject) => {
        const request = new AddGameNodeRequest();
        const game = new Game();
        const randomGame = games[index];
        game.setTitle(randomGame.title);
        game.setDescription(randomGame.description);
        request.setGame(game);
        client.addGameNode(request, (error, response: AddGameNodeResponse) => {
            if (!error) {
                debug.log('AddGameNodeResponse response:', response.getResult());
                resolve();
            } else {
                debug.log('error >>>>', error);
                reject(error);
                return;
            }
        })
    })
};

const callAddEdge = async (personIndex: number, gameIndex: number) => {
    return new Promise((resolve, reject) => {
        const request = new AddEdgeRequest();
        const edge = new Edge();
        edge.setGameTitle(games[gameIndex].title);
        edge.setPersonFullName(persons[personIndex].firstName + ' ' + persons[personIndex].lastName);
        request.setEdgeInfo(edge);
        client.addEdge(request, (error, response: AddEdgeResponse) => {
            if (!error) {
                debug.log('AddEdgeResponse response:', response.getIsSucceed());
                resolve();
            } else {
                debug.log('error >>>>', error);
                reject(error);
                return;
            }
        })
    })
};

const callRemoveEdge = async (personIndex: number, gameIndex: number) => {
    return new Promise((resolve, reject) => {
        const request = new RemoveEdgeRequest();
        const edge = new Edge();
        edge.setGameTitle(games[gameIndex].title);
        edge.setPersonFullName(persons[personIndex].firstName + ' ' + persons[personIndex].lastName);
        request.setEdgeInfo(edge);
        client.removeEdge(request, (error, response: RemoveEdgeResponse) => {
            if (!error) {
                debug.log('RemoveEdgeResponse response:', response.getIsSucceed());
                resolve();
            } else {
                debug.log('error >>>>', error);
                reject(error);
                return;
            }
        })
    })
};

const callPrintNodes = () => {
    return new Promise((resolve, reject) => {
        const request = new PrintNodesRequest();
        client.printNodes(request, (error, response: PrintNodesResponse) => {
            if (!error) {
                debug.log('PrintNodes response:', response.getEdgeList());
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
    const randomPersonIndex = getRandomInt(0, 4);
    const randomGameIndex = getRandomInt(0, 2);
    await callPrintNodes();
    await callUpdateUsers();
    setTimeout(async () => {
        await callAddPersonNode(randomPersonIndex);
        await callAddGameNode(randomGameIndex);
        await callAddGameNode(randomGameIndex + 1);
        await callAddGameNode(randomGameIndex + 2);
        await callAddEdge(randomPersonIndex, randomGameIndex);
        await callAddEdge(randomPersonIndex, randomGameIndex + 1);
        await callAddEdge(randomPersonIndex, randomGameIndex + 2);
    }, 3000)

    // remove existing edge after 10 seconds
    setTimeout(async () => {
        await callRemoveEdge(randomPersonIndex, randomGameIndex + 1)
    }, 10000)
}

main().then((_) => _);
