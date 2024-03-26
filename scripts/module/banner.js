const API_KEY = '86783762237ff3e97be67f3473685c59';
const BASE_PATH = 'https://api.themoviedb.org/3';

const getTrailerVideo = async (type, id) => {
    const response = await fetch(`${BASE_PATH} / ${type} / ${id} / videos ? api_key = ${API_KEY}`);
    const data = await response.json();

    return data.results[0].key;
};

document.getElementById('playButton').addEventListener('click', async () => {
    const trailerKey = await getTrailerVideo('movie', '131701');
    const trailerUrl = `https://www.youtube.com/embed/${trailerKey}`;

    const modal = document.getElementById('modal');

    modal.innerHTML = <iframe width="560" height="315" src="${trailerUrl}" frameborder="0" allowfullscreen></iframe>;

    modal.style.display = 'block';
});

document.getElementById('closeButton').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});
