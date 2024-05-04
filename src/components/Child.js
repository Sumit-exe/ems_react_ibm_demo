import React from 'react';

const Child = (props) => {
    const parentDataInChild = props.parentToChild;
    const childData = 'Monu';

    const passDataToParent = () => {
        console.log(childData);
        // code 
        props.setChildDataInParent(childData)
    };
    return (
        <div>
            <h1>Child component</h1>
            <p>Child data in child component: {childData}</p>
            <p>Parent data in child component: {parentDataInChild}</p>
            <button onClick={passDataToParent} >Pass Data to Parent</button>
        </div>
    );
}

export default Child;
