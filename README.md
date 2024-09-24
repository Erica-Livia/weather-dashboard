# Weather Dashboard Application

This Weather Dashboard Application allows users to search for weather information by city and display detailed weather data. The application is built with React, TypeScript, and Webpack for efficient module bundling and is designed to be responsive and user-friendly.

## Features

- **Search Weather by City**: Enter a city name to get the current weather details.
- **Weather Information Display**: Displays temperature, humidity, wind speed, and more.
- **State Management**: Efficient state management with React and TypeScript.
- **Error Handling**: Graceful handling of errors and invalid inputs.

## Technologies Used

- **React**: For building the user interface.
- **TypeScript**: For static typing and better code maintainability.
- **Webpack**: For bundling and optimizing assets.
- **Axios**: For making HTTP requests to the OpenWeather API.
- **Material-UI**: For UI components and styling.

## Getting Started

### Prerequisites

Make sure you have Node.js and npm (or yarn) installed on your system.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Erica-Livia/weather-dashboard
   cd weather-dashboard

   ```

2. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn install

   ```

3. **Setup the environment variables**:

   Create a .env file in the root of the project and add your OpenWeather API key:

   ```bash
   REACT_APP_API_KEY= 'your-api-key' # Mine is not working yet. LOL! But make sure to replace it with your own.
   ```

   **Note**: The .env file is ignored by Git.

### Running the Application

To run the application, simply run the following command:

```bash
npm start
# or
yarn start
```

The application will start in the browser.

### Building for Production

To build the application for production, run the following command:

```bash
npm run build
# or
yarn build
```

The build files will be generated in the `dist` directory.

## Authors

- [Long Deng](https://github.com/longmaker2)
- [Shema Fred](https://github.com/Ndi-Shema)
- [Ornella Mahoro](https://github.com/OrnellaNiyibizi)
  Please add your name and link to your GitHub profile here.
