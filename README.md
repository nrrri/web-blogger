**Web Blog Using Strapi and Next.js**

This GitHub repository contains a web blog application built with Strapi, a headless CMS, and Next.js, a React framework for server-side rendering and routing. The project consists of several key components:

### Features:
- **Fetching Blogs**: Blogs are fetched from the Strapi API and displayed on the homepage.
- **Individual Blog Pages**: Users can view detailed information about each blog by clicking on them.
- **Special Blogs**: Authentication is implemented to access special blogs, requiring users to log in before viewing.

### Components:
- **Page.js**: Handles fetching and displaying blogs on the homepage.
- **Page.js for Searching Blog/ID**: Allows users to search for specific blogs by ID and displays detailed information.
- **Page.js for Special Blogs**: Implements authentication and displays special blogs based on user authorization.
- **Page.js for Login**: Provides a login interface for users to authenticate and access special blogs.
- **Action.js**: Manages login actions, setting JWT tokens upon successful authentication.
- **Middleware.js**: Implements authentication middleware to ensure authorized access to special blogs.

### Technologies Used:
- Strapi
- Next.js
- React
- Axios

### Usage:
1. Clone the repository: `git clone https://github.com/your_username/web-blog.git`
2. Install dependencies: `npm install`
3. Set up Strapi and configure environment variables.
4. Start the development server: `npm run dev`

## Getting Started
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### License:
This project is licensed under the [MIT License](LICENSE).

Feel free to contribute, report issues, or suggest improvements! 🚀