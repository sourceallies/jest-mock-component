import React from 'react';
import { render, screen } from '@testing-library/react';

it('should render correctly', () => {
    render(
        <div>
            <button>Hello</button>
        </div>
    );
    expect(screen.getByRole('button', {name: 'Hello'})).not.toBeNull();
})