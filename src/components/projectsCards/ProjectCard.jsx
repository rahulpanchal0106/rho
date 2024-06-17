import { FileOpenRounded, GitHub, OpenInBrowser, OpenInFull, OpenInNew } from "@mui/icons-material"
import "./projectCard.css"
function ProjectCard({name,url,about,gh}){
    return (
        // <div classNameName="projectCard">
        //     <img src={image} alt="" />
        //     <p>{name}</p>
        //     <p>{url}</p>
        //     <p>{about}</p>
        // </div>

        <div className="card">
        <div className="text">
            <span>{name}</span>
            <p className="subtitle">{about}</p>
        </div>
        <div className="icons">
            <a style={{
                width:url?"50%":"100%"
            }} className="btn" target="_blank" href={gh}>
               <GitHub/>
            </a>
            {url?
            <a className="btn" target="_blank" href={url}>
                <OpenInNew/>
            </a>:null}
            {/* <a className="btn" href="#">
            <svg y="0" xmlns="http://www.w3.org/2000/svg" x="0" width="100" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" height="100" className="svg-icon">
                <path stroke-width="8" stroke-linejoin="round" stroke-linecap="round" fill="none" d="M21.9,50h0M50,50h0m28.1,0h0M25.9,50a4,4,0,1,1-4-4A4,4,0,0,1,25.9,50ZM54,50a4,4,0,1,1-4-4A4,4,0,0,1,54,50Zm28.1,0a4,4,0,1,1-4-4A4,4,0,0,1,82.1,50Z">
                </path>
            </svg>
            </a> */}
        </div>
    </div>
    )
}

export default ProjectCard