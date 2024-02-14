import "./App.css";
import { Suspense, lazy } from "react";
const ReactVideoPlayer = lazy(() => import("./components/ReactVideoPlayer"));

function App() {
  return (
    <div className="App">
      <Suspense>
        <ReactVideoPlayer />
      </Suspense>
    </div>
  );
}

export default App;
