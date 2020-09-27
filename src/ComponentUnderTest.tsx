import React, { ReactElement, useState } from 'react';
import OtherComponent from './OtherComponent';

export default function ComponentUnderTest(): ReactElement {
    const [value, setValue] = useState(0);
    return (
        <div>
            <OtherComponent value={value} />
            <button onClick={() => setValue(value + 1)}>Up</button>
        </div>
    );
}