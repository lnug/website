lnug.github.io
==============

The London Node User Group Website


Runs on github pages so there is no serverside code.





#Update


This site can be updated by running

```
  npm run build
```

Check out the package.json scripts object to see what that script is doing.

Basically it pulls in the speaker from the github issues and updates the json files.

It then generates the html for the index and archive.html files.




How to run
----------
You can serve this with *any* static web server, but we'll use [mongoose](https://code.google.com/p/mongoose/).

1. `git clone git@github.com:lnug/lnug.github.io.git`
2. `cd lnug.github.io`
3. `brew install mongoose`
4. `mongoose .`
5. go to http://localhost:8080




# Install


To run the update you need permission to execute the bin directory. 

chmod 775 ./bin/*
