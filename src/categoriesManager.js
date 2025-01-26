import { getSelectedCategoryIdsFromURL, syncSelectedCategoriesWithURL } from './utils';
import { renderCategories, renderSelectedList } from './ui';

export function initCategoriesManager(categoriesList, selectedCategoriesList, categories) {
	const selectedIdsSet = new Set(getSelectedCategoryIdsFromURL());

	function updateCategoriesUI() {
		renderCategories(categories, categoriesList, selectedIdsSet);
		renderSelectedList(Array.from(selectedIdsSet), selectedCategoriesList);
	}	

	function handleCheckboxChange(categoryId, isChecked) {
		if (isChecked) {
			selectedIdsSet.add(categoryId);
		} else {
			selectedIdsSet.delete(categoryId);
    }

		syncSelectedCategoriesWithURL(Array.from(selectedIdsSet));
		updateCategoriesUI();
	}

	updateCategoriesUI();

	categoriesList.addEventListener('change', (event) => {
		if (event.target.classList.contains('categories__checkbox')) {
			const categoryId = event.target.dataset.id;
			const isChecked = event.target.checked;
			handleCheckboxChange(categoryId, isChecked);
		}
	});
}
