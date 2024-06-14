import { useEffect, useState } from "react";
import "./pinned.css";

function Pinned() {
  const [data, setData] = useState(null);
  const token = import.meta.env.VITE_GITHUB_TOKEN;

  async function getData() {
    try {
      const resp = await fetch(`https://api.github.com/user/repos?type=all&sort=created&direction=desc&per_page=100`, {
        headers: {
          Authorization: `token ${token}`,
          Accept: "application/vnd.github.v3+json"
        },
      });

      if (!resp.ok) {
        throw new Error(`HTTP error! status: ${resp.status}`);
      }

      const incoming = await resp.json();
      console.log(incoming)
      setData(incoming);
    } catch (e) {
      console.log("ERROR: ", e);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="PinnedContainer">
      {data ? (
        data.map((repo) => (repo.owner.login=="rahulpanchal0106"?
          <div key={repo.id} className="repo">
            <h2><a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a></h2>
            <p>{repo.description}</p>
            <p>{repo.private ? "Private" : "Public"}</p>
            <p>{repo.homepage? repo.homepage  : "No wbsite"}</p>
          </div>:""
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Pinned;
