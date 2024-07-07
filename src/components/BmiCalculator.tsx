import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BmiCalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();
    if (!height || !weight || !gender) {
      toast.error("Please enter the valid height, weight, and gender.");
      return;
    }
    
    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      toast.warning(
        "You are underweight. Consider seeking advice from a healthcare provider."
      );
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      toast.success(
        "You have normal weight. Keep maintaining a healthy lifestyle."
      );
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      toast.warning(
        "You are overweight. Consider seeking advice from a healthcare provider."
      );
    } else {
      toast.error(
        "You are in the obese range. It is recommended to seek advice from a healthcare specialist."
      );
    }
  };

  return (
    <section className='bmi'>
      <h1>BMI Calculator</h1>
      <div className="container">
        <div className="wrapper">
          <form onSubmit={calculateBMI}>
            <div>
              <label>Height (cm)</label>
              <input
                type='number'
                placeholder='Please enter your height.'
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Weight (kg)</label> {/* Changed weight unit to kg for consistency with BMI calculation */}
              <input
                type='number'
                placeholder='Please enter your weight.'
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Gender</label>
              <select value={gender} onChange={(e) => setGender(e.target.value)} required>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <button type='submit'>Calculate BMI</button>
          </form>
        </div>
        {bmi && (
          <div className="result">
            <h2>Your BMI is: {bmi}</h2>
          </div>
        )}
        <div className="wrapper">
            <img src='/bmi.jpg' alt='bmi' />
        </div>
      </div>
    </section>
  );
}

export default BmiCalculator;
