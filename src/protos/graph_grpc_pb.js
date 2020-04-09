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

function serialize_graph_GetEdgesRequest(arg) {
  if (!(arg instanceof protos_graph_pb.GetEdgesRequest)) {
    throw new Error('Expected argument of type graph.GetEdgesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_graph_GetEdgesRequest(buffer_arg) {
  return protos_graph_pb.GetEdgesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_graph_GetEdgesResponse(arg) {
  if (!(arg instanceof protos_graph_pb.GetEdgesResponse)) {
    throw new Error('Expected argument of type graph.GetEdgesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_graph_GetEdgesResponse(buffer_arg) {
  return protos_graph_pb.GetEdgesResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_graph_UpdateUsersRequest(arg) {
  if (!(arg instanceof protos_graph_pb.UpdateUsersRequest)) {
    throw new Error('Expected argument of type graph.UpdateUsersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_graph_UpdateUsersRequest(buffer_arg) {
  return protos_graph_pb.UpdateUsersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_graph_UpdateUsersResponse(arg) {
  if (!(arg instanceof protos_graph_pb.UpdateUsersResponse)) {
    throw new Error('Expected argument of type graph.UpdateUsersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_graph_UpdateUsersResponse(buffer_arg) {
  return protos_graph_pb.UpdateUsersResponse.deserializeBinary(new Uint8Array(buffer_arg));
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
  getEdges: {
    path: '/graph.GraphService/GetEdges',
    requestStream: false,
    responseStream: false,
    requestType: protos_graph_pb.GetEdgesRequest,
    responseType: protos_graph_pb.GetEdgesResponse,
    requestSerialize: serialize_graph_GetEdgesRequest,
    requestDeserialize: deserialize_graph_GetEdgesRequest,
    responseSerialize: serialize_graph_GetEdgesResponse,
    responseDeserialize: deserialize_graph_GetEdgesResponse,
  },
  updateUsers: {
    path: '/graph.GraphService/UpdateUsers',
    requestStream: false,
    responseStream: true,
    requestType: protos_graph_pb.UpdateUsersRequest,
    responseType: protos_graph_pb.UpdateUsersResponse,
    requestSerialize: serialize_graph_UpdateUsersRequest,
    requestDeserialize: deserialize_graph_UpdateUsersRequest,
    responseSerialize: serialize_graph_UpdateUsersResponse,
    responseDeserialize: deserialize_graph_UpdateUsersResponse,
  },
};

exports.GraphServiceClient = grpc.makeGenericClientConstructor(GraphServiceService);
