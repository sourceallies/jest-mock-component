import React from 'react';
import { render } from '@testing-library/react';
import ComponentUnderTest from './ComponentUnderTest';
import {setupMockComponent, getMockComponent} from './mockLibrary';
import OtherComponent from './OtherComponent';

jest.mock('./OtherComponent');

beforeEach(() => {
    setupMockComponent(OtherComponent);
});

test('zero is passed to other Component', () => {
    render(<ComponentUnderTest />);
    expect(getMockComponent(OtherComponent).props.value).toEqual(0);
});
