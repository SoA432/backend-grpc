## How to install?
1) Run `npm install`
2) Compile proto files using next command `npm run build:proto`
3) Generate typescript .d.ts files running `npm run build:proto-types`

## How to run?

1) Run server with command `npm run start:server`
2) Run client with command `npm run start:client` - You may run multiple clients

## How to test?
1) Run test with command `npm run test`, server will log all actions 
## Server
gRCP server listening at `http://127.0.0.1:50051`

## Client
Each running client will do next job
1) Create Person Node
2) Create 3 Game Node
3) Add 3 Edges for Person Node - Game Node relation 
4) Then Client will listen for Edges updates for 60 seconds by default
5) After 10 seconds Client will remove one edge
6) All connected clients will see the updated graph
