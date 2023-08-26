 ```
# To-Do List App

This is a simple to-do list app built with Express.js and EJS.

## Installation

1. Clone the repository.
2. Install the dependencies.

```
npm install
```

3. Start the server.

```
npm start
```

## Usage

The app can be accessed at `localhost:3000`.

To add a new item to the list, enter the item text into the input field and click the "+" button.

To mark an item as complete, click the checkbox next to the item.

To delete an item, click the "X" button next to the item.

## Code Explanation

The app consists of the following files:

* `app.js`: The main Express.js file.
* `date.js`: A module that provides date formatting functions.
* `public/css/styles.css`: The CSS file for the app.
* `views/about.ejs`: The EJS template for the about page.
* `views/footer.ejs`: The EJS template for the footer.
* `views/header.ejs`: The EJS template for the header.
* `views/list.ejs`: The EJS template for the list page.

The `app.js` file is the main entry point for the app. It sets up the Express.js application and defines the routes.

The `date.js` module provides date formatting functions. The `getdate()` function returns the current date in a long format, and the `getDay()` function returns the current day of the week.

The `public/css/styles.css` file contains the CSS for the app.

The `views/about.ejs` file is the EJS template for the about page. It displays a simple message about the app.

The `views/footer.ejs` file is the EJS template for the footer. It displays a copyright notice.

The `views/header.ejs` file is the EJS template for the header. It displays the title of the page.

The `views/list.ejs` file is the EJS template for the list page. It displays the list of items and allows the user to add, mark as complete, and delete items.

## Conclusion

This is a simple to-do list app that demonstrates how to use Express.js and EJS. It can be used

as a starting point for building your own web apps with Node.js and JavaScript.