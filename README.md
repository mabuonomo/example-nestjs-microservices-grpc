# example-nestjs-grpc

npm i -g @nestjs/cli
nest new server
nest new client

cd server
npm i --save grpc @grpc/proto-loader
npm i --save @nestjs/microservices

cd client
npm i --save grpc @grpc/proto-loader
npm i --save @nestjs/microservices


https://stackoverflow.com/questions/52266348/how-to-split-nest-js-microservices-into-separate-projects
