const { Octokit } = require('@octokit/rest');

// All API queries are made with the same octokit instance
export default new Octokit();