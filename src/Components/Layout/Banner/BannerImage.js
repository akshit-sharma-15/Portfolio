import { Col } from "../../common/Grid";
import { Flip } from "react-awesome-reveal";
import avatarImg from "../../../assets/imgs/avatar.jpeg";
import defaultAvatarImg from "../../../assets/imgs/defaultAvatar.svg";

function BannerImage({ bannerSection }) {
  const isDefaultAvatar = bannerSection.bannerAvatar === "defaultAvatar.svg";
  const avatarSrc = isDefaultAvatar ? defaultAvatarImg : avatarImg;
  
  return (
    <>
      <Col lg={4} xs={12}>
        <Flip direction="horizontal">
          <div className="hero-image shape">
            <div className={isDefaultAvatar ? "wrap-default" : "wrap-image"}>
              <img src={avatarSrc} alt="Avatar" className="hero-image_img" />
            </div>
          </div>
        </Flip>
      </Col>
      <Col xs={1} />
    </>
  );
}

export default BannerImage;
