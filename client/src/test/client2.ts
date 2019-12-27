import { ClientOptions, Transport } from '@nestjs/microservices';

export const grpcClientOptions2: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'micr2',
    protoPath: '/proto/micr2.proto',
  },
};
