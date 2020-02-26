# Nuxt Résumé

<a href="https://gitlab.com/nfriend/nuxt-resume/pipelines" target="_blank"><img
  src="https://gitlab.com/nfriend/nuxt-resume/badges/master/pipeline.svg"
  alt="GitLab build status"></a>

My résumé, built with [NuxtJS](https://nuxtjs.org/guide/installation) and
[Tailwind CSS](https://tailwindcss.com/): https://resume.nathanfriend.io (or
[view as a
PDF](https://resume.nathanfriend.io/Nathan%20Friend%20-%20R%C3%A9sum%C3%A9.pdf))

![A screenshot of my resume](https://resume.nathanfriend.io/screenshot.png)

## Data

All of the content of this resume is sourced from
[`resume-data.js`](./resume-data.js).

Additionally, a `resume-data.private.js` file can be created alongside
[`resume-data.js`](./resume-data.js). This file it `.gitignore`-ed; its contents
will be merged into [`resume-data.js`](./resume-data.js) when building this
résumé. This is used to protect personal info such as phone numbers and
addresses.

## Inspiration

This project was heavily inspired by the [Universal Résumé
Template](https://universal-resume-pages.netlify.com/).

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
[`package.json`](./package.json).

### More info

For detailed explanation on how things work, check out [Nuxt.js
docs](https://nuxtjs.org).

---

Testing README editing.
