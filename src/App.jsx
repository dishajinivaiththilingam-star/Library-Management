import AddordeleteBook from "./Component/AddordeleteBook/AddordeleteBook"
import Booklist from "./Component/BookList/Booklist"
import Donate from "./Component/Donate/Donate"
import Navbar from "./Component/NavBar/Navbar"


function App() {
 

  return (
    <>
       <Navbar/>
       <Booklist/>
       <AddordeleteBook/>
       <Donate/>
    </>
  )
}

export default App
