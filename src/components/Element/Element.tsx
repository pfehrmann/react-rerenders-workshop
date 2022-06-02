import React, { useEffect, useState } from "react";
import "./Element.css";
import image from "./Download.png";
import { Content } from "../Content/Content";

type ElementProps = any;

export function Element(props: ElementProps) {
  return (
    <div {...props}>
      <Content />
    </div>
  );
}
