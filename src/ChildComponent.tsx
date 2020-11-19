import React, { ReactElement } from 'react';

export interface ChildComponentProps {
    value: number;
}

export default function ChildComponent(props: ChildComponentProps): ReactElement {
    return <div>{props.value}</div>;
}