import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="/seaside.jpg" alt="volkan temelli" />;
}

function Intro() {
  return (
    <>
      <h1>Volkan Temelli</h1>
      <p>
        Front-end web developer. Lorem Ipsum. Lorem Lorem Lorem.
      </p>
    </>
  );
}

function SkillList() {
  return (
    <ul className="skill-list">
      <Skill text="HTML+CSS 💪" color="#2c51c9" />
      <Skill text="Javascript 💪" color="#edce1a" />
      <Skill text="React 💪" color="#4dd3f0" />
      <Skill text="Git and GitHub &#x1F44D;" color="#e0472c" />
    </ul>
  );
}

function Skill(props) {
  return (
    <li className="skill" style={{ backgroundColor: props.color }}>
      {props.text}
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
