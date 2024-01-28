import { ReactNode } from 'react';

interface Props {
  href : string;
  description : ReactNode;
  video : string;
  deployment : string;
}

const HoverableDiv = ({href, description, video, deployment} : Props) => {
  return (
    <div style={{display:"flex", gap: "20px"}}>
        <div className="proj">
        <video 
            autoPlay
            muted
            preload="auto" 
            loop
            >
            <source src={video} type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
        
       </div>
       <a href={href}>{description}
       {deployment === ""? <></> :
        <a href={deployment}
          style={{
            background: "#343434",
            borderRadius: 10,
            marginLeft: 20,
            height: 30,
            width: 125,
            display: "block",
            color: "yellow",
          }}>
          ⭐Deployment
        </a>}</a>

       </div>
  );
};

export default HoverableDiv;
