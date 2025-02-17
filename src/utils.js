export function getSelectedCategoryIdsFromURL() {
	const params = new URLSearchParams(window.location.search);
	const categoriesParam = params.get('selectedCategories');

	return categoriesParam ? categoriesParam.split(',') : [];
}

export function syncSelectedCategoriesWithURL(selectedCategories) {
	const currentUrl = new URL(window.location);

	if (selectedCategories.size > 0) {
		currentUrl.searchParams.set('selectedCategories', Array.from(selectedCategories).join(','));
	} else {
		currentUrl.searchParams.delete('selectedCategories');
	}

	window.history.replaceState({}, '', currentUrl.toString());
}