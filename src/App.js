import pic1 from "./Images/pic1.png";
import pic2 from "./Images/pic2.jpg";
import pic3 from "./Images/pic3.jpg";
import Cards from "./Components/Card";

function App() {
  return (
    <div className="App">
      <Cards name="Eric Feng" head="Why are there so many web startups" images={pic1} />
      <Cards name="Chasten Buttigieg" head="What Marriage means to me" images={pic2}/>
      <Cards name="Nicholas Moryl" head="Leaving san francisco" images={pic3} />
    </div>
  );
}

export default App;