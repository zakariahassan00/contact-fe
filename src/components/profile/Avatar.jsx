import React, { useRef } from "react";

const Avatar = ({ img, alt, changePic }) => {
  const fu = useRef(null);

  const selectFile = () => {
    fu.current.click();
  };

  const upload = e => {
    let file = e.target.files[0];

    const f = new FormData();
    f.append("image", file, file.name);

    changePic(f);
  };

  return (
    <React.Fragment>
      {!img ? (
        <div className="profile__avatar--blank">
          <h1>{alt}</h1>
        </div>
      ) : (
        <img src={img} alt="profile" />
      )}

      <div className="profile__avatar--changePic">
        <input ref={fu} onChange={upload} type="file" />

        <span onClick={() => selectFile()}>Change</span>
      </div>
    </React.Fragment>
  );
};

export default Avatar;
