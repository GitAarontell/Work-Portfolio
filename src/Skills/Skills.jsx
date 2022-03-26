import React from "react";
import "./skills.css";
import Icons from "../Icons/Icons.jsx";
import { DiBootstrap } from "react-icons/di";

function Skills({ icon }) {
  return (
    <div className="skills">

        <h2>Tools</h2>

      <div className="innerContainer">
        <Icons icon={<DiBootstrap />}></Icons>
        <Icons icon={<DiBootstrap />}></Icons>
        <Icons icon={<DiBootstrap />}></Icons>
        <Icons icon={<DiBootstrap />}></Icons>
        <Icons icon={<DiBootstrap />}></Icons>
        <Icons icon={<DiBootstrap />}></Icons>
        <Icons icon={<DiBootstrap />}></Icons>
        <Icons icon={<DiBootstrap />}></Icons>
        <Icons icon={<DiBootstrap />}></Icons>
      </div>
    </div>
  );
}

export default Skills;
