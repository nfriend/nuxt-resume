# Nuxt Résumé

My résumé, built with [NuxtJS](https://nuxtjs.org/guide/installation) and
[Tailwind CSS](https://tailwindcss.com/): https://resume.nathanfriend.io

<a href="https://gitlab.com/nfriend/nuxt-resume/pipelines" target="_blank"><img
  src="https://gitlab.com/nfriend/nuxt-resume/badges/master/pipeline.svg"
  alt="GitLab build status"></a>

## Data

All of the content of this resume is sourced from
[`resume-data.json`](resume-data.json).

Additionally, a `resume-data.private.json` file can be created alongside
[`resume-data.json`](resume-data.json). This file it `.gitignore`-ed; its
contents will be merged into [`resume-data.json`](resume-data.json) when
building this résumé. This is used to protect personal info such as phone
numbers and addresses.

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For other useful commands, check out the `scripts` defined in
[`package.json`](package.json).

### More info

For detailed explanation on how things work, check out [Nuxt.js
docs](https://nuxtjs.org).
