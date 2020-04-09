import { Edge } from './../protos/graph_pb';
import { PersonNode } from './person-node';
import { GameNode } from './game-node';
import { GameInterface } from '../interfaces/game.interface';
import { PersonInterface } from '../interfaces/person.interface';

export class Graph {
    peopleNodes: Map<string, PersonNode>;
    gameNodes: Map<string, GameNode>;
    edges: Map<string, Edge>;
    constructor() {
        this.peopleNodes = new Map();
        this.gameNodes = new Map();
        this.edges = new Map();
    }

    public addPersonNode(person: PersonInterface): PersonInterface {
        this.peopleNodes.set(person.id, new PersonNode(person))
        return person;
    }

    public addGameNode(game: GameInterface): GameInterface {
        this.gameNodes.set(game.id, new GameNode(game))
        return game;
    }

    public addEdge(edge: Edge): boolean {
        const person = this.getPerson(edge.getPersonId());
        const game = this.getGame(edge.getGameId());
        if (person && game) {
            person.addGame(game);
            this.edges.set(edge.getId(), edge);
            return true;
        } else {
            return false;
        }
    }

    public removeEdge(edgeToRemove: Edge): boolean {
        const person = this.getPerson(edgeToRemove.getPersonId());
        const game = this.getGame(edgeToRemove.getGameId());
        if (person && game) {
            person.removeGame(game);
            this.edges.delete(edgeToRemove.getId());
            return true;
        } else {
            return false;
        }
    }

    public getEdges(): Array<Edge> {
        return Array.from(this.edges.values());
    }

    public getPerson(id: string): PersonNode {
        const peopleNode = this.peopleNodes.get(id);
        if (peopleNode) {
            return peopleNode;
        }
    }

    public getGame(id: string): GameNode {
        const gameNode = this.gameNodes.get(id);
        if (gameNode) {
            return gameNode;
        }
    }
}
