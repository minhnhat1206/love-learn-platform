import { TestContent } from '../types';
import { GrammarTest1 } from '../tests/GrammarTest1';

export const AllTests: TestContent[] = [
    GrammarTest1,
];

export const getTestById = (id: string): TestContent | undefined => {
    return AllTests.find(t => t.meta.id === id);
};
