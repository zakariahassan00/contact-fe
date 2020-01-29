import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import onClickOutside from "react-onclickoutside";
import Popup from "./popup/Popup";
import { testEvents } from "./testEvents";
import "./notifications.scss";

function Notifications() {
  const [isOpen, setIsOpen] = useState(false);
  Notifications.handleClickOutside = () => setIsOpen(false);

  return (
    <div className="notifications">
      <div className="notifications__icon" onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon="bell" className="notifications__icon" />

        {testEvents.length > 0 && (
          <div className="notifications__badge">{testEvents.length}</div>
        )}
      </div>

      <Popup isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => Notifications.handleClickOutside
};

export default onClickOutside(Notifications, clickOutsideConfig);
