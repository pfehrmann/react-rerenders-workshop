import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import "./App.css";
import { useRerender } from "../../hooks/useRerender";
import { CostlyToRender, Memoized } from "../CostlyToRender/CostlyToRender";
import { useLatest } from "../../hooks/useLatest";
import { useStrangerThings } from "../../hooks/useStrangerThings";

const style = { minHeight: 100 };

export function App() {
  const { rerenders, rerender } = useRerender();
  const [value, setValue] = useState("");

  const latestValue = useRef(value);
  useEffect(() => {
    latestValue.current = value;
  }, [value]);
  const someValue = useCallback(() => {
    setValue((prev) => prev + 1);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Rerenders</p>
      </header>
      <main className="App-main">
        <div className="input">
          <button onClick={rerender}>Rerender #{rerenders}</button>
          <input
            onChange={(event) => setValue(event.target.value)}
            value={value}
          ></input>
        </div>
        <div>
          <h1>Costly to render:</h1>
        </div>
        <div>
          <Memoized value={someValue} />
        </div>
      </main>
    </div>
  );
}

const Children = React.memo(() => <p>Hello</p>);
