import axios from "axios";

export const instance = axios.create({baseURL:'https://api.tvmaze.com/',timeout:5000,})
export const filler = 'https://americandurafilm.com/wp-content/uploads/2022/06/No-Image-Placeholder.png'