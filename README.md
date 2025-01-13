# Jokes App

A modern Vue.js application for managing and rating jokes, built with Vue 3 and Pinia for state management.

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

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Deployment

### GitHub Repository Setup

1. Create a new repository on GitHub
2. Initialize the local repository and push to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/jokes-app.git
git push -u origin main
```

### GitHub Pages Deployment

1. First, install the gh-pages package:
```bash
yarn add -D gh-pages
# or
npm install -D gh-pages
```

2. Add these scripts to your `package.json`:
```json
{
  "scripts": {
    "deploy": "gh-pages -d dist",
    "predeploy": "yarn build"
  }
}
```

3. Add the homepage field to your `package.json`:
```json
{
  "homepage": "https://YOUR_USERNAME.github.io/jokes-app"
}
```

4. Build and deploy:
```bash
yarn deploy
# or
npm run deploy
```

5. On GitHub, go to your repository settings > Pages:
   - Set the source branch to `gh-pages`
   - Save the changes

Your app will be available at `https://YOUR_USERNAME.github.io/jokes-app`
