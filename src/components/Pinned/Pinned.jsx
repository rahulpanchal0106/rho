import { useEffect, useState } from "react";
import "./pinned.css";

function Pinned() {
  const [data, setData] = useState([]);

  async function getData() {
    const allRepos = [];
    let page = 1;
    const perPage = 100; // Maximum allowed per page by GitHub API

    try {
      while (true) {
        const resp = await fetch(`https://api.github.com/user/repos?type=all&sort=updated&direction=desc&per_page=${perPage}&page=${page}`, {
          headers: {
            Authorization: `token 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`,
            Accept: "application/vnd.github.v3+json"
          }
        });

        if (!resp.ok) {
          throw new Error(`HTTP error! status: ${resp.status}`);
        }

        const incoming = await resp.json();
        console.log(incoming)
        if (incoming.length === 0) {
          break; // No more repositories
        }

        allRepos.push(...incoming);
        page += 1;
      }

      setData(allRepos);
    } catch (e) {
      console.log("ERROR: ", e);
    }
  }

  useEffect(() => {
    getData();
    console.log(data)
  }, []);

  return (
    <div className="PinnedContainer">
      {data.length > 0 ? (
        data.map((repo) => (
          <div key={repo.id} className="repo">
            <h2><a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a></h2>
            <p>{repo.description}</p>
            <p>{repo.private ? "Private" : "Public"}</p>
            <p>{repo.deployments_url ? <a href={repo.deployments_url}>Go to Deployments</a>  : "No Deployment"}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Pinned;
