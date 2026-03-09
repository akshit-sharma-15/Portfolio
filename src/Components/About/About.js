import React, { useContext, Fragment } from "react";
import { InView } from "react-intersection-observer";
import TypeWriter from "../common/TypeWriter";
import { Fade } from "react-awesome-reveal";
import "./about.css";
import { ScrollContext } from "../../Context/scroll";
import { aboutSection } from "../../portfolio";
import { isMobile } from "react-device-detect";
import Heading from "../common/Heading";
function About() {
  const { scrollChange } = useContext(ScrollContext);
  return (
    <Fragment>
      {isMobile && <Heading heading={"About"} />}
      <section
        className="about_section section section2"
        id="aboutSection"
        name="about"
      >
        <InView
          onChange={(inView) => {
            if (inView) {
              scrollChange("about");
            }
          }}
        >
          <Fade direction="up" cascade>
            <div className="container">
              <div className="device">
                <div className="frame">
                  <div className="screen">
                    <div className="window-content">
                      <h2>
                        <TypeWriter
                          lines={[
                            { text: ` ${aboutSection.admin}:~$ ${aboutSection.firstCommand}` },
                            { text: ` ${aboutSection.admin}:~$ ${aboutSection.secondCommand}` },
                            { text: aboutSection.about },
                            { text: ` ${aboutSection.admin}:~$ ` },
                          ]}
                          typingSpeed={20}
                          delayBetweenLines={1000}
                          showCursor={true}
                        />
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </InView>
      </section>
    </Fragment>
  );
}

export default About;
