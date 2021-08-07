import React from "react";
import { Impress, Step } from "react-impressjs";

export default React.memo(function Present() {
  return (
    <div className="Present">
      <Impress>
        <Step data={{ x: 0, y: 0 }}>
          <h1 className="_1">What is Chitr?</h1>
        </Step>
        <Step data={{ y: 1000, scale: 3 }}>
          <h1 className="_2">Drawing Collebrate Tool for RealTime Drawing!</h1>
        </Step>

        <Step data={{ x: 1000, y: -1000, scale: 5, rotateX: 45, rotateY: 45 }}>
          <h1 className="_1">What is Chitr?</h1>
        </Step>
      </Impress>
    </div>
  );
});
