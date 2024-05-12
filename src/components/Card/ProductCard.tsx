import { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import Test from '../Test'
import CardHeader from './CardHeader'

interface ProductCardProps {
  title: string;
}

/**
 * Renders a product card component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the product card.
 * @returns {JSX.Element} The rendered product card.
 */
function ProductCard({ title }: ProductCardProps) {
  const [itemsCount, setItemsCount] = useState(0)
  const [checked, setChecked] = useState(false)
  const [searchText, setSearchText] = useState('');

  /**
   * Updates the item count.
   * @param count - The new item count.
   */
  const handleItemCount = (count: number) => {
    setItemsCount(count)
  }

  /**
   * Handles the input event for the search field.
   * @param {React.ChangeEvent<HTMLInputElement>} e - The input event object.
   * @returns {void}
   */
  const onSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  }

  return (
    <Card className='max-w-30rem w-6 mx-auto my-auto shadow-8 no-padding'>
      <CardHeader title={title} onSearchInput={onSearchInput} />
      {/* Show 5, unless checked is true, then show all */}
      <Test maxItems={checked ? itemsCount : 5} onItemCount={handleItemCount} searchText={searchText} />
      <Button
        label={checked ? 'Show less' : 'Show more'}
        aria-label={checked ? 'Show less' : 'Show more'}
        className='w-full mt-4'
        onClick={() => setChecked(!checked)}
      />
    </Card>
  )
}

export default ProductCard;
