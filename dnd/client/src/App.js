import './App.css';
import AuthForm from './pages/AuthForm/AuthForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuth, logoutAuth } from './store/Slices/authSlice';
function App() {
  const store = useSelector((state) => state.auth)
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth())
    }
  }, [dispatch])


  if (store.isLoading) {
    return <div className="App"> <h1 style={{ color: 'white' }}>Loading...</h1></div>
  }


  if (!store.isAuth) {
    return (
      <div className="App"> <AuthForm /></div>

    )
  }
  return (
    <div className="App">
      <h1 style={{ color: 'white' }}> {store.isAuth ? `User Logged on ${store.user.email}` : `User IS NOT LOGGED`}</h1>
      <button onClick={() => dispatch(logoutAuth())}>Logout</button>
    </div>
  );
}

export default App;
