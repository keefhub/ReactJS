import Profile from "./pages/Profile";
import image from "./images/image.jpg";
import "./App.css";

function App() {
  const user = {
    name: "Ajay",
    interests: "sleeping, reading and eating",
    age: 26,
    image: image,
    color: "red",
    movie: "transformers",
  };

  return (
    <div className="App">
      <Profile user={user} />
    </div>
  );
}

export default App;
