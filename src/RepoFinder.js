import React, { useState } from "react";
import { Input, Icon, Popup, Dropdown } from "semantic-ui-react";
import { githubV3Api, githubV4Api, authTokenCheck } from "./api";

export default function RepoFinder(props) {
  const { setReposFound, setFilter } = props;
  const [userInput, setUserInput] = useState(""); //Input from both textfields
  const [loadState, setLoadState] = useState(false);
  const [errorState, setErrorState] = useState(false);
  const [searchState, setSearchState] = useState(false); //True --> User found and has repos > input is now used to filter repos / False --> User/repos not found
  const [noRepos, setNoRepos] = useState(true); //False --> the user has no public repos / True --> The user has at least 1 repo
  const [dropdownState, setDropdownState] = useState(1);
  const [userBlock, setUserBlock] = useState(false); //Used to disable fields when using the api v4 option
  const [apiAtuh, setApiAtuh] = useState(false); //True --> The token needed on apiv4 is valid
  const [authToken, setAuthToken] = useState(null); //Token needed to make queries on github's graphql api

  const onClick = async () => {
    setLoadState(true);
    setErrorState(false);

    if (dropdownState === 1) {
      await githubV3Api(userInput)
        .then((response) => {
          if (response.data.length > 0) {
            setReposFound(response.data);
            setSearchState(true);
            setNoRepos(true);
          } else {
            setNoRepos(false);
          }
        })
        .catch(() => {
          setErrorState(true);
        });
    } else {
      await githubV4Api(userInput, authToken)
        .then((res) => res.json())
        .then((json) => {
          if (json.data.user.repositories.nodes.length > 0) {
            setReposFound(json.data.user.repositories.nodes);
            setSearchState(true);
            setNoRepos(true);
          } else {
            setNoRepos(false);
          }
        })
        .catch(() => {
          setErrorState(true);
        });
    }

    setLoadState(false);
    document.getElementById("inputField").value = "";
  };

  const reset = () => {
    setFilter("");
    setSearchState(false);
    setReposFound(null);
    setErrorState(false);
    document.getElementById("inputField").value = "";
  };

  const loadAuthToken = async () => {
    setLoadState(true);
    let local;

    if (authToken && authToken.length > 0) {
      await authTokenCheck(authToken)
        .then((res) => res.json())
        .then((json) => {
          local = json;
        });

      if (local.hasOwnProperty("message")) {
        setErrorState(true);
      } else {
        setApiAtuh(true);
        setUserBlock(false);
        setErrorState(false);
      }
    }

    setLoadState(false);
  };

  const options = [
    { key: 1, text: "Api v3", value: 1 },
    { key: 2, text: "Api v4", value: 2 },
  ];

  return (
    <>
      <div className="userInput">
        <Dropdown
          options={options}
          fluid
          selection
          defaultValue={1}
          onChange={(event, { value }) => {
            reset();
            setApiAtuh(value === 1);
            setDropdownState(value);
            setUserBlock(value === 2);
          }}
        />

        <Popup
          disabled={noRepos}
          open
          position="top center"
          content={
            !noRepos
              ? `${userInput} has no public repositories`
              : "User not found"
          }
          trigger={
            <Input
              id="inputField"
              type="text"
              onChange={(e) =>
                searchState
                  ? setFilter(e.target.value)
                  : setUserInput(e.target.value)
              }
              onFocus={() => {
                setNoRepos(true);
                setErrorState(false);
              }}
              placeholder={searchState ? "Repository" : "Username..."}
              maxLength="39"
              disabled={userBlock}
              error={errorState && !userBlock}
              loading={loadState && !userBlock}
              onKeyPress={(e) => {
                if (e.key === "Enter") onClick();
              }}
            />
          }
        />
        <Icon
          size="large"
          name={searchState ? "undo" : "search"}
          disabled={userBlock}
          onClick={() => (searchState ? reset() : onClick())}
        />
      </div>

      {dropdownState === 2 && (
        <div className="authInput">
          <Popup
            position="bottom center"
            on="click"
            pinned
            content={
              <a
                href="https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token"
                target="_blank"
              >
                You need to generate a token to use the API v4
              </a>
            }
            trigger={
              <Input
                disabled={apiAtuh}
                error={errorState && userBlock}
                placeholder="Write your personal access token"
                type="text"
                onChange={(e) => setAuthToken(e.target.value)}
                maxLength="100"
              />
            }
          />
          <Icon
            name={
              apiAtuh
                ? "checkmark box"
                : loadState
                ? "sync"
                : "arrow circle right"
            }
            loading={loadState && userBlock}
            onClick={() => loadAuthToken(userInput)}
          />
        </div>
      )}
    </>
  );
}
