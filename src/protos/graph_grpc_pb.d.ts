// package: graph
// file: protos/graph.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as protos_graph_pb from "../protos/graph_pb";

interface IGraphServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    addPersonNode: IGraphServiceService_IAddPersonNode;
    addGameNode: IGraphServiceService_IAddGameNode;
    addEdge: IGraphServiceService_IAddEdge;
    removeEdge: IGraphServiceService_IRemoveEdge;
    getEdges: IGraphServiceService_IGetEdges;
    updateUsers: IGraphServiceService_IUpdateUsers;
}

interface IGraphServiceService_IAddPersonNode extends grpc.MethodDefinition<protos_graph_pb.AddPersonNodeRequest, protos_graph_pb.AddPersonNodeResponse> {
    path: string; // "/graph.GraphService/AddPersonNode"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<protos_graph_pb.AddPersonNodeRequest>;
    requestDeserialize: grpc.deserialize<protos_graph_pb.AddPersonNodeRequest>;
    responseSerialize: grpc.serialize<protos_graph_pb.AddPersonNodeResponse>;
    responseDeserialize: grpc.deserialize<protos_graph_pb.AddPersonNodeResponse>;
}
interface IGraphServiceService_IAddGameNode extends grpc.MethodDefinition<protos_graph_pb.AddGameNodeRequest, protos_graph_pb.AddGameNodeResponse> {
    path: string; // "/graph.GraphService/AddGameNode"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<protos_graph_pb.AddGameNodeRequest>;
    requestDeserialize: grpc.deserialize<protos_graph_pb.AddGameNodeRequest>;
    responseSerialize: grpc.serialize<protos_graph_pb.AddGameNodeResponse>;
    responseDeserialize: grpc.deserialize<protos_graph_pb.AddGameNodeResponse>;
}
interface IGraphServiceService_IAddEdge extends grpc.MethodDefinition<protos_graph_pb.AddEdgeRequest, protos_graph_pb.AddEdgeResponse> {
    path: string; // "/graph.GraphService/AddEdge"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<protos_graph_pb.AddEdgeRequest>;
    requestDeserialize: grpc.deserialize<protos_graph_pb.AddEdgeRequest>;
    responseSerialize: grpc.serialize<protos_graph_pb.AddEdgeResponse>;
    responseDeserialize: grpc.deserialize<protos_graph_pb.AddEdgeResponse>;
}
interface IGraphServiceService_IRemoveEdge extends grpc.MethodDefinition<protos_graph_pb.RemoveEdgeRequest, protos_graph_pb.RemoveEdgeResponse> {
    path: string; // "/graph.GraphService/RemoveEdge"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<protos_graph_pb.RemoveEdgeRequest>;
    requestDeserialize: grpc.deserialize<protos_graph_pb.RemoveEdgeRequest>;
    responseSerialize: grpc.serialize<protos_graph_pb.RemoveEdgeResponse>;
    responseDeserialize: grpc.deserialize<protos_graph_pb.RemoveEdgeResponse>;
}
interface IGraphServiceService_IGetEdges extends grpc.MethodDefinition<protos_graph_pb.GetEdgesRequest, protos_graph_pb.GetEdgesResponse> {
    path: string; // "/graph.GraphService/GetEdges"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<protos_graph_pb.GetEdgesRequest>;
    requestDeserialize: grpc.deserialize<protos_graph_pb.GetEdgesRequest>;
    responseSerialize: grpc.serialize<protos_graph_pb.GetEdgesResponse>;
    responseDeserialize: grpc.deserialize<protos_graph_pb.GetEdgesResponse>;
}
interface IGraphServiceService_IUpdateUsers extends grpc.MethodDefinition<protos_graph_pb.UpdateUsersRequest, protos_graph_pb.UpdateUsersResponse> {
    path: string; // "/graph.GraphService/UpdateUsers"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<protos_graph_pb.UpdateUsersRequest>;
    requestDeserialize: grpc.deserialize<protos_graph_pb.UpdateUsersRequest>;
    responseSerialize: grpc.serialize<protos_graph_pb.UpdateUsersResponse>;
    responseDeserialize: grpc.deserialize<protos_graph_pb.UpdateUsersResponse>;
}

export const GraphServiceService: IGraphServiceService;

export interface IGraphServiceServer {
    addPersonNode: grpc.handleUnaryCall<protos_graph_pb.AddPersonNodeRequest, protos_graph_pb.AddPersonNodeResponse>;
    addGameNode: grpc.handleUnaryCall<protos_graph_pb.AddGameNodeRequest, protos_graph_pb.AddGameNodeResponse>;
    addEdge: grpc.handleUnaryCall<protos_graph_pb.AddEdgeRequest, protos_graph_pb.AddEdgeResponse>;
    removeEdge: grpc.handleUnaryCall<protos_graph_pb.RemoveEdgeRequest, protos_graph_pb.RemoveEdgeResponse>;
    getEdges: grpc.handleUnaryCall<protos_graph_pb.GetEdgesRequest, protos_graph_pb.GetEdgesResponse>;
    updateUsers: grpc.handleServerStreamingCall<protos_graph_pb.UpdateUsersRequest, protos_graph_pb.UpdateUsersResponse>;
}

