import React from 'react';
import { render, screen } from '@testing-library/react';
import SystemUnderTest from './SystemUnderTest';
import DependentComponent from './DependentComponent';
import { setupMockComponent, getByMockedComponent } from 'jest-mock-component';

jest.mock('./DependentComponent');

beforeEach(() => {
    setupMockComponent(DependentComponent);
});

test('correct props', () => {
    render(<SystemUnderTest/>);
    const dependentComp = getByMockedComponent(screen, SomeComponent);
    expect(dependentComp.props.foo).toEqual('bar');
});


interface HTMLElementWithProps<T> extends HTMLElement {
    props: T;
}

interface Props {

}
function SomeComponent(props: Props): React.ReactElement {
    return <div/>;
}

function getxxxx<T>(component: FunctionComponent<T>): HTMLElementWithProps<T> {
    return screen.getByTestId(component.name) as HTMLElementWithProps<T>;
}