import { useEffect, useState } from 'react';
import './App.css';
import Food from './components/Food';
import Footer from './components/Footer';
import Header from './components/Header';
function App() {

  const APP_ID = 'bc19467e'
  const APP_KEY = 'b8277441eeefaaed464ee6f0f96f3639'


  const [recipes, setRecipes] = useState([])

  const [search, setSearch] = useState("")

  const [query, setQuery] = useState("chicken")

  useEffect(async () => {

    getData()

  }, [query])

  const getData = async () => {

    const res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=12&calories=591-722&health=alcohol-free`)

    const data = await res.json()

    setRecipes(data.hits)
  }

  const handleOnchange = e => {
    setSearch(e.target.value)
    console.log(search);
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
  }

  return (
    <div className="App">
      <Header getSearch={getSearch} handleOnchange={handleOnchange} search={search} />

      <div class="container">
        {recipes.map(recipe => (
          <Food key={recipe.recipe.label} title={recipe.recipe.label} image={recipe.recipe.image} calories={recipe.recipe.calories} />
        ))}
      </div>
      <Footer/>
    </div >


  );
}

export default App;
