import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { PrayerTimesModule } from './prayer-times/prayer-times.module';
import { CalendarModule } from './calendar/calendar.module';
import { LocationsModule } from './locations/locations.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    HttpModule.registerAsync({
      useFactory: () => ({
        timeout: Number(process.env.HTTP_TIMEOUT_MS ?? 10000),
        maxRedirects: 3,
      }),
    }),
    PrayerTimesModule,
    CalendarModule,
    LocationsModule,
  ],
})
export class AppModule {}