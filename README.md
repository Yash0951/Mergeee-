This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### MongoDB Setup

This application requires MongoDB for tracking PDF generation counts. Before running the app:

1. Create a MongoDB database named `Mergeee!`
2. Create a `.env.local` file in the project root with your MongoDB connection string:

```env
MONGODB_URI=mongodb+srv://username:password@cluster0.mongodb.net/Mergeee!?retryWrites=true&w=majority
```

Replace the placeholder with your actual MongoDB connection string. For local development, you can use:

```env
MONGODB_URI=mongodb://localhost:27017/Mergeee!
```

### Starting the Development Server

Run the development server:

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Rate Limiting

The application implements rate limiting for PDF generations:
- Each user is limited to 10 PDF generations per hour
- After reaching the limit, users will see a popup notification
- The generation quota automatically resets after 1 hour

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
