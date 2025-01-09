import A from "./components/A/a";
import Search from "./components/Search/Search";
function App() {
  const searchAPI = () => {};
  return (
    <div className="wrapper">
      <A>
        <Search action={searchAPI}></Search>
      </A>
    </div>
  );
}

export default App;
