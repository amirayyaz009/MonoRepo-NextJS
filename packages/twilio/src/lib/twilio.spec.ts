import { twilio } from './twilio';

describe('twilio', () => {
  it('should work', () => {
    expect(twilio()).toEqual('twilio');
  });
});
