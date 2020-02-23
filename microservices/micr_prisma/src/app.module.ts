import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MicrService } from './micr/micr.controller';

@Module({
  imports: [],
  controllers: [AppController, MicrService],
  providers: [AppService, MicrService],
})
export class AppModule {}
