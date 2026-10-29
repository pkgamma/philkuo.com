# philkuo.com, 2021 edition

This is Philip Kuo's personal site as it ran from 2021 to 2026. It is **retired**: philkuo.com is now served by a newer site (`pkgamma/philkuo.com-2026`, on Vercel), and this one lives on at **https://2021.philkuo.com** as an archived version, linked from the new site's /archive page. Treat it as a museum piece: keep it building and correctly labelled, and don't redesign it or add features.

## Commands

- **Node 12 is required.** `netlify.toml` pins `NODE_VERSION = "12.19.0"`, and Gatsby 2 with its webpack 4 toolchain doesn't run on a modern Node. Use nvm (`nvm install 12.19.0`) or a downloaded Node 12 binary.
- `npm ci`: install. The lockfile is v2, and npm 6 (bundled with Node 12) reads it.
- `npx gatsby develop`: dev server on http://localhost:8000.
- `npx gatsby build`: production build into `public/`, about 20 s. This is the only check; there are no tests or lint.
- `npx gatsby clean`: clear `.cache/` and `public/` when a build behaves strangely.

Formatting follows `.prettierrc` (no semicolons, `arrowParens: avoid`). Older files don't all conform, so don't reformat files you aren't changing.

## Deploy

Netlify site **"pkgamma"** builds `gatsby build` and publishes `public/`. It deploys on every push to `master`. There is no staging branch, so merging a PR ships it.

- `netlify.toml` holds the build settings and a site-wide `X-Robots-Tag: noindex` header, so pages, PDFs and images stay out of search.
- `static/_redirects` is copied into `public/`. `gatsby-plugin-netlify` adds its own rules and a `public/_headers` with security and caching headers. The short links in `_redirects` (/meet, /linkedin, /c, …) were philkuo.com's. They are mirrored in the new site's `next.config.ts`, which is the copy that matters now. They still work here, so there's no need to delete them.
- DNS for philkuo.com and all its subdomains is Netlify DNS, and its MX records carry Philip's email. Never touch nameservers or MX records from here.

## Structure

- `gatsby-config.js`: plugins and `siteMetadata`. `url` is `https://2021.philkuo.com`, and `seo.js` builds `og:url` and `og:image` from it, so it must stay this site's own address, not philkuo.com.
- `src/pages/`: file-based routes. **i18n is by filename** via `gatsby-plugin-i18n`: `index.en.js` serves `/`, and `index.zh.js` serves `/zh/`. Each language has its own copy of a page, and the copies don't share strings. A change to page content almost always means editing both files.
- `src/components/`: `layout`, `navbar`, `footer`, `title`, `item-card` and `social-btns`, each with its own `.en.js` / `.zh.js` pair and a shared `.module.scss`. `seo.js` is shared, and takes `zh` to switch to the Chinese defaults.
- `src/styles/`: `global.scss` holds the light and dark colour variables (dark mode comes from `use-dark-mode`; clicking the avatar toggles it), and `typography.scss` holds the type. Fonts are GT Walsheim subsets in `src/fonts/`.
- `static/`: served as-is. It holds the favicons, the social cards (`social.jpg` and `social_zh.jpg`), the avatar, and the wireframe PDFs in `resources/`.
- `src/pages/404.js` redirects to `/` with JavaScript. `angela.js` is a private one-off page. `work/one*.js` and `blog/hackillinois.js` are unfinished drafts with placeholder text that nothing links to.
- `*.sketch` at the root are the design sources.

## Known leftovers

- `gatsby-plugin-google-gtag` still sends to the Universal Analytics property `UA-63814084-1`, which Google shut down in 2023. It's harmless but does nothing.
- The favicon `<link>`s in `seo.js` use relative paths (`favicon/…`, with no leading slash), so they only resolve on top-level pages.
- The social buttons link to `http://philkuo.com/resume`, which the new site redirects.
- The remote branches `2021-redesign` (merged in Feb 2021) and two dependabot branches are stale.

## Related repos

- `pkgamma/philkuo.com-2026`: the current philkuo.com.
- `pkgamma/archive.philkuo.com`: older homepages and projects at archive.philkuo.com, linked from this site's footer.
