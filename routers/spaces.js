//imports
const { Router } = require("express");
const Space = require("../models").space;
const Story = require("../models").story;
const authMiddleware = require("../auth/middleware");
//define routes
const router = new Router();
//ENDPOINTS

//GET requests
//get all spaces
router.get("/", async (req, res) => {
  try {
    const allSpaces = await Space.findAll();
    console.log("requesting all spaces");
    res.send(allSpaces);
  } catch (e) {
    console.log(`Allspaces endpoint failed. Message: ${e}`);
  }
});
module.exports = router;
//get spacebypk and include all stories
router.get("/:id", async (req, res) => {
  try {
    const spaceId = parseInt(req.params.id);
    console.log("requesting one space and its stories..");
    const oneSpace = await Space.findByPk(spaceId, {
      include: [{ model: Story }],
    });
    if (!oneSpace) {
      res.status(404).send("This space does not exist");
    } else {
      res.send(oneSpace);
    }
  } catch (e) {
    console.log(`SpaceAndStories endpoint failed. Here's the message: ${e}`);
  }
});
// delete a story

router.delete("/:spaceId/story/:storyId", async (req, res, next) => {
  //id needs to be spaceId
  try {
    const spaceId = parseInt(req.params.spaceId);
    const storyId = parseInt(req.params.storyId);
    const toDelete = await Story.findByPk(storyId);
    if (!toDelete) {
      res.status(404).send("This story doesn't exist");
    } else {
      console.log(`You're gonna delete ${storyId} from ${spaceId}`);
      const deleted = await toDelete.destroy();
      res.json(deleted); //sends back an empty array
    }
  } catch (e) {
    next(e);
  }
});

//add a story
/*TO DO
- what data is needed in req.body? 
-- name, content, imageUrl, spaceId (this can be gotten in reduxstore)
- ADD A JWT MIDDLEWARE
*/
router.post("/:spaceId", async (req, res, next) => {
  try {
    const spaceId = parseInt(req.params.spaceId);
    console.log(`You are requesting put access to space with id ${spaceId}`);
    const spaceToUpdate = await Space.findByPk(spaceId);
    if (!spaceToUpdate) {
      res.status(404).send("Space not found");
    } else {
      console.log(`The space title is ${spaceToUpdate.title}`);
      const newStory = await Story.create({ spaceId, ...req.body });
      res.json(newStory);
    }
  } catch (e) {
    console.log(`You got an error in creating story endpoint. ${e}`);
  }
});
