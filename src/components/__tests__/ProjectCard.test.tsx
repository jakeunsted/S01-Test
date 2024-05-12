import { render, fireEvent } from '@testing-library/react';
import ProductCard from '../Card/ProductCard';
import '@testing-library/jest-dom';

describe('ProductCard', () => {
	/**
   * Test that the ProductCard component renders with the provided title.
   */
	test('Renders with the provided title', () => {
		const title = 'Test Product';
		const { getByText } = render(<ProductCard title={title} />);
		expect(getByText(title)).toBeInTheDocument(); // Using 'toBeInTheDocument' as 'any'
	});

	/**
   * Test that the ProductCard component toggles item count when "Show more" button is clicked.
   */
	test('Toggles item count when "Show more" button is clicked', () => {
		const result = render(<ProductCard title="Test Product" />);
		const { getAllByTestId, getByText } = result;
		const showMoreButton = getByText('Show more');
  
		let products = getAllByTestId('product');

		// Initially, only 5 items should be shown
		expect(products).toHaveLength(5);
  
		fireEvent.click(showMoreButton);
		products = getAllByTestId('product');
  
		// After clicking "Show more", all 8 items should be shown
		expect(products).toHaveLength(8);
  
		fireEvent.click(showMoreButton);
		products = getAllByTestId('product');
  
		// After clicking "Show less", only 5 items should be shown again
		expect(products).toHaveLength(5);
	});

	/**
   * Test that the ProductCard component updates search text when input changes.
   */
	test('Updates search text when input changes', () => {
		const { getByPlaceholderText } = render(<ProductCard title="Test Product" />);
		const searchInput = getByPlaceholderText('Search') as HTMLInputElement;

		fireEvent.change(searchInput, { target: { value: 'new search text' } });

		expect(searchInput.value).toBe('new search text');
	});
});
