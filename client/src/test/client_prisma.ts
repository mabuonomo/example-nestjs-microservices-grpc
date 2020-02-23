import { ClientOptions, Transport } from '@nestjs/microservices';

export const grpcClientPrismaOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: 'node_prisma:50051',
    package: 'micr_prisma',
    protoPath: '/proto/micr_prisma.proto',
  },
};
