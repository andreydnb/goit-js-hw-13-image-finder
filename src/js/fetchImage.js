const BASE_URL = 'https://pixabay.com/api/';
const KEY = '24028545-60775b6e120b5f04cc28a4b4f';

function fetchImage(ImageName, PageNumber) {
    return fetch(`${BASE_URL}?image_type=photo&orientation=horizontal&q=${ImageName}&page=${PageNumber}&per_page=12&key=${KEY}`)
        .then(response => response.json(),);
}

export default fetchImage

