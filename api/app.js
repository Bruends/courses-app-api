const express = require('express');
const cors = require('cors');
const coursesRouter = require('./src/routes/courseRoutes');
const authRouter = require('./src/routes/authRoutes');

require('dotenv').config();

//express config
const app = express();
app.use(cors());
app.use(express.json());

// routers
app.use('/auth', authRouter);
app.use('/courses', coursesRouter);

app.listen(3000, () => {
    console.log(`app running on: localhost:${process.env.APP_PORT}/`);
});
