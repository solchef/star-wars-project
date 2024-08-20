# Star Wars Character Application

## Overview

The **Star Wars Character Application** is a React-based web application designed to showcase characters from the Star Wars universe. The application integrates with the Star Wars API (SWAPI) to fetch character data, implements pagination for efficient data handling, and provides a detailed view of each character in a modal.

## Features

### 1. API Integration
- **Data Fetching**: The app utilizes the Star Wars API (`/people` endpoint) to retrieve a list of characters.
- **Pagination**: Efficiently handles large datasets by implementing pagination.
- **Loading Indicators**: Displays a loading spinner while fetching or refetching data.
- **Error Handling**: Gracefully manages error states, such as when the API server is down.

### 2. User Interface (UI)
- **Character Cards**: Displays each Star Wars character as a card that includes their name and a randomly sourced image from Picsum Photos.
- **Species-Based Coloring**: Cards are color-coded based on the character's species.
- **Hover Animation**: Adds an animation effect when hovering over character cards.
- **Modal View**: Clicking a character card opens a modal with detailed information.

### 3. Character Details Modal
- **Modal Header**: Displays the character's name.
- **Detailed Information**: Includes the character's height (in meters), mass (in kg), birth year, and the date they were added to the API (in dd-MM-yyyy format).
- **Film Appearances**: Shows the number of films the character appears in.
- **Homeworld Information**: Fetches and displays information about the character's homeworld, including its name, terrain, climate, and population.

## Project Structure

```
package.json
public/
  favicon.ico
  index.html
  logo192.png
  logo512.png
  manifest.json
  robots.txt
  starwars.png
  swlogo.png
README.md
src/
  App.css
  App.test.tsx
  App.tsx
  components/
    CharacterCard/
      index.tsx
      style.css
    CharacterModal/
      CharacterDetailModal.tsx
      index.tsx
      style.css
    Layout/
      index.tsx
      style.css
    LoadingSpinner/
      index.tsx
      style.css
    Pagination/
      index.tsx
      style.css
    SkeletonCard/
      index.tsx
      style.css
  context/
    CharacterContext.tsx
  hooks/
    usePagination.ts
  index.css
  index.tsx
  logo.svg
  react-app-env.d.ts
  redux/
    slices/
      charactersSlice.ts
    store.ts
  reportWebVitals.ts
  services/
    api.ts
  setupTests.ts
  types/
    index.ts
  utils/
    index.ts
  __tests__/
    App.test.tsx
    CharacterCard.test.tsx
    CharacterModal.test.tsx
    CharacterContext.test.tsx
    charactersSlice.test.ts
tsconfig.json
webpack.config.js
```

## Getting Started

### Prerequisites

- **Node.js** (version 18.x or higher)
- **npm** (version 6.x or higher) or **yarn**

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/star-wars-character-app.git
   cd star-wars-character-app
   ```

2. **Install the dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the application:**

   ```bash
   npm start
   # or
   yarn start
   ```

   The application should now be running on [http://localhost:3000](http://localhost:3000).

### Running Tests

This project uses **Jest** and **React Testing Library** for unit tests. To run the tests:

```bash
npm test
# or
yarn test
```

The tests will run automatically and cover key components, context, and Redux slices.

## Code Quality and Architecture

- **Good Coding Standards**: The project adheres to industry best practices in coding, ensuring maintainability and readability.
- **Maintainable Architecture**: The application is structured to allow for easy scalability and maintenance.
- **Testing**: Comprehensive unit tests ensure that the application is reliable and bug-free.

## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Redux](https://redux.js.org/) - A predictable state container for JavaScript apps.
- [Jest](https://jestjs.io/) - A delightful JavaScript Testing Framework.
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - A lightweight solution for testing React components.
- [SWAPI](https://swapi.dev/) - The Star Wars API, providing information about Star Wars characters.

