import React from "react";
import style from "./home.module.css";
const Home = () => {
  return (
    <div className={style.container}>
      <div className={style.container_01}>
        <div className={style.subcontainer01}>
          <h1>Are You Starving?</h1>
          <p>Within a few clicks, find meals that are accessible near you</p>
          <button>View Menu</button>
        </div>

        <div className={style.poster_image}>
          <img src="https://cdn.pixabay.com/photo/2023/12/20/16/21/baking-8460297_640.png" />
        </div>
      </div>

      <div style={{ marginTop: "16px 0px" }}>
        <h2>What would you like to order</h2>
      </div>

      <div>
        <div>icon</div>

        <div>
          <input type="text" placeholder="Find for Food" />
        </div>
      </div>
    </div>
  );
};

export default Home;
