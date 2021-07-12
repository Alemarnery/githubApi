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

  return (
    <div className="container">
      <div class="jumbotron">
        <h1 class="display-4">Alemarnery Villalobos</h1>
        <p class="lead">
          This project was created as part of a challenge from Fulltime Force by
          Alemarnery Villalobos
        </p>
        <hr class="my-4" />
      </div>

      <ul className="list-group">
        <p>
          Commits from respository:
          <a href="https://github.com/Alemarnery/githubApi" target="_blank">
            GithubApi
          </a>
        </p>

        {commits.map(({ sha, commit, author }) => {
          return (
            <li className="list-group-item" key={sha}>
              <div>
                <h3>{commit.message}</h3>
              </div>
              <div>
                <img
                  alt="Avatar"
                  src={author.avatar_url}
                  className="rounded"
                  style={{ width: 20, height: 20, marginRight: 10 }}
                />
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
