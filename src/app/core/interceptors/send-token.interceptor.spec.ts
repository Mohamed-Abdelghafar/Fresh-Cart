import { TestBed } from '@angular/core/testing';

import { SendTokenInterceptor } from './send-token.interceptor';

describe('SendTokenInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      SendTokenInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: SendTokenInterceptor = TestBed.inject(SendTokenInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
