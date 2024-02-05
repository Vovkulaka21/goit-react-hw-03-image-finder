import { Component } from 'react';

import css from './ImagineGallery.module.css';

class ImageGallery extends Component {
    state = {

        images: [  {
            "id": 715540,
            "pageURL": "https://pixabay.com/photos/yellow-flower-blossom-bloom-petals-715540/",
            "type": "photo",
            "tags": "yellow, flower, flower background",
            "previewURL": "https://cdn.pixabay.com/photo/2015/04/10/00/41/yellow-715540_150.jpg",
            "previewWidth": 150,
            "previewHeight": 84,
            "webformatURL": "https://pixabay.com/get/g01c85f7b92e2b84f932118a34ccc73e96f88fc9c0897e044139b35d5e91b75283a0127753266fe5b9362aa98cc3c6628_640.jpg",
            "webformatWidth": 640,
            "webformatHeight": 360,
            "largeImageURL": "https://pixabay.com/get/g27abffc6c64ca529ed262a05acb88840099dd3d96387b1af51140f18f6cde64af75d5d1c58f8bb120f17fe54d4450476b8473232be55a0e350f0655651dbe6e4_1280.jpg",
            "imageWidth": 3020,
            "imageHeight": 1703,
            "imageSize": 974940,
            "views": 169317,
            "downloads": 102647,
            "collections": 476,
            "likes": 391,
            "comments": 53,
            "user_id": 916237,
            "user": "Wow_Pho",
            "userImageURL": "https://cdn.pixabay.com/user/2015/04/07/14-10-15-590_250x250.jpg"
        },
        {
            "id": 273391,
            "pageURL": "https://pixabay.com/photos/flower-yellow-petals-yellow-flower-273391/",
            "type": "photo",
            "tags": "flower, yellow petals, yellow flower",
            "previewURL": "https://cdn.pixabay.com/photo/2014/02/24/05/11/flower-273391_150.jpg",
            "previewWidth": 150,
            "previewHeight": 112,
            "webformatURL": "https://pixabay.com/get/g51dff7c8035a2c85d7fad705ab629fe26b30b930e37088568023f19542409b54bdae77290db4c0a90a0bbe032d975469_640.jpg",
            "webformatWidth": 640,
            "webformatHeight": 480,
            "largeImageURL": "https://pixabay.com/get/g5b863bc9b9aea9b8455e6022700d095bc4fd641ddf377ff07bafd5a193ad36535062e7f2aceb68ab328a629501dc56d2b281a33c599b6b109f2ef3479d61e81d_1280.jpg",
            "imageWidth": 2607,
            "imageHeight": 1956,
            "imageSize": 890318,
            "views": 22301,
            "downloads": 6572,
            "collections": 196,
            "likes": 72,
            "comments": 13,
            "user_id": 152861,
            "user": "angelac72",
            "userImageURL": "https://cdn.pixabay.com/user/2014/02/10/02-47-32-118_250x250.jpg"
        },]

    }

    render() {
        const {images} = this.state
        const element = images.map(({id, webformatURL}) => <li key={id}><img src={webformatURL} alt='ПІШОВ НАХУЙ'/></li>)
        return (
            <ul className={css.ImageGallery}> 
            {element}
            </ul>
        )
    }

}

export default ImageGallery