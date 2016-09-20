
The London Node User Group Website

http://lnug.org

![Supporting 24PullRequests](https://img.shields.io/badge/Supporting-24PullRequests-red.svg)

# Install

How to run
----------
You can serve this with *any* static web server, but we'll use [mongoose](https://code.google.com/p/mongoose/).

1. `git clone git@github.com:lnug/lnug.github.io.git`
2. `cd lnug.github.io`
3. `npm install`
4. `npm run build`
3. `npm start`
4. go to http://localhost:5001


# Contributing

Please note the HTML files in the root of this repository are generated.

See ./spec.js to see how the pages are put together.

If you want to change the templates look in the pages folder.

Please ensure that any changes you make persist after you run the update command documented below.


# Update

This site can be updated by running:

```
  npm run build
```

build pulls in the speakers from the github issues and updates the json files.

It then generates the html for the site.

Once you have built the site confirm it works locally before making a pull request.

The site will be deployed when merged into master.

Check the package.json file for a full list of commands you can run.


#Caching

The introduction of service workers has changed the way we update the browser cache.

If you are just updating the speakers or venue the update should appear straight away as it uses a network first cache.

All other static resources will require a bump in the version number in client/service-worker.js

There are plans to automate this also.


##Ways to update
 * Bump version number in ./client/service-worker.js
 *

###For the image-gallery:
Just add the URLS to the images inside file `api\gallery.json`.
Then you run `npm run photos`, and this will happen:
- for each entry, it will read the field "source" with image URL
- resize the image and create the thumbnail
- update the field "thumb" in file gallery.json with URL for the newly created thumb image

Then `npm run build` to build the markup with the thumbnails

To run the update you need permission to execute the bin directory.

  chmod 775 ./bin/*

---
