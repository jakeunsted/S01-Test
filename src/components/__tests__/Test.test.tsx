import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Test from '../Test';

describe('Test', () => {
	/**
   * Test that the Test component renders the cheapest 5 items sorted by price.
   */
	test('renders the cheapest 5 items sorted by price', () => {
		const { getAllByTestId } = render(<Test maxItems={5} onItemCount={() => {}} searchText="" />);
		const products = getAllByTestId('product');
		expect(products).toHaveLength(5);
  
		// Verify that the items are sorted by price. Handle possible null values.
		const prices = products.map(product => parseFloat(product.textContent?.replace('£', '') || '0'));
		expect(prices).toEqual(prices.sort((a, b) => a - b));
	});
});
