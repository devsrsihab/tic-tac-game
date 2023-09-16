import { useState } from "react";

const Square = () => {
  // define a state
  const [squred, setsqured] = useState(null);
  //  handle click
  const handleClick = () => {
    setsqured("X");
  };
  return (
    <button onClick={handleClick} className="square border-2	border-x-2	border-y-2 w-20	h-20	 border-black m-2">
      {squred}
    </button>
  );
};

export default Square;
