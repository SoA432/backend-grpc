import { PersonNode } from './person-node';
import { Person, Game } from '../protos/graph_pb';
import { GameNode } from './game-node';

describe('Game node', () => {
    let mockPersonNode: PersonNode;
    let mockGameNodeOne: GameNode;
    let mockGameNodeTwo: GameNode;
    const mockPerson: Person = new Person();
    mockPerson.setId('1');
    mockPerson.setFirstName('Mark');
    mockPerson.setLastName('America');

    const mockGameOne = new Game();
    mockGameOne.setId('1');
    mockGameOne.setTitle('Ori');
    mockGameOne.setDescription('Beautiful Game!');

    const mockGameTwo = new Game();
    mockGameTwo.setId('2');
    mockGameTwo.setTitle('GTA');
    mockGameTwo.setDescription('Nice Game!');    

    beforeEach(() => {
        mockPersonNode = new PersonNode(mockPerson);
        mockGameNodeOne = new GameNode(mockGameOne);
        mockGameNodeTwo = new GameNode(mockGameTwo);
    });

    it('should create person instance', () => {
        expect(mockPersonNode).toBeDefined()
    });

    it('should add game to person instance', () => {
        mockPersonNode.addGame(mockGameNodeOne);
        mockPersonNode.addGame(mockGameNodeTwo);
        expect(mockPersonNode.games.size).toBe(2);
    });

    it('should remove game from person instance', () => {
        mockPersonNode.addGame(mockGameNodeOne);
        mockPersonNode.addGame(mockGameNodeTwo);
        mockPersonNode.removeGame(mockGameNodeOne);
        expect(mockPersonNode.games.size).toBe(1);
    });
});
