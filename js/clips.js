$.get('https://www.reddit.com/r/LivestreamFail/search/.json?sort=top&q=flair%3Atwitch%3A%2BForsen&restrict_sr=on&t=month', function(response) {
    let clips = response.data.children;
    let topClips = clips.filter(function(clip) {
        return clip.data.url.includes('https://clips.twitch.tv/') && !clip.data.url.includes('/embed');
    }).slice(0, 8);
    displayClips(topClips);
});

function displayClips(clips) {
    let $clipsDiv = $('#clips');
    clips.forEach(function(clip) {
        let $clipDiv = $('<div>').addClass('clip');
        let $titleLink = $('<a>').attr('href', 'https://www.reddit.com' + clip.data.permalink).attr('target', '_blank').text(clip.data.title);

        let thumbnailUrl = clip.data.thumbnail;
        // this will also cover deleted clips
        if (thumbnailUrl === 'nsfw') {
            thumbnailUrl = '../images/placeholder.png';
        }
        let $thumbnailLink = $('<a>').addClass('clip-thumbnail').attr('href', '#').append($('<img>').attr('src', thumbnailUrl).attr('alt', clip.data.title)).data('clip', clip);
        $clipDiv.append($thumbnailLink).append($titleLink);
        $clipsDiv.append($clipDiv);
    });

    $('.clip-thumbnail').click(function(event) {
        event.preventDefault();
        let $thumbnailLink = $(this);
        let clip = $thumbnailLink.data('clip');
        let slug = clip.data.url.split('/').pop();
        let iframeWidth = $(window).width() * 0.6;
        let iframeHeight = Math.floor(iframeWidth * 9 / 16);
        let $overlay = $('<div>').addClass('overlay');
        let $iframe = $('<iframe>').attr('src', 'https://clips.twitch.tv/embed?clip=' + slug + '&parent=forsen.site').attr('height', iframeHeight + 'px').attr('width', iframeWidth + 'px').attr('allowfullscreen', true);
        let $closeButton = $('<div>').click(function(event) {
            event.preventDefault();
            $overlay.remove();
        });

        $overlay.click(function(event) {
            if (event.target === this || event.target === $closeButton[0] || event.target === $iframe[0]) {
                $overlay.remove();
            }
        });

        $overlay.append($iframe).append($closeButton);
        $('body').append($overlay);
    });
}