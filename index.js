const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;


app.get("/health", (req, res) => {
  res.status(200).json({
    is_success: true,
    official_email: "mahesh0562.be23@chitkara.edu.in"
  });
});

app.post("/bfhl", (req, res) => {
  try {
    const body = req.body;
    const keys = Object.keys(body);

    if (keys.length !== 1) {
      return res.status(400).json({
        is_success: false,
        official_email: "mahesh0562.be23@chitkara.edu.in",
        error: "Request must contain exactly one key"
      });
    }

    const key = keys[0];

    res.status(200).json({
      is_success: true,
      official_email: "mahesh0562.be23@chitkara.edu.in",
      data: `Received key: ${key}`
    });

  } catch (err) {
    res.status(500).json({
      is_success: false,
      official_email: "mahesh0562.be23@chitkara.edu.in",
      error: "Server error"
    });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
