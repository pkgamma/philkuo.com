# PhilKuo.com [![Netlify Status](https://api.netlify.com/api/v1/badges/158b0c6c-8707-424e-8535-f45d5dc45997/deploy-status)](https://app.netlify.com/sites/pkgamma/deploys)

This is the static sources of Philip's personal website. Built with [Eleventy](https://www.11ty.io/) and hosted on [Netlify](https://www.netlify.com/). Netlify builds the site automatically every time the source files are pushed to the [git repo](https://github.com/pkgamma/philkuo.com) so that I don't have to build locally.

## Website structure

The content of each page on the website are located in the `.njk` files in the root directory, written in `html`. All the `html` contents are read into the `page.njk` file in the `_includes/layouts` folder, which is also a `html` template consisting of common elements such as the header bar of the website and the footer copyright texts. And then, files are built by Eleventy, generating complete, static `html` files in the `_site` folder. 

`.css`, `.js`, picture, and font files are also copied into `_site` when `Eleventy` build commend is ran because of the rules created in `.eleventy.js`.

## Build websites locally

Simply run `Eleventy` (assuming all npm packages are installed correctly).

## Update production (PhilKuo.com)

Simply push the local updates to the [git repo](https://github.com/pkgamma/philkuo.com) and Netlify will updates it automatically.

## Add page redirects

Add redirect rules in the `_redirect` file in root. See [Netlify documentation](https://www.netlify.com/docs/redirects/) for details.

Last (or first) updated on Jan 19th, 2019 (First weekend after Spring 2019 semester started).