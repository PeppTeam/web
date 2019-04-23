import React from "react";

export const Quote = ({ statement, attribution }) => (
  <>
    <p className="is-size-5 has-text-primary has-text-weight-bold	">
      {statement}
    </p>
    <p className="is-size-5 has-text-grey">{attribution}</p>
  </>
);

export const BigQuote = ({ statement }) => (
  <p className="is-size-3 has-text-primary has-text-weight-bold	">
    {statement}
  </p>
);
