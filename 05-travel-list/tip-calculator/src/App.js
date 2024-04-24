import Service from "./components/Service";
import Result from "./components/Result";
import { useState } from "react";
import Bill from "./components/Bill";

function App() {
  const [bill, setBill] = useState("");
  const [myTip, setMyTip] = useState(0);
  const [otherTip, setOtherTip] = useState(0);
  const averageTip = bill * ((myTip + otherTip) / 2 / 100);

  function handleReset() {
    setBill("");
    setMyTip(0);
    setOtherTip(0);
  }

  return (
    <div>
      <Bill bill={bill} setBill={setBill} />
      <Service
        text="How did you like the service?"
        tip={myTip}
        setTip={setMyTip}
      />
      <Service
        text="How did your friend like the service?"
        tip={otherTip}
        setTip={setOtherTip}
      />
      <Result bill={bill} handleReset={handleReset} averageTip={averageTip} />
    </div>
  );
}

export default App;
