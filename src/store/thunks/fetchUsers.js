import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk('users/fetch', async() => {
    const response = await axios.get('https://localhost:3005/users');
    console.log(response);
    return response.data;
});

// Automatically Async Thunks include property.......
// fetchUsers.pending    ---> 'users/fetch/pending'
// fetchUsers.fulfilled  ---> 'users/fetch/fulfilled'
// fetchUsers.rejected   ---> 'users/fetch/rejected'

export { fetchUsers };