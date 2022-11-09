import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (restaurant) => `
  
    <div class="restaurants-item__header">
      <h2 class="restaurant__title" tabindex="0">${restaurant.name}</h2>
      <img class="restaurant__poster lazyload" src="${
  CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
    </div>
    <div class="restaurant__info">
        <h3 tabindex="0">Information</h3>
        <h4 tabindex="0">Address</h4>
        <p tabindex="0">${restaurant.address}</p>
        <h4 tabindex="0">City</h4>
        <p tabindex="0">${restaurant.city}</p>
    </div>
    <div class="restaurant__description">
      <h4 tabindex="0">Description</h4>
      <p tabindex="0">${restaurant.description}</p>
    </div>
    <div class="restaurant__category">
      <h4 tabindex="0">Kategori Menu :</h4>  <p tabindex="0"> ${restaurant.categories.map((category) => category.name).join(', ')}</p>
      <h4 tabindex="0">Makanan :</h4>  <p tabindex="0">${restaurant.menus.foods.map((food) => food.name).join(', ')}</p>
      <h4 tabindex="0">Minuman :</h4> <p tabindex="0"> ${restaurant.menus.drinks.map((drink) => drink.name).join(', ')}</p>
      <h4 tabindex="0">Rating Restaurant:</h4>  <p tabindex="0">⭐️${restaurant.rating}</p>
      <h4 tabindex="0">Customer Reviews :</h4>  <p tabindex="0">${restaurant.customerReviews.map((customerReview) => customerReview.review).join(', ')}</p>
    </div>
          
`;

const createRestoItemTemplate = (restaurant) => `
  <div class="restaurants-item">
    <div class="restaurants-item__header">
     <center> <img class="restaurants-item__header__poster lazyload" alt="${restaurant.name}"
          src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"></center>
      
    </div>
    <div class="restaurants-item__content">
     <h3 class="restaurants__title"><a href="${`/#/detail/${restaurant.id}`}" tabindex="0">${restaurant.name}</a></h3>
<h4 tabindex="0">City : ${restaurant.city}</h4>
      <p tabindex="0">${restaurant.description}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like" tabindex="0">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like" tabindex="0">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoDetailTemplate,
  createRestoItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
