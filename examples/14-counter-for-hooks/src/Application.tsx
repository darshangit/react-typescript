import React, { ChangeEvent, useState } from 'react';

const inc = (counter: number) => counter + 1;
const dec = (counter: number) => counter - 1;

const Counter = () => {
  let [counter, setCounter] = useState(0);

  return (
    <main className="Counter">
      <h1>Days Since Last Incident</h1>
      <p className="count">{counter}</p>
      <section className="controls">
        <button onClick={() => setCounter(inc)}>Increment</button>
        <button onClick={() => setCounter(0)}>Reset</button>
        <button onClick={() => setCounter(dec)}>Decrement</button>
      </section>
      <section className="controls">
        <form onSubmit={() => {}}>
          <label htmlFor="set-to">Set Count</label>
          <input
            id="set-to"
            type="number"
            onChange={(event) => {
              setCounter(+event.target.value);
            }}
          />
          <input type="submit" />
        </form>
      </section>
    </main>
  );
};

const Application = () => <Counter />;

export default Application;
