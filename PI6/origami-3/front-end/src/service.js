const baseUrl = 'http://localhost:8080/api'
export async function getOrigami(){
    const res = await fetch(`${baseUrl}/origami`)
    const data=  await res.json();
    return data;
}

export const login = async(username, password)=>{
    const res = await fetch(`${baseUrl}/user/login`, 
    {method: 'POST', 
    body: JSON.stringify({username, password}), 
    headers: {'Content-Type': 'application/json'}   
    })
    if(res.ok){
        const result = await res.json();
        console.log(result);
        localStorage.setItem('userData', JSON.stringify({token: result.token, id: result._id, username: result.username}))
        return true;
    }else{
        return false;
    }
}

export const register = async(username, password) =>{
    const res = await fetch(`${baseUrl}/user/register`, 
    {method: 'POST', 
    body: JSON.stringify({username, password}), 
    headers: {'Content-Type': 'application/json'}   
    })

    const result = await res.json();
    return result;
}

export const logout = async()=>{

    const {token} = JSON.parse(localStorage.getItem('userData'))

    const headers = {
        'Content-Type':'application/json', 
        'Authorization': `Bearer ${token}`
    }

    const res = await fetch(`${baseUrl}/user/logout`, {method:'Post', body:'', headers})
    const result = await res.json();
    localStorage.removeItem('userData');
    return result;
}

export const addPost = async(description)=>{
    const {id, token} = JSON.parse(localStorage.getItem('userData'))
    const headers = {
        'Content-Type':'application/json', 
        Authorization: `Bearer ${token}`
    }
    const body = JSON.stringify({description, auther: id})
    const res= await fetch(`${baseUrl}/origami`, {method:'Post', body, headers})
    const result = await res.json();
    return result;
}