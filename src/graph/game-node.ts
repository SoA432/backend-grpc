import { Game } from "../protos/graph_pb";

export class GameNode {
    public id: string;
    public title: string;
    public description: string;

    constructor(game: Game) {
        this.id = game.getId();
        this.title = game.getTitle();
        this.description = game.getDescription();
    }
}
