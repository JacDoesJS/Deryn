import { expect } from 'chai';

import Player from '../src/player.js';

it(`1b tests that correct name is registered`, async () => {

  const testPlayer = new Player('Jac');

  expect(testPlayer.name).to.equal('Jac');

});