import { useEffect, useState } from "react";
import "./pinned.css";
import ProjectCard from "../projectsCards/ProjectCard";
import Bg from "../bg/Bg";

function Pinned() {
  const [data, setData] = useState(null);
  const [showAll, setShowAll] = useState(false);
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
      console.log(incoming);
      setData(incoming);
    } catch (e) {
      console.log("ERROR: ", e);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const handleShowAll = () => {
    setShowAll(true);
  };

  return (
    <div className="PinnedContainer">
      {data ? (
        <>
          {data.slice(0, showAll ? data.length : 22).map((repo) => (
            repo.owner.login === "rahulpanchal0106" ? (
              <ProjectCard
                key={repo.id}
                name={repo.name}
                gh={repo.html_url}
                url={repo.homepage ? repo.homepage : null}
                about={repo.description}
              />
            ) : null
          ))}
          {!showAll && data.length > 22 && (
            <button style={{
              background:"gray",
              width:"87%",
              height:"3em",
              borderRadius:"11px",
              cursor:"pointer",
              color:"cyan",
              border:"white 2px solid"
            }} onClick={handleShowAll}>Load All</button>
          )}
        </>
      ) : (
        <p>Loading...</p>
      )}
      {/* <Bg/> */}
    </div>
  );
}

export default Pinned;
