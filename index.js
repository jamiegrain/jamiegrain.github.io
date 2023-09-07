const endpoint = "https://api.github.com/users/jamiegrain/repos";

let repoFetch = async () => {
    fetch(endpoint)
        .then(resp => resp.json())
        .then(json => console.log(json))
    }

repoFetch();