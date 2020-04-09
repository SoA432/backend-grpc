import { GameNode } from './game-node';
import { Game } from '../protos/graph_pb';

describe('Game node creation', () => {
    const mockGame = new Game();
    mockGame.setId('1');
    mockGame.setTitle('Ori');
    mockGame.setDescription('Beautiful Game!');

    it('should create game instance', () => {
        const game = new GameNode(mockGame);
        expect(game).toBeDefined()
    });
});
