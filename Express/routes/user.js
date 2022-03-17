const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
    res.send("hello from node through routes");
});
module.exports = router;