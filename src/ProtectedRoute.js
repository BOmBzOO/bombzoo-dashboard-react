import { Outlet, useNavigate } from 'react-router-dom';

import React from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import { useAuth } from './auth-context/auth.context';

export const ProtectedRoute = () => {
  const navigate = useNavigate();
  let { user } = useAuth();

  console.log('protected log:', user)
  
    return (<>
      {(!user || !user.token || user.token === "") ? (
        <SweetAlert
          title="You must be signed in!"
          onCancel={() => navigate("/authentication/sign-in")}
          onConfirm={() => navigate("/authentication/sign-in")}
          confirmBtnCssClass={"px-5"}
        />
      ) : (
        <Outlet />
      )}
  </>);
};
