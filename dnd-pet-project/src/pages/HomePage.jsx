import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import {getDatabase, ref, set, onValue} from 'firebase/database'
import Navbar from '../components/Navbar';
import { app } from '../firebase';




const HomePage = () => {
    return (
       <>    
       {/* <Navbar/> */}
       
       <input type="text" />
       </>
    );
};

export default HomePage;