import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk('users/fetch', async() => {
    const response = await axios.get('http://localhost:3005/users');

    // DEV only...
    await pause(2000);

    console.log(response);
    return response.data;
});

// Automatically Async Thunks include property.......
// fetchUsers.pending    ---> 'users/fetch/pending'
// fetchUsers.fulfilled  ---> 'users/fetch/fulfilled'
// fetchUsers.rejected   ---> 'users/fetch/rejected'

// DEV only...
const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve,duration);
    });
};

export { fetchUsers };