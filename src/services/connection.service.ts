import { EdgeInterface } from '../interfaces/edge.interface';
import grpc from "grpc";
import { UpdateUsersRequest, UpdateUsersResponse, EdgeInfo } from '../protos/graph_pb';

export class ConnectionService {

    private connectedUsersCalls: grpc.ServerWriteableStream<UpdateUsersRequest>[] = [];
    constructor() {
    }

    public addConnectedUser(call: grpc.ServerWriteableStream<UpdateUsersRequest>) {
        this.connectedUsersCalls.push(call)
    }

    public getConnectedUser(): Array<grpc.ServerWriteableStream<UpdateUsersRequest>> {
        return this.connectedUsersCalls;
    }

    public updateConnectedUsers(edge: EdgeInterface, isRemoved: boolean): void {
        this.getConnectedUser().forEach((call: grpc.ServerWriteableStream<UpdateUsersRequest>) => {
            const reply = new UpdateUsersResponse();
            let edgeInfo: EdgeInfo = new EdgeInfo();

            edgeInfo.setEdge(`${edge.fullName} - ${edge.title}`);
            edgeInfo.setIsRemoved(isRemoved);

            reply.setEdgeInfo(edgeInfo);
            call.write(reply);
        });
    }
}
