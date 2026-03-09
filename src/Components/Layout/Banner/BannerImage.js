import React, { Fragment } from "react";
import { Col } from "../../common/Grid";
import { Flip } from "react-awesome-reveal";
function BannerImage({ bannerSection }) {
  return (
    <Fragment>
      {" "}
      <Col lg={4} xs={12}>
        <Flip direction="horizontal">
          <div className="hero-image shape">
            {" "}
            <div
              className={
                bannerSection.bannerAvatar === "defaultAvatar.svg"
                  ? "wrap-default"
                  : "wrap-image"
              }
            >
              <img
                src={require(`../../../assets/imgs/${bannerSection.bannerAvatar}`)}
                alt=""
                className="hero-image_img"
              />
            </div>
          </div>
        </Flip>
      </Col>
      <Col xs={1} />
    </Fragment>
  );
}

export default BannerImage;
