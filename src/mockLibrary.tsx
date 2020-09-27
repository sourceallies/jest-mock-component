import React, { FC, ReactElement, useEffect, useRef } from 'react';
import {screen} from '@testing-library/react';

export interface MockedComponentElement<PropType> extends HTMLElement {
    props: PropType;
    component: FC<PropType>;
}

const MOCKED_COMPONENT_ROLE = 'MockedComponent';

export function setupMockComponent<PropType>(component: FC<PropType>): void {
    function MockComponent(props: PropType): ReactElement {
        const elementRef = useRef<HTMLDivElement>(null);
        useEffect(() => {
            const element = elementRef.current;
            if (element) {
                element.props = props;
                element.component = component;
            }
        }, [props, elementRef.current]);

        return <div
            role={MOCKED_COMPONENT_ROLE}
            ref={elementRef}
        />;
    }

    const mock = component as jest.Mock<ReactElement, [PropType]>;
    mock.mockImplementation(MockComponent);
}

export function getMockComponent<PropType>(component: FC<PropType>): MockedComponentElement<PropType> {
    const matchFunction = (accessibleName: string, element: Element): boolean =>
        element['component'] === component;

    const element = screen.getByRole(MOCKED_COMPONENT_ROLE, {name: matchFunction});
    return element as MockedComponentElement<PropType>;
}