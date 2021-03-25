'use strict';

module.exports = {
  generateRandomData
};

const Faker = require('faker');

function generateRandomData(userContext, events, done) {
  const nameTask = `${Faker.lorem.sentence()}`;
  userContext.vars.name = nameTask;
  return done();
}