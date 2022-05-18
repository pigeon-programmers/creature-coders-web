"use strict";

const {
  db,
  models: { User, Pet, Badge },
} = require("../server/db");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Users
  const users = await Promise.all([
    User.create({ username: "cody", password: "123", email: "cody@cody.com" }),
    User.create({
      username: "murphy",
      password: "123",
      email: "murphy@murphy.com",
      currentLevel: 0,
      currentGame: 1,
      points: 3,
      streak: 37,
      pidgeCoin: 10,
    }),
    User.create({
      username: "pippin",
      password: "123",
      email: "pippin@pippin.com",
      currentLevel: 1,
      currentGame: 2,
    }),
    User.create({
      username: "grace",
      password: "123",
      email: "grace@grace.com",
      currentLevel: 3,
      currentGame: 0,
    }),
  ]);

  //Badges

  const welcome = await Badge.create({ name: "welcome" });
  const nyc = await Badge.create({ name: "nyc" });
  const pizza = await Badge.create({ name: "pizza" });
  const grandCentral = await Badge.create({ name: "grand central" });
  const subway = await Badge.create({ name: "subway" });

  const badges = [
    welcome,
    nyc,
    pizza,
    grandCentral,
    subway
  ]

  console.log(`seeded ${badges.length} badges`);

  users[0].addBadge(1);
  users[1].addBadge(1);
  users[1].addBadge(4);
  users[2].addBadge(1);
  users[2].addBadge(3);
  users[2].addBadge(5);
  users[3].addBadge(1);
  users[3].addBadge(2);
  users[3].addBadge(4);

  // Creating Pets
  const pets = await Promise.all([
    Pet.create({ name: "Blossom", type: "Possom", userId: 1 }),
    Pet.create({ name: "Pidge", type: "Pigeon", userId: 2 }),
    Pet.create({ name: "Funky", type: "Skunk", userId: 3 }),
    Pet.create({ name: "Ratteo", type: "Rat", userId: 4 })
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
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
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
