import axios from 'axios';

const instance = axios.create({
  baseURL:
    'https://pixabay.com/api/',
  params: {
    key: "42226095-985f5f3f7d80b9b4b7d7fcb50",
    image_type: "photo",
    orientation: "horizontal",
    per_page: 12,
    page: 1,
  }
});

export const imageGallery = () => {
  return instance.get(`/`);
};

export const searchImages = (q) => {
  return instance.get(`/?q=${q}`)
}