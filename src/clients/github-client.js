import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  log: {
    debug: () => {},
    info: () => {},
    warn: console.warn,
    error: console.error,
  },
});

export default octokit;
