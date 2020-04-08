import { PersonNode } from './person-node';
import { GameInterface } from '../interfaces/game.interface';

describe('Game node creation', () => {
    let person: PersonNode;
    const firstName = 'Mark';
    const lastName = 'America';
    const oriGame: GameInterface = {
        title: 'Ori',
        description: 'Beautiful Game!'
    };
    const gtaGame: GameInterface = {
        title: 'GTA V',
        description: 'Bestseller'
    };

    beforeEach(() => {
        person = new PersonNode({firstName, lastName});
    });

    it('should create person instance', () => {
        let mockPerson = new PersonNode({firstName, lastName});
        expect(mockPerson).toBeDefined()
    });

    it('should add game to person instance', () => {
        person.addGame(oriGame);
        person.addGame(gtaGame);
        expect(person.games.length).toBe(2);
    });

    it('should remove game from person instance', () => {
        person.addGame(oriGame);
        person.addGame(gtaGame);
        person.removeGame(oriGame);
        expect(person.games.length).toBe(1);
    });
});
