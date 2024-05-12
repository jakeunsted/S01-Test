import { PrimeReactProvider } from 'primereact/api';
import './App.scss';
import ProductCard from './components/Card/ProductCard';

/**
 * Renders the main application component.
 * @returns The rendered JSX element.
 */
function App() {
	return (
		<PrimeReactProvider>
			<div className='h-screen flex'>
				<ProductCard title='Sorted Items:' />
			</div>
		</PrimeReactProvider>
	);
}

export default App;
