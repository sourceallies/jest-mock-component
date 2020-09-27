import React from 'react';
import { render, screen } from '@testing-library/react';
import * as Hello from './Hello';

it('should render correctly', () => {
    render(
        <div>
            <button>Hello</button>
        </div>
    );

    expect(screen.getByRole('button', {name: 'Hello'})).not.toBeNull();
});

it.only('should do something', () => {
    const x = jest.createMockFromModule<typeof Hello>('./Hello');
    console.log(Object.keys(x));

    jest.isMockFunction
});