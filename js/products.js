const productsData = {
    "all": [
        {
            id: 1,
            name: "لپ تاپ hp خانگی",
            price: 55250000,
            oldPrice: 65000000,
            discount: 15,
            img: "loptop1.png",
            category: "loptop"
        },
        {
            id: 2,
            name: "لپ تاپ hp مهندسی ",
            price: 67500000,
            oldPrice: 90000000,
            discount: 25,
            img: "loptop2.png",
            category: "loptop"
        },
        {
            id: 3,
            name: "لپ تاپ hp گیمینگ ",
            price: 69000000,
            oldPrice: 75000000,
            discount: 8,
            img: "loptop3.png",
            category: "loptop"
        },
        {
            id: 4,
            name: "کابل VGA یک و نیم متری ",
            price: 232500,
            oldPrice: 250000,
            discount: 8,
            img: "cable.png",
            category: "accessories"
        },
        {
            id: 5,
            name: "مینی کیس نثل هشت",
            price: 41760000,
            oldPrice: 48000000,
            discount: 13,
            img: "case.png",
            category: "computer"
        },
        {
            id: 6,
            name: "هدفون بلوتوثی مارک تسکو",
            price: 4500000,
            oldPrice: 4005000,
            discount: 11,
            img: "headphone.png",
            category: "accessories"
        },
        {
            id: 7,
            name: "هدفون بلوتوثی مارک ایسر",
            price: 4836000,
            oldPrice: 5200000,
            discount: 7,
            img: "hedphone2.png",
            category: "accessories"
        },
        {
            id: 8,
            name: "گیبورد گیمینگ به همراه RGB",
            price: 3115000,
            oldPrice: 3500000,
            discount: 11,
            img: "keyboard.png",
            category: "accessories"
        }
    ],
    "categories": [
        { id: "computer", name: "کامپیوتر" },
        { id: "accessories", name: "لوازم جانبی" },
        { id: "loptop", name: " لپتاپ" }
    ]
};

export const products = productsData.all;