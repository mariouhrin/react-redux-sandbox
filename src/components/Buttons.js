import React from "react";

const Buttons = props => {
  console.log(props);
  return (
    <div>
      <div style={{ paddingTop: "10px" }}>
        <button onClick={props.increment}>increase</button>
        <button onClick={props.decrement}>decrease</button>
      </div>
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "10px"
        }}
      >
        <div
          style={{ paddingTop: "15px", background: "#f6f6f6", width: "20%" }}
        >
          <strong>Notify props area</strong>
          <p
            style={{ cursor: "pointer" }}
            onClick={() => props.notify(props.counter)}
          >
            <u>Update status:</u>
          </p>
          <p>Sum: {`${props.notifySum}`}</p>
          <p>IncClick: {`${props.notifyIncClick}`}</p>
          <p>DecClick: {`${props.notifyDecClick}`}</p>
          <p>Multiply: {`${props.multiply}`}</p>
        </div>
      </section>

      <section
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "10px"
        }}
      >
        <div
          style={{ paddingTop: "15px", background: "#FFFFE0", width: "20%" }}
        >
          <strong>Counter props area</strong>
          <p>{`current sum: ${props.counter.sum}`}</p>
          <p>{`inc clicked: ${props.counter.incClicked}`}</p>
          <p>{`dec clicked: ${props.counter.decClicked}`}</p>
        </div>
      </section>
    </div>
  );
};

export default Buttons;
