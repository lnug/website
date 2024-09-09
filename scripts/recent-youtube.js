/**
 * Fetches the most recent videos from a YouTube channel - use this to add to the video talks section
 */


const { stdout } = require('process');

const API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_ID = 'UC-qjgj2TnRoI1ZmFFaN3FeQ'; // LNUG channel ID
const MAX_RESULTS = 12; // adjust this to get more or less videos

function fetchRecentVideos() {
  const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=id,snippet&order=date&maxResults=${MAX_RESULTS}`;
  fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // console.log(JSON.stringify(data, null, 2));
    const ids = data.items.map(item => item.id.videoId);
    const videoIds = ids.join(',');
    const videosUrl = `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&id=${videoIds}&part=snippet,contentDetails,statistics`;
    return fetch(videosUrl);
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {

    const videos = data.items.map(item => ({
      title: item.snippet.title,
      description: item.snippet.description,
      url: `https://www.youtube.com/watch?v=${item.id}`,
      videoId: item.id,
      thumbnailUrl: item.snippet.thumbnails.high.url,
      type: 'YouTube Video',
      date: item.snippet.publishedAt
    }));

    // fs.writeFileSync('videoTalks.json', JSON.stringify(videos, null, 2));
    
    stdout.write(JSON.stringify(videos, null, 2)); // copy and paste the output to the videoTalks.json file
    //check the output - sometimes the API returns with missing data

  })
  .catch (error => {
    console.error('Error fetching videos:', error);

  })
}

fetchRecentVideos();