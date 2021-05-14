import React from "react";

function News({ News }) {
  return (
    <div className="profile-header">
      <div>
        <h4 className="mb-4 text-center">Break News</h4>
        <hr />
        <h5>The end of bitcoins?</h5>
        <p>
          The cryptocurrency has lost its value, reaching a loss of 74%
          according to statistics published on ecoglobal.net
        </p>
        <button className="btn btn-secondary mb-3">Read more</button>
        <hr />
      </div>
      <div>
        <h5>The railway station hosting the Oscars</h5>
        <p>
          Union Station in Los Angeles will be one of the venues for this year's
          Oscars.
        </p>
        <button className="btn btn-secondary mb-3">Read more</button>
        <hr />
      </div>
      <div>
        <h5>Countries send urgent aid to Covid-stricken India</h5>
        <p>
          The UK is sending oxygen machines and ventilators while France and the
          US are also sending supplies.
        </p>
        <button className="btn btn-secondary mb-3">Read more</button>
        <hr />
      </div>
    </div>
  );
}

export default News;
