export async function getArticles() {
    const res = await fetch('http://localhost:4000/articles', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=utf-8'
        }
    });
    
    const ok = await res.ok;
    const json = await res.json();
    
    if (ok && checkData(json)) return json;
    return new Error('Error when getting articles')
}

export async function updateArticle(data, id) {
    const res = await fetch('http://localhost:4000/articles/' + id, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(data)
    })
    
    const ok = await res.ok;
    const json = await res.json();
    
    if (ok && checkData(json)) return data;
    return new Error('Error when updating article')
}

export async function deleteArticle(id) {
    const res = await fetch('http://localhost:4000/articles/' + id, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json; charset=utf-8'
        }
    });
    
    const ok = await res.ok;
    const json = await res.json();
    
    if (ok && checkData(json)) return json;
    return new Error('Error when deleting article')
}

// Method to check if data is valid
let checkData = data => {
    if (!data) return false;
    if (data.message && data.message === 'pool destroyed') return false;
    return true;
}