[![Build Status](https://travis-ci.org/dakom/hello-purescript-worker.svg?branch=master)](https://travis-ci.org/dakom/hello-purescript-worker)

# CURRENTLY BROKEN

## [LIVE DEMO](https://dakom.github.io/hello-purescript-worker)

Boilerplate for using Purescript within a web-worker project, i.e. something that's driven like a game loop 

* The outer shell (typescript) is only used for IO (including worker message passing)
* Messages are based on frame-ticks and gated accordingly
* The core logic is in Purescript

## Development tips
* `npm install`
* `psc-package install`
* Local Dev Server: `npm run dev:auto-reload`
* Production Build: `npm run build`

## Dependencies

* [Fluture](https://github.com/fluture-js/Fluture) on the JS side.

The reason for this is that a larger project would likely want to setup and load various things on the IO side, and Fluture is much nicer than Promises - especially when it comes to error handling.
