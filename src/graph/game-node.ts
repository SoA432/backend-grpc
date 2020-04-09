import { GameInterface } from '../interfaces/game.interface';

export class GameNode {
    public id: string;
    public title: string;
    public description: string;

    constructor(game: GameInterface) {
        this.id = game.id
        this.title = game.title;
        this.description = game.description;
    }
}
