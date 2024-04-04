import "./App.css";
import ProviderButton from "federation_provider/button";
import ProviderNavbar from "federation_provider/navbar";
import FirstContainer from "federation_provider/firstcontainer";
import ButtonApp2 from "Second_Provider/button";
import SecondContainer from "Second_Provider/secondcontainer";

const App = () => {
  return (
    <div>
      <ProviderNavbar />
      <div style={{ display: "flex", gap: "10px" }}>
        <FirstContainer />
        <SecondContainer />
      </div>

      <ButtonApp2 />
      <p>consumer is working</p>
    </div>
  );
};

export default App;
