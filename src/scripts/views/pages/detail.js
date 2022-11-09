import UrlParser from '../../routes/url-parser';
import RestoSource from '../../data/resto-source';
import { createRestoDetailTemplate } from '../templates-api/template-detail-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
        <div class="content">
            <div id="restaurant" class="restaurant" tabindex="0"></div>
            <div id="likeButtonContainer"></div>
        </div>
        `;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestoSource.detailRestaurant(url.id);
    const restoContainer = document.querySelector('#restaurant');
    restoContainer.innerHTML = createRestoDetailTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
      },
    });
  },
};

export default Detail;
