# Grabarz & Partner - Boilerplate

[![GitHub package version](https://img.shields.io/github/package-json/v/GrabarzUndPartner/gp-vue-boilerplate.svg)](https://github.com/GrabarzUndPartner/gp-vue-boilerplate)
[![license](https://img.shields.io/github/license/GrabarzUndPartner/gp-vue-boilerplate.svg)](https://github.com/GrabarzUndPartner/gp-vue-boilerplate)
[![GitHub contributors](https://img.shields.io/github/contributors/GrabarzUndPartner/gp-vue-boilerplate.svg)](https://github.com/GrabarzUndPartner/gp-vue-boilerplate/graphs/contributors)
[![Greenkeeper badge](https://badges.greenkeeper.io/GrabarzUndPartner/gp-vue-boilerplate.svg)](https://greenkeeper.io/)

[![dependencies Status](https://david-dm.org/GrabarzUndPartner/gp-vue-boilerplate/status.svg)](https://david-dm.org/GrabarzUndPartner/gp-vue-boilerplate)
[![devDependencies Status](https://david-dm.org/GrabarzUndPartner/gp-vue-boilerplate/dev-status.svg)](https://david-dm.org/GrabarzUndPartner/gp-vue-boilerplate?type=dev)
[![Known Vulnerabilities](https://snyk.io/test/github/GrabarzUndPartner/gp-vue-boilerplate/badge.svg)](https://snyk.io/test/github/GrabarzUndPartner/gp-vue-boilerplate)

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/fd03937e022947fe867c7a33fdf707f9)](https://www.codacy.com/app/stephan.gerbeth/gp-vue-boilerplate?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=GrabarzUndPartner/gp-vue-boilerplate&amp;utm_campaign=Badge_Grade)
[![Cypress.io tests](https://img.shields.io/badge/cypress.io-tests-green.svg?style=flat-square)](https://cypress.io)

[![OSX/Linux Build Status](https://travis-ci.org/GrabarzUndPartner/gp-vue-boilerplate.svg?branch=master)](https://travis-ci.org/GrabarzUndPartner/gp-vue-boilerplate)
[![Windows Build Status](https://ci.appveyor.com/api/projects/status/jdxatqwkaoqbfda1/branch/master?svg=true)](https://ci.appveyor.com/project/StephanGerbeth/gp-vue-boilerplate/branch/master)

[![Storybook badge](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://grabarzundpartner.github.io/gp-vue-boilerplate/storybook/?path=/story/atoms-headlines--overview)

## Description

G&P Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites by vuejs.

### Demo

- [website](https://grabarzundpartner.github.io/gp-vue-boilerplate/)
- [source code](https://github.com/GrabarzUndPartner/gp-vue-boilerplate/tree/gh-pages)

### Sandbox

[![Edit gp-vue-boilerplate master](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/gp-vue-boilerplate-58pct)

### Reports

- [webpack client](https://grabarzundpartner.github.io/gp-vue-boilerplate/reports/webpack/client.html)
- [webpack modern](https://grabarzundpartner.github.io/gp-vue-boilerplate/reports/webpack/modern.html)
- [webpack server](https://grabarzundpartner.github.io/gp-vue-boilerplate/reports/webpack/server.html)
- [packtracker modern](https://app.packtracker.io/organizations/310/projects/247)
- [cypress](https://grabarzundpartner.github.io/gp-vue-boilerplate/reports/cypress.html)

### Component Overview

- [storybook](https://grabarzundpartner.github.io/gp-vue-boilerplate/storybook/?path=/story/atoms-headlines--overview)

***

## Quickstart

### IDE

It is recommended to use VSCode Editor. <https://code.visualstudio.com/>

Open the workspace by `config.code-workspace` and the recommended extensions, to use the boilerplate, can be installed by a notification.

### OSX - install

- install nvm <https://medium.com/@isaacjoe/best-way-to-install-and-use-nvm-on-mac-e3a3f6bc494d>

```bash
nvm install 10.6.0

git clone https://github.com/GrabarzUndPartner/gp-vue-boilerplate.git
cd gp-vue-boilerplate

npm i snyk -g
snyk auth

npm i
```

### Windows - install

- install nvm <https://github.com/coreybutler/nvm/releases>
- install git client <https://git-scm.com/download/win>
- install Visual C++ 2015 Build Tools <https://go.microsoft.com/fwlink/?LinkId=615460>
- install Rust <https://static.rust-lang.org/dist/rust-beta-x86_64-pc-windows-gnu.msi>
- restart Windows
- run command prompt as administrator

```bash
git clone -b msvc --recursive https://github.com/kornelski/pngquant.git
cd pngquant

cargo clean
set PNG_STATIC=1
cargo build --release

cd ..
git clone https://github.com/GrabarzUndPartner/gp-vue-boilerplate.git
cd gp-vue-boilerplate

nvm on
nvm install 10.6.0 64
nvm use 10.6.0
npm i snyk -g
# re-run command prompt as administrator
snyk auth
npm i
```

### Run boilerplate in dev-mode

```bash
npm run dev
```

### Run boilerplate production-build

```bash
npm run static
```

### Run boilerplate production-build + server

```bash
npm run production
```

### Open Page

```bash
http://localhost:8050
```

***

## Cypress

### Run local test instance

```bash
npm run cypress:open
```

## Storybook

### Run storybook in dev-mode

```bash
npm run storybook:dev
```

### Run storybook production-build

```bash
npm run storybook:prod
```

***

## Features

- browserslist support
  - [x] > 1% in DE
  - [x] Firefox ESR
  - [x] IE 11
- images
  - jpg
    - [x] optimization
  - png
    - [x] optimization
  - webp
    - [x] generator (created by original source -> jpg, png)
    - [x] optimization
  - svg  
    - [x] sprite generator
    - [x] optimization
- breakpoint
  - [x] global definition
  - [x] accessible in js
  - [x] accessible in postcss
- i18n
  - [x] global language files
  - [x] page files by language
  - [x] vue block support
    - [x] exclusive language reference loader ".lang"
- PWA
  - [x] module embedded - configurable by nuxt.config.js
- SEO
  - [x] sitemap generator
  - [x] robots.txt generator
- babel
  - [x] embedded browserslist support
- postcss
  - [x] embedded browserslist support
  - plugins
    - [x] postcss-preset-env
    - [x] postcss-normalize
    - [x] postcss-url
    - [x] postcss-object-fit-images
    - [x] @fullhuman/postcss-purgecss
    - [x] postcss-momentum-scrolling
    - [x] postcss-pseudo-content-insert
    - [x] rucksack-css
- licenses
  - [x] license extraction from build
- linter
  - [x] eslint
  - [x] stylelint
  - [x] branchlint
  - [x] commitlint
- versioning  
  - [x] semantic release
    - [x] git release version
    - [x] npm release version
  - [x] changelog generator
- continous integration
  - [x] travis
  - [ ] appveyor
- vulnerability scanner  
  - [x] snyk
  - [x] greenkeeper
- IDE
  - vscode workspace configuration
    - [x] recommended project extensions
    - [x] custom project settings
    - [x] disabled prettier config
    - [x] file association map
- documentation
  - [ ] storybook
- testing
  - [ ] cypress

***

## ToDo

- Codesandbox - fix initialization
- packtracker - configuration and bug fixing

***

## Checklist

All processes are working automatically. Nevertheless you should check before going live if all processes work correctly and the output is correct.

- project start
  - [ ] browser matrix (IE11 support?)
  - [ ] multilanguage (i18n)
  - [ ] tracking concept
  - [ ] webfonts
- prepare launch
  - NO launch on friday
  - deployment
    - [ ] setup pipeline
    - [ ] embed SonarQube
    - [ ] test pipeline
  - url/domain
    - [ ] configured
    - [ ] current ssl certificate
- before launch
  - Build
    - [ ] deployment pipeline
    - [ ] no build errors
  - Content
    - [ ] favicon
    - [ ] multilanguage
    - [ ] complete
    - [ ] no lorem ipsum
    - [ ] disclaimer
    - [ ] terms of use
    - [ ] cookie notification
    - [ ] contact
    - [ ] 404-page
    - [ ] 500-page
  - Form validation
    - [ ] prevent XSS (escape strings)
    - [ ] input validation is configured
  - Server
    - [ ] language detection
    - [ ] encrypted keys & secrets as environment variables
    - [ ] prevent XSS by user inputs (escape strings)
  - Device testing
    - [ ] based on browser matrix
    - [ ] on actual devices, not simulations
    - [ ] in incognito mode
    - [ ] activated adblocker
  - SEO
    - [ ] page title
    - [ ] meta tags
    - [ ] social meta tags
    - [ ] added alt-texts to all images and links
    - [ ] sitemap.xml
    - [ ] robots.txt
    - [ ] disabled noindex, nofollow on normal pages
    - [ ] enabled noindex, nofollow on auth area pages
  - Lighthouse
    - [ ] a11y
    - [ ] image optimization
    - [ ] svg optimization
    - [ ] PWA support
    - [ ] cache durations on server
    - [ ] time to first byte (TTFB)
    - [ ] first meaningful paint (FMP)
  - Security
    - [ ] npm audit
    - [ ] no keys & secrets embedded in frontend code
    - [ ] different keys & secrets for test/prod environment
    - [ ] valid ssl certificate
  - Performance
    - [ ] google chrome performance measurement (60fps)
    - [ ] check js size
    - [ ] check css size
    - [ ] removed unused sources  
  - Tracking
    - [ ] embedded
    - [ ] different project ids for test/prod environment
  - Licenses
    - [ ] check licences of used packages
    - [ ] send license list to the security department of your client (optional)
  - Documentation
    - [ ] technical concept
    - [ ] living styleguide (storybook)
    - [ ] git changelog with reference to ticket numbers (if applicable)
    - [ ] deployment pipeline
- launch
  - GOOD LUCK.
