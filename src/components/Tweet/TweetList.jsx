import Tweet from "./Tweet";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import css from "./TweetList.module.css";

const TweetList = ({ tweets }) => {
  return (
    <div className={css.list}>
      {tweets.map((item) => {
        return <Tweet tweet={item} key={uuidv4()} />;
      })}
    </div>
  );
};

TweetList.propTypes = {
  tweets: PropTypes.arrayOf(PropTypes.object),
};

export default TweetList;
