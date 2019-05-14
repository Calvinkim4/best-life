const { User, Entry, Exercise, Food } = require('./models');

async function seed() {
  await User.destroy({ where: {}});

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

const exercise1 = await Exercise.create({
  name: "push ups",
  total_calories: 100
})

const exercise2 = await Exercise.create({
  name: "sit ups",
  total_calories: 50
})

await exercise1.setEntry(entry1);
await exercise2.setEntry(entry1);

const food1 = await Food.create({
  name: "burger",
  total_calories: 400
})

const food2 = await Food.create({
  name: "pancakes",
  total_calories: 200
})

await food1.setEntry(entry1);
await food2.setEntry(entry1);

  process.exit();
}

seed();
