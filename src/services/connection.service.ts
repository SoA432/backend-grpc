import grpc from "grpc";
import { UpdateUsersRequest, UpdateUsersResponse, EdgeInfo, Edge} from '../protos/graph_pb';

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

    public updateConnectedUsers(edge: Edge, isRemoved: boolean): void {
        this.getConnectedUser().forEach((call: grpc.ServerWriteableStream<UpdateUsersRequest>) => {
            const reply = new UpdateUsersResponse();
            let edgeInfo: EdgeInfo = new EdgeInfo();

            edgeInfo.setEdge(edge);
            edgeInfo.setIsRemoved(isRemoved);

            reply.setEdgeInfo(edgeInfo);
            call.write(reply);
        });
    }
}
