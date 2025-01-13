# Jokes App

A modern Vue.js application for managing and rating jokes, built with Vue 3 and Pinia for state management.

🌐 **[Live Demo](https://feligomes.github.io/Jokes/)**

## Features

- Display a collection of jokes with setup and punchline
- Sort jokes by type or rating
- Rate jokes with a 5-star rating system
- Remove unwanted jokes
- Pagination support
- Responsive design with Tailwind CSS
- Loading states with animated spinner
- Refresh jokes functionality

## Technologies Used

- **Vue.js 3** - Progressive JavaScript framework
- **Pinia** - State management solution
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide Icons** - Modern icon set
- **Vitest** - Unit testing framework
- **Vue Test Utils** - Testing utility library for Vue.js

## Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd jokes-app
```

2. Install dependencies:
```bash
yarn install
# or
npm install
```

## Running the Application

To start the development server:
```bash
yarn serve
# or
npm run serve
```

The application will be available at `http://localhost:8080`

## Available Scripts

- `yarn serve` - Run development server
- `yarn build` - Build for production
- `yarn lint` - Run ESLint
- `yarn test` - Run unit tests
- `yarn test:coverage` - Run tests with coverage report

## Testing

The project uses Vitest for unit testing. Tests can be found in the `src/components/__tests__` directory.

To run tests:
```bash
yarn test
```

## Project Structure

```
jokes-app/
├── src/
│   ├── assets/
│   ├── components/
│   │   └── JokesList.vue
│   ├── stores/
│   │   └── jokes.js
│   ├── App.vue
│   └── main.js
├── public/
└── tests/
```

## Future Improvements

- **Data Persistence**: Currently, the store data (jokes and ratings) is cleared on page refresh. This could be improved by:
  - Implementing local storage to persist ratings
  - Adding a backend API to store user preferences
  - Using IndexedDB for offline capabilities
- **User Authentication**: Add user accounts to save personal joke ratings
- **Favorites System**: Allow users to bookmark their favorite jokes
- **Share Feature**: Enable sharing jokes on social media

