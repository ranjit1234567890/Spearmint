import React from 'react';
import './Footer.css'; // Import your footer styles here

function Footer() {
  return (
    <footer className="footer" style={{marginTop:"300px", width:"100%"}}>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
