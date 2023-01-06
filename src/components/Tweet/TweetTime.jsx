import PropTypes from "prop-types";

const TweetTime = (props) => {
  const date = `${props.date.getDate()}  ${props.date.toLocaleString("en-en", {
    month: "short",
  })}`;

  return <time> - {date}</time>;
};

TweetTime.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
};

export default TweetTime;
