export async function fetchData() {
    let url="https://api.themoviedb.org/3/movie/now_playing?api_key=9fd87a5b6d4b869c248693c5a8126ae3&language=en-US&page=1";

    let response = await fetch(url);
    let users = await response.json();
    return users;
}

export async function fetchPopular() {
    let url="https://api.themoviedb.org/3/movie/popular?api_key=9fd87a5b6d4b869c248693c5a8126ae3&language=en-US&page=1";

    let response = await fetch(url);
    let users = await response.json();
    return users;
}