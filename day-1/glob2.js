const { request } = require("http");

request('www.github.com/api/createRepo', process.env.GITHUB_TOKEN);