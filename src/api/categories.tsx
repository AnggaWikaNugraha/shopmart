import axios from 'axios';

export function getCategories() {
    return axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
}

export function byCategory(category: string) {
    return axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
}