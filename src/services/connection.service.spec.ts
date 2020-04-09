import { ConnectionService } from './connection.service';
import grpc from "grpc";
import { UpdateUsersRequest, Edge } from '../protos/graph_pb';

describe('Connection service', () => {
    let connectionService: ConnectionService;
    let mockEdge = new Edge();
    let isRemoved: boolean = false;

    beforeEach(() => {
        connectionService = new ConnectionService();

        spyOn(connectionService, 'updateConnectedUsers');
        connectionService.updateConnectedUsers(mockEdge, isRemoved);
    });

    it('should add call to connected users array', () => {
        let mockCall: grpc.ServerWriteableStream<UpdateUsersRequest>;
        connectionService.addConnectedUser(mockCall);
        expect(connectionService.getConnectedUser()).toContain(mockCall)
    });

    it('should call without errors', () => {
        expect(connectionService.updateConnectedUsers).toHaveBeenCalledWith(mockEdge, isRemoved)
    });
});
