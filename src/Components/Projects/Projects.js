import { Fade } from "react-awesome-reveal";
import ProjectCard from "./ProjectCard";
import "./project.css";
import { projectsSection } from "../../portfolio";
import Heading from "../common/Heading";
import { isMobile } from "react-device-detect";

function Projects() {
  return (
    <>
      {isMobile && <Heading heading="Projects" />}
      <section className="section section5" name="projects">
        <div className="site-container">
          <Fade direction="up">
            <div className="project-cards">
              {projectsSection.projects.map((project, i) => (
                <ProjectCard project={project} key={i} />
              ))}
            </div>
          </Fade>
        </div>
      </section>
    </>
  );
}

export default Projects;