export interface IGraphServiceClient {
    addPersonNode(request: protos_graph_pb.AddPersonNodeRequest, callback: (error: grpc.ServiceError | null, response: protos_graph_pb.AddPersonNodeResponse) => void): grpc.ClientUnaryCall;
    addPersonNode(request: protos_graph_pb.AddPersonNodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_graph_pb.AddPersonNodeResponse) => void): grpc.ClientUnaryCall;
    addPersonNode(request: protos_graph_pb.AddPersonNodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_graph_pb.AddPersonNodeResponse) => void): grpc.ClientUnaryCall;
    addGameNode(request: protos_graph_pb.AddGameNodeRequest, callback: (error: grpc.ServiceError | null, response: protos_graph_pb.AddGameNodeResponse) => void): grpc.ClientUnaryCall;
    addGameNode(request: protos_graph_pb.AddGameNodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_graph_pb.AddGameNodeResponse) => void): grpc.ClientUnaryCall;
    addGameNode(request: protos_graph_pb.AddGameNodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_graph_pb.AddGameNodeResponse) => void): grpc.ClientUnaryCall;
    addEdge(request: protos_graph_pb.AddEdgeRequest, callback: (error: grpc.ServiceError | null, response: protos_graph_pb.AddEdgeResponse) => void): grpc.ClientUnaryCall;
    addEdge(request: protos_graph_pb.AddEdgeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_graph_pb.AddEdgeResponse) => void): grpc.ClientUnaryCall;
    addEdge(request: protos_graph_pb.AddEdgeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_graph_pb.AddEdgeResponse) => void): grpc.ClientUnaryCall;
    removeEdge(request: protos_graph_pb.RemoveEdgeRequest, callback: (error: grpc.ServiceError | null, response: protos_graph_pb.RemoveEdgeResponse) => void): grpc.ClientUnaryCall;
    removeEdge(request: protos_graph_pb.RemoveEdgeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_graph_pb.RemoveEdgeResponse) => void): grpc.ClientUnaryCall;
    removeEdge(request: protos_graph_pb.RemoveEdgeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_graph_pb.RemoveEdgeResponse) => void): grpc.ClientUnaryCall;
    getEdges(request: protos_graph_pb.GetEdgesRequest, callback: (error: grpc.ServiceError | null, response: protos_graph_pb.GetEdgesResponse) => void): grpc.ClientUnaryCall;
    getEdges(request: protos_graph_pb.GetEdgesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_graph_pb.GetEdgesResponse) => void): grpc.ClientUnaryCall;
    getEdges(request: protos_graph_pb.GetEdgesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_graph_pb.GetEdgesResponse) => void): grpc.ClientUnaryCall;
    updateUsers(request: protos_graph_pb.UpdateUsersRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<protos_graph_pb.UpdateUsersResponse>;
    updateUsers(request: protos_graph_pb.UpdateUsersRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<protos_graph_pb.UpdateUsersResponse>;
}

export class GraphServiceClient extends grpc.Client implements IGraphServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public addPersonNode(request: protos_graph_pb.AddPersonNodeRequest, callback: (error: grpc.ServiceError | null, response: protos_graph_pb.AddPersonNodeResponse) => void): grpc.ClientUnaryCall;
    public addPersonNode(request: protos_graph_pb.AddPersonNodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_graph_pb.AddPersonNodeResponse) => void): grpc.ClientUnaryCall;
    public addPersonNode(request: protos_graph_pb.AddPersonNodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_graph_pb.AddPersonNodeResponse) => void): grpc.ClientUnaryCall;
    public addGameNode(request: protos_graph_pb.AddGameNodeRequest, callback: (error: grpc.ServiceError | null, response: protos_graph_pb.AddGameNodeResponse) => void): grpc.ClientUnaryCall;
    public addGameNode(request: protos_graph_pb.AddGameNodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_graph_pb.AddGameNodeResponse) => void): grpc.ClientUnaryCall;
    public addGameNode(request: protos_graph_pb.AddGameNodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_graph_pb.AddGameNodeResponse) => void): grpc.ClientUnaryCall;
    public addEdge(request: protos_graph_pb.AddEdgeRequest, callback: (error: grpc.ServiceError | null, response: protos_graph_pb.AddEdgeResponse) => void): grpc.ClientUnaryCall;
    public addEdge(request: protos_graph_pb.AddEdgeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_graph_pb.AddEdgeResponse) => void): grpc.ClientUnaryCall;
    public addEdge(request: protos_graph_pb.AddEdgeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_graph_pb.AddEdgeResponse) => void): grpc.ClientUnaryCall;
    public removeEdge(request: protos_graph_pb.RemoveEdgeRequest, callback: (error: grpc.ServiceError | null, response: protos_graph_pb.RemoveEdgeResponse) => void): grpc.ClientUnaryCall;
    public removeEdge(request: protos_graph_pb.RemoveEdgeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_graph_pb.RemoveEdgeResponse) => void): grpc.ClientUnaryCall;
    public removeEdge(request: protos_graph_pb.RemoveEdgeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_graph_pb.RemoveEdgeResponse) => void): grpc.ClientUnaryCall;
    public getEdges(request: protos_graph_pb.GetEdgesRequest, callback: (error: grpc.ServiceError | null, response: protos_graph_pb.GetEdgesResponse) => void): grpc.ClientUnaryCall;
    public getEdges(request: protos_graph_pb.GetEdgesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_graph_pb.GetEdgesResponse) => void): grpc.ClientUnaryCall;
    public getEdges(request: protos_graph_pb.GetEdgesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_graph_pb.GetEdgesResponse) => void): grpc.ClientUnaryCall;
    public updateUsers(request: protos_graph_pb.UpdateUsersRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<protos_graph_pb.UpdateUsersResponse>;
    public updateUsers(request: protos_graph_pb.UpdateUsersRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<protos_graph_pb.UpdateUsersResponse>;
}
