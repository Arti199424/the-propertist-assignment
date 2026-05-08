# The Propertist Frontend Assignment

Responsive property listing app built with React JS and Vite.

## Features

- Property cards with image, title, price, location, and BHK
- Debounced location search
- BHK filter
- Buy/Rent toggle
- Property detail route on card click
- Skeleton loading state
- Mock JSON property data
- Responsive layout for mobile, tablet, and desktop

## Setup

```bash
npm install
npm run dev
```

Open the local URL shown in your terminal, usually `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

## GitHub Pages

GitHub repository:

```text
https://github.com/Arti199424/the-propertist-assignment
```

GitHub Pages live URL:

```text
https://arti199424.github.io/the-propertist-assignment/
```

## Vercel Deployment

This Vite project is ready for Vercel. Use these settings:

```text
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

The Vite config automatically uses `/` as the base path on Vercel.

## Submission

GitHub repository link:

```text
https://github.com/Arti199424/the-propertist-assignment
```

Live link:

```text
https://arti199424.github.io/the-propertist-assignment/
```

## Project Structure

- `src/App.jsx` switches between listing and detail views
- `src/components/PropertyExplorer.jsx` contains search, filter, toggle, and loading logic
- `src/components/PropertyCard.jsx` renders each property card
- `src/components/PropertyDetail.jsx` renders the detail view
- `data/properties.json` stores mock property data
