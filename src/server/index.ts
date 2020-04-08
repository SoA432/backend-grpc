import { EdgeInterface } from '../interfaces/edge.interface';
import { PersonInterface } from '../interfaces/person.interface';
import { Graph } from '../graph/Graph';
import grpc from 'grpc';
import { GraphServiceService, IGraphServiceServer } from '../protos/graph_grpc_pb';
import { AddEdgeRequest, AddEdgeResponse, AddGameNodeRequest, AddGameNodeResponse, AddPersonNodeRequest, AddPersonNodeResponse, PrintNodesRequest, PrintNodesResponse, RemoveEdgeRequest, RemoveEdgeResponse } from '../protos/graph_pb';
import { GameInterface } from '../interfaces/game.interface';
import { debug } from 'debug';

debug('server');

class Server implements IGraphServiceServer {
    private graph: Graph;

    constructor() {
        this.graph = new Graph();
    }

    public addPersonNode(call: grpc.ServerUnaryCall<AddPersonNodeRequest>, callback: grpc.sendUnaryData<AddPersonNodeResponse>) {
        const firstName = call.request.getPerson().getFirstName();
        const lastName = call.request.getPerson().getLastName();
        const person: PersonInterface = {
            firstName,
            lastName
        };
        this.graph.addPersonNode(person);
        const response = new AddPersonNodeResponse();
        debug.log('New Person Node added: ', person);
        response.setResult('Success, person node added to graph');
        callback(null, response);
    }

    public addGameNode(call: grpc.ServerUnaryCall<AddGameNodeRequest>, callback: grpc.sendUnaryData<AddGameNodeResponse>) {
        const title = call.request.getGame().getTitle();
        const description = call.request.getGame().getDescription();
        const game: GameInterface = {
            title,
            description
        };
        this.graph.addGameNode(game);
        const response = new AddGameNodeResponse();
        debug.log('New Game Node added: ', game);
        response.setResult('Success, game node added to graph');
        callback(null, response);
    }

    public addEdge(call: grpc.ServerUnaryCall<AddEdgeRequest>, callback: grpc.sendUnaryData<AddEdgeResponse>) {
        const title = call.request.getEdgeInfo().getGameTitle();
        const fullName = call.request.getEdgeInfo().getPersonFullName();
        const edge: EdgeInterface = {
            title,
            fullName
        };
        const response = new AddEdgeResponse();
        debug.log('New Edge added: ', edge);
        response.setIsSucceed(this.graph.addEdge(edge));
        callback(null, response);
    }

    public removeEdge(call: grpc.ServerUnaryCall<RemoveEdgeRequest>, callback: grpc.sendUnaryData<RemoveEdgeResponse>) {
        const title = call.request.getEdgeInfo().getGameTitle();
        const fullName = call.request.getEdgeInfo().getPersonFullName();
        const edge: EdgeInterface = {
            title,
            fullName
        };
        const response = new RemoveEdgeResponse();
        debug.log('Edge removed: ', edge);
        response.setIsSucceed(this.graph.removeEdge(edge));
        callback(null, response);
    }

    public printNodes(call: grpc.ServerWriteableStream<PrintNodesRequest>) {
        let count = 0;
        let intervalID = setInterval(() => {
            const reply = new PrintNodesResponse();
            reply.setEdgeInfoList(this.graph.printAllNodes());
            call.write(reply);

            if (++count > 60) {
                clearInterval(intervalID);
                call.end();
            }
        }, 1000);
    }
}

function startServer() {
    const server = new grpc.Server();
    server.addService(GraphServiceService, new Server());
    server.bind('127.0.0.1:50051', grpc.ServerCredentials.createInsecure());
    server.start();

    debug.log('Server started, listening: 127.0.0.1:50051');
}

startServer();
