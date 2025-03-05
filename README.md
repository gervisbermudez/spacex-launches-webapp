# SpaceX Launches Web App

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Description

This application allows users to view the latest SpaceX launches and add them to a "favorites" list to revisit later. It is part of a technical interview exercise.

## Features

1. Fetch endpoints and merge arrays (populate launch data with rocket data).
2. Display launches.
3. Favorite functionality (persist them in local storage).
4. Search by mission name.
5. Inspect specific launch details.
6. Pagination.

## API Endpoints

The application uses the following SpaceX API endpoints:

- [https://api.spacexdata.com/v3/rockets](https://api.spacexdata.com/v3/rockets)
- [https://api.spacexdata.com/v3/launches](https://api.spacexdata.com/v3/launches)

More information about API usage can be found here: [SpaceX API Documentation](https://docs.spacexdata.com).

## Technologies Used

- **Next.js**: React framework for web applications.
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: CSS framework for rapid and responsive design.
- **ESLint**: Tool for identifying and reporting on patterns in JavaScript code.
- **Local Storage**: To persist the favorites list.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
