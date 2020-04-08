import { GameInterface } from '../interfaces/game.interface';

export class GameNode {
    public title: string;
    public description: string;

    constructor(game: GameInterface) {
        this.title = game.title;
        this.description = game.description;
    }
}
