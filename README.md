# HeavenWallsAPI
API For Fetching Wallpapers from WallHaven API (Solves CORS Problem)
This is an Express API that serves as a proxy for the Wallhaven API. It provides various endpoints to fetch wallpapers and relay the responses from the Wallhaven API to the specified client application.

## Demo

You can try out the hosted version of this Express API on Vercel. It provides a live demonstration of the API endpoints and their functionality.

To access the demo, visit [HeavenWalls API Demo](https://heaven-walls-api.vercel.app/).

Please note that the demo may have limited resources or rate limits, so it is recommended to set up your own instance for production use.

## Features

- Proxies requests to the Wallhaven API to fetch wallpapers.
- Implements CORS headers to allow requests from the specified client application.
- Handles different endpoints for fetching wallpapers based on search queries, latest wallpapers, top wallpapers, random wallpapers, and individual wallpaper details.

## Prerequisites

- Node.js - Make sure you have Node.js installed on your machine. You can download it from [https://nodejs.org](https://nodejs.org).

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/xtremeandroid/HeavenWallsAPI.git
```

2. Switch to API Directory:
```bash
cd HeavenWallsAPI
```

3. Install the dependencies:
```bash
npm install
```

4. Modify the Express API code in the index.js file as per your requirements. Update the value of the server variable to include your Wallhaven API URL. Make sure to replace https://heavenwalls.netlify.app in the CORS header with the URL of your React app or the client application you want to allow access to.

5. Start the server
```bash
node server.js
```

#### The API will be accessible at http://localhost:3000.

## Endpoints
* GET /api/wallhaven/home : Fetches home wallpapers from the Wallhaven API. The API URL should be https://wallhaven.cc/api/v1/search?q=4k.
* GET /api/wallhaven/latest?page={page} : Fetches the latest wallpapers from the Wallhaven API. The API URL should be https://wallhaven.cc/api/v1/search?page={page}.
* GET /api/wallhaven/topwalls?page={page}&toprange={toprange} : Fetches the top wallpapers from the Wallhaven API. The API URL should be https://wallhaven.cc/api/v1/search?sorting=toplist&topRange={toprange}&page={page}.
* GET /api/wallhaven/random?page={page} : Fetches random wallpapers from the Wallhaven API. The API URL should be https://wallhaven.cc/api/v1/search?sorting=random&page={page}.
* GET /api/wallhaven/search?page={page}&search={searchTerm} : Fetches wallpapers based on a search query from the Wallhaven API. The API URL should be https://wallhaven.cc/api/v1/search?q={searchTerm}.

## License
This Express API is open-source software licensed under the MIT license.

## Contributing
Contributions are welcome! If you find any issues or want to enhance this API, feel free to open a pull request.

## Acknowledgments
This Express API is built as a proxy for the Wallhaven API to facilitate easy integration with client applications.
