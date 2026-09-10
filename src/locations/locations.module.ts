import { Module } from '@nestjs/common';
import { LocationsController } from './locations.controller';
import { LocationsService } from './locations.service';
import { TurktakvimClient } from '../common/turktakvim.client';

@Module({
  controllers: [LocationsController],
  providers: [LocationsService, TurktakvimClient],
})
export class LocationsModule {}