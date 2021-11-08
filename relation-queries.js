//imports
const { user, space, story } = require("./models");

//QUERIES

//find all users

async function getAllUsers() {
  try {
    const allUsers = await user.findAll({ raw: true });
    return allUsers;
  } catch (e) {
    console.log(e);
  }
}

// getAllUsers().then((users) => console.log(users));

//fine one by id, print name

async function getOne() {
  try {
    const oneUser = await user.findByPk(1);
    console.log("inside the function: ", oneUser.name);
    return oneUser.name;
  } catch (e) {
    console.log(`whoops ya got an error: ${e}`);
  }
}

// getOne().then((user) => console.log(user));

//print all spaces with their user

async function spaceWithUser() {
  const spaces = await space.findAll({
    include: [{ model: user, attributes: ["name"] }],
  });
  console.log(spaces.map((space) => space.toJSON()));
}
// spaceWithUser();

//print user with their spaces

async function userWithStories() {
  const allUsers = await user.findAll({
    include: { model: space, attributes: ["title"] },
  });
  console.log(allUsers.map((user) => user.toJSON()));
}

// userWithStories();

//print one space with its stories

async function oneSpaceWithStories() {
  const oneSpace = await space.findByPk(1, {
    include: { model: story, attributes: ["name"] },
  });
  console.log(oneSpace.stories.map((story) => story.toJSON()));
}
oneSpaceWithStories();
