import { Component } from "react";
import TweetForm from "./TweetForm";
import TweetList from "./TweetList";

class TweetApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: this.props.tweets,
    };
  }

  addTweet = (text) => {
    const newTweet = {
      user: {
        name: "Jacek P",
        handle: "JP",
      },
      date: new Date(),
      text: text,
    };

    this.setState((state) => ({
      tweets: [newTweet, ...state.tweets],
    }));
  };

  render() {
    console.log("from TweetApp: ", this.state);
    return (
      <div>
        <TweetForm onSubmit={this.addTweet} />
        <TweetList tweets={this.state.tweets} />
      </div>
    );
  }
}

export default TweetApp;
