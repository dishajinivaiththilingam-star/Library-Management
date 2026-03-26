import AddordeleteBook from "./Component/AddordeleteBook/AddordeleteBook"
import Booklist from "./Component/BookList/Booklist"
// import Donate from "./Component/Donate/Donate"
// import Home from "./Component/Home/Home"
import Homelist from "./Component/Home/Homelist"
import Navbar from "./Component/NavBar/Navbar"
import Donate from "./Component/Donate/Donate"
import Home from "./Component/Home/Home"


function App() {
 

  return (
    <>
       <Navbar/>
       {/* <Home/> */}
       <Homelist/>
       <Booklist/>
       <AddordeleteBook/>
       {/* <Donate/> */}
       
    <Home/>
     <Donate/>
    </>
  )
}

export default App
