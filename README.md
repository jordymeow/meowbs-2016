## Synopsis

Bootstrap for single-page applications created and based on the tools and libraries available in 2016. It is meant to be as light as possible so that it can be modified and enhanced easily in different ways. Here is the list of the components it is using.

* NPM, JSPM
* Angular 2, TypeScript
* Less.js

## Why

It is not so easy to set-up such an environment at first so I wanted to make a public attempt at it here. I would like to improve it over time while keeping it clean and simple.

## Installation

* `npm install`
* `jspm install`
* Install the module 'atom-typescript' in Atom

## Usage

* The JS source code of the app is located in src/ (TypeScript files). Those files are automatically compiled to JS by Atom (atom-typescript) and added to app/.

## Issues

* Using Atom: "Cannot find module jQuery". It's because atom-typescript looks into package.json (node_modules) while modules can be also in config.js (jspm_packages). More here: https://github.com/TypeStrong/atom-typescript/issues/472 and here: https://github.com/Microsoft/TypeScript/issues/5039.

## Todo

* LESS not set up yet. The plugin-less (https://github.com/systemjs/plugin-less) seems like an interesting option, but is it really?
* Would be nice to make it work without Atom.

## Questions

* So many things in map in the config.js, possible to simplify it?

## Angular

The current version used by this project is the one known as @angular in the npm registry. It was added this way:

* jspm install angular-core=npm:@angular/core
* jspm install angular-compiler=npm:@angular/compiler
* jspm install angular-common=npm:@angular/common
* jspm install angular-platform-browser=npm:@angular/platform-browser
* jspm install angular-platform-browser-dynamic=npm:@angular/platform-browser-dynamic
* jspm install angular-forms=npm:@angular/forms
* jspm install http=npm:@angular/http
* jspm install router=npm:@angular/router
