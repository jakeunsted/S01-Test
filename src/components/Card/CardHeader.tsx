import { InputText } from 'primereact/inputtext';

interface CardHeaderProps {
  title: string;
  onSearchInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Renders the header of a card component.
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the card.
 * @param {Function} props.onSearchInput - The callback function for search input changes.
 * @returns {JSX.Element} The rendered card header.
 */
function CardHeader({ title, onSearchInput }: CardHeaderProps) {
	return (
		<div className='flex'>
			<h2 className='flex-none mr-4'>{title}</h2>
			<InputText 
				placeholder='Search'
				className='flex-auto max-h-2rem my-auto'
				onChange={onSearchInput}
			/>
		</div>
	);
}

export default CardHeader;
