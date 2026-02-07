import React from "react";
import { useSelector } from "react-redux";
import {changeLanguage} from "../store/actions";
import { useDispatch } from "react-redux";

export default function Home() {
     const language = useSelector(state => state.lang);
     const dispatch = useDispatch();

     return (
          <>
          <div dir = {language === 'ar' ? 'rtl' : 'ltr'} className="home"  style={{ textAlign: language === 'ar' ? 'right' : 'left' }}>
               <h2>Home Page</h2>
               <p>Welcome to the home page of our React application!</p>
          </div>
          <div>
               <h3>Current Language: {language}</h3>
               <button className="btn btn-success" onClick={() => dispatch(changeLanguage('ar'))}>Change Language</button>
          </div>
          </>
     );
}