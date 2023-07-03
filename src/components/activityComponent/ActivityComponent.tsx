import React, {useState } from "react";
import "./ActivityComponent.scss";


const ActivityComponent = () => {
 

  const [showHint, setShowHint] = useState(false);
  // const [title] = useState<string>("");
  // const [content, setContent] = useState<string>("");

  // useEffect(() => {
  //   setContent(data.hint[locale]);
  //   setTitle(data.title[locale]);
  // }, []);

  // const handleToggleHint = useCallback(() => {
  //   setShowHint(true);
  // }, []);

  const handleToggleHint = () => {
    setShowHint(!showHint);
  };

  return (
    <div id="activity" className="card my-3">
      <div className="card-header">
        <h1 className="card-title">Prashant interview task</h1>
      </div>
      <div className="card-body">
        <p>EN_ Hint_Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            
            Facilisis leo vel fringilla est ullamcorper eget.</p>
        <div className="text-end">
          <button onClick={handleToggleHint} className="btn-end btn btn-hint">
            {showHint ? ("hideHint") : ("showHint")}
          </button>
        </div>
      </div>
      {showHint && (
        <div className="card-footer">
          <p>EN_ Hint_Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            
Facilisis leo vel fringilla est ullamcorper eget.</p>

          
        </div>
      
      )}
    </div>
  );
};

export default ActivityComponent;
