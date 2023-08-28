import React from "react";
import projData from "../data/projData";
import Project from "../components/project";

function Projects() {
  function createCard(project) {
    return (
      <Project
        bgcolor="success"
        header="Withdraw"
        thumbnail={project.thumbnail}
        projectName={project.projectName}
        description={project.description}
        portfolioLink={project.portfolioLink}
        repo={project.repo}
      />
    );
  }

  // Runs through the projects data and creates an element for each entry
  return projData.map((proj) => createCard(proj));
}
