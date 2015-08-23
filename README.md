lnug.org


The London Node User Group Website


# Install



How to run
----------
You can serve this with *any* static web server, but we'll use [mongoose](https://code.google.com/p/mongoose/).

1. `git clone git@github.com:lnug/lnug.github.io.git`
2. `cd lnug.github.io`
3. `brew install mongoose`
4. `npm start`
5. go to http://localhost:8080


#Update


This site can be updated by running

```
  npm run build
```

build pulls in the speakers from the github issues and updates the json files.

It then generates the html for the index and archive.html files.

Once you have built the site confirm it works locally before pushing to master as that will deploy the site.

Check the package.json file for a full list of commands you can run.


To run the update you need permission to execute the bin directory.

  chmod 775 ./bin/*
