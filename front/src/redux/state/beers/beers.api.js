import axios from "axios";

export const getBeers = () => axios.get(`/beers`);
export const postBeer = beer => axios.post(`/beers`, beer);
export const rateBeer = (beerId, score) => axios.post(`/beers/${beerId}/rate`, { score });
