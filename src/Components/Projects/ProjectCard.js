import React, { useContext } from "react";
import { InView } from "react-intersection-observer";
import { ScrollContext } from "../../Context/scroll";
import projectImg from "../../assets/imgs/dummy-project.png";
function ProjectCard({ project }) {
  const { scrollChange } = useContext(ScrollContext);
  return (
    <InView
      onChange={(inView) => {
        if (inView) {
          scrollChange("projects");
        }
      }}
    >
      <div className="project-card">
        <div className="content-wrapper">
          <img src={projectImg} alt="" className="project-card-img" />
          <div className="card-content">
            <div className="project-name">{project.projectName}</div>
            <div className="card-bio">{project.projectBio}</div>
            <div className="project-links" style={{marginTop: "15px"}}>
              {project.demoLink && <a href={project.demoLink} target="_blank" rel="noopener noreferrer" style={{marginRight: "15px", color: "#7f5af0", fontWeight: "bold", textDecoration: "underline"}}>Demo <i className="fas fa-external-link-alt" style={{fontSize: "12px", marginLeft: "4px"}}></i></a>}
              {project.repoLink && <a href={project.repoLink} target="_blank" rel="noopener noreferrer" style={{color: "#7f5af0", fontWeight: "bold", textDecoration: "underline"}}>Repo <i className="fab fa-github" style={{fontSize: "12px", marginLeft: "4px"}}></i></a>}
            </div>
          </div>
        </div>
        <div className="languages">
          <div className="languages-profile">
            <div className="languages-name">
              {project.stackList.map((stack, i) => {
                return <span key={i}>{stack}</span>;
              })}
            </div>
          </div>
        </div>
      </div>
    </InView>
  );
}

export default ProjectCard;
