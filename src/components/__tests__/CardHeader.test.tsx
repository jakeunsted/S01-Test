import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardHeader from '../Card/CardHeader';

describe('CardHeader', () => {
	/**
   * Test that the CardHeader component renders with the provided title.
   */
	test('renders with the provided title', () => {
		const title = 'Test Title';
		const { getByText } = render(<CardHeader title={title} onSearchInput={() => {}} />);
		expect(getByText(title)).toBeInTheDocument();
	});

	/**
   * Test that the CardHeader component calls the onSearchInput callback when the input changes.
   */
	test('calls onSearchInput callback when input changes', () => {
		const mockOnSearchInput = jest.fn();
		const { getByPlaceholderText } = render(<CardHeader title="Test Title" onSearchInput={mockOnSearchInput} />);
		const searchInput = getByPlaceholderText('Search');

		fireEvent.change(searchInput, { target: { value: 'search query' } });

		expect(mockOnSearchInput).toHaveBeenCalledTimes(1);
		expect(mockOnSearchInput).toHaveBeenCalledWith(expect.objectContaining({ target: expect.objectContaining({ value: 'search query' }) }));
	});
});
