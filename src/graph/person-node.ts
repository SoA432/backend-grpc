import { GameInterface } from '../interfaces/game.interface';
import { PersonInterface } from '../interfaces/person.interface';

export class PersonNode {
    public firstName: string;
    public lastName: string;
    public games: GameInterface[];

    constructor(personInfo: PersonInterface) {
        this.firstName = personInfo.firstName;
        this.lastName = personInfo.lastName;
        this.games = [];
    }

    public addGame(game: GameInterface): void {
        this.games.push(game);
    }

    public removeGame(game: GameInterface): void {
        this.games = this.games.filter(filteredGame => JSON.stringify(filteredGame) !== JSON.stringify(game))
    }
}
