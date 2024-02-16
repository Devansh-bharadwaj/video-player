import "./App.css";
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
const ReactVideoPlayer = lazy(() => import("./components/ReactVideoPlayer"));
const VideoPlaylist = lazy(() => import("./components/VideoPlaylist"));

function App() {
  return (
    <div className="App">
      <Suspense>
        <Router>
          <Routes>
            <Route
              path="/video/:id"
              element={[
                // <VideoPlaylist key={1} />,
                <ReactVideoPlayer key={2} />,
              ]}
            />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
