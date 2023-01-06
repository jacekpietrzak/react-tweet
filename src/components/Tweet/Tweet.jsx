import { Component } from "react";
import TweetUser from "./TweetUser";
import TweetTime from "./TweetTime";
import PropTypes from "prop-types";
import css from "./Tweet.module.css";

class Tweet extends Component {
  render() {
    console.log(this.props);
    const { user, text, date } = this.props.tweet;
    return (
      <div className={css.tweet}>
        <TweetUser name={user.name} handle={user.handle} />
        <TweetTime date={date} />
        <p>{text}</p>
      </div>
    );
  }
}

Tweet.propTypes = {
  tweet: PropTypes.shape({
    user: PropTypes.shape({
      name: PropTypes.string,
      handle: PropTypes.string.isRequired,
    }),
    date: PropTypes.instanceOf(Date).isRequired,
    text: PropTypes.string.isRequired,
  }),
};

export default Tweet;
