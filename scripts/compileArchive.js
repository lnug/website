const fs = require('fs');
const archive = require('../src/_data/archive.json');
const youTubeVideos = [
    require('../src/_data/youtube1.json'),
    require('../src/_data/youtube2.json'),
    require('../src/_data/youtube3.json'),
    require('../src/_data/youtube4.json'),
]
const vimeoVideos = require('../src/_data/vimeo-videos.json');

/**
 *
 *
 */
const getNthWeekdayOfMonth = (weekday=3) => (weeknumber=4) => (datestring) =>{
    const startDate = new Date(datestring);
    const firstDayOfWeek = startDate.getDay();
    const diff = weekday - firstDayOfWeek;
    const dateOfNthWeekday = new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        (diff+7)%7 + 7 * (weeknumber-1) + 1
    );
    return dateOfNthWeekday;
}

const get4thWednesday = getNthWeekdayOfMonth(3)(4);

const compileEvents = () => archive.map(a => {
    return {
        speakers: a.speakers,
        videoPlayist: a['playlist-url'] || null,
        date: get4thWednesday(a.date)
    }
})


const compileYouTubeVideos = () => {
    const compiledVideos = youTubeVideos.map(ytv => ytv.map(v => ({
        title: v.snippet.title,
        description: v.snippet.description, 
        playlistId: v.snippet.playlistId,
        thumbnailUrl: v.snippet.thumbnails.medium.url,
        videoId: v.snippet.resourceId.videoId,
        url: `https://www.youtube.com/watch?v=${v.snippet.resourceId.videoId}`,
        type: 'youtube',
        date: v.snippet.publishedAt
    })))
    return compiledVideos.flat()
}


const compileVimeoVideos = () => {
    const compiledVideos = vimeoVideos.map(v =>({
        title: v.name,
        description: v.description,
        thumbnailUrl: v.pictures.sizes[2].link,
        url: v.link,
        type: 'vimeo',
        date: v.created_time

    }));
    return compiledVideos;

}

const compileAndcombineVideos = () => {
    return [...compileVimeoVideos(), ...compileYouTubeVideos()].sort((a,b) => new Date(a.date)>new Date(b.date) ? -1 : 1)

}


//console.log(compileYouTubeVideos());

// console.log(compileVimeoVideos());

// fs.writeFileSync('../src/_data/compiledArchive.json', JSON.stringify(compiled, null, 2), 'utf8');

 fs.writeFileSync('../src/_data/compiledVideos2.json', JSON.stringify(compileYouTubeVideos(), null, 2), 'utf8');
// console.log('compiled');

