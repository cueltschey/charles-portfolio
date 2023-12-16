import { ReactNode } from 'react';

interface Props {
  href : string;
  description : ReactNode;
  video : string;
  deployment : string;
}

const HoverableDiv = ({href, description, video, deployment} : Props) => {
  return (
        <div className="proj">
        <a href={href}>{description}</a>
        <video 
            autoPlay
            muted
            preload="auto" 
            loop
            >
            <source src={video} type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
        {deployment === ""? <></> :
        <a href={deployment}
          style={{
            zIndex: 100,
            background: "yellow",
            borderRadius: 10,
            margin: 10,
          }}>
          ⭐Deployed
        </a>}

       </div>
  );
};

export default HoverableDiv;
