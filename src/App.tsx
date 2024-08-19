import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contactus from "./pages/Contactus";
import Notfound404 from "./components/Notfound404";
import { useEffect, useState } from "react";
import Apploadingpage from "./components/Apploadingpage";

function App() {
  // app loading effect creation
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);
//end of app loading content

//main rendered component 
  return (
    <>
      {loading ? (
        <Apploadingpage />
      ) : (
        <Router>
          <Layout>
            <Routes>
            {/* change routes as requires */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contactus" element={<Contactus />} />
              <Route path="/*" element={<Notfound404 />} />
            </Routes>
          </Layout>
        </Router>
      )}
    </>
  );
}

export default App;
