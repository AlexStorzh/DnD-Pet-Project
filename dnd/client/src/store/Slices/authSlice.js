import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../services/AuthService";
import axios from "axios";
import { API_URL } from "../../api";

export const loginAuth = createAsyncThunk(
    'auth/loginAuth',
    async function ({ email, password }, { rejectWithValue, dispatch },) {
        try {
            const response = await AuthService.login(email, password)
            localStorage.setItem('token', response.data.accessToken)
            dispatch(setAuth(true));
            dispatch(setUser(response.data.user));
        } catch (error) {

            console.log(rejectWithValue(error.response?.data));
            return rejectWithValue(error.response?.data)
        }
    }
)
export const registrationAuth = createAsyncThunk(
    'auth/registrationAuth',
    async function ({ email, username, password }, { rejectWithValue, dispatch },) {
        try {
            const response = await AuthService.registration(email, username, password)
            console.log(response);
            localStorage.setItem('token', response.data.accessToken)
            dispatch(setAuth(true));
            dispatch(setUser(response.data.user));
        } catch (error) {
            console.log(error.response?.data?.message || error.response?.data?.errors);
            return rejectWithValue(error.response?.data?.errors)
        }
    }
)
export const logoutAuth = createAsyncThunk(
    'auth/logoutAuth',
    async function (_, { rejectWithValue, dispatch },) {
        try {
            const response = await AuthService.logout()
            localStorage.removeItem('token')
            dispatch(setAuth(false));
            dispatch(setUser({}));
        } catch (error) {
            console.log(error.response?.data?.message);
        }
    }
)
export const checkAuth = createAsyncThunk(
    'auth/checkAuth',
    async function (_, { rejectWithValue, dispatch }) {
        dispatch(setLoading(true))
        try {
            const response = await axios.get(`${API_URL}/refresh`, { withCredentials: true })
            localStorage.setItem('token', response.data.accessToken)
            dispatch(setAuth(true));
            dispatch(setUser(response.data.user));
        } catch (error) {
            console.log(error.response?.data?.message);
        } finally {
            dispatch(setLoading(false))
        }
    }
)


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {},
        isAuth: false,
        isLoading: false,
        error: null,
    },
    reducers: {
        setAuth(state, action) {
            state.isAuth = action.payload
        },
        setUser(state, action) {
            state.user = action.payload
        },
        setLoading(state, action) {
            state.isLoading = action.payload
        }
    },
    extraReducers: {
        [loginAuth.rejected]: (state, action) => {
            state.error = action.payload
        },
        [registrationAuth.rejected]: (state, action) => {
            state.error = action.payload
        }

    }
})
export const { setAuth, setUser, setLoading } = authSlice.actions;

export default authSlice.reducer