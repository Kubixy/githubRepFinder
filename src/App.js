import React, { useState } from "react";
import RepoFinder from "./RepoFinder";
import { List, Header, Icon } from "semantic-ui-react";
import "./App.scss";

function App() {
  const [reposFound, setReposFound] = useState(null); //Contains the array of repos returned by Github
  const [filter, setFilter] = useState(null); //Searchbar filter

  return (
    <div className="App">
      <Header as="h1" icon>
        <Icon name="github" />
        Search for your repositories on GitHub!
      </Header>

      <RepoFinder setReposFound={setReposFound} setFilter={setFilter} />

      <div className="repoList">
        {reposFound &&
          reposFound.map(
            (x, i) =>
              //Returns every value if the filter has no value
              //Looks for matches if filter has at least 1 character
              (!filter ||
                x.name
                  .toLowerCase()
                  .trim()
                  .match(filter.toLowerCase().trim())) && (
                <List celled>
                  <List.Item>
                    <List.Content>
                      <List.Header
                        key={i}
                        as="a"
                        //The object returned by the api v3 has the repo url on html_url
                        //the api v4 has it on url
                        href={x.hasOwnProperty("html_url") ? x.html_url : x.url}
                        target="_blank"
                      >
                        {x.name}
                      </List.Header>
                    </List.Content>
                  </List.Item>
                </List>
              )
          )}
      </div>
    </div>
  );
}

export default App;
