"use strict";

const {
  db,
  models: { User, Pet },
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
    }),
    User.create({
      username: "pippin",
      password: "123",
      email: "pippin@pippin.com",
      currentLevel: 1,
    }),
    User.create({
      username: "grace",
      password: "123",
      email: "grace@grace.com",
      currentLevel: 2,
    }),
  ]);

  // Creating Pets
  const pets = await Promise.all([
    Pet.create({ name: "Blossom", type: "Possom", userId: 1 }),
    Pet.create({ name: "Pidge", type: "Pigeon", userId: 2 }),
    Pet.create({ name: "Funky", type: "Skunk", userId: 3 }),
    Pet.create({ name: "Ratteo", type: "Rat" })
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
