import React from "react";

const Result = ({ bill, handleReset, averageTip }) => {
  return (
    <>
      {bill > 0 && (
        <div>
          <p>
            You pay ${bill + averageTip} (${bill} + ${averageTip} tip)
          </p>
          <button onClick={handleReset}>Reset</button>
        </div>
      )}
    </>
  );
};

export default Result;
