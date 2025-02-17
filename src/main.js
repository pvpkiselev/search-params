import { initCategoriesManager } from './categoriesManager';
import { categories } from './data/categories';
import './styles/style.css';

const categoriesList = document.querySelector('.categories__list');
const selectedCategoriesList = document.querySelector('.selected-categories__list');

initCategoriesManager(categoriesList, selectedCategoriesList, categories);