import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
    const parentData = 'Sumit'

    const [childDataInParent, setChildDataInParent] = useState('');
    return (
        <div>
            <h1>Parent component</h1>
            <p>Parent data in parent component:{parentData}</p>
            <p>Child data in parent component:{childDataInParent}</p>
            <Child setChildDataInParent={setChildDataInParent} parentToChild={parentData} />
        </div>
    );
}

export default Parent;