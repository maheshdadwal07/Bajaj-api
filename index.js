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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
