import FavoriteResto from '../../data/favorite-resto';
import { createRestoItemTemplate } from '../templates-api/template-detail-creator';

const Favorite = {
  async render() {
    return `
      <div class="content">
        <h1 tabindex="0">Favorite Restaurants</h1>
        <div id="restaurants" class="restaurants"></div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteResto.getAllRestaurants();
    const restosContainer = document.querySelector('#restaurants');

    restaurants.forEach((restaurant) => {
      restosContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default Favorite;
