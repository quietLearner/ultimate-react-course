import React, { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: textColor, color: bgColor }}
    >
      {children}
    </button>
  );
}

const App = () => {
  //  const step = 3;
  //state
  const arr = useState("lol");
  //console.log(arr); // first is the value, second is function to update the value

  //state, here we are destructing the array, useState is hook
  const [step, setStep] = useState(1);
  //let [step, setStep] = useState(1);
  //const [test] = useState({ name: "lol" });
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) {
      // setStep(step - 1);
      // setStep(step - 1);

      setStep((s) => s - 1);

      //test.name = "haha" + step; //please do NOT do this, even it works
    }
  }

  function handleNext() {
    if (step < messages.length) {
      // setStep(step + 1);
      // setStep(step + 1);

      //setStep((s) => s + 1);
      setStep((s) => s + 1);
      //step = step + 1; // nothing happens
      //test.name = "haha" + step;
    }
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <Button textColor="#7950f2" bgColor="#fff" onClick={handlePrevious}>
              <span>👈</span>Previous
            </Button>

            <Button textColor="#7950f2" bgColor="#fff" onClick={handleNext}>
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
