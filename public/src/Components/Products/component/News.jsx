import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";

const News = () => {
  return (
    <div class="news">
      <div class="container">
        <h1>Mahani News</h1>
        <div class="news-container">
          <div class="news-card">
            <FontAwesomeIcon
              icon={faNewspaper}
              className="fa-newspaper"
              id="ic"
            />

            <div class="img1 img"></div>
            <div class="text">
              <p>Oh, Princess Leia, are you all right?</p>
              <div class="date">
                <span>20 February 2016</span>
                <span>2 comments</span>
              </div>
            </div>
          </div>
          <div class="news-card">
            <FontAwesomeIcon
              icon={faNewspaper}
              className="fa-newspaper"
              id="ic"
            />

            <div class="img2 img"></div>
            <div class="text">
              <p>Your time is limited...</p>
              <div class="date">
                <span>20 February 2016</span>
                <span>No comments yet</span>
              </div>
            </div>
          </div>
          <div class="news-card">
            <FontAwesomeIcon
              icon={faNewspaper}
              className="fa-newspaper"
              id="ic"
            />

            <div class="img3 img"></div>
            <div class="text">
              <p>Oh, Princess Leia, are you all right?</p>
              <div class="date">
                <span>20 February 2016</span>
                <span>No comments yet</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
