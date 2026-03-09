import React from "react";
import { Fade } from "react-awesome-reveal";
import { bannerSection } from "../../portfolio";
const logo = (
  <Fade direction="left" cascade>
    {bannerSection.username}
  </Fade>
);
function Logo() {
  return (
    <div className="brand">
      <h1 className="logo logo--stroke logo--shadow">{logo}</h1>
    </div>
  );
}

export default Logo;
