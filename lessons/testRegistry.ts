import { TestContent } from '../types';
import { Test1 } from '../tests/Test1';

export const AllTests: TestContent[] = [
    Test1,
];

export const getTestById = (id: string): TestContent | undefined => {
    return AllTests.find(t => t.meta.id === id);
};
