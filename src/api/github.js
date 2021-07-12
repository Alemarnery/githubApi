import axios from "axios";

const owner = "Alemarnery";
const repo = "githubApi";

export default axios.create({
  baseURL: `https://api.github.com/repos/${owner}/${repo}`,
});
