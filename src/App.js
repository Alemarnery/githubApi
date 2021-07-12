import React, { useEffect, useState } from "react";
import github from "./api/github";

function App() {
  const [commits, setCommits] = useState([]);

  useEffect(() => {
    async function getCommitHistory() {
      const { data } = await github.get("/commits");
      setCommits(data);
    }

    if (!commits.length > 0) {
      getCommitHistory();
    }
  }, [commits]);

  return (
    <div className="App">
      {commits.map((commit) => {
        return <div>{commit.sha}</div>;
      })}
    </div>
  );
}

export default App;
