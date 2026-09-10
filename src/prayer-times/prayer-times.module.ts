import { Module } from '@nestjs/common';
import { PrayerTimesController } from './prayer-times.controller';
import { PrayerTimesService } from './prayer-times.service';
import { TurktakvimClient } from '../common/turktakvim.client';

@Module({
  controllers: [PrayerTimesController],
  providers: [PrayerTimesService, TurktakvimClient],
})
export class PrayerTimesModule {}