require("dotenv").config(); // allows enviroment variables to be set on process.env should be at top

const express = require('express');
const app = express();

// Middleware 
app.use(express.json());  // parse json bodies in the request object 

// Redirect request to endpoint starting with /posts to postRoutes.js 
app.use('/users', require('./routes/usersRoutes')); 
//app.use('/orders', require('./routes/ordersRoutes'));
// app.use('/products', require('./routes/productsRoutes'));
app.use('/brands', require('./routes/brandsRoutes'));

// Global Error Handler. IMPORTANT function params MUST start with err 

app.use((err, req, res, next) => {
    console.log(err.stack);
    console.log(err.name);
    console.log(err.code);

    res.status(500).json({
        message: "Something went realy wrong",
    })
})

// Listen on pc port 
const PORT = process.env.PORT || 3002
app.listen(PORT, ()=> console.log(`Server running on PORT ${PORT}`));