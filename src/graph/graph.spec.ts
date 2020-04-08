import { GameInterface } from '../interfaces/game.interface';
import { Graph } from './graph';
import { PersonInterface } from '../interfaces/person.interface';
import { EdgeInterface } from '../interfaces/edge.interface';
import { PersonNode } from './person-node';
import { GameNode } from './game-node';

describe('Graph', () => {
    let graph: Graph;
    const mockGame: GameInterface = {
        title: 'Ori',
        description: 'Beautiful Game!'
    };

    const mockPerson: PersonInterface = {
        firstName: 'Andrii',
        lastName: 'Holodov'
    };

    const mockEdge: EdgeInterface = {
        title: 'GTA V',
        fullName: 'Anton mokovich'
    };

    beforeEach(() => {
        graph = new Graph();
    });

    it('should create graph instance', () => {
        let mockGraph = new Graph();
        expect(mockGraph).toBeDefined()
    });

    it('should add person to person array', () => {
        graph.addPersonNode(mockPerson);
        expect(graph.peopleNodes.length).toBe(1)
    });

    it('should add game to games array', () => {
        graph.addGameNode(mockGame);
        expect(graph.gameNodes.length).toBe(1)
    });

    it('should add edge to edges array, return true if success', () => {
        graph.addPersonNode(mockPerson);
        graph.addGameNode(mockGame);
        expect(graph.addEdge({
            title: mockGame.title,
            fullName: mockPerson.firstName + ' ' + mockPerson.lastName
        })).toBe(true)
    });

    it('should return false as mockEdge do not have relationship with existing persons / games', () => {
        expect(graph.addEdge(mockEdge)).toBe(false)
    });

    it('should return person node if exist', () => {
        const mockPersonNode: PersonNode = new PersonNode(mockPerson);
        graph.addPersonNode(mockPerson);

        expect(graph.getPerson(mockPerson.firstName + ' ' + mockPerson.lastName)).toEqual(mockPersonNode)
    });

    it('should return game node if exist', () => {
        const mockGameNode: GameNode = new GameNode(mockGame);
        graph.addGameNode(mockGameNode);

        expect(graph.getGame(mockGame.title)).toEqual(mockGameNode)
    });

    it('should remove edge if edge exist, return true if success', () => {
        graph.addPersonNode(mockPerson);
        graph.addGameNode(mockGame);
        const mockEdge: EdgeInterface = {
            title: mockGame.title,
            fullName: mockPerson.firstName + ' ' + mockPerson.lastName
        };
        graph.addEdge(mockEdge);
        expect(graph.removeEdge(mockEdge)).toBe(true)
    });

    it('should return false as edge does not exist', () => {
        const mockEdge: EdgeInterface = {
            title: 'non existing game',
            fullName: 'Person Personovich'
        };
        expect(graph.removeEdge(mockEdge)).toBe(false)
    });

    it('should return array of existing edges', () => {
        const mockPersonOne = {firstName: 'first one', lastName: 'last two'};
        const mockPersonTwo = {firstName: 'first one', lastName: 'last two'};
        const mockGameOne = {title: 'game one', description: 'description one'};
        const mockGameTwo = {title: 'game two', description: 'description two'};
        const mockEdgeOne: EdgeInterface = {
            title: mockGameOne.title,
            fullName: mockPersonOne.firstName + ' ' + mockPersonOne.lastName
        };
        const mockEdgeTwo: EdgeInterface = {
            title: mockGameTwo.title,
            fullName: mockPersonTwo.firstName + ' ' + mockPersonTwo.lastName
        };

        graph.addPersonNode(mockPersonOne);
        graph.addGameNode(mockGameOne);
        graph.addEdge(mockEdgeOne);

        graph.addPersonNode(mockPersonTwo);
        graph.addGameNode(mockGameTwo);
        graph.addEdge(mockEdgeTwo);
        expect(graph.printAllNodes()).toEqual([
            `${mockEdgeOne.fullName} - ${mockEdgeOne.title}`,
            `${mockEdgeTwo.fullName} - ${mockEdgeTwo.title}`
        ])
    });
});
