import React from "react";
import texting from "../../assests/img/texting.svg";
import chatting from "../../assests/img/chatting.svg";
import groupChat from "../../assests/img/group-chat.svg";
import Button from "./../button/Button";
import "./landingPage.scss";

const LandingPage = () => {
  return (
    <div className="landing">
      <div className="landing__heading">
        <div className="landing__logo">
          <h1>Contact</h1>
        </div>
        <div className="landing__auth">
          <Button color="primary">Login</Button>
          <Button color="danger">Join</Button>
        </div>
      </div>
      <div className="landing__main">
        <div className="landing__info">
          <h1>Contact brings the team together, wherever you are</h1>
          <h3>
            With all of your communication and tools in one place, remote teams
            will stay productive no matter where you’re working from.
          </h3>
          <Button color="danger" type="rounded">
            Join Now
          </Button>
        </div>
        <div className="landing__images">
          <img src={texting} alt="messaging" className="landing__images--1" />
          <img src={chatting} alt="chatting" className="landing__images--2" />
          <img src={groupChat} alt="groupChat" className="landing__images--3" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
