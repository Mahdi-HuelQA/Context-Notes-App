import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import './LogOut.css'
const LogoutButton = () => {
  const { logout } = useAuth0();

  return <button className = "logout" onClick={() => logout()}>Log Out</button>;
};

export default LogoutButton;

// const LogOutButton = () => {
// const { logout} = useAuth0()

// return(
//     <div>

// <button onClick={() => logout({ returnTo: window.location.origin })}  variant="contained" color="secondary">
// LogOut

// </button>
//     </div>
// )
// }
// export default LogOutButton
