import { Injectable } from '@angular/core';

@Injectable()
export class ExternalUrl {
  navigate(url: string) {
    window.location.href = url;
  }
}
