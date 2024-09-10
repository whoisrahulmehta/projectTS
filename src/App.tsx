import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layouts/PrimaryLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contactus from "./pages/Contactus";
import { useEffect, useState } from "react";
import Apploadingpage from "./components/Apploadingpage";

function App() {
  // app loading effect creation
  const [loading, setLoading] = useState<boolean>(false);
  // useEffect(() => {
  //   const timer = setTimeout(() => setLoading(true), 3000);
  //   return () => clearTimeout(timer);
  // }, []);
  //end of app loading content

  //main rendered component
  return (
    <>
      {loading ? (
        <Apploadingpage />
      ) : (
        <Router>
          <Routes>
            {/* change routes as requires */}
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contactus" element={<Contactus />} />
            </Route>
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
