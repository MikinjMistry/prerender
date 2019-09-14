#!/usr/bin/env node
var prerender = require('./lib');

var server
if (process.platform !== 'win32') {
    server = prerender({
        chromeLocation: '/usr/bin/google-chrome-stable',
        chromeFlags: ['--headless','--disable-gpu', '--remote-debugging-port=9222', '--hide-scrollbars']
    });
} else {
    server = prerender();
}

server.use(prerender.sendPrerenderHeader());
// server.use(prerender.blockResources());
server.use(prerender.removeScriptTags());
server.use(prerender.httpHeaders());

server.start();
