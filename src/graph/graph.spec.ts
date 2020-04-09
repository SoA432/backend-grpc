import { Edge, Game, Person } from './../protos/graph_pb';
import { Graph } from './graph';
import { PersonNode } from './person-node';
import { GameNode } from './game-node';

describe('Graph', () => {
    let graph: Graph;
    const mockGame = new Game();
    mockGame.setId('1');
    mockGame.setTitle('Ori');
    mockGame.setDescription('Beautiful Game!');

    const mockPerson = new Person();
    mockPerson.setId('1');
    mockPerson.setFirstName('Andrii');
    mockPerson.setLastName('Holodov');

    const mockEdge = new Edge();
    mockEdge.setGameId(mockGame.getId());
    mockEdge.setPersonId(mockPerson.getId());

    beforeEach(() => {
        graph = new Graph();
    });

    it('should create graph instance', () => {
        let mockGraph = new Graph();
        expect(mockGraph).toBeDefined()
    });

    it('should add person to person array', () => {
        graph.addPersonNode(mockPerson);
        expect(graph.peopleNodes.size).toBe(1)
    });

    it('should add game to games array', () => {
        graph.addGameNode(mockGame);
        expect(graph.gameNodes.size).toBe(1)
    });

    it('should add edge to edges map, return true if success', () => {
        graph.addPersonNode(mockPerson);
        graph.addGameNode(mockGame);
        expect(graph.addEdge(mockEdge)).toBe(true)
    });

    it('should return false as mockEdge do not have relationship with existing persons / games', () => {
        expect(graph.addEdge(mockEdge)).toBe(false)
    });

    it('should return person node if exist', () => {
        const mockPersonNode: PersonNode = new PersonNode(mockPerson);
        graph.addPersonNode(mockPerson);

        expect(graph.getPerson(mockPerson.getId())).toEqual(mockPersonNode)
    });

    it('should return game node if exist', () => {
        const mockGameNode: GameNode = new GameNode(mockGame);
        graph.addGameNode(mockGame);

        expect(graph.getGame(mockGame.getId())).toEqual(mockGameNode)
    });

    it('should remove edge if edge exist, return true if success', () => {
        graph.addPersonNode(mockPerson);
        graph.addGameNode(mockGame);
        graph.addEdge(mockEdge);
        expect(graph.removeEdge(mockEdge)).toBe(true)
    });

    it('should return false as edge does not exist', () => {
        expect(graph.removeEdge(mockEdge)).toBe(false)
    });
});
