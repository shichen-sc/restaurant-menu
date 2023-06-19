# Restaurant Menu

The webpage is being written to present a restaurant menu which allows the user to filter the displayed menu by using the filter buttons or typing keywords in the input field.

## Features

- The Header

  - The header here is straightforward, only contains a heading 1 "XXX Restaurant - Welcome to Our Menu"
    ![A screenshot of the header](/assets/images/README/header.png)

- The Text Input Field

  - The Input field is being used as a search button
    - It is written with a border with a border radius
    - Once the user hover the mouse over it or click on it, the border and border radius disappear
    - Besides the input field, there is no additional search button. Instead, a search svg is being used a background image
      ![A screenshot of the input field](/assets/images/README/input-field.png)
      ![A screenshot of the input field by being hovered over or clicked](/assets/images/README/input-field-hover.png)
  - The user can type some keywords in the input field to search relevant dishes
    - For example, meat, chicken, vegan, vegetable, etc
    - The search will takes place once the user clicks on enter key
    - The search process is comparing the keyword with the dishes' names and category parameters
      ![A screenshot of the searching function](/assets/images/README/search-keyword.png)

- The Fitler Buttons

  - The next section below the input field is the section for filter buttons
    - There are at the moment "appetizer", "main course", "dessert", "drinks", "featured", "vegan", "lunch meal" and "dinner meal"
    - Once the user clicks on the filter button, the relevant dishes will be displayed
    - The filter process is comparing the filter button id with the dishes' category parameters
      ![A screenshot of the filter buttons](/assets/images/README/filter-button.png)

- The Dish Menu Section

  - The last section is used to display the dishes
    - The dishes are categorized into 4 main parts, "Appetizer", "Main Course", "Dessert", "Drinks"
    - For each parts, there is a independent div with a different class name
    - The dish menu is not written directly in the HTML, instead, it is being created using javascript "script.js" after the DOMContent is loaded
    - The dish menu content is being displayed in grid in 2 columns
    - For each dish, the text contents and the image are displayed in grid in 2 columns as well
    ![A screenshot of the dish menu section](/assets/images/README/dish-menu.png)

- Javascript
  - The script.js can be explained into 3 parts
    - Variable
        - 4 consts are defined, 3 for font icon from fontsawesome
        - Variable courseMenu is an array which contains all the dishes information
        - Inside this array, each dish is being maintained in one dictionary using key:parameter pair
        - Depending on the complexity, the parameter can be an array, or a simple string, etc
        ![A screenshot of the variables](/assets/images/README/variables.png)
    - Logical Operation
        - There 4 logical operations, all being written inside the function of the eventListener for DOMContentLoaded
        - First of all, all the dish menus will be created according to the const courseMenu
        - Then event listners are being added to the enter key down action of the input field, filter buttons
        - depending on what is being searched and which filter button is being clicked, a corresponding array will be generated and passed to the main function createCourseMenu to display the menu that being searched or being filtered
        ![A screenshot of the logical operation](/assets/images/README/logical-operation.png)
    - Function
        - 3 main functions
        - createCoureMenu is the main function to generate all the html inner content
        - createFilterItem will return an array containing the menu being filtered
        - createSearchItem will return an array containing the menu that matches the user search input
        ![A screenshot of the function](/assets/images/README/filter-button.png)

## Testing

- I tested and confirmed that the page works in browsers: Chrome, Firefox
- I confirm that the features described above work

## Bugs
- lighthouse check shows poor loading performance

### Solved bugs

### Unsolved bugs

## Validator Testing

- HTML
  - No erros were returned when passing through the official W3C validator
- CSS
  - No errors were found when passing through the official (Jigsaw) validator
- Accessibility
  - I confirmed that the colors and fonts chosen are easy to read and accessible by running it through lighthouse in devtools
    ![A screenshot of the scores estimated by lighthouse](/assets/images/README/lighthouse.png)

## Deployment

- The site was deployed to Github pages. The steps to deploy are as follows:
  - In the GitHub repository, navigate to the Settings tab
  - Click on Page from the side menu
  - Choose main for the Branch, and click on save
  - Wait and refresh the page, the link to the page should be generated
- Link for the page:
  - [Learn Through](https://shichen-sc.github.io/learn-through/)

## Credits

### Content

- The code to make the social media links was taken from the CI [Love Running](https://github.com/shichen-sc/love-running) Project
- The code for the comment section was referenced from [Codepen](https://codepen.io/Schepp/pen/WNbQByE)

### Media

- The images in the project were all take from [Freepik](https://www.freepik.com/free-photos-vectors)

## To-Do

- Solve the open bug (described above)
- Write html as the link for the button "Start Learning" on the navigation bar, where the users can select the desired language and current level
- Write html for Sign Up and Login
