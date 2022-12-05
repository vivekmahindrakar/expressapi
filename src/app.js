var express = require("express");
var app = express();
const serverless = require("serverless-http");

const router = express.Router();
const catelog = {
    "products": [
        {
            "id": 1,
            "name": "Iphone 12 pro",
            "desc": "Apple Iphone 12th gen",
            "price": 999,
            "color": "#33505a",
            "image": "https://m.media-amazon.com/images/I/71xkMA+gvYL._SL1500_.jpg"
        },
        {
            "id": 2,
            "name": "Iphone 13",
            "desc": "Apple Iphone 13th gen",
            "price": 899,
            "color": "#3a507a",
            "image": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-compare-iphone-13-202209?wid=364&hei=508&fmt=jpeg&qlt=90&.v=1660759995963"
        },
        {
            "id": 3,
            "name": "Iphone 13 pro",
            "desc": "Apple Iphone 13th gen",
            "price": 999,
            "color": " #000000",
            "image": "https://m.media-amazon.com/images/I/31oKx-f+t2L._SX342_SY445_.jpg"
        },
        {
            "id": 4,
            "name": "Iphone 13 mini",
            "desc": "Apple Iphone 13th gen",
            "price": 799,
            "color": "#A50011",
            "image": "https://m.media-amazon.com/images/I/315VGSWyn1L._SY445_SX342_QL70_FMwebp_.jpg"
        },
        {
            "id": 5,
            "name": "Iphone 14 pro",
            "desc": "Apple Iphone 14th gen",
            "price": 800,
            "color": "#215E7C",
            "image": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-compare-iphone-14-pro-202209?wid=366&hei=508&fmt=jpeg&qlt=90&.v=1661471046256"
        },
        {
            "id": 6,
            "name": "Iphone 12 mini",
            "desc": "Apple Iphone 12th gen",
            "price": 850,
            "color": "#043458",
            "image": "https://rukminim1.flixcart.com/image/416/416/kg8avm80/mobile/s/h/f/apple-iphone-12-mini-dummyapplefsn-original-imafwgbfukehtnxv.jpeg?q=70"
        },
        {
            "id": 7,
            "name": "Iphone 12 pro",
            "desc": "Apple Iphone 12th gen",
            "price": 899,
            "color": "#FBF7F4",
            "image": "https://img4.gadgetsnow.com/gd/images/products/additional/large/G201718_View_1/mobiles/smartphones/apple-iphone-12-pro-max-pacific-blue-128gb-.jpg"
        },
        {
            "id": 8,
            "name": "Iphone 11 pro",
            "desc": "Apple Iphone 11th gen",
            "price": 999,
            "color": "#4E5851",
            "image": "https://rukminim1.flixcart.com/image/416/416/k2jbyq80pkrrdj/mobile-refurbished/z/a/f/iphone-11-pro-max-256-u-mwhm2hn-a-apple-0-original-imafkg2ftc5cze5n.jpeg?q=70"
        }
    ]
}
router.get("/", (req, res) => {

    res.send(catelog)
})

app.use("/.netlify/functions/app", router);

module.exports.handler = serverless(app);


const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => {
    if (err) console.log("error at server");
    else
        console.log("listening on port 3000");
});