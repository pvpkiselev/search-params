import { describe, expect, it } from "vitest";
import { renderSelectedList } from "../ui";

describe('renderSelectedList', () => {
	it('should display "Нет выбранных категорий" if selectedIds is empty', () => {
		const container = document.createElement('div');
		renderSelectedList([], container);

		expect(container.textContent).toBe('Нет выбранных категорий');
	});

	it('should render selected categories into the container', () => {
    const container = document.createElement('div');
    renderSelectedList(['1', '2'], container);

    expect(container.children.length).toBe(2);
    expect(container.textContent).toContain('Категория 1');
    expect(container.textContent).toContain('Категория 2');
  });
});