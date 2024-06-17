import ProjectCard from "../projectsCards/ProjectCard";
import Bg from "../bg/Bg"
import "./projects.css"
import PinnedProjectCard from "../projectsCards/PinnedProjectCard";
function Projects(){
    return(
        <div className="projects" id="projects">
            <PinnedProjectCard tech={["mongodb","expressjs","reactjs","nodejs","css","tailwind","vite"]} name="Foxus AI" url="https://foxus-ai.onrender.com" about="We made this app to enhance the learning experience with AI and LLMs." subtitle="AI Generated Focused Learning Sessions" image="/public/p3.jpg" />
            <PinnedProjectCard tech={["mongodb","expressjs","nodejs","html","css","js"]} name="GIFTO" url="https://gifto.onrender.com" about="This app is made for the citizens of GIFT city, to keep track of events happening in the city. " subtitle="What's up in the city today?" image="/public/p2.JPG" />
            <PinnedProjectCard tech={["expressjs","nodejs"]} name="PingIt" url="https://pingit-9cj7.onrender.com" about="I made this tool to keep my important servers active, and not getting a shut down during inactivity." subtitle="Escaping the server inactivity restrictions" image="/public/p1.JPG" />
            <PinnedProjectCard tech={["mongodb","expressjs","nodejs","html","css","js"]} name="ChatBison" url="https://chatbison.onrender.com" about="My first GenAI app, Learned so much stuff here." subtitle="A kind of ChatGPT clone" image="/public/p4.JPG" />
            <PinnedProjectCard tech={["threejs","webpack","html","css","js","blender"]} name="Monkee" url="https://monkee.onrender.com" about="My first Three.js website, I made this piece to test my Three.js skills." subtitle="A 3D Landing Page Concept" image="/public/p5.JPG" />
            <PinnedProjectCard tech={["mongodb","expressjs","html","css","js","cpp","nodejs"]} name="Manhole Detection" url="https://iot-based-manhole-detection.onrender.com" about="My first IoT app, This portal is connected with hardware data and municipal corporations, making the reporting process easier." subtitle="IoT based sewer lid monitoring system" image="/public/p6.JPG" />
            <div className="alot" style={{
                position:"absolute",
                right: window.screen.width<500?"-220px":"-140px",
                top:window.screen.width<500?"480vh":"360vh",
                transform:"rotate(90deg)",
                letterSpacing:"20px"
            }}>
                I mean... " A LOT "
            </div>
        </div>
    )
}

export default Projects;