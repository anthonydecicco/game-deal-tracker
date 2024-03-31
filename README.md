# Game Deal Tracker


## Project Overview
### Summary
An application that uses the CheapShark API to pull a list of deals for video games for the user. The user can filter games, search for specific games, and compare deals across stores for a specific game.

### Purpose
The purpose of this project was to practice my frontend development skills, i.e., creating reusable components, implementing responsive design, and learning how to create user interfaces. This project was also my first time using and learning React and Tailwind CSS. 

### How It Works
1. A user navigates to the root domain and a GET request to [CheapShark API](https://apidocs.cheapshark.com/) is made. The page is then populated with a list of deals on video games.
2. The user can load more deals by clicking on the next page button to get the next list of games from the API. 
3. Clicking on a deal will bring the user to that game's listing page, which shows deals from up to 30 different online stores. A user can then compare deals and click on the link to the respective store and purchase the game if they choose.
4. The user can also search for specific games using the search bar. When a search is made, all titles with a close match will be displayed.
5. The root domain also has a filter feature, where a user can filter games alphabetically, by price, and by Metacritic score. 

### Languages and Technologies Used
- JavaScript
- HTML
- CSS
- React
- Tailwind CSS
- Vite

### Features
- An extensive list of game deals
- Filtering game deals
- Searching for specific game deals
- Pagination through 'next page' and 'previous page' buttons
- Mobile-first responsive design

### Roadmap
While there are more features that I could add, this project is complete in my eyes; I am working on other projects. 

### Long-Term Features
Considering I view this project complete, I don't actually envision adding any features. However, if I were to continue working on this, these are some of the features I would consider adding:
- Ability to filter games using price ranges
- Compare game deals against different game deals (not just against deals for the same game)
- User accounts with saved games and purchase history


## Credits
### CheapShark API
CheapShark is a price comparison website for digital PC Games. We keep track of prices across multiple stores including Steam, GreenManGaming, Fanatical, and many others.

https://apidocs.cheapshark.com/ 

## Dependencies
### react
React is a JavaScript library for creating user interfaces. The react package contains only the functionality necessary to define React components. It is typically used together with a React renderer like react-dom for the web, or react-native for the native environments.

https://www.npmjs.com/package/react

### react-dom
This package serves as the entry point to the DOM and server renderers for React. It is intended to be paired with the generic React package, which is shipped as react to npm.

https://www.npmjs.com/package/react-dom

### react-router-dom
The react-router-dom package contains bindings for using React Router in web applications. 

https://www.npmjs.com/package/react-router-dom

### vite
Vite (French word for "fast", pronounced /vit/) is a new breed of frontend build tool that significantly improves the frontend development experience. It consists of two major parts:

1. A dev server that serves your source files over native ES modules, with rich built-in features and astonishingly fast Hot Module Replacement (HMR).
2. A build command that bundles your code with Rollup, pre-configured to output highly optimized static assets for production.

In addition, Vite is highly extensible via its Plugin API and JavaScript API with full typing support.

https://www.npmjs.com/package/vite 

## What I learned
- How to fetch data from an API and visually present that to a user
- How to use React Router to create a layout with nested pages
- How to work with useState to manage the state of data
- How to work with useEffect to re-render the page, e.g., when data is pulled or a filter is applied
- How to work with useRef to tag certain elements and tie them to event handlers and useEffect
- How to utilize createContext to create a context of data that can be used by nested pages
