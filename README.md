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


## What I learned
- How to fetch data from an API and visually present that to a user
- How to use React Router to create a layout with nested pages
- How to work with useState to manage the state of data
- How to work with useEffect to re-render the page, e.g., when data is pulled or a filter is applied
- How to work with useRef to tag certain elements and tie them to event handlers and useEffect
- How to utilize createContext to create a context of data that can be used by nested pages
