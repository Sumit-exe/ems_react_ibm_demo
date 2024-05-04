import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEmpObj } from '../redux/EmpSlice';

const Home = () => {
    // const [cart, setCart] = useState([]);
    // setCart(...cart , newitem);
    // dispatch(newItem)

    const dispatch = useDispatch();
    const dataFromStore = useSelector(store => store.emp.empObj);
        // useEffect(() => { }, [dataFromStore]);
    
        const sendDataToStore = () => {
            // console.log('sendDataToStore');
            const dataToSend = {
                firstName: 'Siddharth', lastname: 'bhamre'
            };
            dispatch(setEmpObj(dataToSend));
        }
        console.log(dataFromStore);
    return (
        <>
            <h1>Home Component</h1>
            <>
                <p>Data received from store</p>
                <p>{dataFromStore &&
                    <span>{dataFromStore.firstName}{dataFromStore.lastname} </span>
                }  </p>
            </>
            <>
                <button onClick={sendDataToStore} >Send data to store</button>
            </>


        </>
    );
}

export default Home;
