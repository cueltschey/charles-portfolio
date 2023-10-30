import { useState } from "react";

const OtherProj = () => {
    const [isVisible, setIsVisible] = useState(false);
    
  return (
    <>
    <div className="body three"/>
    <div className="body four">
        <div className="boxwrap">
            <div className="box cheron">
                <h1>Cheron Chatroom</h1>
                <div className={isVisible? "cont show": "cont"}>
                    <p>
                        Cheron is an automated voice assistant that can automate basic tasks.
                        The software can operate apps, google search a given query and search for locally stored files. The chat contents
                        are stored in a SQLite database so that the history is not lost. The app runs on WPF and C# but the actual functionality
                        is carried out by python.
                    </p>
                </div>
                <button 
                type="button" 
                onClick={() => setIsVisible(!isVisible)}
                className="showmore">{isVisible? "Less" : "More"}</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default OtherProj