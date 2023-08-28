import React from "react";

// inclusion of a Card component that all our other components will be able to reference the info of
function Project(props) {
  // check if background color is set -- if not, set bg color
  function classes() {
    const bg = props.bgcolor ? "bg-" + props.bgcolor : " ";
    const txt = props.txtcolor ? "text-" + props.txtcolor : "text-white";
    return "card mb-3 " + bg + " " + txt;
  }

  // check for existence of properties, and add to page if exists
  return (
    <div className={classes()} id="card">
      <img
        className="card-image"
        src={props.thumbnail}
        width="100%"
        height="100%"
        fill="#55595c"
      />
      <div
        className="card-header"
        style={{ fontSize: "1.5em" }}
        x="50%"
        y="50%"
        fill="#eceeef"
        dy=".3em"
      >
        {props.projectName}
      </div>
      <div className="card-body">
        {props.description && <p className="card-title">{props.description}</p>}
        {props.portfolioLink && (
          <a target="_blank" rel="noopener noreferrer">
            Page
          </a>
        )}
        {props.repo && (
          <a target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}

export default Project;
