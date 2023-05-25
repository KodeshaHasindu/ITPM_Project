import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { useHistory } from 'react-router-dom';

export default function Topbar() {

    const history = useHistory();
  
    const handleLogout = () => {
      // Clear the access token or perform any logout logic
      // For example, if you are using localStorage to store the access token:
      localStorage.clear();
      
      // Redirect to the login page or any other page after logout
      history.push('/login');
    };
    
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">CARE NGO</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />

          </div>
          <div className="topbarIconContainer">
            <Language />
           
          </div>
          <div className="topbarIconContainer">
          <button onClick={handleLogout}>Logout</button>
          </div>
          <img src="https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture-986x1024.jpg" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
