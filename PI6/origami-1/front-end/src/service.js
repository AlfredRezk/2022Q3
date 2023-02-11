const baseUrl = 'http://localhost:8080/api'
export async function getOrigami(){

    const res = await fetch(`${baseUrl}/origami`)
    const data=  await res.json();
    return data;
}