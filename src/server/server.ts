import grpc from "grpc";
import { debug } from 'debug';
import { IGraphServiceServer } from '../protos/graph_grpc_pb';
import {
    AddEdgeRequest,
    AddEdgeResponse,
    AddGameNodeRequest,
    AddGameNodeResponse,
    AddPersonNodeRequest,
    AddPersonNodeResponse,
    RemoveEdgeRequest,
    RemoveEdgeResponse,
    UpdateUsersRequest,
    GetEdgesRequest,
    GetEdgesResponse
} from '../protos/graph_pb';
import { GraphService } from './../services/graph.service';
import { ConnectionService } from '../services/connection.service';

export class Server implements IGraphServiceServer {
    private connectionService: ConnectionService;
    private graphService: GraphService;
    constructor() {
        this.connectionService = new ConnectionService();
        this.graphService = new GraphService();
    }

    public addPersonNode(call: grpc.ServerUnaryCall<AddPersonNodeRequest>, callback: grpc.sendUnaryData<AddPersonNodeResponse>) {
        const person = this.graphService.addPersonNode(call.request);
        const response = new AddPersonNodeResponse();
        debug.log('New Person Node added: ', person.toObject());
        response.setPersonId(person.getId());
        callback(null, response);
    }

    public addGameNode(call: grpc.ServerUnaryCall<AddGameNodeRequest>, callback: grpc.sendUnaryData<AddGameNodeResponse>) {
        const game = this.graphService.addGameNode(call.request)
        const response = new AddGameNodeResponse();
        debug.log('New Game Node added: ', game.toObject());
        response.setGameId(game.getId());
        callback(null, response);
    }

    public addEdge(call: grpc.ServerUnaryCall<AddEdgeRequest>, callback: grpc.sendUnaryData<AddEdgeResponse>) {
        const result = this.graphService.addEdge(call.request);
        const response = new AddEdgeResponse();
        const debugMessage = result.isSuccess ? 'New Edge added: ' : 'Unable to add edge :'
        debug.log(debugMessage, result.edgeResponse.toObject());
        response.setEdge(result.edgeResponse)
        this.connectionService.updateConnectedUsers(result.edgeResponse, !result.isSuccess);
        callback(null, response);
    }

    public removeEdge(call: grpc.ServerUnaryCall<RemoveEdgeRequest>, callback: grpc.sendUnaryData<RemoveEdgeResponse>) {
        const result = this.graphService.removeEdge(call.request);
        const response = new RemoveEdgeResponse();
        const debugMessage = result.isSuccess ? 'Edge removed: ' : 'Unable to remove edge :'
        debug.log(debugMessage, result.edge.toObject());
        response.setIsSucceed(result.isSuccess);
        this.connectionService.updateConnectedUsers(result.edge, result.isSuccess);
        callback(null, response);
    }

    public getEdges(call: grpc.ServerUnaryCall<GetEdgesRequest>, callback: grpc.sendUnaryData<GetEdgesResponse>) {
        const response = new GetEdgesResponse();
        const edges = this.graphService.getEdges();
        response.setEdgeList(edges);
        callback(null, response);
    }

    public updateUsers(call: grpc.ServerWriteableStream<UpdateUsersRequest>) {
        this.connectionService.addConnectedUser(call);
    }
}
