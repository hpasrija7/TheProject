import React from "react";
import e from "../images/e.jpg";

function Component4() {
  return (
    <div class="wrapper">
      <div class="container" id="item-1">
        <img src={e} alt="" />
      </div>
      <div class="container" id="item-2" style={{ textalign: "center" }}>
        <h2>Why Solar</h2>
        <p>
          Global warming is taking off at an unprecedented rate, our ecosystem
          is nearly exhausted itself due to our rapid exploitation of the
          environment. Carbon footprint is one of the leading causes.
        </p>
        <p>
          {" "}
          Climate change will have a disproportionate impact on nearly 400
          million Indians. The growth in demand rates leaves future generations
          helpless and hopeless.
        </p>{" "}
        <p>
          The non-polluting solar energy is a win-win situation for everyone,
          reducing electricity consumption cost. Rooftop solar is not only
          cleaner and cheaper but also provides tariff certainty for up to 25
          years.
        </p>
        <a
          href="/"
          style={{
            textalign: "center",
            textdecoration: "none",
            color: "black",
          }}
        >
          Learn More
        </a>
      </div>
    </div>
  );
}
export default Component4;
