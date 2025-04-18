import React, { useState } from "react";
import HandoffBanner from "./components/HandoffBanner";
import { syncProgress } from "./components/ProgressSync";

const App = () => {
  const [device, setDevice] = useState("TV");
  const [progress, setProgress] = useState(65);

  const handleHandoff = () => {
    syncProgress(device, progress);
    alert(`Playback resumed on your ${device}`);
  };

  return (
    <div className="App">
      <HandoffBanner device={device} />
      <button onClick={handleHandoff}>Simulate Handoff</button>
    </div>
  );
};

export default App;
