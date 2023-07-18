import "./App.css";
import Articles from "./component/Articles/Articles";
import UserProfile from "./component/UserProfile/";

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h1> React Skeleton Loading </h1>
      </header>
      <div className="app__content">
        <Articles />
        <UserProfile />
      </div>
    </div>
  );
}

export default App;
