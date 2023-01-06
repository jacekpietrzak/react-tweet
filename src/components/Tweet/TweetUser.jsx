import PropTypes from "prop-types";

const TweetUser = ({ name, handle }) => {
  return (
    <span>
      <b>{name}</b> @{handle}
    </span>
  );
};
TweetUser.propTypes = {
  name: PropTypes.string,
  handle: PropTypes.string.isRequired,
};

TweetUser.defaultProps = {
  name: "Anonim",
};

export default TweetUser;
