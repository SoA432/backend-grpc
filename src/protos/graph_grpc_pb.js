// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var protos_graph_pb = require('../protos/graph_pb.js');

function serialize_graph_AddEdgeRequest(arg) {
  if (!(arg instanceof protos_graph_pb.AddEdgeRequest)) {
    throw new Error('Expected argument of type graph.AddEdgeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_graph_AddEdgeRequest(buffer_arg) {
  return protos_graph_pb.AddEdgeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_graph_AddEdgeResponse(arg) {
  if (!(arg instanceof protos_graph_pb.AddEdgeResponse)) {
    throw new Error('Expected argument of type graph.AddEdgeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_graph_AddEdgeResponse(buffer_arg) {
  return protos_graph_pb.AddEdgeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_graph_AddGameNodeRequest(arg) {
  if (!(arg instanceof protos_graph_pb.AddGameNodeRequest)) {
    throw new Error('Expected argument of type graph.AddGameNodeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_graph_AddGameNodeRequest(buffer_arg) {
  return protos_graph_pb.AddGameNodeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_graph_AddGameNodeResponse(arg) {
  if (!(arg instanceof protos_graph_pb.AddGameNodeResponse)) {
    throw new Error('Expected argument of type graph.AddGameNodeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_graph_AddGameNodeResponse(buffer_arg) {
  return protos_graph_pb.AddGameNodeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_graph_AddPersonNodeRequest(arg) {
  if (!(arg instanceof protos_graph_pb.AddPersonNodeRequest)) {
    throw new Error('Expected argument of type graph.AddPersonNodeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_graph_AddPersonNodeRequest(buffer_arg) {
  return protos_graph_pb.AddPersonNodeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_graph_AddPersonNodeResponse(arg) {
  if (!(arg instanceof protos_graph_pb.AddPersonNodeResponse)) {
    throw new Error('Expected argument of type graph.AddPersonNodeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_graph_AddPersonNodeResponse(buffer_arg) {
  return protos_graph_pb.AddPersonNodeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_graph_PrintNodesRequest(arg) {
  if (!(arg instanceof protos_graph_pb.PrintNodesRequest)) {
    throw new Error('Expected argument of type graph.PrintNodesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_graph_PrintNodesRequest(buffer_arg) {
  return protos_graph_pb.PrintNodesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_graph_PrintNodesResponse(arg) {
  if (!(arg instanceof protos_graph_pb.PrintNodesResponse)) {
    throw new Error('Expected argument of type graph.PrintNodesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_graph_PrintNodesResponse(buffer_arg) {
  return protos_graph_pb.PrintNodesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_graph_RemoveEdgeRequest(arg) {
  if (!(arg instanceof protos_graph_pb.RemoveEdgeRequest)) {
    throw new Error('Expected argument of type graph.RemoveEdgeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_graph_RemoveEdgeRequest(buffer_arg) {
  return protos_graph_pb.RemoveEdgeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_graph_RemoveEdgeResponse(arg) {
  if (!(arg instanceof protos_graph_pb.RemoveEdgeResponse)) {
    throw new Error('Expected argument of type graph.RemoveEdgeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_graph_RemoveEdgeResponse(buffer_arg) {
  return protos_graph_pb.RemoveEdgeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var GraphServiceService = exports.GraphServiceService = {
  addPersonNode: {
    path: '/graph.GraphService/AddPersonNode',
    requestStream: false,
    responseStream: false,
    requestType: protos_graph_pb.AddPersonNodeRequest,
    responseType: protos_graph_pb.AddPersonNodeResponse,
    requestSerialize: serialize_graph_AddPersonNodeRequest,
    requestDeserialize: deserialize_graph_AddPersonNodeRequest,
    responseSerialize: serialize_graph_AddPersonNodeResponse,
    responseDeserialize: deserialize_graph_AddPersonNodeResponse,
  },
  addGameNode: {
    path: '/graph.GraphService/AddGameNode',
    requestStream: false,
    responseStream: false,
    requestType: protos_graph_pb.AddGameNodeRequest,
    responseType: protos_graph_pb.AddGameNodeResponse,
    requestSerialize: serialize_graph_AddGameNodeRequest,
    requestDeserialize: deserialize_graph_AddGameNodeRequest,
    responseSerialize: serialize_graph_AddGameNodeResponse,
    responseDeserialize: deserialize_graph_AddGameNodeResponse,
  },
  addEdge: {
    path: '/graph.GraphService/AddEdge',
    requestStream: false,
    responseStream: false,
    requestType: protos_graph_pb.AddEdgeRequest,
    responseType: protos_graph_pb.AddEdgeResponse,
    requestSerialize: serialize_graph_AddEdgeRequest,
    requestDeserialize: deserialize_graph_AddEdgeRequest,
    responseSerialize: serialize_graph_AddEdgeResponse,
    responseDeserialize: deserialize_graph_AddEdgeResponse,
  },
  removeEdge: {
    path: '/graph.GraphService/RemoveEdge',
    requestStream: false,
    responseStream: false,
    requestType: protos_graph_pb.RemoveEdgeRequest,
    responseType: protos_graph_pb.RemoveEdgeResponse,
    requestSerialize: serialize_graph_RemoveEdgeRequest,
    requestDeserialize: deserialize_graph_RemoveEdgeRequest,
    responseSerialize: serialize_graph_RemoveEdgeResponse,
    responseDeserialize: deserialize_graph_RemoveEdgeResponse,
  },
  printNodes: {
    path: '/graph.GraphService/PrintNodes',
    requestStream: false,
    responseStream: true,
    requestType: protos_graph_pb.PrintNodesRequest,
    responseType: protos_graph_pb.PrintNodesResponse,
    requestSerialize: serialize_graph_PrintNodesRequest,
    requestDeserialize: deserialize_graph_PrintNodesRequest,
    responseSerialize: serialize_graph_PrintNodesResponse,
    responseDeserialize: deserialize_graph_PrintNodesResponse,
  },
};

exports.GraphServiceClient = grpc.makeGenericClientConstructor(GraphServiceService);
