import React from "react";
import styles from "./home.module.css";
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_01}>
        <div className={styles.subcontainer01}>
          <h1>Are You Starving?</h1>
          <p>Within a few clicks, find meals that are accessible near you</p>
          <button>View Menu</button>
        </div>

        <div className={styles.poster_image}>
          <img src="https://cdn.pixabay.com/photo/2023/12/20/16/21/baking-8460297_640.png" />
        </div>
      </div>

      <div styles={{ margin: "16px 0px",
        fontSize:'bold',fontFamily:'cursive'
       }}>
        <h2>What would you like to order</h2>
      </div>

      <div className={styles.searchbar}>
        <div>
          <span >search</span>
        </div>

        <div>
          <input type="text" placeholder="Find for Food" />
        </div>
      </div>
    </div>
  );
};

export default Home;
