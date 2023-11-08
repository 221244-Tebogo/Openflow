const express = require("express");
const answerSchema = require("../models/answers");
const router = express();
require("dotenv/config");

// Get all answers
router.get("/api/getAnswers", async (req, res) => {
  const answers = await answerSchema.find();
  res.json(answers);
});

// Add an answer
router.post("/api/addAnswer", async (req, res) => {
  const answer = new answerSchema({ ...req.body});
  try {
    const savedAnswer = await answer.save();
    res.json(savedAnswer);
  } catch (err) {
    res.json({ message: err });
  }
});


module.exports = router;
