import Editor from "@monaco-editor/react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import RegisteredBatches from "./components/RegisteredBatches/RegisteredBatches";
import AssessmentLinks from "./components/AssessmentLinks/AssessmentLinks";

function App() {
  return (
    <div className="App">
      <div className="col-12">
        {/* <Editor height="90vh" defaultLanguage="javascript" defaultValue="// some comment" />; */}
        <Navbar />
        {/* <div className="btn btn-primary">Primary</div> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registered-batches" element={<RegisteredBatches />} />
            <Route path="/assessment-links" element={<AssessmentLinks />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
