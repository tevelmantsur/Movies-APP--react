import React, { useState, useEffect } from "react";

import SingelCardDetails from "./SingelCardDeatils";

function SingelAnime(props) {
  const [Singel, setSingel] = useState([]);
  const SINGEL_API = `https://kitsu.io/api/edge/anime?filter[id]=`;

  const readSingel = (API) => {
    let isMounted = true;
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) setSingel((prev) => [...data.data]);
      });
    return () => {
      isMounted = false;
    };
  };

  useEffect(() => {
    readSingel(SINGEL_API + props.cardNumber);
  }, [props.cardNumber]);

  return (
    <div style={{ background: "black" }}>
      <SingelCardDetails data={Singel} />
    </div>
  );
}

export default SingelAnime;
