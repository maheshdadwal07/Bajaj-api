const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function lcm(a, b) {
  return Math.abs(a * b) / gcd(a, b);
}


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

       if (key === "fibonacci") {
      const n = body.fibonacci;

      if (typeof n !== "number" || n < 1) {
        return res.status(400).json({
          is_success: false,
          official_email: "mahesh0562.be23@chitkara.edu.in",
          error: "Invalid fibonacci input"
        });
      }

      let fib = [0, 1];
      for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
      }

      return res.status(200).json({
        is_success: true,
        official_email: "mahesh0562.be23@chitkara.edu.in",
        data: fib.slice(0, n)
      });
    }

   else if (key === "prime") {
  const arr = body.prime;

  if (!Array.isArray(arr)) {
    return res.status(400).json({
      is_success: false,
      official_email: "mahesh0562.be23@chitkara.edu.in",
      error: "Prime input must be an array"
    });
  }

  const primes = arr.filter((num) => {
    return typeof num === "number" && isPrime(num);
  });

  return res.status(200).json({
    is_success: true,
    official_email: "mahesh0562.be23@chitkara.edu.in",
    data: primes
  });
}

 else  if (key === "hcf") {
  const arr = body.hcf;

  if (!Array.isArray(arr) || arr.length === 0) {
    return res.status(400).json({
      is_success: false,
      official_email: "mahesh0562.be23@chitkara.edu.in",
      error: "HCF input must be a non-empty array"
    });
  }

  let result = arr[0];

  for (let i = 1; i < arr.length; i++) {
    result = gcd(result, arr[i]);
  }

  return res.status(200).json({
    is_success: true,
    official_email: "mahesh0562.be23@chitkara.edu.in",
    data: result
  });
}
   
else if (key === "lcm") {
  const arr = body.lcm;

  if (!Array.isArray(arr) || arr.length === 0) {
    return res.status(400).json({
      is_success: false,
      official_email: "mahesh0562.be23@chitkara.edu.in",
      error: "LCM input must be a non-empty array"
    });
  }

  let result = arr[0];

  for (let i = 1; i < arr.length; i++) {
    result = lcm(result, arr[i]);
  }

  return res.status(200).json({
    is_success: true,
    official_email: "mahesh0562.be23@chitkara.edu.in",
    data: result
  });
}


    return res.status(400).json({
      is_success: false,
      official_email: "mahesh0562.be23@chitkara.edu.in",
      error: "Unsupported key"
    });

  } catch (err) {
    return res.status(500).json({
      is_success: false,
      official_email: "mahesh0562.be23@chitkara.edu.in",
      error: "Server error"
    });
  }
});




app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
