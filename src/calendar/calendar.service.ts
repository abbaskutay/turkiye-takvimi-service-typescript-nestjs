import { Injectable } from '@nestjs/common';
import { TurktakvimClient } from '../common/turktakvim.client';

@Injectable()
export class CalendarService {
  constructor(private readonly client: TurktakvimClient) {}

  calendar(start?: string, end?: string): Promise<unknown> {
    return this.client.get({ tip: 'takvim', baslangic: start, bitis: end });
  }

  hijri(): Promise<unknown> {
    return this.client.get({ tip: 'hicri' });
  }
}