# remote.cards

Generate a “Hello” card and tell your audience what you’re up to.

[remotecards.netlify.com](https://remotecards.netlify.com/)

## About the build

- [Hugo](https://gohugo.io/)
- [Hugo pipes](https://gohugo.io/hugo-pipes/) for SCSS, Sourcemaps, PostCSS Autoprefixer and JS

Read more about it in [How I built this site](https://harrycresswell.com/build/).

## Prerequisites

You need to have the latest/LTS [node](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/get-npm) versions installed.

You will also need to [install hugo](https://gohugo.io/getting-started/quick-start/), preferably using Homebrew:

```
brew install hugo
```

## Installation

Clone this repository:

```
git clone https://github.com/harrycresswell/hellocards.git
```

Then run:

```
npm install
```

This will install the necessary dependencies.

## Local development

To start a local development server at at `https://localhost:1313/` run:

```
npm start
```

This is a simple NPM Script which `hugo server --disableFastRender`.

## Production build

Whe your ready to build a production ready site, update the `baseUrl` inside `config.toml` then run:

```
npm run clean && npm run build
```

This will remove the `/public` folder and run a fresh build ready for production.

## Basic concepts

A few of the basic concepts to get the most out of using this theme.

### Adding Content

Create a new markdown file in the `./content/articles` directory:

```
hugo new articles/my-new-article.md
```

Create a new page in the `./content/page` directory:

```
hugo new page/my-new/page.md
```

Follow the same steps for notes and projects.

### Writing Sass

Write your **Sass** inside `./assets/scss`.

With the server running (`npm start`) Hugo will watch your Sass for changes, then pipe them to `./public/css/main.css` and reload the browser.

### Making layout changes

To make changes to the layout head to `./themes/hello` where you will find `/layouts`. Inside there you will find templates for partials, shortcodes and taxonomies.
