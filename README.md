# Color Search Tool

This project is a single-page website built in React that provides a color search tool. Users can search for colors by inputting a CSS color code (e.g., "#FF0000" or "rgb(255,0,0)") and hitting Enter. The colors are fetched from the XKCD colors JSON file and displayed in a large table. The search results are sorted by similarity to the inputted color using the `Euclidean distance algorithm`, and the top ~100 results are displayed.

![Color Search Tool](https://github.com/Aslam786-lab/colour-searcher/assets/54398424/1913735c-b74f-4a51-a531-e9b51c47e4b7)

## Features:

- Fetches colors from the XKCD colors JSON file.
- Displays colors in a table with detailed information.
- Allows users to search colors by CSS color code.
- Sorts and displays the top ~100 results based on similarity to the inputted color.

## Tools Used:

- Front-end Language: React
- Bundler: Vite
- Package Manager: npm

## Setup:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm run dev` to start the development server.
5. Open your browser and go to `http://localhost:5173/` to view the color search tool.


Feel free to reach out if you have any questions or suggestions!
