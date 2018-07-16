[![Build Status](https://travis-ci.org/dakom/hello-purescript-worker.svg?branch=master)](https://travis-ci.org/dakom/hello-purescript-worker)

# CURRENTLY BROKEN

## [LIVE DEMO](https://dakom.github.io/hello-purescript-worker)

Boilerplate for using Purescript within a web-worker project, i.e. something that's driven like a game loop 

* The outer shell (typescript) is only used for IO (including worker message passing)
* Messages are based on frame-ticks and gated accordingly
* The core logic is in Purescript

## Setup
* `npm install`
* `psc-package install`

## Development
* `pscid`
* `npm run dev:auto-reload`

Note: `pscid` or some way to start purs-ide must be running.. at the moment the webpack plugin doesn't hook into it properly otherwise

## Build
* `npm run build`
