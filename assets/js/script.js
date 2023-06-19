// course items
// ideally the menu data will come from somewhere else, either a database or api, or even being maintained in a separate file
/*
- define 3 const for font icon, vega, spicy, and recommend.
- define 1 const for all the dishes, const type 'array';
and the data is maintained in a dictionary for each dish, 
containing title represents dish name, category represents keywords for each dish,
which will be used for filter button and search input.
*/
const fontAwesomeVegan = "<i class='fas fa-seedling' style='font-size:24px; color:#4BAB00'></i>";
const fontAwesomeSpicy = "<i class='fa-solid fa-pepper-hot' style='font-size:22px; color:#9E0000'></i>";
const fontAwesomeRecommend = "<i class='fa-solid fa-thumbs-up' style='font-size:24px; color:#FFBB00'></i>";
const courseMenu = [
    {
        id: 1,
        title: "spring rolls",
        category: ["appetizer", "lunch-meal", "vegan", "vegetarian"],
        icon: {
            vegetarian: fontAwesomeVegan,
            recommend: "",
            spicy: ""
        },
        price: 3.99,
        img: "./assets/images/spring-rolls.png",
        desc: "traditional fried rice wrappers with vegetables"
    },
    {
        id: 2,
        title: "pan-fried dumplings",
        category: ["appetizer"],
        icon: {
            vegetarian: "",
            recommend: "",
            spicy: ""
        },
        price: 4.19,
        img: "./assets/images/fried-dumplings.png",
        desc: "crispy pan-fried dumplings with pork, cabbage, mushrooms, and garlic"
    },
    {
        id: 3,
        title: "cola chicken",
        category: ["appetizer", "meat", "featured"],
        icon: {
            vegetarian: "",
            recommend: fontAwesomeRecommend,
            spicy: ""
        },
        price: 4.19,
        img: "./assets/images/cola-chicken.png",
        desc: "chicken wings cooked with cola drink and soy sauce"
    },
    {
        id: 4,
        title: "braised pork ball in brown sauce",
        category: ["main-course", "lunch-meal", "meat", "pork"],
        icon: {
            vegetarian: "",
            recommend: "",
            spicy: ""
        },
        price: 12.19,
        img: "./assets/images/pork-ball.png",
        desc: "pork meatball using breadcrumbs, water chestnuts, and aromatics, bursted with flavor"
    },
    {
        id: 5,
        title: "roast beijing duck",
        category: ["main-course", "meat", "featured"],
        icon: {
            vegetarian: "",
            recommend: fontAwesomeRecommend,
            spicy: ""
        },
        price: 15.19,
        img: "./assets/images/beijing-duck.png",
        desc: "sliced pieces of roast duck with crispy skin"
    },
    {
        id: 6,
        title: "kung pao chicken",
        category: ["main-course", "dinner-meal", "meat", "spicy"],
        icon: {
            vegetarian: "",
            recommend: "",
            spicy: fontAwesomeSpicy
        },
        price: 15.19,
        img: "./assets/images/kung-pao-chicken.png",
        desc: "spicy, stir-fried dish made with cubes of chicken, peanuts, vegetables and chili peppers"
    },
    {
        id: 7,
        title: "beef brisket casserole",
        category: ["main-course", "meat"],
        icon: {
            vegetarian: "",
            recommend: "",
            spicy: fontAwesomeSpicy
        },
        price: 15.19,
        img: "./assets/images/beef-brisket-casserole.png",
        desc: "Simmered beef brisket, radish and potatoes in a casserole dish"
    },
    {
        id: 8,
        title: "Mapo Tofu",
        category: ["main-course", "vegan", "vegetarian", "spicy"],
        icon: {
            vegetarian: fontAwesomeVegan,
            recommend: fontAwesomeRecommend,
            spicy: fontAwesomeSpicy
        },
        price: 15.19,
        img: "./assets/images/mapo-tofu.png",
        desc: "sliced pieces of roast duck with crispy skin, served with rice"
    },
    {
        id: 9,
        title: "scalded tender greens",
        category: ["main-course", "vegan", "vegetarian", "vegetable"],
        icon: {
            vegetarian: fontAwesomeVegan,
            recommend: "",
            spicy: ""
        },
        price: 15.19,
        img: "./assets/images/tender-green.png",
        desc: "pak choi being blanced and with most basic seasonings"
    },
    {
        id: 10,
        title: "braised eggplant",
        category: ["main-course", "vegan", "vegetarian", "vegetable"],
        icon: {
            vegetarian: fontAwesomeVegan,
            recommend: "",
            spicy: ""
        },
        price: 15.19,
        img: "./assets/images/braised-eggplant.png",
        desc: "tender chunks of eggplant braised with garlic, chilies, soy sauce"
    },
    {
        id: 11,
        title: "chilled okra",
        category: ["main-course", "vegan", "vegetarian", "vegetable", "featured"],
        icon: {
            vegetarian: fontAwesomeVegan,
            recommend: fontAwesomeRecommend,
            spicy: ""
        },
        price: 15.19,
        img: "./assets/images/chilled-okra.png",
        desc: "blanched okra with a sweetened soy sauce base"
    },
    {
        id: 12,
        title: "hot pot",
        category: ["main-course", "featured"],
        icon: {
            vegetarian: "",
            recommend: fontAwesomeRecommend,
            spicy: ""
        },
        price: 5.19,
        img: "./assets/images/hot-pot.png",
        desc: "hot pot served with sliced beef, mushrooms, vegetables"
    },
    {
        id: 13,
        title: "roujiamo",
        category: ["appetizer", "dinner-meal", "meat", "featured"],
        icon: {
            vegetarian: "",
            recommend: fontAwesomeRecommend,
            spicy: ""
        },
        price: 5.19,
        img: "./assets/images/roujiamo.png",
        desc: "stewed pork chopped in baijimo, a type of flatbread"
    },
    {
        id: 14,
        title: "rice noodle roll",
        category: ["appetizer", "shrimp", "featured"],
        icon: {
            vegetarian: "",
            recommend: fontAwesomeRecommend,
            spicy: ""
        },
        price: 5.19,
        img: "./assets/images/rice-noodle-roll.png",
        desc: "shrimp rice noodle rools, wrapped around plump shrimp, doused in a sweet soy sauce"
    },
    {
        id: 15,
        title: "chongyang cake",
        category: ["dessert", "vegan", "vegetarian", "featured"],
        icon: {
            vegetarian: fontAwesomeVegan,
            recommend: fontAwesomeRecommend,
            spicy: ""
        },
        price: 5.19,
        img: "./assets/images/chongyang-cake.png",
        desc: "traditional cake made up of rice flour and sugar, decorated with chestnuts and almonds"
    },
    {
        id: 16,
        title: "mooncake",
        category: ["dessert", "vegan", "vegetarian", "featured"],
        icon: {
            vegetarian: fontAwesomeVegan,
            recommend: fontAwesomeRecommend,
            spicy: ""
        },
        price: 5.19,
        img: "./assets/images/mooncake.png",
        desc: "traditional vegetarian mooncake"
    },
    {
        id: 17,
        title: "macaron",
        category: ["dessert", "dinner-meal", "featured"],
        icon: {
            vegetarian: "",
            recommend: fontAwesomeRecommend,
            spicy: ""
        },
        price: 5.19,
        img: "./assets/images/macaron.png",
        desc: "French macarons, delicate sandwich cookies with a crisp exterior"
    },
    {
        id: 18,
        title: "lime lemon drinks",
        category: ["drinks", "lunch-meal"],
        icon: {
            vegetarian: fontAwesomeVegan,
            recommend: "",
            spicy: ""
        },
        price: 5.19,
        img: "./assets/images/lime-lemon.png",
        desc: "ice soda mixed with lime and lemon"
    },
    {
        id: 19,
        title: "fresh orange drinks",
        category: ["drinks"],
        icon: {
            vegetarian: fontAwesomeVegan,
            recommend: "",
            spicy: ""
        },
        price: 5.19,
        img: "./assets/images/fresh-orange.png",
        desc: "ice soda mixed with fresh orange juice"
    },
    {
        id: 20,
        title: "ice cream coffee",
        category: ["drinks"],
        icon: {
            vegetarian: fontAwesomeVegan,
            recommend: "",
            spicy: ""
        },
        price: 5.19,
        img: "./assets/images/coffee-cream.png",
        desc: "ice coffee dressed with fresh choco cream"
    },
    {
        id: 21,
        title: "qingdao beer",
        category: ["drinks", "dinner-meal"],
        icon: {
            vegetarian: "",
            recommend: "",
            spicy: ""
        },
        price: 5.19,
        img: "./assets/images/qing-dao-beer.png",
        desc: "qingdao beer, a chinese beer brand"
    },
    {
        id: 22,
        title: "coffee Latte",
        category: ["drinks"],
        icon: {
            vegetarian: "",
            recommend: "",
            spicy: ""
        },
        price: 5.19,
        img: "./assets/images/coffee.png",
        desc: "coffee Latte"
    },
    {
        id: 23,
        title: "chinese tea",
        category: ["drinks"],
        icon: {
            vegetarian: "",
            recommend: "",
            spicy: ""
        },
        price: 5.19,
        img: "./assets/images/tea.png",
        desc: "traditional Chinese tea"
    },
];

