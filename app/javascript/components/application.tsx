import * as React from "react";
import * as ReactDOM from "react-dom";
import CheckButton from './check';

interface AppProps {
  arg: string;
}

const App = ({ arg }: AppProps) => {
  return (
    <div>
      {`Hello, ${arg}!`}
      <CheckButton />
    </div>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById("root");
  ReactDOM.render(<App arg="Rails 7 with ESBuild" />, rootEl);
});