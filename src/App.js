import React, { useEffect, useState } from "react";
import github from "./api/github";
import moment from "moment";

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

  console.log(commits);

  return (
    <div className="App">
      <ul class="list-group">
        {commits.map(({ sha, commit }) => {
          return (
            <li class="list-group-item" key={sha}>
              <div>
                <h3>{commit.message}</h3>
              </div>
              <div>
                {commit.committer.name} committed{" "}
                {moment(commit.committer.date).fromNow()}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
