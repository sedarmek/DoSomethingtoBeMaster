import { createContext } from 'react';

const initialContext = {
    context: 'contexto inicial'
};

export const TestContext = createContext(initialContext)