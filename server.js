#!/usr/bin/env node
var prerender = require('./lib');

var server
if (process.platform !== 'win32') {
    server = prerender({
        chromeLocation: '/home/ubuntu/beta-webapp/node_modules/puppeteer/.local-chromium/linux-656675/chrome-linux/chrome'
    });
} else {
    server = prerender();
}

server.use(prerender.sendPrerenderHeader());
// server.use(prerender.blockResources());
server.use(prerender.removeScriptTags());
server.use(prerender.httpHeaders());

server.start();
