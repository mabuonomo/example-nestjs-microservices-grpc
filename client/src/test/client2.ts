import { ClientOptions, Transport } from '@nestjs/microservices';

export const grpcClientOptions2: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: 'node_2:50051',
    package: 'micr2',
    protoPath: '/proto/micr2.proto',
  },
};
