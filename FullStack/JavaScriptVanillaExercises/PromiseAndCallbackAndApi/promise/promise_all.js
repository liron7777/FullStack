const
    url1 = 'https://itunes.apple.com/search?term=queen',
    url2 = 'https://itunes.apple.com/search?term=pink+floyd',
    url3 = 'https://itunes.apple.com/search?term=led+zeppelin';

function get_all(url1_f, url2_f, url3_f) {
    return Promise.all([
        fetch(url1_f),
        fetch(url2_f),
        fetch(url3_f)
    ]);
}

get_all(url1, url2, url3)
    .then((urls) => {
        urls.map((url) => {
            return url.json()
                .then((url_j) => {
                    ((url_j.results).map((song_name) => {
                        console.log(song_name.trackName);
                    }))
                })
        })
    });