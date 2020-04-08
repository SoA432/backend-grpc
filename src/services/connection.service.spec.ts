import { ConnectionService } from './connection.service';
import grpc from "grpc";
import { UpdateUsersRequest } from '../protos/graph_pb';
import { EdgeInterface } from '../interfaces/edge.interface';

describe('Connection service', () => {
    let connectionService: ConnectionService;
    let edge: EdgeInterface = {
        title: 'Game',
        fullName: 'Random Name'
    };
    let isRemoved: boolean = false;

    beforeEach(() => {
        connectionService = new ConnectionService();

        spyOn(connectionService, 'updateConnectedUsers');
        connectionService.updateConnectedUsers(edge, isRemoved);
    });

    it('should add call to connected users array', () => {
        let mockCall: grpc.ServerWriteableStream<UpdateUsersRequest>;
        connectionService.addConnectedUser(mockCall);
        expect(connectionService.getConnectedUser()).toContain(mockCall)
    });

    it('should call without errors', () => {
        expect(connectionService.updateConnectedUsers).toHaveBeenCalledWith(edge, isRemoved)
    });
});
