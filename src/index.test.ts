/* eslint-disable no-console */
import { novaHelloWorld } from './index';

describe('example test suite', () => {
  it('should console.log "Hello World from Nova"', () => {
    console.log = jest.fn();
    novaHelloWorld();
    expect(console.log).toHaveBeenCalledWith('Hello World from Nova');
  });
});
