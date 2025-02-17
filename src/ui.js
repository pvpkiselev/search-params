export function renderCategories(categories, container, selectedIds) {
	container.innerHTML = '';

	const fragment = document.createDocumentFragment();

	categories.forEach(({ id, name }) => {
		const isChecked = selectedIds.has(String(id));
		const categoryItem = createCategoryItem(id, name, isChecked);
		fragment.appendChild(categoryItem);
	});

	container.appendChild(fragment);
}

export function renderSelectedList(selectedIds, container) {
	container.innerHTML = '';

	if (selectedIds.size === 0) {
		container.textContent = 'Нет выбранных категорий';
		return;
	}

	const fragment = document.createDocumentFragment();

	selectedIds.forEach((id) => {
		const selectedCategoryItem = createSelectedCategoryItem(id);
		fragment.appendChild(selectedCategoryItem);
	});

	container.appendChild(fragment);
}

function createCategoryItem(id, name, isChecked) {
	const categoryItem = document.createElement('li');
	categoryItem.classList.add('categories__item');

	const categoryLabel = document.createElement('label');
	categoryLabel.classList.add('categories__label');

	const categoryCheckbox = document.createElement('input');
	categoryCheckbox.type = 'checkbox';
	categoryCheckbox.id = `category-${id}`;
	categoryCheckbox.classList.add('categories__checkbox');
	categoryCheckbox.dataset.id = id;
	categoryCheckbox.checked = isChecked;

	const categoryText = document.createElement('span');
	categoryText.classList.add('categories__text');
	categoryText.textContent = name;

	categoryLabel.appendChild(categoryCheckbox);
	categoryLabel.appendChild(categoryText);
	categoryItem.appendChild(categoryLabel);

	return categoryItem;
}

function createSelectedCategoryItem(id) {
	const selectedCategoryItem = document.createElement('li');
	selectedCategoryItem.classList.add('selected-categories__item');

	const selectedCategoryText = document.createElement('span');
	selectedCategoryText.classList.add('selected-categories__text');
	selectedCategoryText.textContent = `Категория ${id}`;

	selectedCategoryItem.appendChild(selectedCategoryText);
	return selectedCategoryItem;
}