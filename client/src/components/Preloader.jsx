import { useEffect, useState } from "react";
import "../styles/preloader.css";

const Preloader = ({ children }) => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // ⭐ 5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div id="preloader">
        <h1>RAJESH</h1>
        <p>Passionate Web Developer & Code Lover</p>
      </div>
    );
  }

  return children;
};

export default Preloader;
