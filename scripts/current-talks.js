const yaml = require('js-yaml');

// Make the GET request to the GitHub API
fetch('https://api.github.com/repos/lnug/speakers/issues?labels=Next%20Meetup!&state=open')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Process the issues data
    
    const talks = data.map(issue => {
        return {
          title: issue.title,
          description: issue.body.split("Speaker:")[0].trim(),
          speaker: [{
            name: '',
            twitter: '', // Remove @ from Twitter handle
            github: issue.user.login,
            avatar: issue.user.avatar_url
          }]
        };
      });

      console.log(yaml.dump(talks));
  })
  .catch(error => {
    console.error('Fetching error:', error);
  });



  