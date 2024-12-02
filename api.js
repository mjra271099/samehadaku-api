class API {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async request(endpoint, method = 'GET', body = null) {
        const response = await fetch(`${this.baseUrl}${endpoint}`, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: body ? JSON.stringify(body) : null,
        });
        return response.json();
    }

    async home() {
        return this.request('/');
    }

    async search(title) {
        return this.request(`/search/${title}`);
    }

    async anime(id) {
        return this.request(`/anime/${id}`);
    }
}

// Contoh penggunaan:
const api = new API('http://localhost:3000');
api.home().then(console.log);
