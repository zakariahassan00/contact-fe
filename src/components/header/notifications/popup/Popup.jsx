import React from "react";
import { testEvents } from "../testEvents";
import "./popup.scss";

const Popup = ({ isOpen, setIsOpen }) => {
  return (
    <div>
      {isOpen && (
        <div className="popup">
          <div className="popup__heading">
            <h3>Notifications</h3>
          </div>

          <ul className="popup__elements">
            {testEvents.map(event => (
              <li className="popup__element" onClick={() => setIsOpen(false)}>
                {event.event}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Popup;
