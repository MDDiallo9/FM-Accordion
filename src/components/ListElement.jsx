import React, { useState } from "react";

const ListElement = (props) => {
  const [message, setMsg] = useState(false);
  const handleClick = () => {
    setMsg(!message);
  };
  return (
    <li onClick={handleClick} className="cursor-pointer">
      <h2 className="flex justify-between text-xl font-bold">
        {props.title}
        <div className="shrink-0">
          <img
            src={
              message
                ? "./assets/images/icon-minus.svg"
                : "./assets/images/icon-plus.svg"
            }
            alt=""
          />
        </div>
      </h2>
      {message ? <p className="py-2 text-slate-500 text-sm">{props.msg}</p> : null}
      <hr className="py-2" />
    </li>
  );
};

export default ListElement;
