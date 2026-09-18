import { test, expect } from '@mergifyio/playwright';

test('gate', async () => {
  expect('known-broken-top-level').toBe('passing');
});
