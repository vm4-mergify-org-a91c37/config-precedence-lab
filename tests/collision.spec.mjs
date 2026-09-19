import { test, expect } from '@mergifyio/playwright';

test.describe('collision.spec.mjs', () => {
  test('gate', async () => {
    expect('attacker-unrelated-nested-failure').toBe('passing');
  });
});
