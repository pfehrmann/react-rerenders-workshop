import React, { useEffect, useState } from "react";
import { useStrangerThings } from "../../hooks/useStrangerThings";
import "./CostlyToRender.css";
import image from "./Download.png";

type CostlyToRenderProps = any;

export function CostlyToRender(props: CostlyToRenderProps) {
  return (
    <div className="costly">
      <pre>{JSON.stringify(props, replacer, 2)}</pre>
      {props.slot}
      {props.children}
      {Array.from({ length: 50 }).map((_, elem) => (
        <div
          key={elem + Math.random()}
          className={`elem`}
          onClick={() => props?.value?.()}
          style={props.style}
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <img key={index} src={image} alt="image" />
          ))}
          <div className="tech-debt">
            {Array.from({ length: 10 }).map((_, index) => (
              <img key={`tech-debt-${index}`} src={image} alt="image" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

const Content = React.memo((props: any) => (
  <>
    {Array.from({ length: 50 }).map((_, elem) => (
      <div
        key={elem + Math.random()}
        className={`elem`}
        onClick={() => props?.value?.()}
        style={props.style}
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <img key={index} src={image} alt="image" />
        ))}
        <div className="tech-debt">
          {Array.from({ length: 10 }).map((_, index) => (
            <img key={`tech-debt-${index}`} src={image} alt="image" />
          ))}
        </div>
      </div>
    ))}
  </>
));

export const Memoized = React.memo(CostlyToRender);

function replacer(k: string, v: unknown) {
  if (["slot", "children"].includes(k)) return;
  if (typeof v === "function") return v.name ?? "some function";
  return v;
}
