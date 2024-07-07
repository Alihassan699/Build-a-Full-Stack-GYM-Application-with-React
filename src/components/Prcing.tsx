import { Check } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

function Pricing() {

  const pricing = [
    {
      title: "Quarterly",
      price: "$15",
      duration: "3 Months",
    },
    {
      title: "Half-Year",
      price: "$25",
      duration: "6 Months",
    },
    {
      title: "Yearly",
      price: "$60",
      duration: "12 Months",
    },
  ];

  return (
    <section className='pricing'>
      <h1>Elite Gym Club Plans</h1>
      <div className="wrapper">
        {pricing.map(element => {
          return (
            <div className="card" key={element.title}>
              <div className="title">
                <h1>{element.title}</h1>
                <h1>Package</h1>
                <h3>{element.price}</h3>
                <p>For {element.duration}</p>
              </div>
              <div className="description">
                <p><Check />Equipments </p>
                <p><Check />Free Training Days </p>
                <p><Check />Free Rest Rooms </p>
                <p><Check />24/7 Skilled Support </p>
                <p><Check />10 Days Freezing Options  </p>
                <Link to={"/"} >Join Us</Link>


              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Pricing;
