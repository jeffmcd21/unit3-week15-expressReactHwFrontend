# Cheese App

**Jeff McDonald** (2024-02-10)
-----------------------------

#### Built with an Express backend and deployed to Render.com:
[Render - (backend site)](https://express-react-cheese.onrender.com)

[GitHub backend repository](https://github.com/jeffmcd21/unit3-week15-expressReactHW)

#### Built with a React frontend and deployed to Netlify.com:
[Netlify - (main site)](https://cheesetracker.netlify.app/)

[GitHub frontend repository](https://github.com/jeffmcd21/unit3-week15-expressReactHwFrontend)

--------------

### List of Dependencies

##### Node Dependencies

- cors
- dotenv
- express
- mongoose
- morgan

##### Frontend

- react
- react-router-dom
- sass

### Route Map

| Route Name | Endpoint | Method | Decsription |
|------------|----------|--------|-------------|
| Index | /cheese | GET | Renders entire list of cheese |
| New | /cheese/new | GET | Display a form to add a new cheese |
| Delete | /cheese/:id | DELETE | Remove a particular cheese then redirect |
| Update | /cheese/:id | PUT | Update a particular cheese then redirect |
| Create | /cheese | GET | Add a new cheese to the database then redirect |
| Edit | /cheese/:id/edit | POST | Show edit form for a cheese |
| Show | /cheese/:id | GET | Show info about a cheese |
