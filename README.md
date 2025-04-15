# Michael Ehmke Portfolio

A modern, responsive portfolio website built with Next.js, Tailwind CSS, and shadcn/ui. This website showcases Michael Ehmke's professional background, experience, projects, and contact information.

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations
- Server-side rendering with Next.js
- Accessible UI components from shadcn/ui
- Contact form with client-side validation
- Social media integration and sharing capabilities

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework for server-rendered applications
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Re-usable UI components
- [React](https://reactjs.org/) - JavaScript library for building user interfaces

## Getting Started

### Prerequisites

- Node.js 16.8.0 or newer
- npm or yarn package manager

### Installation

1. Clone the repository
test
```

2. Install dependencies
```bash
npm install
# or
yarn
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

The easiest way to deploy this website is using the [Vercel Platform](https://vercel.com/) from the creators of Next.js.

1. Push your code to a GitHub repository
2. Import your project into Vercel
3. Vercel will detect that you're using Next.js and set up the build configuration for you

## Customization

To customize the content of the portfolio:

1. Edit the personal information in each section of the `app/page.tsx` file
2. Replace placeholder images with your own images in the public directory
3. Update the contact information with your own details
4. Modify the projects section to showcase your own work
5. Update social media links in the `components/ui/social-links.tsx` file
6. Add your own OpenGraph image for social sharing:
   - Create a 1200x630 image named `og-image.jpg`
   - Place it in the `/public` directory
   - This image will be used when your site is shared on social media

## License

This project is open source and available under the [MIT License](LICENSE).
