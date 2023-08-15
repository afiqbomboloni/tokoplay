import RoutesComp from "./Routes";
import { SearchProvider } from "./Contexts/SearchContext";
function App() {

  return (
    <div className="App">
      <SearchProvider>
      <RoutesComp />
      </SearchProvider>
      
    </div>
  );
}

export default App;
