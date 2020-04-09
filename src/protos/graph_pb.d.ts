// package: graph
// file: protos/graph.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Person extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

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
        id: string,
        firstName: string,
        lastName: string,
    }
}

export class Game extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

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
        id: string,
        title: string,
        description: string,
    }
}

export class Edge extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

    getPersonFullName(): string;
    setPersonFullName(value: string): void;

    getGameTitle(): string;
    setGameTitle(value: string): void;

    getPersonId(): string;
    setPersonId(value: string): void;

    getGameId(): string;
    setGameId(value: string): void;


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
        id: string,
        personFullName: string,
        gameTitle: string,
        personId: string,
        gameId: string,
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
    getPersonId(): string;
    setPersonId(value: string): void;


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
        personId: string,
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
    getGameId(): string;
    setGameId(value: string): void;


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
        gameId: string,
    }
}

export class AddEdgeRequest extends jspb.Message { 

    hasEdge(): boolean;
    clearEdge(): void;
    getEdge(): Edge | undefined;
    setEdge(value?: Edge): void;


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
        edge?: Edge.AsObject,
    }
}

export class AddEdgeResponse extends jspb.Message { 

    hasEdge(): boolean;
    clearEdge(): void;
    getEdge(): Edge | undefined;
    setEdge(value?: Edge): void;


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
        edge?: Edge.AsObject,
    }
}

export class RemoveEdgeRequest extends jspb.Message { 

    hasEdge(): boolean;
    clearEdge(): void;
    getEdge(): Edge | undefined;
    setEdge(value?: Edge): void;


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
        edge?: Edge.AsObject,
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

export class GetEdgesRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetEdgesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetEdgesRequest): GetEdgesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetEdgesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetEdgesRequest;
    static deserializeBinaryFromReader(message: GetEdgesRequest, reader: jspb.BinaryReader): GetEdgesRequest;
}

export namespace GetEdgesRequest {
    export type AsObject = {
    }
}

export class GetEdgesResponse extends jspb.Message { 
    clearEdgeList(): void;
    getEdgeList(): Array<Edge>;
    setEdgeList(value: Array<Edge>): void;
    addEdge(value?: Edge, index?: number): Edge;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetEdgesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetEdgesResponse): GetEdgesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetEdgesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetEdgesResponse;
    static deserializeBinaryFromReader(message: GetEdgesResponse, reader: jspb.BinaryReader): GetEdgesResponse;
}

export namespace GetEdgesResponse {
    export type AsObject = {
        edgeList: Array<Edge.AsObject>,
    }
}

export class EdgeInfo extends jspb.Message { 

    hasEdge(): boolean;
    clearEdge(): void;
    getEdge(): Edge | undefined;
    setEdge(value?: Edge): void;

    getIsRemoved(): boolean;
    setIsRemoved(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EdgeInfo.AsObject;
    static toObject(includeInstance: boolean, msg: EdgeInfo): EdgeInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EdgeInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EdgeInfo;
    static deserializeBinaryFromReader(message: EdgeInfo, reader: jspb.BinaryReader): EdgeInfo;
}

export namespace EdgeInfo {
    export type AsObject = {
        edge?: Edge.AsObject,
        isRemoved: boolean,
    }
}

export class UpdateUsersRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateUsersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateUsersRequest): UpdateUsersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateUsersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateUsersRequest;
    static deserializeBinaryFromReader(message: UpdateUsersRequest, reader: jspb.BinaryReader): UpdateUsersRequest;
}

export namespace UpdateUsersRequest {
    export type AsObject = {
    }
}

export class UpdateUsersResponse extends jspb.Message { 

    hasEdgeInfo(): boolean;
    clearEdgeInfo(): void;
    getEdgeInfo(): EdgeInfo | undefined;
    setEdgeInfo(value?: EdgeInfo): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateUsersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateUsersResponse): UpdateUsersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateUsersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateUsersResponse;
    static deserializeBinaryFromReader(message: UpdateUsersResponse, reader: jspb.BinaryReader): UpdateUsersResponse;
}

export namespace UpdateUsersResponse {
    export type AsObject = {
        edgeInfo?: EdgeInfo.AsObject,
    }
}
