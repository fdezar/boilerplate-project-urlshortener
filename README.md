# URL Shortener Microservice

URL Shortener Microservice is a web application that allows users to shorten long URLs into more manageable links. It provides a simple interface for users to input their long URLs and receive shortened versions, making sharing and storing URLs easier.

## Features ✨

- Shorten long URLs into compact links.
- Validates input URLs for correct format.
- Generates unique short URLs for each input.
- Redirects users from short URLs to original long URLs.
- Built with Node.js, Express, MongoDB, and Bootstrap.

## How to Use 🚀

1. Visit the application's homepage.
2. Enter a valid URL in the input field following the "How to use" instructions on the app.
3. Click the "Post URL" button to generate a shortened link.
4. Use the provided shortened link for sharing or storing purposes.
5. Access the shortened link to be redirected to the original URL.

## Installation and Setup 🛠️

1. Clone this repository:

git clone https://github.com/fdezar/url-shortener-microservice.git

2. Install dependencies:

npm install

3. Create a `.env` file in the root directory and add the following environment variables:

PORT=3000
URL_DB=your_mongodb_connection_string

4. Start the server:

npm start

5. Access the application at `http://localhost:3000`.

## Dependencies 📦

- Express.js: Fast, unopinionated, minimalist web framework for Node.js.
- MongoDB: NoSQL database used for storing URLs and short links.
- dns: Node.js module for DNS lookups to validate input URLs.
- Bootstrap: Front-end framework for building responsive web designs.

## Demo 💻

https://url-sh.vercel.app

## Credits 🙌

- [Bootstrap](https://getbootstrap.com/) for the responsive design components.
- [Font Awesome](https://fontawesome.com/) for the icons used in the interface.

## License 📄

This project is licensed under the MIT License.

