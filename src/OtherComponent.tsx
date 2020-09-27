import React, { ReactElement } from 'react';

export interface OtherComponentProps {
    value: number;
}

export default function OtherComponent(props: OtherComponentProps): ReactElement {
    return <div>{props.value}</div>;
}