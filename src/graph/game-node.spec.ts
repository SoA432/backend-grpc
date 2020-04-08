import { GameNode } from './game-node';
import { GameInterface } from '../interfaces/game.interface';

describe('Game node creation', () => {
    const oriGame: GameInterface = {
        title: 'Ori',
        description: 'Beautiful Game!'
    };

    it('should create game instance', () => {
        const game = new GameNode(oriGame);
        expect(game).toBeDefined()
    });
});
