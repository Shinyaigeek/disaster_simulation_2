import * as React from "react";
import { render } from "react-dom";
import { LineChart } from "./LineChart";
import { centerDifferenceMethod } from "./script/centerDifferenceMethod";
import { fill, KawaKuwa } from "./script/KawaKuwaScheme";
import { fillWind, windWardDifferenceMethod } from "./script/windWardDifferenceMethod";

render(
  <div>
    <LineChart
      label="風上差分法"
      dot={fillWind(windWardDifferenceMethod(), -10, 11)}
      dotColor="#4DFF52"
      lineColor="#87FF7C"
    />
    <LineChart
      label="中心差分法"
      dot={fill(centerDifferenceMethod(), -10, 11)}
      dotColor="#EB2825"
      lineColor="#EB5F67"
    />
    <LineChart
      label="河村・桑原スキーム"
      dot={fill(KawaKuwa(), -10, 11)}
      dotColor="#94D0FF"
      lineColor="#29AEFF"
    />
  </div>,
  document.getElementById("_app")
);
