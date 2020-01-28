import React, { useEffect } from "react";
import "./popup.scss";

const testEvents = [
  { event: "Your Frined Ahmed has sent you a Friend Request" },
  { event: "Your Frined Mohamed has sent you a Friend Request" },
  { event: "Your Frined Khaled has sent you a Friend Request" },
  { event: "Your Frined Saad has sent you a Friend Request" },
  { event: "Your Frined Ehab has sent you a Friend Request" },
  { event: "Your Frined Ragb has sent you a Friend Request" },
  { event: "Your Frined Omar has sent you a Friend Request" },
  { event: "Your Frined Abdo has sent you a Friend Request" },
  { event: "Your Frined Abdo has sent you a Friend Request" },
  { event: "Your Frined Abdo has sent you a Friend Request" }
];

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
