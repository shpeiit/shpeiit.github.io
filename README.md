# shpeiit.github.io

SHPE IIT website repository. This is the official website for the Society of Hispanic Professional Engineers at Illinois Institute of Technology.


## Development

Developed using the [React Router Framework](https://reactrouter.com/) on top of [Vite](https://vitejs.dev/) and [React](https://reactjs.org/). The website is built using modern web development practices and is designed to be responsive and accessible.

To run the website locally, you will need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed. Once you have those installed, follow these steps:

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/shpeiit/shpeiit.github.io.git
   cd shpeiit.github.io
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build production assets:
   ```bash
   npm run build
   ```
5. Preview the built site locally:
   ```bash
   npm run preview
   ```
6. And if you want to test on a phone (I highly recommend), you can run the following command to expose dev server on your local network:
   ```bash
   npm run dev -- --host
   ```