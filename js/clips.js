$.get('https://www.reddit.com/r/LivestreamFail/search/.json?sort=top&q=flair%3Atwitch%3A%2BForsen&restrict_sr=on&t=month', function(response) {
  var clips = response.data.children;
  var topClips = clips.filter(function(clip) {
    return clip.data.url.includes('https://clips.twitch.tv/') && !clip.data.url.includes('/embed');
  }).slice(0, 8);
  displayClips(topClips);
});

function displayClips(clips) {
  var $clipsDiv = $('#clips');
  clips.forEach(function(clip) {
    var $clipDiv = $('<div>').addClass('clip');
    var $titleLink = $('<a>').attr('href', clip.data.url).attr('target', '_blank').text(clip.data.title);

    var thumbnailUrl = clip.data.thumbnail;
    if (thumbnailUrl === 'nsfw') {
        thumbnailUrl = '../images/placeholder.png';
    }
    var $thumbnail = $('<img>').attr('src', thumbnailUrl).attr('alt', clip.data.title);
    $clipDiv.append($thumbnail).append($titleLink);
    $clipsDiv.append($clipDiv);
  });
}

