import React, { useState, useEffect } from "react";

import { BASE_URL, USERS } from "../constants/constants";
import axios from "axios";

function SocialSearch() {
  useEffect(() => {
    axios.get(BASE_URL + USERS).then(results => {
      console.log(results);
    });
  }, []);
  const handleChange = input => {};
  const handleFollow = e => {
    e.target.textContent === "Follow"
      ? (e.target.textContent = "Unfollow")
      : (e.target.textContent = "Follow");
  };

  return (
    <div className="App">
      <h1>Search For a Friend</h1>
      <form>
        <input type="text" name="search" className="" onChange={handleChange} />
      </form>
      <div className="card-deck"></div>
    </div>
  );
}
export default SocialSearch;
