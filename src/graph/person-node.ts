import { GameInterface } from '../interfaces/game.interface';
import { PersonInterface } from '../interfaces/person.interface';

export class PersonNode {
    public firstName: string;
    public lastName: string;
    public games: Map<string, GameInterface>;

    constructor(personInfo: PersonInterface) {
        this.firstName = personInfo.firstName;
        this.lastName = personInfo.lastName;
        this.games = new Map();
    }

    public addGame(game: GameInterface): void {
        this.games.set(game.id, game);
    }

    public removeGame(game: GameInterface): void {
        this.games.delete(game.id)
    }
}
