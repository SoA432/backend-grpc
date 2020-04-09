import { GameNode } from './game-node';
import { Game, Person } from "../protos/graph_pb";

export class PersonNode {
    public firstName: string;
    public lastName: string;
    public games: Map<string, GameNode>;

    constructor(personInfo: Person) {
        this.firstName = personInfo.getFirstName();
        this.lastName = personInfo.getLastName();
        this.games = new Map();
    }

    public addGame(game: GameNode): void {
        this.games.set(game.id, game);
    }

    public removeGame(game: GameNode): void {
        this.games.delete(game.id)
    }
}
