import Donate from "./Component/Donate/Donate"
import Home from "./Component/Home/Home"

import AddordeleteBook from "./Component/AddordeleteBook/AddordeleteBook";
import Booklist from "./Component/BookList/Booklist";
import Donate from "./Component/Donate/Donate";
import Home from "./Component/Home/Home";
import Homelist from "./Component/Home/Homelist";
import Navbar from "./Component/NavBar/Navbar";



function App() {
  return (
    <>
       
    <Navbar/>
      <Booklist/>
      <Donate/>
      <Homelist/>
      <Home/>
      <AddordeleteBook/>
    <Home/>
     <Donate/>
    </>
  );
}

export default App