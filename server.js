const express = require("express");

const app = express();
app.use(express.json());

const PORT = 3000;

// Demo token
const VALID_TOKEN = "my-secret-token";

// Authentication middleware
function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];

    if (!authHeader) {
        return res.status(401).json({
            message: "Access denied. No token provided."
        });
    }

    const token = authHeader.split(" ")[1];

    if (token !== VALID_TOKEN) {
        return res.status(403).json({
            message: "Invalid token."
        });
    }

    next();
}

// Public route
app.get("/", (req, res) => {
    res.json({
        message: "API Authentication Fundamentals"
    });
});

// Login route
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (username === "admin" && password === "1234") {
        res.json({
            message: "Login successful",
            token: VALID_TOKEN
        });
    } else {
        res.status(401).json({
            message: "Invalid username or password"
        });
    }
});

// Protected route
app.get("/protected", authenticateToken, (req, res) => {
    res.json({
        message: "You have accessed a protected API!"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
