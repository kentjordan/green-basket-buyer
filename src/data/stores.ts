import coffeeguys from "@/assets/coffeeguys.png";
import chookstogo from "@/assets/chookstogo.jpg";

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
                    "variation": "Caramel Machiato",
                    "price": 79
                },
                {
                    "id": "2",
                    "name": "Iced Coffee",
                    "variation": "Latte",
                    "price": 69
                },
                {
                    "id": "3",
                    "name": "Iced Coffee",
                    "variation": "French Vanilla",
                    "price": 89
                }
            ],
            "regular_items": [
                {
                    "id": "4",
                    "name": "Iced Coffee",
                    "variation": "American",
                    "price": 59
                },
                {
                    "id": "5",
                    "name": "Iced Coffee",
                    "variation": "Variation A",
                    "price": 109
                },
                {
                    "id": "6",
                    "name": "Iced Coffee",
                    "variation": "Variation B",
                    "price": 99
                }
            ]
        },
        {
            "id": "S-0002",
            "stall_thumbnail": chookstogo,
            "name": "Chooks To Go",
            "category": "Chicken",
            "summary": "Masarap kahit walang sauce!",
            "best_items": [
                {
                    "id": "1",
                    "name": "Roasted Chicken",
                    "variation": "Hot and Spicy",
                    "price": 150
                },
                {
                    "id": "2",
                    "name": "Pork Sisig",
                    "variation": "UNLI RICE & SOUP",
                    "price": 89
                }, {
                    "id": "3",
                    "name": "Roasted Liempo",
                    "variation": "UNLI RICE & SOUP",
                    "price": 145
                }
            ],
            "regular_items": [
                {
                    "id": "4",
                    "name": "Roasted Chicken",
                    "variation": "Pepper Roast",
                    "price": 150
                },
                {
                    "id": "5",
                    "name": "2-pc Fried Chicken",
                    "variation": "UNLI RICE & SOUP",
                    "price": 153
                },
                {
                    "id": "6",
                    "name": "2-pc Pork BBQ",
                    "variation": "UNLI RICE & SOUP",
                    "price": 150
                },
            ]
        }
    ]

}

export default getStores;