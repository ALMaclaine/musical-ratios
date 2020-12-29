import * as npmUtils from '../src';

describe('musical-ratios', () => {
  it('Has Correct API', () => {
    const keys = Object.keys(npmUtils);
    expect(keys.length).toBe(2);
    expect(keys).toMatchSnapshot();
  });
});
