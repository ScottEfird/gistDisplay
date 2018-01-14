import { schema } from 'normalizr'

const owner = new schema.Entity('owner');
export const gistOwnerSchema =  [ { owner } ] 

const gist = new schema.Entity('gists')
export const gistObjectSchema =  [ gist ] 

export const ownerSchema =  { owner }
export const gistSchema = { gist }


export const denormalizeOwnerSchema = [ { owner } ]

export const testData = [
  {
    "url": "https://api.github.com/gists/1b0bb862ac600e980ab8ecdc015b6c0e",
    "forks_url": "https://api.github.com/gists/1b0bb862ac600e980ab8ecdc015b6c0e/forks",
    "commits_url": "https://api.github.com/gists/1b0bb862ac600e980ab8ecdc015b6c0e/commits",
    "id": "1b0bb862ac600e980ab8ecdc015b6c0e",
    "git_pull_url": "https://gist.github.com/1b0bb862ac600e980ab8ecdc015b6c0e.git",
    "git_push_url": "https://gist.github.com/1b0bb862ac600e980ab8ecdc015b6c0e.git",
    "html_url": "https://gist.github.com/1b0bb862ac600e980ab8ecdc015b6c0e",
    "files": {
      "State_of_Iowa_Salary_Book.csv": {
        "filename": "State_of_Iowa_Salary_Book.csv",
        "type": "text/csv",
        "language": "CSV",
        "raw_url": "https://gist.githubusercontent.com/anonymous/1b0bb862ac600e980ab8ecdc015b6c0e/raw/212156ff4ceac2f2b712e9348119d0a5b4f9b78d/State_of_Iowa_Salary_Book.csv",
        "size": 10905996
      }
    },
    "public": true,
    "created_at": "2017-03-27T19:44:47Z",
    "updated_at": "2017-03-27T19:44:47Z",
    "description": "",
    "comments": 0,
    "user": null,
    "comments_url": "https://api.github.com/gists/1b0bb862ac600e980ab8ecdc015b6c0e/comments",
    "truncated": false
  },
  {
    "url": "https://api.github.com/gists/64a599839281cd8fae1d76e418053a3c",
    "forks_url": "https://api.github.com/gists/64a599839281cd8fae1d76e418053a3c/forks",
    "commits_url": "https://api.github.com/gists/64a599839281cd8fae1d76e418053a3c/commits",
    "id": "64a599839281cd8fae1d76e418053a3c",
    "git_pull_url": "https://gist.github.com/64a599839281cd8fae1d76e418053a3c.git",
    "git_push_url": "https://gist.github.com/64a599839281cd8fae1d76e418053a3c.git",
    "html_url": "https://gist.github.com/64a599839281cd8fae1d76e418053a3c",
    "files": {
      "time.js": {
        "filename": "time.js",
        "type": "application/javascript",
        "language": "JavaScript",
        "raw_url": "https://gist.githubusercontent.com/Storm-coder/64a599839281cd8fae1d76e418053a3c/raw/de51bf1e1a73380167b02d7a3601ee1e4bd125e5/time.js",
        "size": 542
      }
    },
    "public": true,
    "created_at": "2017-03-27T19:44:40Z",
    "updated_at": "2017-03-27T19:44:40Z",
    "description": "Dynamic time",
    "comments": 0,
    "user": null,
    "comments_url": "https://api.github.com/gists/64a599839281cd8fae1d76e418053a3c/comments",
    "owner": {
      "login": "Storm-coder",
      "id": 24546146,
      "avatar_url": "https://avatars3.githubusercontent.com/u/24546146?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/Storm-coder",
      "html_url": "https://github.com/Storm-coder",
      "followers_url": "https://api.github.com/users/Storm-coder/followers",
      "following_url": "https://api.github.com/users/Storm-coder/following{/other_user}",
      "gists_url": "https://api.github.com/users/Storm-coder/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/Storm-coder/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/Storm-coder/subscriptions",
      "organizations_url": "https://api.github.com/users/Storm-coder/orgs",
      "repos_url": "https://api.github.com/users/Storm-coder/repos",
      "events_url": "https://api.github.com/users/Storm-coder/events{/privacy}",
      "received_events_url": "https://api.github.com/users/Storm-coder/received_events",
      "type": "User",
      "site_admin": false
    },
    "truncated": false
  }
]
