# To-Do List App

This is a simple to-do list app built with Express.js and EJS.

## Live Demo

Check out the app live [here](https://different-valiant-kingfisher.glitch.me/).

## Installation

1. Clone the repository.
2. Install the dependencies.

   ```sh
   npm install
   ```

3. Start the server.

   ```sh
   npm start
   ```

## Usage

The app can be accessed at `localhost:3000`.

- **Add a new item:** Enter the item text into the input field and click the "+" button.
- **Mark an item as complete:** Click the checkbox next to the item.
- **Delete an item:** Click the "X" button next to the item.

## Code Explanation

The app consists of the following files:

- `app.js`: The main Express.js file that sets up the application and defines the routes.
- `date.js`: A module that provides date formatting functions.
- `public/css/styles.css`: The CSS file for the app.
- `views/about.ejs`: The EJS template for the about page.
- `views/footer.ejs`: The EJS template for the footer.
- `views/header.ejs`: The EJS template for the header.
- `views/list.ejs`: The EJS template for the list page.

### Detailed File Descriptions

- **`app.js`**: The main entry point for the app. It sets up the Express.js application and defines the routes.
- **`date.js`**: Provides date formatting functions. The `getDate()` function returns the current date in a long format, and the `getDay()` function returns the current day of the week.
- **`public/css/styles.css`**: Contains the CSS for the app.
- **`views/about.ejs`**: The EJS template for the about page, displaying a simple message about the app.
- **`views/footer.ejs`**: The EJS template for the footer, displaying a copyright notice.
- **`views/header.ejs`**: The EJS template for the header, displaying the title of the page.
- **`views/list.ejs`**: The EJS template for the list page, displaying the list of items and allowing the user to add, mark as complete, and delete items.

## Conclusion

This is a simple to-do list app that demonstrates how to use Express.js and EJS. It can be used as a starting point for building your own web apps with Node.js and JavaScript.
