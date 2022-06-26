# Warehouse Inventory Management System

#### Video Demo:  https://youtu.be/f3Lgxp8fYeQ
#### Description:

This is a simple application for inventory management system that includes
1. a product viewer which displays all product data
2. inventory management tool which can update  local and global quantities of a product based on location

This product viewer allows the user search a product by name or "Core" ID and then displays the relevant data for that product. If a product is stocked, the various locations and global quantity will be displayed.
Note that this app assumes that the user knows the name or product ID to be checked.

The inventory manager displays a separate component for each given location of a specific product. This allows the user to adjust quantities of product at each location and then updates the global quantity. If a product is not stocked, it should return an appropriate error message.

### Technical Details

Tech Stack:
- TypeScript
- React
- CSS
- NodeJS
- Express JS
- MySQL
- Netlify (front end deployment)
- Heroku/ClearDB (backend and MySQL hosting)

This is a single page application built using React and TypeScript, which is served by Node/ExpressJS on the back end querying a MySQL DB.

TypeScript was chosen in this case to overcome some of the loose typing of JavaScript and to ensure more error free code. There were some challenges going from a vanilla JS/TS style since React has many of its own types for components, so it took some time to figure out which would be appropriate in this case.

A component based approach was taken with the React code in order to keep things organised. Each React component has its own folder with a TSX file and a CSS file with all the styling for each component. Pure CSS was used for styles in this case, and the interface was designed to be clean but utilitarian (nothing too fancy here).

A separate file for all API calls are stored in the utils folder, along with common types that were shared throughout the app.

The backend is a straightforward Node/Express app written in JavaScript. At this time, it makes Read/Update requestes to the MySQL database from data submitted by the frontend. Error handling was a bit more challenging with MySQL as compared to non-relational databases like Mongo, so there is more emphasis on the front end to ensure the strictness of the requests being made. The back is currently deployed to Heroku and uses their free SQL hosting service. As this is the free tier of Heroku, it may take a 10-15 seconds for the first request to return data as their dynos have to be "spinned up" after 30 minutes of inactivity

There's no responsive behaviour set for mobile, as this is primarily intended for use by warehouse staff, however this may be fixed in future iterations.

View the deployment here: https://subtle-zabaione-721bc9.netlify.app/

View the front end repo here: https://github.com/mentalcaries/warehouse-inventory-ts

View the back end repo here: https://github.com/mentalcaries/jls-inventory-backend
