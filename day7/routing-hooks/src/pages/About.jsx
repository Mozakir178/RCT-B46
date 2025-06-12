import { useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation() ;
  console.log(location) ;
  return (
    <div style={{ padding: "1rem" }}>
      <h2>About</h2>
      <p>This is a demo multi-page product explorer app using React Router.</p>
    </div>
  );
};

export default About;
