# Jest Mock Component

## The Problem

Unit testing involves isolating the *system under test* so that the test is not affected by other parts of the application. When testing a React application, this means we need to mock components to isolate them from other components. These mock components can be created by passing a function to `jest.mock` that returns JSX. However, this strategy makes it difficult to assert the props that are currently passed to the mock component. It is even more difficult if the component is used used multiple times.

## The Solution

This small library provides a factory function that be passed to `jest.mock` to create a component that can be later found and tested against.

### Typescript Example:

```tsx
import React from 'react';
import { HTMLElementWithProps } from '@sourceallies/jest-mock-component';
import { render, screen } from '@testing-library/react';
import { DependentComponentProps } from './DependentComponent';
import MyComponent from './MyComponent';

jest.mock('./DependentComponent', require('@sourceallies/jest-mock-component')({name: 'DependentComponent'}));

test('some other component', () => {
    render(<MyComponent />);
    const mockedElement = screen.getByRole('mock', {name: 'DependentComponent'}) as HTMLElementWithProps<DependentComponentProps>;
    expect(mockedElement.props.foo).toEqual('bar');
});
```

## How It Works

The library's default export is a function that takes an options object. When invoked, it creates a factory method that is compatable with Jest and is a valid React component. When this component is rendered to the DOM, it keeps track of the props that are passed to it and exposes them as a `props` property on the `HTMLElement`. An `HTMLElementWithProps<T>` Typescript interface is exported so that Typescript clients can downcast accordingly.