/* 
Define action after DOM is loaded
- create menu from const courseMenu;
- add event listener for input field when Enter key is clicked;
- add event listener for each filter button when each is clicked;
- add event listener for search input field to get the user input;
*/
document.addEventListener("DOMContentLoaded", function () {
    // load menu from const courseMenu after DOM is loaded
    createCourseMenu(courseMenu);

    document.getElementById("user-input").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            let searchItem = createSearchItem();
            createCourseMenu(searchItem);
        }
    });
    // add event listener of menu button to filter menu according to different categories and icons
    let filterButtons = document.getElementsByClassName("filter-btn");
    //console.log(filterButtons);
    for (let button of filterButtons) {
        button.addEventListener("click", function () {
            //console.log(this.getAttribute("id"));
            let attribute = this.getAttribute("id");
            if (attribute === "all") {
                createCourseMenu(courseMenu);
            } else {
                let filterMenu = createFilterItem(attribute);
                createCourseMenu(filterMenu);
            }
        });
    };

    // add event listener for the search input field
    let searchButton = document.getElementsByClassName("search-btn")[0];
    searchButton.addEventListener("click", function () {
        let searchItem = createSearchItem();
        createCourseMenu(searchItem);
    });
});

/* 
function to create the menu from the const courseMenu
- the menu will be categorized into 4 main parts, which is appetizer, main couse, dessert, drinks defined in the category array in const coureMenu;
- when the category matches, the price, decriptions, image, font information will be formed in html structure;
- addtionally a count is built for each parts, in order to tell if any dish matches the filtered and searched item later;
- in the end, 4 parts are being combined to be set as htmlContent;
*/
function createCourseMenu(menuRawData) {
    let menuAppetizerHeading = `
        <div class="food-items-appetizer">
            <h2 class="food-heading">Appetizer</h2>
            <h2></h2>
    `;
    let menuMainCourseHeading = `
        <div class="food-items-main-course">
            <h2 class="food-heading">Main Course</h2>
            <h2></h2>    
    `;
    let menuDessertHeading = `
        <div class="food-items-dessert">
            <h2 class="food-heading">Dessert</h2>
            <h2></h2>
    `;
    let menuDrinksHeading = `
        <div class="food-items-drinks">
            <h2 class="food-heading">Drinks</h2>
            <h2></h2>    
    `;

    let menuAppetizer = [0, ""];
    let menuMainCourse = [0, ""];
    let menuDessert = [0, ""];
    let menuDrinks = [0, ""];

    for (let item of menuRawData) {
        if (item.category.includes("appetizer")) {
            menuAppetizer[0] += 1;
            menuAppetizer[1] += `
                <div class="food-item">
                    <div class="food-description">
                        <h3 class="food-title">${item.title}</h3>
                        <p>${item.desc}</p>
                    <div class="food-fonticon">
                        <span>${item.icon.vegetarian}</span>
                        <span>${item.icon.recommend}</span>
                        <span>${item.icon.spicy}</span>
                    </div>
                        <h3 class="food-price">$${item.price}</h3>
                    </div>
                    <div class="food-image">
                        <img src="${item.img}"/>
                    </div>
                </div>
            `;
        } else if (item.category.includes("main-course")) {
            menuMainCourse[0] += 1;
            menuMainCourse[1] += `
                <div class="food-item">
                    <div class="food-description">
                        <h3 class="food-title">${item.title}</h3>
                        <p>${item.desc}</p>
                    <div class="food-fonticon">
                        <span>${item.icon.vegetarian}</span>
                        <span>${item.icon.recommend}</span>
                        <span>${item.icon.spicy}</span>
                    </div>
                        <h3 class="prices">$${item.price}</h3>
                    </div>
                    <div class="food-image">
                        <img src="${item.img}"/>
                    </div>
                </div>
            `;
        } else if (item.category.includes("dessert")) {
            menuDessert[0] += 1;
            menuDessert[1] += `
                <div class="food-item">
                    <div class="food-description">
                        <h3 class="food-title">${item.title}</h3>
                        <p>${item.desc}</p>
                    <div class="food-fonticon">
                        <span>${item.icon.vegetarian}</span>
                        <span>${item.icon.recommend}</span>
                        <span>${item.icon.spicy}</span>
                    </div>
                        <h3 class="prices">$${item.price}</h3>
                    </div>
                    <div class="food-image">
                        <img src="${item.img}"/>
                    </div>
                </div>
            `;
        } else if (item.category.includes("drinks")) {
            menuDrinks[0] += 1;
            menuDrinks[1] += `
                <div class="food-item">
                    <div class="food-description">
                        <h3 class="food-title">${item.title}</h3>
                        <p>${item.desc}</p>
                    <div class="food-fonticon">
                        <span>${item.icon.vegetarian}</span>
                        <span>${item.icon.recommend}</span>
                        <span>${item.icon.spicy}</span>
                    </div>
                        <h3 class="prices">$${item.price}</h3>
                    </div>
                    <div class="food-image">
                        <img src="${item.img}"/>
                    </div>
                </div>
            `;
        }
    };

    let htmlContent = "";
    if (menuAppetizer[0] !== 0) {
        htmlContent += (menuAppetizerHeading + menuAppetizer[1] + "</div>");
        console.log(htmlContent);
    }
    if (menuMainCourse[0] !== 0) {
        htmlContent += (menuMainCourseHeading + menuMainCourse[1] + "</div>");
        console.log(htmlContent);
    }
    if (menuDessert[0] !== 0) {
        htmlContent += (menuDessertHeading + menuDessert[1] + "</div>");
        console.log(htmlContent);
    }
    if (menuDrinks[0] !== 0) {
        htmlContent += (menuDrinksHeading + menuDrinks[1] + "</div>");
        console.log(htmlContent);
    }

    document.getElementsByClassName("food-section")[0].innerHTML = htmlContent;
}

/*
function to create menu array according to the filter button that being clicked;
*/
function createFilterItem(attribute) {
    let filterMenu = [];
    for (let each of courseMenu) {
        if (each.category.includes(attribute)) {
            console.log(each);
            filterMenu.push(each);
        }
    }
    //console.log(filterMenu);
    return filterMenu;
}

/*
function to create menu array according to the text input being typed in the input field;
*/
function createSearchItem() {
    let input = document.getElementById("user-input").value.toString();
    let searchMenu = [];
    for (let each of courseMenu) {
        if ((each.title.includes(input)) || (each.category.includes(input))) {
            searchMenu.push(each);
        }
    }
    return searchMenu;
}