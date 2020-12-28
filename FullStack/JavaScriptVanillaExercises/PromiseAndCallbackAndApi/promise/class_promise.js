const url_song = 'https://itunes.apple.com/search?term=queen';

function get(url_song_f) {
    return new Promise((resolve, reject) => {
        fetch(url_song_f)
            .then((data_j) => data_j.json())
            .then(
                (data_c) => {
                    let test = data_c.results.map((data_r) => (data_r.trackName));
                    resolve(test);
                }
            )
    })
}
get(url_song)
    .then(data_final => {
        console.log(data_final)
    });


    