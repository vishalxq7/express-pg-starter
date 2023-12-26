const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());


const userRoute = require('./routes/userRoute');


app.use('/user',userRoute);





const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});