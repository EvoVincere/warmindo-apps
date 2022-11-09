import { createRestoItemTemplate } from '../templates-api/template-detail-creator';
import FavoriteResto from '../../data/favorite-resto';

const Like = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Liked Restaurant</h2>
        <div id="restaurants" class="restaurants"></div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteResto.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default Like;
