// package: graph
// file: protos/graph.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Person extends jspb.Message { 
    getFirstName(): string;
    setFirstName(value: string): void;

    getLastName(): string;
    setLastName(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Person.AsObject;
    static toObject(includeInstance: boolean, msg: Person): Person.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Person, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Person;
    static deserializeBinaryFromReader(message: Person, reader: jspb.BinaryReader): Person;
}

export namespace Person {
    export type AsObject = {
        firstName: string,
        lastName: string,
    }
}

export class Game extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): void;

    getDescription(): string;
    setDescription(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Game.AsObject;
    static toObject(includeInstance: boolean, msg: Game): Game.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Game, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Game;
    static deserializeBinaryFromReader(message: Game, reader: jspb.BinaryReader): Game;
}

export namespace Game {
    export type AsObject = {
        title: string,
        description: string,
    }
}

export class Edge extends jspb.Message { 
    getPersonFullName(): string;
    setPersonFullName(value: string): void;

    getGameTitle(): string;
    setGameTitle(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Edge.AsObject;
    static toObject(includeInstance: boolean, msg: Edge): Edge.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Edge, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Edge;
    static deserializeBinaryFromReader(message: Edge, reader: jspb.BinaryReader): Edge;
}

export namespace Edge {
    export type AsObject = {
        personFullName: string,
        gameTitle: string,
    }
}

export class AddPersonNodeRequest extends jspb.Message { 

    hasPerson(): boolean;
    clearPerson(): void;
    getPerson(): Person | undefined;
    setPerson(value?: Person): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddPersonNodeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddPersonNodeRequest): AddPersonNodeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddPersonNodeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddPersonNodeRequest;
    static deserializeBinaryFromReader(message: AddPersonNodeRequest, reader: jspb.BinaryReader): AddPersonNodeRequest;
}

export namespace AddPersonNodeRequest {
    export type AsObject = {
        person?: Person.AsObject,
    }
}

export class AddPersonNodeResponse extends jspb.Message { 
    getResult(): string;
    setResult(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddPersonNodeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AddPersonNodeResponse): AddPersonNodeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddPersonNodeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddPersonNodeResponse;
    static deserializeBinaryFromReader(message: AddPersonNodeResponse, reader: jspb.BinaryReader): AddPersonNodeResponse;
}

export namespace AddPersonNodeResponse {
    export type AsObject = {
        result: string,
    }
}

export class AddGameNodeRequest extends jspb.Message { 

    hasGame(): boolean;
    clearGame(): void;
    getGame(): Game | undefined;
    setGame(value?: Game): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddGameNodeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddGameNodeRequest): AddGameNodeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddGameNodeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddGameNodeRequest;
    static deserializeBinaryFromReader(message: AddGameNodeRequest, reader: jspb.BinaryReader): AddGameNodeRequest;
}

export namespace AddGameNodeRequest {
    export type AsObject = {
        game?: Game.AsObject,
    }
}

export class AddGameNodeResponse extends jspb.Message { 
    getResult(): string;
    setResult(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddGameNodeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AddGameNodeResponse): AddGameNodeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddGameNodeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddGameNodeResponse;
    static deserializeBinaryFromReader(message: AddGameNodeResponse, reader: jspb.BinaryReader): AddGameNodeResponse;
}

export namespace AddGameNodeResponse {
    export type AsObject = {
        result: string,
    }
}

export class AddEdgeRequest extends jspb.Message { 

    hasEdgeInfo(): boolean;
    clearEdgeInfo(): void;
    getEdgeInfo(): Edge | undefined;
    setEdgeInfo(value?: Edge): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddEdgeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddEdgeRequest): AddEdgeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddEdgeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddEdgeRequest;
    static deserializeBinaryFromReader(message: AddEdgeRequest, reader: jspb.BinaryReader): AddEdgeRequest;
}

export namespace AddEdgeRequest {
    export type AsObject = {
        edgeInfo?: Edge.AsObject,
    }
}

export class AddEdgeResponse extends jspb.Message { 
    getIsSucceed(): boolean;
    setIsSucceed(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddEdgeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AddEdgeResponse): AddEdgeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddEdgeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddEdgeResponse;
    static deserializeBinaryFromReader(message: AddEdgeResponse, reader: jspb.BinaryReader): AddEdgeResponse;
}

export namespace AddEdgeResponse {
    export type AsObject = {
        isSucceed: boolean,
    }
}

export class RemoveEdgeRequest extends jspb.Message { 

    hasEdgeInfo(): boolean;
    clearEdgeInfo(): void;
    getEdgeInfo(): Edge | undefined;
    setEdgeInfo(value?: Edge): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveEdgeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveEdgeRequest): RemoveEdgeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveEdgeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveEdgeRequest;
    static deserializeBinaryFromReader(message: RemoveEdgeRequest, reader: jspb.BinaryReader): RemoveEdgeRequest;
}

export namespace RemoveEdgeRequest {
    export type AsObject = {
        edgeInfo?: Edge.AsObject,
    }
}

export class RemoveEdgeResponse extends jspb.Message { 
    getIsSucceed(): boolean;
    setIsSucceed(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveEdgeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveEdgeResponse): RemoveEdgeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveEdgeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveEdgeResponse;
    static deserializeBinaryFromReader(message: RemoveEdgeResponse, reader: jspb.BinaryReader): RemoveEdgeResponse;
}

export namespace RemoveEdgeResponse {
    export type AsObject = {
        isSucceed: boolean,
    }
}

export class PrintNodesRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PrintNodesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PrintNodesRequest): PrintNodesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PrintNodesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PrintNodesRequest;
    static deserializeBinaryFromReader(message: PrintNodesRequest, reader: jspb.BinaryReader): PrintNodesRequest;
}

export namespace PrintNodesRequest {
    export type AsObject = {
    }
}

export class PrintNodesResponse extends jspb.Message { 
    clearEdgeInfoList(): void;
    getEdgeInfoList(): Array<string>;
    setEdgeInfoList(value: Array<string>): void;
    addEdgeInfo(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PrintNodesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PrintNodesResponse): PrintNodesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PrintNodesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PrintNodesResponse;
    static deserializeBinaryFromReader(message: PrintNodesResponse, reader: jspb.BinaryReader): PrintNodesResponse;
}

export namespace PrintNodesResponse {
    export type AsObject = {
        edgeInfoList: Array<string>,
    }
}
