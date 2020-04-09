import grpc from 'grpc';
import { GraphServiceService } from '../protos/graph_grpc_pb';
import { debug } from 'debug';
import { Server } from './server';
debug('server');

function startServer() {
    const server = new grpc.Server();
    server.addService(GraphServiceService, new Server());
    server.bind('127.0.0.1:50051', grpc.ServerCredentials.createInsecure());
    server.start();
    debug.log('Server started, listening: 127.0.0.1:50051');
}

startServer();
