import RestoSource from '../../data/resto-source';
import { createRestoItemTemplate } from '../templates-api/template-detail-creator';

const home = {
  async render() {
    return `
        <div class="content">
            <div class="explore">
                <h1 tabindex="0" class="explore__label">Explore Warung</h1>
            </div>
            <div id="restaurants" class="restaurants"></div>
        </div>
        `;
  },
  async afterRender() {
    const restaurants = await RestoSource.restoList();
    const restoContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restoContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default home;
