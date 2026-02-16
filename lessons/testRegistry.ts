import { TestContent } from '../types';
import { Test1 } from '../tests/Test1';
import { GrammarTest1 } from '../tests/GrammarTest1';

export const AllTests: TestContent[] = [
    Test1,
    GrammarTest1,
];

export const getTestById = (id: string): TestContent | undefined => {
    return AllTests.find(t => t.meta.id === id);
};
