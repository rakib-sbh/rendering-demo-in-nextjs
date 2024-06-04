import { cookies } from "next/headers";

const AboutPage = () => {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  console.log(theme);
  console.log("About server component");

  return <h1>About Page</h1>;
};

export default AboutPage;
