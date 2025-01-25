import { describe, it, expect } from "vitest";
import { getSelectedCategoryIdsFromURL, syncSelectedCategoriesWithURL } from "../utils";

describe('getSelectedCategoryIdsFromURL', () => {
	it('should return an empty array if no query params exist', () => {
		window.history.pushState({}, '', '/');
		expect(getSelectedCategoryIdsFromURL()).toEqual([]);
	});

	it('should return an array of categories from URL', () => {
		window.history.pushState({}, '', '/?selectedCategories=1,2,3');
		expect(getSelectedCategoryIdsFromURL()).toEqual(['1', '2', '3']);
	});
});

describe('syncSelectedCategoriesWithURL', () => {
	it('should sync selected categories with URL', () => {
		syncSelectedCategoriesWithURL(['1', '2', '3']);
		expect(window.location.search).toBe('?selectedCategories=1%2C2%2C3');
	});

	it('should remove the parameter if the array is empty', () => {
		syncSelectedCategoriesWithURL([]);
		expect(window.location.search).toBe('');
	});
});