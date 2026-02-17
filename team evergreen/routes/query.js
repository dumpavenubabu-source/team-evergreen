const express = require("express");
const router = express.Router();

router.post("/ask", async (req, res) => {
  const userQuery = req.body.query.toLowerCase();

  let response = "Sorry, I could not understand your question.";

  if (userQuery.includes("rice")) {
    response = "For rice crops, maintain proper water levels and use nitrogen-based fertilizers.";
  } 
  else if (userQuery.includes("pest")) {
    response = "Use neem oil spray or recommended pesticides after consulting local guidelines.";
  } 
  else if (userQuery.includes("irrigation")) {
    response = "Irrigate early morning or evening to reduce evaporation loss.";
  }

  res.json({ answer: response });
});

module.exports = router;
