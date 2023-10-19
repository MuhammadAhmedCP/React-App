import * as React from "react";
import * as ReactDOM from "react-dom";
import Login from './Login';
import './Login.css';
interface AppProps {
  arg: string;
}

const App = ({ arg }: AppProps) => {
  return (
    <div>
      <Login /> 
    </div>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById("root");
  ReactDOM.render(<App arg="Rails 7 with ESBuild" />, rootEl);
});