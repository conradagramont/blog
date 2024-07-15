# AstroBlogSSRTS

This quick little example shows a few basic changes to the Astro Blog sample files required to run Astro in SSR server output mode with TypeScript support.

Features:

- ✅ Astro Blog example modified to work with SSR 
- ✅ Runs with Node working with Typescript

Tested with version:
- Astro: 4.11.5
- Node: v18.20.3 (You'll need this installed to use this project)
- Windows 11: 23H2

## File Changes

Here's what to look for to help you on your journey:
- astro.config.mjs
  - SSR configuration
- package.json
  - scripts: added one called node that will build and run using nodemon
  - nodemonConfig: settings for nodemon
  - dependencies: @astrojs/node
  - devDependencies: @types/node, nodemon, ts-node, typescript
  - nodemon configuration
- src\pages\blog\[...slug].astro
  - Modified to change how SSR handles incoming requests versus static site paths

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run node`            | Build to `./dist/` and run nodemon               |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |


## 👀 Want to learn more?

Check out [Astro documentation](https://docs.astro.build) or jump into [Astro Discord server](https://astro.build/chat).

Other useful resources:
- [Astro Routing for SSR Mode](https://docs.astro.build/en/guides/routing/#server-ssr-mode)

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).
