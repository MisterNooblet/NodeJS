const data = [
    {
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: [
            {
                meats: ["hamburgers", "sausages"],
                fish: ["salmon", "pike"],
            },
        ],
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: [
            {
                meats: ["hamburgers", "steak", "lamb"],
                fish: ["tuna", "salmon", "barracuda"],
            },
        ],
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: [
            {
                meats: ["ham", "chicken"],
                fish: ["pike"],
            },
        ],
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: [
            {
                meats: ["bird", "rooster"],
                fish: ["salmon"],
            },
        ],
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: [
            {
                meats: ["hamburgers", "lamb"],
                fish: ["anchovies", "tuna"],
            },
        ],
    },
];

const names = (arr) => {
    return arr.map((el) => {
        return el.name;
    });
};

const born = (arr) => {
    return arr.filter((item) => {
        const birthday = new Date(item.birthday).getFullYear();
        if (birthday < 1990) {
            return item;
        }
    });
};

const food = (arr) => {
    const obj = {};

    arr.forEach((el) => {
        el.favoriteFoods.forEach((foodObj) => {
            console.log(foodObj);
            for (const key in foodObj) {
                foodObj[key].forEach((meatItem) => {
                    obj[meatItem] = obj[meatItem] + 1 || 1;
                });
                foodObj[key].forEach((fishItem) => {
                    obj[fishItem] = obj[fishItem] + 1 || 1;
                });
            }

        });
    });
    return obj;
};

console.log(food(data));