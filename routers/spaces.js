//imports
const { Router } = require("express");
const Space = require("../models").space;

//define routes
const router = new Router();
//ENDPOINTS

//GET requests
router.get("/", async (req, res) => {
  try {
    const allSpaces = await Space.findAll();
    console.log("requesting all spaces");
    res.send(allSpaces);
  } catch (e) {
    console.log(`Spaces endpoint failed. Message: ${e}`);
  }
});
module.exports = router;
