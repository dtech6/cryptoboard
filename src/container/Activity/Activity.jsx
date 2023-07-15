import React from "react";
import { BsArrowRight } from "react-icons/bs";
import "./activity.css";

const Activity = () => {
  const history = [
    {
      name: "Tesco Market",
      type: "Shopping",
      date: "13 Dec 2022",
      paymentType: "Online",
      amount: "$46.56",
    },
    {
      name: "Tesco Market",
      type: "Shopping",
      date: "13 Dec 2022",
      paymentType: "Online",
      amount: "$46.56",
    },
    {
      name: "Tesco Market",
      type: "Shopping",
      date: "13 Dec 2022",
      paymentType: "Online",
      amount: "$46.56",
    }
  ];

  return (
    <section className="activity">
      <div className="header">
        <h1>Activity</h1>
        <p>
          More Activity <BsArrowRight />
        </p>
      </div>

      <div className="activity-table">
        <table>
          <thead>
            <tr className="heading">
              <th>Name</th>
              <th>Type</th>
              <th>Date</th>
              <th>Payment Type</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {history.map((his) => (
              <tr>
                <td>{his.name}</td>
                <td>{his.type}</td>
                <td>{his.date}</td>
                <td>{his.paymentType}</td>
                <td>{his.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* <div className="">
        <table>
          <thead>
            <tr className="heading">
              <th>Name</th>
              <th>Type</th>
              <th>Date</th>
              <th>Payment Type</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {history.map((his) => (
              <tr>
                <td>{his.name}</td>
                <td>{his.type}</td>
                <td>{his.date}</td>
                <td>{his.paymentType}</td>
                <td>{his.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </section>
  );
};

export default Activity;
