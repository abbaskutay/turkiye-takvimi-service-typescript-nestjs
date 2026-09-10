import { Injectable } from '@nestjs/common';
import { TurktakvimClient } from '../common/turktakvim.client';
import { PrayerTimesResponse } from './dto/prayer-times.dto';

@Injectable()
export class PrayerTimesService {
  constructor(private readonly client: TurktakvimClient) {}

  annual(cityId: number): Promise<PrayerTimesResponse> {
    return this.client.get({ tip: 'vakit', cityID: cityId });
  }

  range(start: string, end: string): Promise<PrayerTimesResponse> {
    return this.client.get({ tip: 'vakit', baslangic: start, bitis: end });
  }

  localTime(cityId: number): Promise<unknown> {
    return this.client.get({ tip: 'mahalli', cityID: cityId });
  }
}