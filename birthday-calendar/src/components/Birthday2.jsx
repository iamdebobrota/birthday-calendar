import React from "react";
import data from "../../db.json";

const Birthday2 = () => {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div>
      <h4>Birthday Calendar</h4>
      <div className="days">
        {days.map((el) => {
          return <DayCard items={data} day={el} key={el} />;
        })}
      </div>
    </div>
  );
};

const DayCard = ({ items, day }) => {
  let newItems = items
    .filter((el) => {
      let date = new Date(el.birthday).toDateString().split(" ")[0];
      return date.toLocaleLowerCase() == day.toLocaleLowerCase();
    })
    .sort(
      (a, b) => new Date(a.birthday).valueOf() < new Date(b.birthday).valueOf()
    );

  return (
    <div className="card">
      <div className="day">{day}</div>
      <div
        className=""
        style={{
          display: "grid",
          width: "90%",
          margin: "auto",
          justifyContent: "center",
          background: "white",
          gridTemplateColumns:
            newItems.length >= 2 ? `repeat(2, 1fr)` : `repeat(1, 1fr)`,
        }}>
        {newItems.length > 0 ? (
          newItems.map((el, i) => {
            return <PersonCard key={el + i} indx={i} person={el.name} />;
          })
        ) : (
          <img
            style={{
              height: "100px",
              width: "180px",
              objectFit: "cover",
              mixBlendMode: "",
            }}
            src="https://w7.pngwing.com/pngs/432/660/png-transparent-empty-cart-illustration-thumbnail.png"
            alt="img"
          />
        )}
      </div>
    </div>
  );
};

const PersonCard = ({ indx, person }) => {
  person = person.split(" ");
  let colors = ["crimson", "yellow", "Green", "orange"];

  return (
    <div
      className="person"
      style={{ background: colors[indx % colors.length] }}>
      {person[0][0]}
      {person[1][0]}{" "}
    </div>
  );
};

export default Birthday2;
