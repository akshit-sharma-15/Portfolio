import React, { useContext, Fragment } from "react";
import { Col, Row } from "../common/Grid";
import { Fade, Flip } from "react-awesome-reveal";
import "./skills.css";
import { InView } from "react-intersection-observer";
import skillsIllustration from "../../assets/imgs/focused_working.svg";
import { skillsSection } from "../../portfolio";
import { ScrollContext } from "../../Context/scroll";
import { isMobile } from "react-device-detect";
import Heading from "../common/Heading";
function Skills() {
  const { scrollChange } = useContext(ScrollContext);
  const skillsSet = skillsSection.skillsSet.map((skill, i) => {
    return (
      <Col xs={2} key={i}>
        {" "}
        <i className={`${skill.fontAwesomeClassname} skill_img`}></i>{" "}
      </Col>
    );
  });
  const skillsTagLines = skillsSection.skillsTagLines.map((tagline, i) => {
    return (
      <h3 className="skills_section_skill" key={i}>
        <img
          draggable="false"
          className="emoji"
          alt="💠"
          src="https://twemoji.maxcdn.com/v/13.0.0/72x72/26a1.png"
        ></img>
        {tagline}
      </h3>
    );
  });
  return (
    <Fragment>
      {isMobile && (
        <Heading heading={"Skills"} style={{ marginBottom: "60px" }} />
      )}
      <section className="section section3" id="skillsSection" name="skills">
        <div className="site-container">
          <InView
            onChange={(inView) => {
              if (inView) {
                scrollChange("skills");
              }
            }}
          >
            <Row around="xs" middle="xs" center="xs" start="lg">
              <Col xs={12} lg={6}>
                <Flip direction="horizontal">
                  {" "}
                  <img src={skillsIllustration} alt="skills" />{" "}
                </Flip>
              </Col>
              <Col xs={12} lg={6}>
                <Fade direction="up" cascade>
                  <Row
                    around="xs"
                    middle="xs"
                    className="skills_section_skillsSets"
                  >
                    {" "}
                    {skillsSet}{" "}
                  </Row>
                  {skillsTagLines}
                </Fade>
              </Col>
            </Row>
          </InView>
        </div>
      </section>
    </Fragment>
  );
}

export default Skills;
