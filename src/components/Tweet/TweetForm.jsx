import { Component } from "react";
import PropTypes from "prop-types";

class TweetForm extends Component {
  state = {
    text: "",
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  //   setRef = (node) => (this.inputField = node);

  handleChange = (event) => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTweet(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    const { text } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Write your message"
            onChange={this.handleChange}
            value={text}
          />
          <button type="submit">Tweet it!</button>
          {/* {text && <p>Podglad: {text}</p>} */}
        </form>
      </div>
    );
  }
}

export default TweetForm;
