import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SearchCards from "./SearchCards";

function SearchAnime(props) {
  const [query, setquery] = useState();
  const [Data, setData] = useState([]);
  const [L, setL] = useState(false);
  const API = `https://kitsu.io/api/edge/anime?filter[text]=$`;

  function ReadData(API) {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setData((prev) => ({ data: data.data, next: data.links.next }));
      });
  }

  function LoadMore() {
    fetch(Data.next)
      .then((res) => res.json())
      .then((data) => {
        setData((prev) => ({
          ...prev,
          data: [...prev.data, ...data.data],
          next: data.links.next,
        }));
      });
  }

  useEffect(() => {
    ReadData(API + query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const style = {
    fontSize: "1.7rem",
    textAlign: "center",
    width: "100%",
    borderRadius: "25px",
    maxWidth: "100%",
    background: "black",
    color: "white",
    padding: "20px 0",
  };
  const location = useLocation();
  useEffect(() => {
    setL(location.pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {location.pathname !== L ? null : (
        <div
          style={{
            textAlign: "center",
            position: "fixed",
            zIndex: "1",
            paddingLeft: "80px",
            width: "100%",
          }}
        >
          <input
            style={style}
            type="text"
            name="name"
            placeholder="Search..."
            onChange={(e) => {
              setquery(e.target.value);
            }}
          />
          {!query ? null : <SearchCards onClick={LoadMore} data={Data} />}
        </div>
      )}
    </div>
  );
}

export default SearchAnime;
