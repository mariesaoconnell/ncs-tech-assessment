import React from 'react';
import { Outlet} from 'react-router-dom';


function ProtectedRoute(props) {

  return props.isLoggedIn ? <Outlet/> : null;
}

export default ProtectedRoute;
