/* eslint-disable react/jsx-filename-extension */
import React, { useContext } from 'react';

import AlertContext from '../../context/alert/alertContext';


const Alerts = () => {
  const alertContext = useContext(AlertContext);

  return (
    alertContext.alerts.length > 0 && alertContext.alerts.map((alert) => (
      <div key={alert.id} className="">
        {alert.msg}
      </div>
    ))
  );
};

export default Alerts;
