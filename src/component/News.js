
// const getNews = async () => {
//
//     // const city = event.target.elements.city.value
//     // const country = event.target.elements.country.value
//
//
//
//
// };
const apiKey = "9e76d4b26bee404bb810dc9fa0a15384";
let country = "country=us";
const url = `https://newsapi.org/v2/top-headlines?${country}&apiKey=${apiKey}`;
// const api_call = await fetch(url);

// const data = await api_call.json().articles;


// console.log('data', data)

export async function getNews() {
    let result = await fetch(url).then(response => response.json());
    return result.articles;
}