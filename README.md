## Synopsis

MeowBS 2016 is a bootstrap for a single-page application created and based on the tools and libraries available in 2016, which are: JSPM, Angular 2, TypeScript, jQuery, Less and Atom as the code editor. This bootstrap is meant to be as light as possible so that it can be modified and enhanced in very different ways.

## Why

It is not easy to set-up this environment at first so I wanted to make a public attempt here, in order to get help, to make it better, to resolve issues faster and eventually, to propose a solution that simply works.

## Installation

* `npm install`
* `jspm init`
* `jspm install`
* Install the module 'atom-typescript' in Atom

## Usage

* The JS source code of the app is located in src/ in TypeScript files. Those files are automatically compiled to JS by Atom (the typescript).

## CURRENT ISSUES

* In Atom, "Cannot find module jQuery".

## TODO

* Doesn't work with Angular 2 yet.
* LESS doesn't work yet. plugin-less (https://github.com/systemjs/plugin-less) seems like an interesting option, but is it really?
* Would be nice to make it work without Atom.
* So many things in map in the config.js, possible to simplify it?
