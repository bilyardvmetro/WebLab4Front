export function setUsername(username='') {
    const new_username = localStorage.getItem('username')
    console.log(new_username)
    if (new_username) username = new_username
    return username
}
