import { Graph } from './../graph/graph';
import {
    AddPersonNodeRequest,
    AddGameNodeRequest,
    AddEdgeRequest,
    RemoveEdgeRequest,
    Edge,
    Person,
    Game
} from '../protos/graph_pb';
import { v4 as uuidv4 } from 'uuid';

export class GraphService {

    private graph: Graph;
    constructor() {
        this.graph = new Graph();
    }

    public addPersonNode(request: AddPersonNodeRequest): Person {
        const person = request.getPerson();
        person.setId(uuidv4());
        return this.graph.addPersonNode(person);
    }

    public addGameNode(request: AddGameNodeRequest): Game {
        const game = request.getGame();
        game.setId(uuidv4());
        return this.graph.addGameNode(game);
    }

    public addEdge(request: AddEdgeRequest): { edgeResponse: Edge, isSuccess: boolean } {
        const edgeResponse = request.getEdge();
        edgeResponse.setId(uuidv4());
        const isSuccess = this.graph.addEdge(edgeResponse);

        return { edgeResponse, isSuccess };
    }

    public removeEdge(request: RemoveEdgeRequest): { edge: Edge, isSuccess: boolean } {
        const edge = request.getEdge();
        const isSuccess = this.graph.removeEdge(edge);
        return { edge, isSuccess };
    }

    public getEdges(): Array<Edge> {
        return this.graph.getEdges();
    }
}
