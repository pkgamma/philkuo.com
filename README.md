# philkuo.com [![Netlify Status](https://api.netlify.com/api/v1/badges/158b0c6c-8707-424e-8535-f45d5dc45997/deploy-status)](https://app.netlify.com/sites/pkgamma/deploys)

This is the static sources of Philip's personal website. Built with [Gatsby](https://www.gatsbyjs.com) and hosted on [Netlify](https://www.netlify.com). Netlify builds the site automatically every time the source files are pushed to the [git repo](https://github.com/pkgamma/philkuo.com) and serves it on their CDN. 

## Start the development server

Simply run `gatsby develop` (assuming all npm packages are installed correctly).

## Update production

Simply push the local changes to the [git repo](https://github.com/pkgamma/philkuo.com) and Netlify will deploy and update production automatically.

## Add page redirects

Add redirect rules in the `_redirects` file in `/static`. See [Netlify documentation](https://www.netlify.com/docs/redirects/) for details.

## Basic project structure

**`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

**`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

**`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

**`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

**`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

**`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

**`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

**`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

**`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

**`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

**`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

**`README.md`**: A text file containing useful reference information about your project.

## Previous versions of this site

This is the 4th version of PhilKuo.com, first introduced on Feb 15th, 2021. View past versions [here](http://archive.philkuo.com)!