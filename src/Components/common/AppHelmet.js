import { Helmet } from "react-helmet-async";
import iconImg from "../../assets/imgs/icon.png";

export default function AppHelmet({ app }) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="description" content={app.description} />
      <title>{app.title}</title>
      <link rel="canonical" href="http://mysite.com/example" />
      <link rel="icon" type="image/png" href={iconImg} sizes="500x500" />
    </Helmet>
  );
}
