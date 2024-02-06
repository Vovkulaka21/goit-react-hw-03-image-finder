import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ images }) => {
  const elements = images.map(image => (
    <li key={image.id} className={css.gallery_item}>
      <img
        className={css.gallery_item_image}
        src={image.previewURL}
        alt="ВАСЯ"
      />
    </li>
  ));

  return <>{elements}</>;
};

export default ImageGalleryItem;
