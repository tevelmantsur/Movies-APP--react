import React, { useState, useEffect } from "react";

function ActorCard(props) {
  const [Actor, SetActor] = useState([]);
  const SINGEL_ACTOR_API = `https://kitsu.io/api/edge/media-staff/${props.id}/person`;

  useEffect(
    () => {
      fetch(SINGEL_ACTOR_API)
        .then((res) => res.json())
        .then((data) => {
          SetActor((prev) => [data.data]);
        });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  let img_url;

  return !Actor
    ? "...Loading"
    : Actor.map((e) => {
        if (!e.attributes.image) {
          img_url =
            "https://pm1.narvii.com/6529/68caee022fc10f36230f46eff8e6e4386f5e11e7_hq.jpg";
        } else {
          img_url = `${e.attributes.image.original}`;
        }

        let cardBackground = {
          backgroundImage: "url(" + img_url + ")",
          height: "350px",
          backgroundSize: "cover",
          margin: "0% 10px",
          backgroundRepeat: "no-repeat",
        };

        return (
          <div key={e.id}>
            <div className="card" style={cardBackground}>
              <h3> {e.attributes.name}</h3>
              <p>Role:{props.role}</p>
            </div>
          </div>
        );
      });
}

export default ActorCard;
