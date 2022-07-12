import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import Profile from "./routes/Profile";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";

const App = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </BrowserRouter>
);

export default App;