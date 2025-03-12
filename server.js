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

app.get('/api/v1/bacheca', (req, res) => {
    const bakery = [
        {
            id: 1,
            title: "Ciambellone",
            content: "Ring cake",
            image: "/Img/ciambellone.jpeg",
            tags: ["dessert", "Breakfast", "cake"]
        },
        {
            id: 2,
            title: "Cracker Barbabietola",
            content: "Beetroot crackers",
            image: "/Img/cracker_barbabietola.jpeg",
            tags: ["snack", "natural", "beetroot"]
        },
        {
            id: 3,
            title: "Pane Fritto Dolce",
            content: "Sweet fried bread",
            image: "/Img/pane_fritto_dolce.jpeg",
            tags: ["sweet", "fried", "fatty"]
        },
        {
            id: 4,
            title: "Pasta Barbabietola",
            content: "Homemade beetroot pasta",
            image: "/Img/pasta_barbabietola.jpeg",
            tags: ["pasta", "lunch", "beetroot"]
        },
        {
            id: 5,
            title: "Torta Paesana",
            content: "A rustic cake",
            image: "/Img/torta_paesana.jpeg",
            tags: ["cake", "rustic", "traditional"]
        }
    ];


    res.json(bakery)

})