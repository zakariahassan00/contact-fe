import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./notifications.scss";

const Notifications = () => {
  return (
    <div className="notifications">
      <FontAwesomeIcon icon="bell" className="notifications__icon" />
    </div>
  );
};

export default Notifications;
