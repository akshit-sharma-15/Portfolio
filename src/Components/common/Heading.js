import { Col, Row } from "./Grid";
import { Fade } from "react-awesome-reveal";

function Heading({ heading }) {
  return (
    <Row center="xs">
      <Col xs={8}>
        <div className="banner-content">
          <h1 style={{ textShadow: "2px 2px #7f5af0" }}>
            <Fade direction="up" cascade>
              {heading}
            </Fade>
          </h1>
        </div>
      </Col>
    </Row>
  );
}

export default Heading;
