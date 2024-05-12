import { useEffect } from 'react';
import { Card } from 'primereact/card';

// Define the Item interface - name and price
interface Item {
  name: string;
  price: number;
}

// Define the TestProps interface
interface TestProps {
  maxItems: number;
  onItemCount: (count: number) => void;
  searchText: string;
}

const data: Item[] = [
  { name: 'Item A', price: 125 },
  { name: 'Item B', price: 230 },
  { name: 'Item C', price: 295 },
  { name: 'Item D', price: 245 },
  { name: 'Item E', price: 900 },
  { name: 'Item F', price: 875 },
  { name: 'Item G', price: 235 },
  { name: 'Item H', price: 400 },
];

/**
 * Test component.
 *
 * @param {number} maxItems - The maximum number of items to display.
 * @param {Function} onItemCount - Callback function to update the item count in the parent component.
 * @param {string} searchText - The search text used to filter the data.
 * @returns {JSX.Element} The rendered Test component.
 */
const Test = ({ maxItems, onItemCount, searchText }: TestProps) => {
  // Filter and sort data based on search text and price
  const filteredData: Item[] = data.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()));
  const sortedData: Item[] = filteredData.sort((a, b) => a.price - b.price);

  // Update the item count in the parent component
  useEffect(() => {
    onItemCount(filteredData.length);
  }, [filteredData.length]);

  return (
    <>
      {sortedData.slice(0, maxItems).map((item, index) => (
          <Card 
            key={index}
            title={item.name}
            subTitle={`£${item.price.toFixed(2)}`}
            className="p-m-2 mb-3 shadow-4"
            data-testid='product'
          />
      ))}
    </>
  )
}

export default Test;

// Space test 1
// Instructions
// Please dont fork this repo when u provide your answer, dont give other applicants clues!
//
// 1. Render the cheapest 5 items on landing sorted by price
// 2. User should beable to toggle between showing the cheapest 5 items and all items
// 3. The user should be able to filter an item by name
// 4. Javascript or Typescript using functional components must be used to implement your solution
// 5. The answer must be a full github public repo that can be cloned then installed and run by executing 'npm start' or 'yarn start'
// 7. Add some 3rd party libraries if you feel like they are useful to deliver the requirement, show us your knowledge of the trends in modern development
// 8. Show us your skills in styling your work, choose a framework or style from scratch, this can make a real difference
// 9. Please show your knowledge around test driven development by writing tests and showing significant test coverage
// 10. Pay attention to your naming conventions and patterns you are implementing
// There is no time limit, we obviously want to see your result as soon as possible but take your time, show us some quality
