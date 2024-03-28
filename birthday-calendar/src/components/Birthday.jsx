import React from "react";
import data from "../../db.json";

const Birthday = () => {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let colors = ["crimson", "yellow", "Green", "orange"];

  function calculateAge(birthday) {
    const today = new Date();
    const birthDate = new Date(birthday);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  return (
    <div className="birthday">
      <div className="days">
        {days.map((el) => {
          return (
            <div key={el} className="card">
              <p className="day">{el}</p>
              <div className="persons" style={{gridTemplateColumns: `repeat()`}}>
                {data
                  .sort(
                    (a, b) =>
                      new Date(b.birthday).valueOf() -
                      new Date(a.birthday).valueOf()
                  )
                  .map((item, i) => {
                    let date = new Date(item.birthday).getDay();
                    let weekDays = days[date] == el;
                    let dob = new Date(item.birthday) - new Date();
                    let curr = new Date(dob);
                    const calculatedAge = Math.abs(
                      curr.getUTCFullYear() - 1970
                    );

                    return (
                      weekDays && (
                        <div
                          key={item.name}
                          className="person"
                          style={{
                            background: colors[Math.floor(i % colors.length)],
                          }}>
                          {item.name.split(" ")[0][0] +
                            item.name.split(" ")[1][0]}
                          - {calculatedAge}
                        </div>
                      )
                    );
                  })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Birthday;
