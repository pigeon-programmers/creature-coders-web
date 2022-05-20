'use strict';

const {
  db,
  models: { User, Pet, Hat },
} = require('../server/db');

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log('db synced!');

  // Creating Users
  const users = await Promise.all([
    User.create({ username: 'cody', password: '123', email: 'cody@cody.com' }),
    User.create({
      username: 'murphy',
      password: '123',
      email: 'murphy@murphy.com',
      currentLevel: 0,
      currentGame: 1,
      points: 3,
      streak: 37,
      pidgeCoin: 10,
    }),
    User.create({
      username: 'pippin',
      password: '123',
      email: 'pippin@pippin.com',
      currentLevel: 1,
      currentGame: 2,
    }),
    User.create({
      username: 'grace',
      password: '123',
      email: 'grace@grace.com',
      currentLevel: 3,
      currentGame: 0,
    }),
  ]);

  //Hats
  const baseball = await Hat.create({
    name: 'baseball',
    url: 'https://creature-coders.s3.amazonaws.com/hat-baseball.svg',
    cost: 10,
  });
  const cheese = await Hat.create({
    name: 'cheese',
    url: 'https://creature-coders.s3.amazonaws.com/hat-cheese.svg',
    cost: 50,
  });
  const cowboy = await Hat.create({
    name: 'cowboy',
    url: 'https://creature-coders.s3.amazonaws.com/hat-cowboy.svg',
    cost: 100,
  });
  const newsie = await Hat.create({
    name: 'newsie',
    url: 'https://creature-coders.s3.amazonaws.com/hat-newsie.svg',
    cost: 25,
  });
  const sun = await Hat.create({
    name: 'sun',
    url: 'https://creature-coders.s3.amazonaws.com/hat-sun.svg',
    cost: 2000,
  });
  const top = await Hat.create({
    name: 'top',
    url: 'https://creature-coders.s3.amazonaws.com/hat-top.svg',
    cost: 1000000,
  });

  const hats = [baseball, cheese, cowboy, newsie, sun, top];
  console.log(`seeded ${hats.length} hats`);

  users[1].addHat(1);
  users[1].addHat(2);
  users[1].addHat(5);
  users[2].addHat(1);
  users[2].addHat(2);
  users[2].addHat(3);
  users[2].addHat(4);
  users[2].addHat(5);
  users[2].addHat(6);
  users[3].addHat(1);

  //Badges - optional to add this back in later

  // const welcome = await Badge.create({ name: "welcome" });
  // const nyc = await Badge.create({ name: "nyc" });
  // const pizza = await Badge.create({ name: "pizza" });
  // const grandCentral = await Badge.create({ name: "grand central" });
  // const subway = await Badge.create({ name: "subway" });

  // const badges = [
  //   welcome,
  //   nyc,
  //   pizza,
  //   grandCentral,
  //   subway
  // ]

  // console.log(`seeded ${badges.length} badges`);

  // users[0].addBadge(1);
  // users[1].addBadge(1);
  // users[1].addBadge(4);
  // users[2].addBadge(1);
  // users[2].addBadge(3);
  // users[2].addBadge(5);
  // users[3].addBadge(1);
  // users[3].addBadge(2);
  // users[3].addBadge(4);

  // Creating Pets
  const pets = await Promise.all([
    Pet.create({ name: 'Blossom', type: 'Possum', userId: 1 }),
    Pet.create({ name: 'Pidge', type: 'Pigeon', userId: 2 }),
    Pet.create({ name: 'Funky', type: 'Skunk', userId: 3 }),
    Pet.create({ name: 'Ratteo', type: 'Rat', userId: 4 }),
  ]);

  console.log(`seeded ${users.length} users`);
  console.log(`seeded ${pets.length} pets`);
  console.log(`seeded successfully`);
  return {
    users: {
      cody: users[0],
      murphy: users[1],
    },
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
