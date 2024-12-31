export const getData = async (endpoint) =>{
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
    const url = `${baseURL}${endpoint}`
    console.log(url, "full url")
    const res = await fetch(url);
    const data = await res.json();
    return data;
}