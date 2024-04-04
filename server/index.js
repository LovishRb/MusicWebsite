const express = require("express");
const mongoDb = require('./db/connect');
const cors = require("cors");
const notFound = require('./middleware/not_found');
const errorHandlerMiddleware = require('./middleware/error_handler');
const PORT = process.env.PORT || 3001;
require('dotenv').config();
const userRoutes = require('./routes/user'); // Assuming your routes file is named user.js
const loginRoutes = require('./routes/login');
const app = express();

app.use(express.json());
app.use(cors());

// Set CORS headers
app.use(function (req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});

// Use user routes
app.use("/api/v1", userRoutes);
app.use("/api/v1/",loginRoutes)
// Middleware that handles if a link is not available
app.use(notFound);
// Middleware that handles errors
app.use(errorHandlerMiddleware);

const start = async () => {
    try {
        await mongoDb(process.env.MONGO_URI);
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}...`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();
