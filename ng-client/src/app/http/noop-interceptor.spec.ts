import { NoopInterceptor } from './noop-interceptor';

describe('NoopInterceptor', () => {
  it('should create an instance', () => {
    expect(new NoopInterceptor()).toBeTruthy();
  });
});
