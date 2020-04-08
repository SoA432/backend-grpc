import { EdgeInterface } from '../interfaces/edge.interface';
import { PersonNode } from './person-node';
import { GameNode } from './game-node';
import { GameInterface } from '../interfaces/game.interface';
import { PersonInterface } from '../interfaces/person.interface';

export class Graph {
    peopleNodes: PersonNode[] = [];
    gameNodes: GameNode[] = [];
    edges: string[] = [];

    constructor() {
        this.peopleNodes = [];
        this.gameNodes = [];
        this.edges = [];
    }

    public addPersonNode(person: PersonInterface): void {
        this.peopleNodes.push(new PersonNode(person));
    }

    public addGameNode(game: GameInterface): void {
        this.gameNodes.push(new GameNode(game));
    }

    public addEdge(edge: EdgeInterface): boolean {
        const person = this.getPerson(edge.fullName);
        const game = this.getGame(edge.title);
        if (person && game) {
            person.addGame(game);
            this.edges.push(`${edge.fullName} - ${edge.title}`);
            return true;
        } else {
            return false;
        }
    }

    public removeEdge(edgeToRemove: EdgeInterface) {
        const person = this.getPerson(edgeToRemove.fullName);
        const game = this.getGame(edgeToRemove.title);
        if (person && game) {
            person.removeGame(game);
            this.edges = this.edges.filter(edge => edge !== `${edgeToRemove.fullName} - ${edgeToRemove.title}`);
            return true;
        } else {
            return false;
        }
    }

    public printAllNodes(): Array<string> {
        return this.edges;
    }

    public getPerson(fullName: string): PersonNode {
        return this.peopleNodes.find(person => `${person.firstName} ${person.lastName}` === fullName);
    }

    public getGame(gameTitle: string): GameNode {
        return this.gameNodes.find(game => game.title === gameTitle);
    }
}
