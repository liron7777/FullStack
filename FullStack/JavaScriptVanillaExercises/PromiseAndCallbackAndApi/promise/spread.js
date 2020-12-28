const
    url1 = 'https://itunes.apple.com/search?term=queen',
    url2 = 'https://itunes.apple.com/search?term=pink+floyd',
    url3 = 'https://itunes.apple.com/search?term=led+zeppelin';

async function spread(urls_f) {
    const urls = urls_f
        .map(async(url_data) => await fetch(url_data))
        .map(async(url_after_fetch_data) => (await url_after_fetch_data).json());
    console.log(urls)
}

(spread([url1, url2, url3]));