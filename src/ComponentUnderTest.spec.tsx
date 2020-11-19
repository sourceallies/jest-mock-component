import React from 'react';
import { render } from '@testing-library/react';
import ComponentUnderTest from './ComponentUnderTest';
import {setupMockComponent, getMockComponent} from './index';
import ChildComponent from './ChildComponent';

jest.mock('./ChildComponent');

beforeEach(() => {
    setupMockComponent(ChildComponent);
});

test('getMockComponent should be able to find a mock component', () => {
    render(<ComponentUnderTest />);
    expect(getMockComponent(ChildComponent)).not.toBeNull();
});

test('the mock should have the name of the function prefixed with Mock', () => {
    const mock = ChildComponent as jest.Mock;
    expect(mock.getMockName()).toEqual('Mock:ChildComponent');
});

test('The mock component element should hold the prop value', () => {
    render(<ComponentUnderTest />);
    expect(getMockComponent(ChildComponent).props.value).toEqual(0);
});
