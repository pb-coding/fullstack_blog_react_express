export async function fetchFromAPI(setStateCallback, url, stateVariable) {
    const response = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    const data = await response.json()
    if (data != null) setStateCallback({ [stateVariable]: data })
    return data
};

export async function deleteRequest(url) {
    if (window.confirm("Do you want to delete? ")) {
        const response = await fetch(url, { method: 'DELETE' })
        return response
    }
}

export async function editRequest(url, data) {
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(data)
    })
    return response
}

export async function insertRequest(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    })
    return response
}