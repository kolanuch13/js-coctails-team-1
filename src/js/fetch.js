import axios from "axios";

export default class ImageApiService {
    constructor() {
        this.searchQuery = "";
        this.filter = "";
        this.ingredient = "";
        this.page = 1;
    }

    async fetchImages() {
        const params = new URLSearchParams({
            s: this.searchQuery,
            f: this.filter,
            i: this.ingredient,
            page: this.page
        })
        const URL = `www.thecocktaildb.com/api/json/v1/1/search.php?${params}`;

        const responce = await axios.get(URL);
        return await responce.data.hits;
    }

    addPage() {
        this.page += 1;
    }

    resPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }

    get type() {
        return this.image_type;
    }

    set type(imgType) {
        this.image_type = imgType;
    }
}