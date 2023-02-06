const apiKey = '55182d8f78c6485ba60e020c83de8fef';
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

export async function getNews(){
   const res = await fetch(url)
   const data = await res.json();

   return data.articles;
}