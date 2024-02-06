import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = () => {
  return (
    <li className={css.gallery_item}>
      <img className={css.gallery_item_image} alt="ПІШОВ НАХУЙ" />
    </li>
  );
};

export default ImageGalleryItem;
