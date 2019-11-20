//@flow;

export default class ArticleService {
    async getArticles() {
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

    // Alias for object type Article
    Article = {
        author: String,
        title: String,
        content: String,
        date: Date,
        summary: String,
        img: String = null,
        imgDescription: String = null,
        frontPage: Boolean,
        category: String,
    }

    async updateArticle(data: Article, id: number) {
        const res = await fetch('http://localhost:4000/articles/' + id, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(data)
        })
        
        const ok = await res.ok;
        const newData = await res.json();
        
        if (ok && checkData(newData)) return newData;
        return new Error('Error when updating article')
    }

    async newArticle(data: Article) {
        const res = await fetch('http://localhost:4000/articles', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(data)
        });
    
        const ok = await res.ok;
        const newData = await res.json();
        
        if (ok && checkData(newData)) return newData;
        return new Error('Error when creating new article');
    }

    
    async  deleteArticle(id: number) {
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
}

// Method to check if data is valid
let checkData = data => {
    if (!data) return false;
    if (data.message && data.message === 'pool destroyed') return false;
    return true;
}
}