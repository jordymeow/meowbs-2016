## Synopsis

Bootstrap for single-page applications created and based on the tools and libraries available in 2016. It is meant to be as light as possible so that it can be modified and enhanced easily in different ways. Here is the list of the components it is using.

* NPM, JSPM
* Angular 2, TypeScript
* SASS

## Why

It is not so easy to set-up such an environment at first so I wanted to make a public attempt at it here. I would like to improve it over time while keeping it clean and simple.

## Installation

* `npm install`
* `jspm install`

## Installation (Bonus)

* 'atom-typescript' module for Atom

## Issues & to do

* Using Atom: "Cannot find module jQuery". It's because atom-typescript looks into package.json (node_modules) while modules can be also in config.js (jspm_packages). More here: https://github.com/TypeStrong/atom-typescript/issues/472 and here: https://github.com/Microsoft/TypeScript/issues/5039.
* Should find a way to create a bundle with one .js and one .css.
* Would me maybe better to use @empty for source-map-support? (http://stackoverflow.com/questions/40545542/why-is-systemjs-is-looking-for-source-map-support-js)

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
