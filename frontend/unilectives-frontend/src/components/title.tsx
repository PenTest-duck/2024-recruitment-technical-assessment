import { useState } from 'react';

const Title = () => {
  const [titleColour, setTitleColour] = useState("text-unilectives-blue");

  const toggleTitleColour = () => {
    if (titleColour === "text-unilectives-blue") {
      setTitleColour("text-red-300");
    } else {
      setTitleColour("text-unilectives-blue");
    }
  }

  return (
    <div 
      className="title"
      onClick={toggleTitleColour}
    >
      <p>DevSoc presents</p>
      <h1 className={`font-bold text-7xl ${titleColour}`}>unilectives</h1>
      <p className="font-bold mt-3">Your one-stop shop for UNSW course and elective reviews.</p>
    </div>
  );
}

export default Title;