import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions1: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'micr1',
    protoPath: '/proto/micr1.proto',
  },
};
