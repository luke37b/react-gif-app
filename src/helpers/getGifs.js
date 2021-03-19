export const getGifs = async (category) => {
    const q = encodeURI(category);
    const api_key = '1sW8wdvpUULnz7GL8COi032zeh8qfVQo';
    const limit = 4;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${q}&limit=${limit}`
    const res = await fetch(url);
    const { data } = await res.json();
    const gifList = data.map(({ id, title, images: { downsized_medium: { url } } }) => ({ id, title, url }));

    return gifList;
}