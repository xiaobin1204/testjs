// @flow

/* eslint-disable no-console */

import Dog from './dog'

const toby = new Dog('Toby')
const toby2 = new Dog('Toby2')

console.log(toby.bark())
console.log(toby2.bark())
