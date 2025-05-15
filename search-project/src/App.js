import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div>
      <div style={{
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: "center"
      }}>
        <h1>CoderByte</h1>
        <h2>SearchBar Project</h2>
      </div>

      <SearchBar />
    </div>
  );
}

export default App;
