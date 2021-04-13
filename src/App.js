import "./App.css";
import CategoryHeader from "./CategoryHeader";
import Header from "./Header";
import Navigation from "./Navigation";
import Page from "./Page";

function App() {
  return (
    <div className="app">
      <Header />
      <CategoryHeader />
      <Page />
    </div>
  );
}

export default App;
