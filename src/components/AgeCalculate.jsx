import { useState } from "react";

function AgeCalculate() {
  const [age, setAge] = useState("");
  const [days, setDays] = useState(null);

  function calculateDays() {
    setDays(age * 365);
  }

  return (
    <div>
      <h2>Age Calculator</h2>
      <input
        type="number"
        placeholder="Enter your age in years"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={calculateDays}>Calculate in Days</button>
      {days && <p>Your age in days: {days}</p>}
    </div>
  );
}
export default AgeCalculate;
