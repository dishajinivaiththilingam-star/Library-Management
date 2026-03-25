import AddordeleteBook from "./Component/AddordeleteBook/AddordeleteBook"
import Donate from "./Component/Donate/Donate"
import Home from "./Component/Home/Home"
import Booklist from "./Component/BookList/Booklist"
import Navbar from "./Component/NavBar/Navbar"


function App() {


  return (
    <>
      <Home/>
      <Donate/>
      <AddordeleteBook/>
      
      <Home />
      <Donate />
      <Navbar />
      <Booklist />
    </>
  )
}

export default App
