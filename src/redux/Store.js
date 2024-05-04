import {configureStore} from "@reduxjs/toolkit"
import EmpReducer from './EmpSlice';

const store = configureStore({
    reducer: {
        emp: EmpReducer
        // more slices  
    }
})

export default store;


// const dataFromStore = useSelector(abc => abc.emp.empObj);