import React, { ReactElement, useState } from 'react';
import ChildComponent from './ChildComponent';

export default function ComponentUnderTest(): ReactElement {
    const [value, setValue] = useState(0);
    return (
        <div>
            <ChildComponent value={value} />
            <button onClick={() => setValue(value + 1)}>Up</button>
        </div>
    );
}