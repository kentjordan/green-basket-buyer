import coffeeguys from "@/assets/coffeeguys.png";
import chookstogologo from "@/assets/chookstogo.jpg";
import potatocorner from "@/assets/potatocorner.jpg"
import potatocorner_tera from "@/assets/potatocorner/tera.png"
import potatocorner_regular from "@/assets/potatocorner/regular.png"
import potatocorner_mega from "@/assets/potatocorner/mega.png"
import potatocorner_jumbo from "@/assets/potatocorner/jumbo.png"
import potatocorner_giga from "@/assets/potatocorner/giga.png"
import icedcoffee from "@/assets/icedcoffee/icedcoffee.png"
import chookstogo from "@/assets/chookstogo/chookstogo.jpg";


const getStores = () => {
    return [
        {
            "id": "S-0001",
            "stall_thumbnail": coffeeguys,
            "name": "Coffee Guys",
            "category": "Coffee",
            "summary": "Beginning you deserve, everyday.",
            "best_items": [
                {
                    "id": "1",
                    "name": "Iced Coffee",
                    "img": icedcoffee,
                    "variation": "Caramel Machiato",
                    "price": 79
                },
                {
                    "id": "2",
                    "name": "Iced Coffee",
                    "img": icedcoffee,
                    "variation": "Latte",
                    "price": 69
                },
                {
                    "id": "3",
                    "name": "Iced Coffee",
                    "img": icedcoffee,
                    "variation": "French Vanilla",
                    "price": 89
                }
            ],
            "regular_items": [
                {
                    "id": "4",
                    "name": "Iced Coffee",
                    "img": icedcoffee,
                    "variation": "American",
                    "price": 59
                },
                {
                    "id": "5",
                    "name": "Iced Coffee",
                    "img": icedcoffee,
                    "variation": "Variation A",
                    "price": 109
                },
                {
                    "id": "6",
                    "name": "Iced Coffee",
                    "img": icedcoffee,
                    "variation": "Variation B",
                    "price": 99
                }
            ]
        },
        {
            "id": "S-0002",
            "stall_thumbnail": chookstogologo,
            "name": "Chooks To Go",
            "category": "Chicken",
            "summary": "Masarap kahit walang sauce!",
            "best_items": [
                {
                    "id": "1",
                    "name": "Roasted Chicken A",
                    "img": chookstogo,
                    "variation": "Hot and Spicy",
                    "price": 150
                },
                {
                    "id": "2",
                    "name": "Roasted Chicken B",
                    "img": chookstogo,
                    "variation": "UNLI RICE & SOUP",
                    "price": 89
                }, {
                    "id": "3",
                    "name": "Roasted Chicken C",
                    "img": chookstogo,
                    "variation": "UNLI RICE & SOUP",
                    "price": 145
                }
            ],
            "regular_items": [
                {
                    "id": "4",
                    "name": "Roasted Chicken D",
                    "img": chookstogo,
                    "variation": "Pepper Roast",
                    "price": 150
                },
                {
                    "id": "5",
                    "name": "Roasted Chicken E",
                    "img": chookstogo,
                    "variation": "UNLI RICE & SOUP",
                    "price": 153
                },
                {
                    "id": "6",
                    "name": "Roasted Chicken F",
                    "img": chookstogo,
                    "variation": "UNLI RICE & SOUP",
                    "price": 150
                },
            ]
        },
        {
            "id": "S-0003",
            "stall_thumbnail": potatocorner,
            "name": "Potato Corner",
            "category": "Fries",
            "summary": "The world's best flavoured french fries!",
            "best_items": [
                {
                    "id": "200",
                    "name": "Chili Cheese Fries",
                    "variation": "Jumbo",
                    "price": 150,
                    "img": potatocorner_jumbo
                },
                {
                    "id": "201",
                    "name": "Tater Tots",
                    "variation": "Mega",
                    "price": 105,
                    "img": potatocorner_mega
                }, {
                    "id": "202",
                    "name": "Sweet Potato",
                    "variation": "Giga",
                    "price": 95,
                    "img": potatocorner_giga
                }
            ],
            "regular_items": [
                {
                    "id": "203",
                    "name": "Original Fries",
                    "variation": "Regular",
                    "price": 75,
                    "img": potatocorner_regular
                },
                {
                    "id": "204",
                    "name": "BBQ Fries",
                    "variation": "Mega",
                    "price": 105,
                    "img": potatocorner_mega
                },
                {
                    "id": "205",
                    "name": "Chili BBQ",
                    "variation": "Jumbo",
                    "price": 115,
                    "img": potatocorner_jumbo
                },
            ]
        }
    ]

}

export default getStores;