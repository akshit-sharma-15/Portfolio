import React, { useContext, Fragment } from "react";
import { Row } from "../../common/Grid";
import { InView } from "react-intersection-observer";
import { ScrollContext } from "../../../Context/scroll";
import BannerContent from "./BannerContent";
import BannerImage from "./BannerImage";
import { isMobile } from "react-device-detect";
import { bannerSection } from "../../../portfolio";
function Banner() {
  const { scrollChange } = useContext(ScrollContext);
  return (
    <section className="section section1" id="bannerSection" name="home">
      <div className="site-container">
        <InView
          onChange={(inView) => {
            if (inView) {
              scrollChange("home");
            }
          }}
        >
          <Row around="xs" middle="xs" center="xs">
            {!isMobile ? (
              <Fragment>
                {" "}
                <BannerContent bannerSection={bannerSection} />
                <BannerImage bannerSection={bannerSection} />{" "}
              </Fragment>
            ) : (
              <Fragment>
                {" "}
                <BannerImage bannerSection={bannerSection} />
                <BannerContent bannerSection={bannerSection} />{" "}
              </Fragment>
            )}
          </Row>
        </InView>
      </div>
    </section>
  );
}
export default Banner;
