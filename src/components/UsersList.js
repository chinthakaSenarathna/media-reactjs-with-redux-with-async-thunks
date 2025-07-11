import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store";

function UsersList(){
    const dispatch = useDispatch();

    const { isLoading, data, error } = useSelector((state) => {
        return state.users;
    })

    useEffect(() => {
        dispatch(fetchUsers());
    },[dispatch]);

    if(isLoading){
        return <h2>Loading...</h2>
    }

    if(error){
        return <h2>Error occured in fetching data...</h2>
    }

    return (
        <div>
            {data.length}
        </div>
    );
}

export default UsersList;