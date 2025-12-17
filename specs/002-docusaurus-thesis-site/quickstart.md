# Quick Start Guide

This guide provides instructions to set up and run the Docusaurus thesis site locally.

## Prerequisites

- [Node.js](https://nodejs.org/en/) (Version 18.x or later recommended)
- [Yarn](https://yarnpkg.com/) (or npm, which comes with Node.js)

## Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2.  **Install dependencies:**
    From the root of the project, run the following command to install the necessary packages for Docusaurus:
    ```bash
    yarn install
    ```
    or if you are using npm:
    ```bash
    npm install
    ```

## Running the Development Server

Once the dependencies are installed, you can start the local development server:

```bash
yarn start
```
or
```bash
npm start
```

This command will build the site and serve it locally. By default, it will be available at **http://localhost:3000**.

The site will automatically reload if you make changes to the source files (e.g., editing a `.md` file in the `docs/` directory).

## Building the Static Site

To create a production-ready static build of the site, run:

```bash
yarn build
```
or
```bash
npm run build
```

The output will be placed in the `build/` directory.

## Generating the PDF

The PDF generation process will be handled by a separate script. (This process is TBD and will be implemented based on the `docusaurus-prince-pdf` tool).

A placeholder command will look like this:
```bash
yarn generate-pdf
```
