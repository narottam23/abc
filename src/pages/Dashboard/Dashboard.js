import React from "react";
import "./Dashboard.css";
let firstbox = [
  {
    price: "5099",
    type: "Wallet balance",
    threshold: "Withdrawl Threshold is 1000",
  },
];
const Dashboard = () => {
  const jsondata = [
    {
      transactionID: 1,
      date: "Apr 9, 2023 10:00:04 AM",
      userID: 226145,
      type: "Loyalty",
      amount: "+400",
      balance: 5099,
    },
    {
      transactionID: 2,
      date: "Apr 9, 2023 10:00:02 AM",
      userID: 226145,
      type: "Commission",
      amount: "-0",
      balance: 4699,
    },
    {
      transactionID: 3,
      date: "Jan 24, 2023 3:00:03 PM",
      userID: 226073,
      type: "Loyalty",
      amount: "+200",
      balance: 4699,
    },
    {
      transactionID: 4,
      date: "Jan 24, 2023 3:00:01 PM",
      userID: 226073,
      type: "Commission",
      amount: "-0",
      balance: 4499,
    },
    {
      transactionID: 5,
      date: "Dec 13, 2022 3:00:05 PM",
      userID: 226028,
      type: "Loyalty",
      amount: "+400",
      balance: 4499,
    },
    {
      transactionID: 6,
      date: "Dec 13, 2022 3:00:03 PM",
      userID: 226025,
      type: "Loyalty",
      amount: "+400",
      balance: 4099,
    },
    {
      transactionID: 7,
      date: "Dec 13, 2022 3:00:01 PM",
      userID: 226028,
      type: "Commission",
      amount: "-0",
      balance: 3699,
    },
    {
      transactionID: 8,
      date: "Dec 13, 2022 3:00:01 PM",
      userID: 226025,
      type: "Commission",
      amount: "-0",
      balance: 3699,
    },
    {
      transactionID: 9,
      date: "Nov 22, 2022 3:00:03 PM",
      userID: 226007,
      type: "Loyalty",
      amount: "+380",
      balance: 3699,
    },
    {
      transactionID: 10,
      date: "Nov 22, 2022 3:00:00 PM",
      userID: 226007,
      type: "Commission",
      amount: "-0",
      balance: 3319,
    },
  ];

  return (
    <>
      <div>
        <div>
          <h1 className="page-header">Performance Dashboard</h1>
        </div>
        <div style={{ display: "flex", gap: "16px" }}>
          <div className="div1">
            <div className="price">{firstbox[0].price}</div>
            <div className="type">{firstbox[0].type}</div>
            <div className="threshold">{firstbox[0].threshold}</div>
          </div>
          <div className="div2">
            <h2 className="div2-text">Wallet Transection</h2>
            <div class="container">
              <div class="table">
                <div class="table-header">
                  <div class="header__item">
                    <a id="name" class="filter__link" href="#">
                      S.NO
                    </a>
                  </div>
                  <div class="header__item">
                    <a
                      id="wins"
                      class="filter__link filter__link--number"
                      href="#"
                    >
                      Date
                    </a>
                  </div>
                  <div class="header__item">
                    <a
                      id="draws"
                      class="filter__link filter__link--number"
                      href="#"
                    >
                      Appointment Id
                    </a>
                  </div>
                  <div class="header__item">
                    <a
                      id="losses"
                      class="filter__link filter__link--number"
                      href="#"
                    >
                      Description
                    </a>
                  </div>
                  <div class="header__item">
                    <a
                      id="total"
                      class="filter__link filter__link--number"
                      href="#"
                    >
                      Amount
                    </a>
                  </div>
                  <div class="header__item">
                    <a
                      id="total"
                      class="filter__link filter__link--number"
                      href="#"
                    >
                      Balance
                    </a>
                  </div>
                </div>
                <div className="table-content-container">
                  <div className="table-content">
                    {jsondata.map((item, index) => (
                      <div class="table-row" key={index}>
                        <div class="table-data">{index + 1}</div>
                        <div class="table-data">{item.date}</div>
                        <div class="table-data">{item.userID}</div>
                        <div class="table-data">{item.type}</div>
                        <div class="table-data">{item.amount}</div>
                        <div class="table-data">{item.balance}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: "2rem" }}>
          <div>
            <div className="div3">Total Subscriber Of Salon</div>
            <div style={{ display: "flex", gap: "1rem" }}>
              <div className="div4">Average Bill Subscriber</div>
              <div className="div5">Total Subscriber</div>
            </div>
            <p style={{ paddingLeft: "13rem", paddingTop: "2rem" }}>
              Last 30 days Subscriber
            </p>
            <div className="div6">Appointment Date</div>
          </div>
          <div className="div7">hdksdgfjdtdbfbbf</div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
