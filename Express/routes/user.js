const express = require("express");
const router = express.Router();
//by using controller pattern
const {greeting}=require("../controllers/user")
router.get("/",greeting);
//by using only routes concept
/*router.get("/", (req, res) => {
    res.send("hello from node through routes");
}); */
module.exports = router;