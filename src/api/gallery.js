import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/?key=42226095-985f5f3f7d80b9b4b7d7fcb50&image_type=photo&per_page=1',
});

export const imageGallery = () => {
  return instance.get("/")
};
