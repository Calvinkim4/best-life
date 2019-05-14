const { User, Entry } = require('./models');

async function seed() {
  await User.destroy({ where: {}});


const popcorn = await Food.create({
  name: "popcorn",
  total_calories: 106
})

const orange = await Food.create({
  name: "orange",
  total_calories: 45
})

const rice = await Food.create({
  name: "rice",
  total_calories: 206
})

const steak = await Food.create({
  name: "steak",
  total_calories: 679
})

const chicken = await Food.create({
  name: "chicken",
  total_calories: 335
})

const oatmeal = await Food.create({
  name: "oatmeal",
  total_calories: 158
})

const user1 = await User.create({
  email: 'Kenny45634@fakemail.com',
  password: 'q345fge',
  current_weight: 190,
  goal_weight: 150,
  calorie_intake: 1600
})

const user2 = await User.create({
    email: 'KArdfgs45634@fakemail.com',
    password: 'sdthrdhrs',
    current_weight: 100,
    goal_weight: 130,
    calorie_intake: 2200
})

const entry1 = await Entry.create({
  total_amount: 1569,
  date: '2019-04-09 04:05:02'
})

const entry2 = await Entry.create({
  total_amount: 2100,
  date: '2019-05-09 04:05:02'
})

const entry3 = await Entry.create({
  total_amount: 12349,
  date: '2019-04-19 04:05:02'
})

await entry1.setUser(user1);
await entry2.setUser(user2);
await entry3.setUser(user1);
await popcorn.setEntry(entry1);
await orange.setEntry(entry2);
await rice.setEntry(entry1);
await steak.setEntry(entry3);
await chicken.setEntry(entry2);
await oatmeal.setEntry(entry1);

  process.exit();
}

seed();
