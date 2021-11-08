//imports
const { Router } = require("express");
const Space = require("../models").space;
const Story = require("../models").story;

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
