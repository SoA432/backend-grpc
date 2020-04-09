## How to install?
1) Run `npm install`
2) Compile proto files using next command `npm run build:proto`
3) Generate typescript .d.ts files running `npm run build:proto-types`

## How to run?

1) Run server with command `npm run start:server`
2) Run client with command `npm run start:client` - You may run multiple clients

## How to test?
1) Run test with command `npm run test`
## Server
gRCP server listening at `http://127.0.0.1:50051`, server will log all actions 

## Client
Each running client will do next job
1) Get current edges
2) Subscribe for edges updates
3) Create Person Node
4) Create Game nodes randomly every 1-5 seconds
5) Add Edges for 'Person - Game' nodes after each iteration
6) After 15 seconds Client will remove one edge

Client will stop send new Game\Edge requests randomly after 5-50 iterations
All connected clients will see if any edge updates were made
