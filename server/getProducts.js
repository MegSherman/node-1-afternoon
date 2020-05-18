const products = require ('../products.json');

const getProducts = (req, res) => {
    const {price} = req.query
    if (price) {
        const filteredArray = products.filter (e => e.price >= parseInt (price))
        return res.status(200).send(filteredArray)
    } else {
        return res.status(200).send(products)
    }
}

module.exports = getProducts