import "./App.css";
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const ReactVideoPlayer = lazy(() => import("./components/ReactVideoPlayer"));
const VideoPlaylist = lazy(() => import("./components/VideoPlaylist"));

function App() {
  return (
    <div className="App">
      <Suspense>
        <Router>
          <VideoPlaylist />
          <Routes>
            <Route path="/video/:id" element={<ReactVideoPlayer />} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
