import { useContext } from "react";
import { Col, Row } from "../common/Grid";
import { Fade, Flip } from "react-awesome-reveal";
import "./contact.css";
import { InView } from "react-intersection-observer";
import contactIllustration from "../../assets/imgs/contact.svg";
import { contactSection, socialNetworks } from "../../portfolio";
import { ScrollContext } from "../../Context/scroll";
import { isMobile } from "react-device-detect";
import Heading from "../common/Heading";
import { SocialLink } from "../common/SocialLink";
import githubLogo from "../../assets/logos/icons8-github-24.png";
import linkedinLogo from "../../assets/logos/icons8-linkedin-24.png";
import leetcodeLogo from "../../assets/logos/icons8-leetcode-24.png";

const socialLinks = [
  { key: "linkden", logo: linkedinLogo, alt: "LinkedIn" },
  { key: "github", logo: githubLogo, alt: "GitHub" },
  { key: "leetcode", logo: leetcodeLogo, alt: "LeetCode" },
];

function Contact() {
  const { scrollChange } = useContext(ScrollContext);

  return (
    <>
      {isMobile && <Heading heading="Contact" />}
      <section className="section section7" id="contactSection" name="contact">
        <div className="site-container">
          <InView onChange={(inView) => inView && scrollChange("contact")}>
            <Row around="xs" middle="xs" center="xs">
              <Col lg={6} xs={12}>
                <Flip direction="horizontal">
                  <img src={contactIllustration} alt="Contact" style={{ maxWidth: "100%" }} />
                </Flip>
              </Col>
              <Col lg={6} xs={12}>
                <Fade direction="up" cascade>
                  <Row around="xs">
                    <Col xs={12}>
                      <h2 className="contact_section_tagline">{contactSection.contactTagline}</h2>
                    </Col>
                    <Col xs={12}>
                      <ul className="social-networks spin-icon">
                        {socialLinks.map(({ key, logo, alt }) => 
                          socialNetworks[key] && <SocialLink key={key} href={socialNetworks[key]} logo={logo} alt={alt} />
                        )}
                      </ul>
                    </Col>
                    {contactSection.contactList.map((contact, i) => (
                      <Col xs={12} key={i}>
                        <h2 className="contact_section_contact">
                          <img
                            draggable="false"
                            className="emoji"
                            alt="💠"
                            src="https://twemoji.maxcdn.com/v/13.0.0/72x72/1f4d2.png"
                          />
                          {contact}
                        </h2>
                      </Col>
                    ))}
                  </Row>
                </Fade>
              </Col>
            </Row>
          </InView>
        </div>
      </section>
    </>
  );
}

export default Contact;
