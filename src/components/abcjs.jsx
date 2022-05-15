import React, { useRef, useEffect } from "react";
import abcjsObj from "abcjs";

const Abcjs = ({
  children,
  abcNotation = "",
  params = {
    staffwidth: 550,
    wrap: { minSpacing: 1, maxSpacing: 2, preferredMeasuresPerLine: 4 },
  },
}) => {
  const container = useRef(null);

  useEffect(() => {
    console.log("Width: %d", container.current.clientWidth);
    params.staffwidth = container.current.clientWidth - 20;
    abcjsObj.renderAbc(container.current, abcNotation, params);
  }, [abcNotation]);

  return (
    <div id="abc-wrap">
      <div id="canvas" ref={container} />
    </div>
  );
};

export default Abcjs;
