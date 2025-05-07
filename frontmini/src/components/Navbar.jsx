import React from "react";

const Navbar = () => {
  return (
    <nav style={{
      width: "100%",
      height: "70px",
      backgroundColor: "rgba(0, 0, 0, 0.5)", // transparent black
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingLeft:'40px',
      paddingRight:'40px',
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 1000
    }}>
      <h1 style={{
        color: "white",
        fontSize: "24px",
        fontWeight: "bold",
        marginLeft:'38px'
      }}>
        Country Compass
      </h1>
     
        
     
    </nav>
  )
}
const buttonStyle = {
    backgroundColor: "transparent",
    border: "2px solid white",
    color: "white",
    padding: "8px 16px",
    fontSize: "16px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s, color 0.3s",
  };
  
  export default Navbar;