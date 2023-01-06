import "./App.css";
import TweetApp from "./components/Tweet/TweetApp";

const TweetData = [
  {
    user: {
      name: "Jacek P",
      handle: "JP",
    },
    date: new Date(),
    text: "Laudantium ea, perferendis a repellat libero ipsam perspiciatis error amet molestias culpa saepe at nam assumenda hic consequuntur aliquid rerum voluptates suscipit!",
  },
  {
    user: {
      name: "Mark Smith",
      handle: "Marks",
    },
    date: new Date(),
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium ea, perferendis a repellat libero ipsam perspiciatis error amet molestias culpa saepe at nam assumenda hic consequuntur aliquid rerum voluptates suscipit! ",
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Tweet App</h3>
      </header>
      <TweetApp tweets={TweetData} />
    </div>
  );
}

export default App;
