import type {Config} from 'jest';

export default async (): Promise<Config> => {
	return {
		preset: 'ts-jest',
		testEnvironment: '@happy-dom/jest-environment',
		'moduleNameMapper': {
			'^.+\\.(css|less|scss)$': 'ignore-styles'
		}
	};
};
