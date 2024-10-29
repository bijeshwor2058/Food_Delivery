import styles from "./reviews.module.css";
import img_01 from '../../assets/review_img_01.png'
import img_02 from '../../assets/review_img_02.png'
import img_03 from '../../assets/review_img_03.png'

const Reviews = () => {
  return (
    <div>
      <div className={styles.reviews_container}>
        <div>
          <h1>Reviews</h1>
        </div>

        <div className={styles.rating}>Rating</div>

        <div className={styles.write_reviews}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="3.3em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              color: " rgb(250, 74, 12)",
              width: "50px",
              height: "auto,",
            }}
          >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6.43 9.57L12 15l-1.57-3.43L7 10l3.43-1.57L12 5l1.57 3.43L17 10l-3.43 1.57z"></path>
          </svg>

          <textarea
            placeholder="Write Review"
            name="review"
            id="reviews"
          ></textarea>
          <button>Add</button>
        </div>
      </div>

      <div className={styles.img_container} >
        <h2>Images From Our Customers</h2>
        <img className={styles.reviews_img} src={img_01} alt="" />&nbsp;
        <img className={styles.reviews_img} src={img_02} alt="" />&nbsp;
        <img className={styles.reviews_img} src={img_03} alt="" />
      </div>
    </div>
  );
};

export default Reviews;
