import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PeriodsModule } from './periods/periods.module';

@Module({
  imports: [PrismaModule, PeriodsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
