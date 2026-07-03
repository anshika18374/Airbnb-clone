import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import PropertyGrid from "./components/PropertyGrid";
import { ChandigarhProperties, dehradunProperties, delhiProperties, goaProperties, shimlaProperties } from "./data/properties";
import { Toaster } from "sonner";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Searchbar />

      <PropertyGrid title="Popular homes in Chandigarh" properties={ChandigarhProperties} />
      <PropertyGrid title="Available in Dehradun this weekend" properties={dehradunProperties} />
      <PropertyGrid title="Explore homes in New Delhi" properties={delhiProperties} />
      <PropertyGrid title="Beach stays in Goa" properties={goaProperties} />
      <PropertyGrid title="Mountain retreats in Shimla" properties={shimlaProperties} />
       <Footer />
      <Toaster />
      </div>
  );
}

export default App;