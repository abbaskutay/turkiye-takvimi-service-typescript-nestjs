import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class TurktakvimClient {
  private readonly baseUrl: string;

  constructor(
    private readonly http: HttpService,
    config: ConfigService,
  ) {
    this.baseUrl = config.get<string>(
      'TURKTAKVIM_BASE_URL',
      'https://www.turktakvim.com',
    );
  }

  async get<T>(params: Record<string, string | number | undefined>): Promise<T> {
    try {
      const response = await firstValueFrom(
        this.http.get<T>('/XMLservis.php', {
          baseURL: this.baseUrl,
          params: { ...params, format: 'json' },
        }),
      );
      return response.data;
    } catch {
      throw new ServiceUnavailableException(
        'Türkiye Takvimi upstream service is unavailable.',
      );
    }
  }
}