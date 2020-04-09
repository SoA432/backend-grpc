import { GameInterface } from './../interfaces/game.interface';
import { PersonInterface } from './../interfaces/person.interface';
import { Graph } from './../graph/graph';
import { AddPersonNodeRequest, AddGameNodeRequest, AddEdgeRequest, RemoveEdgeRequest, Edge } from '../protos/graph_pb';
import { v4 as uuidv4 } from 'uuid';

export class GraphService {

    private graph: Graph;
    constructor() {
        this.graph = new Graph();
    }

    public addPersonNode(request: AddPersonNodeRequest): PersonInterface {
        const firstName = request.getPerson().getFirstName();
        const lastName = request.getPerson().getLastName();
        const person: PersonInterface = {
            id: uuidv4(),
            firstName,
            lastName
        };
        return this.graph.addPersonNode(person);
    }

    public addGameNode(request: AddGameNodeRequest): GameInterface {
        const title = request.getGame().getTitle();
        const description = request.getGame().getDescription();
        const game: GameInterface = {
            id: uuidv4(),
            title,
            description
        };
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
