/*!* ------------------------------------ Example 1 ------------------------------------------------- *!*/
const url_song = 'https://itunes.apple.com/search?term=queen';

async function get_await(url_f) {
    const song = await (await fetch(url_f)).json();
    console.log(song)
}

get_await(url_song);


/*!* ------------------------------------ Example 2 ------------------------------------------------- *!*/
const
    url1 = 'https://itunes.apple.com/search?term=queen',
    url2 = 'https://itunes.apple.com/search?term=pink+floyd',
    url3 = 'https://itunes.apple.com/search?term=led+zeppelin';

async function get_all(url1_f, url2_f, url3_f) {
    const urls = await Promise.all([
        fetch(url1_f),
        fetch(url2_f),
        fetch(url3_f)
    ]);
    const urls_json = await Promise.all(urls.map((data_json) => {
        return data_json.json()
    }));
    const song_names = urls_json.map((name) => {
        return trackName = (name.results).map((data_trackName) => {
            return data_trackName.trackName
        });
    });
    console.log(song_names)
}
get_all(url1, url2, url3);