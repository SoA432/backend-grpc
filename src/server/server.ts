import { IGraphServiceServer } from '../protos/graph_grpc_pb';
import { Graph } from '../graph/graph';
import grpc from "grpc";
import { AddEdgeRequest, AddEdgeResponse, AddGameNodeRequest, AddGameNodeResponse, AddPersonNodeRequest, AddPersonNodeResponse, PrintNodesRequest, PrintNodesResponse, RemoveEdgeRequest, RemoveEdgeResponse, UpdateUsersRequest } from '../protos/graph_pb';
import { PersonInterface } from '../interfaces/person.interface';
import { debug } from 'debug';
import { GameInterface } from '../interfaces/game.interface';
import { EdgeInterface } from '../interfaces/edge.interface';
import { ConnectionService } from '../services/connection.service';

export class Server implements IGraphServiceServer {
    private graph: Graph;
    private connectionService: ConnectionService;
    constructor() {
        this.graph = new Graph();
        this.connectionService = new ConnectionService();
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
        this.connectionService.updateConnectedUsers(edge, false);
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
        this.connectionService.updateConnectedUsers(edge, true);
        callback(null, response);
    }

    public printNodes(call: grpc.ServerUnaryCall<PrintNodesRequest>, callback: grpc.sendUnaryData<PrintNodesResponse>) {
        const response = new PrintNodesResponse();
        const edges = this.graph.printAllNodes();
        response.setEdgeList(edges);
        callback(null, response);
    }

    public updateUsers(call: grpc.ServerWriteableStream<UpdateUsersRequest>) {
        this.connectionService.addConnectedUser(call);
    }
}
