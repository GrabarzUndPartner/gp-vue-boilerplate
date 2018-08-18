[![GitHub package version](https://img.shields.io/github/package-json/v/GrabarzUndPartner/gp-vue-boilerplate.svg)](https://github.com/GrabarzUndPartner/gp-vue-boilerplate)
[![license](https://img.shields.io/github/license/GrabarzUndPartner/gp-vue-boilerplate.svg)](https://github.com/GrabarzUndPartner/gp-vue-boilerplate)
[![Github All Releases](https://img.shields.io/github/downloads/GrabarzUndPartner/gp-vue-boilerplate/total.svg)](https://github.com/GrabarzUndPartner/gp-vue-boilerplate)

[![Sauce Test Status](https://saucelabs.com/buildstatus/gerbeth)](https://saucelabs.com/u/gerbeth)
[![OSX/Linux Build Status](https://travis-ci.org/GrabarzUndPartner/gp-vue-boilerplate.svg?branch=master)](https://travis-ci.org/GrabarzUndPartner/gp-vue-boilerplate)
[![Windows Build status](https://ci.appveyor.com/api/projects/status/jdxatqwkaoqbfda1?svg=true)](https://ci.appveyor.com/project/StephanGerbeth/gp-vue-boilerplate)
[![NSP Status](https://nodesecurity.io/orgs/grabarz-and-partner/projects/f3fb80ee-7ded-480a-82af-5f3fcb5dda82/badge)](https://nodesecurity.io/orgs/grabarz-and-partner/projects/f3fb80ee-7ded-480a-82af-5f3fcb5dda82)
[![dependencies Status](https://david-dm.org/GrabarzUndPartner/gp-vue-boilerplate/status.svg)](https://david-dm.org/GrabarzUndPartner/gp-vue-boilerplate)
[![devDependencies Status](https://david-dm.org/GrabarzUndPartner/gp-vue-boilerplate/dev-status.svg)](https://david-dm.org/GrabarzUndPartner/gp-vue-boilerplate?type=dev)

[![start with why](https://img.shields.io/badge/start%20with-why%3F-brightgreen.svg?style=flat)](http://www.ted.com/talks/simon_sinek_how_great_leaders_inspire_action)
[![JavaScript Style Guide: Good Parts](https://img.shields.io/badge/code%20style-goodparts-brightgreen.svg?style=flat)](https://github.com/dwyl/goodparts "JavaScript The Good Parts")

[![Sauce Test Status](https://saucelabs.com/browser-matrix/gerbeth.svg)](https://saucelabs.com/u/gerbeth) [![Greenkeeper badge](https://badges.greenkeeper.io/GrabarzUndPartner/gp-vue-boilerplate.svg)](https://greenkeeper.io/)

# General usage

# Coding Rules

# Visual regression tests

# CheatSheet - Commands

## Generate Travis-CI Secure Tokens

### Github Token

Generate personal access token at github: [https://github.com/settings/tokens](https://github.com/settings/tokens)

Use command to encrypt your personal access token for travis-ci

```bash
travis encrypt GH_TOKEN=<Your TOKEN> --add
```

### Saucelab Token

Generate personal access token at saucelabs: https://saucelabs.com/beta/user-settings
Use command to encrypt your personal access token for travis-ci

```bash
travis encrypt SAUCE_ACCESS_KEY=<Your TOKEN> --add
```

## Local Selenium Test

To run local selenium tests you need a java (version >= 8)
If problems occur, please install the selenium standalone server manually in global scope.

```bash
npm i selenium-standalone -g
```

# IDE infos

## Webstorm

### Plugins

- Postcss support

# ToDos

- webpackmonitor (https://github.com/nuxt-community/webpackmonitor-module)
