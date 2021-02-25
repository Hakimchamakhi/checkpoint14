import Profile from './profile/profile'

function App() {
  const handleName = e => {
    e.preventDefault();
    alert("Hakim Chamakhi");
  };

  return (
    <div className="App" style={{backgroundColor:"ButtonHighlight",padding:20,textAlign:"center"}}>
      <Profile hnf={handleName} name="Hakim Chamakhi" bio="I am a full-stack Web Application Developer, currently living in...." profession="Web developer">/profilphoto.png</Profile>
    </div>
  );
}

export default App;