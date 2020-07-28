const fetch = require("node-fetch");
const axios = require("axios").default;

export const githubV3Api = (userInput) => {
  return axios.get(`https://api.github.com/users/${userInput}/repos`);
};

export const githubV3ApiPrivateRepos = (authToken) => {
  axios.defaults.headers.common = {
    Authorization: `bearer ${authToken}`,
  };
  return axios.get(`https://api.github.com/user/repos`);
};

export const githubV4Api = (userInput, authorization) => {
  return fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `bearer ${authorization}`,
    },
    body: JSON.stringify({
      query: `
                  {
                      user(login: "${userInput}") {
                       repositories(first: 100) {
                       nodes {
                            name
                            url
                          }
                       }
                      }
                  }
              `,
    }),
  });
};

export const authTokenCheck = (authorization) => {
  return fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `bearer ${authorization}`,
    },
    body: JSON.stringify({
      query: `
                {
                    __typename
                }
                  `,
    }),
  });
};
