const express = require("express");
const questionSchema = require("../models/questions");
const router = express();
require("dotenv/config");

// Get all questions
router.get("/api/getQuestions", async (req, res) => {
  const questions = await questionSchema.find();
  res.json(questions);
});

// Get single question
router.get("/api/getQuestion/:questionId", async (req, res) => {
  try {
    const question = await questionSchema.findById(req.params.questionId);
    res.json(question);
  } catch (err) {
    res.json({ message: err });
  }
});

// Add a question
router.post("/api/addQuestion", async (req, res) => {
  const question = new questionSchema({ ...req.body});
  try {
    const savedQuestion = await question.save();
    res.json(savedQuestion);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});


module.exports = router;
