import React, { useEffect, useRef, useState } from "react";
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";

export function TheChart() {
  const filter = "";
  const chartId = "62e2e990-e5b8-4f29-8c93-c87aebd68893";
  const width = "560px";
  const height = "340px";

  const sdk = new ChartsEmbedSDK({
    baseUrl: "https://charts.mongodb.com/charts-project-0-hfrlx",
  });
  const chartDiv = useRef(null);
  const [rendered, setRendered] = useState(false);
  const [chart] = useState(
    sdk.createChart({
      chartId: chartId,
      height: height,
      width: width,
      theme: "light",
    })
  );

  useEffect(() => {
    chart
      .render(chartDiv.current)
      .then(() => setRendered(true))
      .catch((err) => console.log("Error during Charts rendering.", err));
  }, [chart]);

  useEffect(() => {
    if (rendered) {
      chart
        .setFilter(filter)
        .catch((err) => console.log("Error while filtering.", err));
    }
  }, [chart, filter, rendered]);

  return <div className="chart" ref={chartDiv} />;
}

// export default TheChart;
