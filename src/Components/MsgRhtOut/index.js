import React from "react";
import "./index.css";

function MsgRhtOut(props) {
  return (
      <div className="msg_r_out">
      <div>{props.out}</div>
      <span>4:00 PM</span>
      <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-check-all"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14l.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z" />
                </svg>
      </div>
  );
}

export default MsgRhtOut;
