export async function getCategories() {
    const res = await fetch('http://localhost:4000/categories', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=utf-8'
        }
    });
    
    const ok = await res.ok;
    const json = await res.json();
    
    if (ok && checkData(json)) return json;
    return new Error('Error when getting categories')
}

// Method to check if data is valid
let checkData = data => {
    if (!data) return false;
    if (data.message && data.message === 'pool destroyed') return false;
    return true;
}