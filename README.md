# NestJS + gRPC: a multi microservices example

This repo show as to configure a multi microservices stack in NestJS using gRPC in docker environment.


## Docker Stack
* 3 NestJS microservices 
* 1 NestJS client
* 1 Prisma server
* 1 DB MySQL

<img src="assets/microservices.png">

## Run it!
```bash
make init
docker-compose up
```
Navigate to

```
http://localhost:3000/test/client1
http://localhost:3000/test/client2

http://localhost:3000/test/client_prisma_add
http://localhost:3000/test/client_prisma_get
```

## Reference
Documentation at https://mabuonomo.github.io/blog/tutorial-nestjs-microservices-grpc
