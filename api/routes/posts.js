const express = require("express");
const { addPost } = require("../controllers/posts");

const router = express.Router();

router.get("/", addPost);

module.exports = router;
