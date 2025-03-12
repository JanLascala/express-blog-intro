//js express basic
const express = require('express');
const app = express();
const port = 3001;

// assett img
app.use(express.static('public'));

// server listening port 3000
app.listen(port, () => {
    console.log(`server running http://localhost:${port}`)
})

//home route
app.get('/', (req, res) => {
    console.log('home route requested')

    res.send('Server del mio blog')

})

//add img and blog i suppose

app.delete('/api/v1/myFoodBlog', (req, res) => {
    const bakery = [{

    }]

})