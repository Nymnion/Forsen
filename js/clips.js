fetch('https://www.reddit.com/r/LivestreamFail/search.json?sort=top&q=flair%3Atwitch%3A%2BForsen&restrict_sr=on&t=month')
  .catch(err => {
    console.error(err);
    document.querySelector('#clips').innerText = "Could not fetch clips :/";
  })
  .then(res => res.json())
  .then(res => {
    const clips = res.data.children;
    const topClips = clips
      .filter(function (clip) {
        return clip.data.url.includes('https://clips.twitch.tv/') && !clip.data.url.includes('/embed');
      })
      .slice(0, 8);
    displayClips(topClips);
  });

function thumbnailClick(event, clip) {
  event.preventDefault();
  const slug = clip.data.url.split('/').pop();

  const iframeWidth = window.innerWidth * 0.6;
  const iframeHeight = Math.floor((iframeWidth * 9) / 16);

  const overlay = document.createElement('div');
  overlay.className = 'overlay';

  const iframe = document.createElement('iframe');
  iframe.setAttribute('src', 'https://clips.twitch.tv/embed?clip=' + slug + '&parent=' + location.hostname);
  iframe.setAttribute('height', iframeHeight + 'px');
  iframe.setAttribute('width', iframeWidth + 'px');
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('allowfullscreen', true);

  overlay.addEventListener('click', () => overlay.remove());

  overlay.append(iframe);
  document.body.append(overlay);
}

function displayClips(clips) {
  const clipsDiv = document.querySelector('#clips');
  clips.forEach(function (clip) {
    const clipDiv = document.createElement('div');
    clipDiv.className = 'clip';

    const titleLink = document.createElement('a');
    titleLink.setAttribute('href', 'https://www.reddit.com' + clip.data.permalink);
    titleLink.setAttribute('target', '_blank');
    titleLink.innerText = clip.data.title;

    let thumbnailUrl = clip.data.thumbnail;
    // this will also cover deleted clips
    if (thumbnailUrl === 'nsfw') {
      thumbnailUrl = '/images/placeholder.png';
    }

    const thumbnailImg = document.createElement('img');
    thumbnailImg.setAttribute('src', thumbnailUrl);
    thumbnailImg.setAttribute('alt', clip.data.title);

    const thumbnailLink = document.createElement('a');
    thumbnailLink.className = 'clip-thumbnail';
    thumbnailLink.setAttribute('href', '#');
    thumbnailLink.append(thumbnailImg);
    thumbnailLink.addEventListener('click', (e) => thumbnailClick(e, clip));

    clipDiv.append(thumbnailLink);
    clipDiv.append(titleLink);
    clipsDiv.append(clipDiv);
  });
}
