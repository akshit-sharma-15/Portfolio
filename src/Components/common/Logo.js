import { Fade } from "react-awesome-reveal";
import { bannerSection } from "../../portfolio";

function Logo() {
  return (
    <div className="brand">
      <h1 className="logo logo--stroke logo--shadow">
        <Fade direction="left" cascade>
          {bannerSection.username}
        </Fade>
      </h1>
    </div>
  );
}

export default Logo;
