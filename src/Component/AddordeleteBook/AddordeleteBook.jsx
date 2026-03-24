// // SIMPLE LIBRARY PAGE (ONLY ADD / DELETE with background image)
// import { useState, useEffect } from "react";

// const AddordeleteBook =() => {
//   const [books, setBooks] = useState([]);
//   const [bookName, setBookName] = useState("");

//   useEffect(() => {
//     fetch("http://localhost:5000/books")
//       .then((res) => res.json())
//       .then((data) => setBooks(data));
//   }, []);

//   const addBook = async () => {
//     if (bookName.trim() === "") return;

//     const res = await fetch("http://localhost:5000/books", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ name: bookName }),
//     });

//     const newBook = await res.json();
//     setBooks([...books, newBook]);
//     setBookName("");
//   };

//   const deleteBook = async (id) => {
//     await fetch(`http://localhost:5000/books/${id}`, {
//       method: "DELETE",
//     });

//     setBooks(books.filter((book) => book.id !== id));
//   };

//   return (
//     <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f')] bg-cover bg-center flex items-center justify-center p-6">
//       <div className="bg-white/90 shadow-xl rounded-2xl p-6 w-full max-w-md">
//         <h1 className="text-2xl font-bold mb-4 text-center">
//           📚 Library System
//         </h1>

//         <div className="flex gap-2 mb-4">
//           <input
//             type="text"
//             placeholder="Enter book name..."
//             value={bookName}
//             onChange={(e) => setBookName(e.target.value)}
//             className="flex-1 border rounded-xl p-2 outline-none"
//           />
//           <button
//             onClick={addBook}
//             className="bg-blue-500 text-white px-4 py-2 rounded-xl"
//           >
//             Add
//           </button>
//         </div>

//         <ul className="space-y-2">
//           {books.map((book) => (
//             <li
//               key={book.id}
//               className="flex justify-between items-center bg-gray-100 p-3 rounded-xl"
//             >
//               <span>{book.name}</span>
//               <button
//                 onClick={() => deleteBook(book.id)}
//                 className="bg-red-500 text-white px-3 py-1 rounded-lg"
//               >
//                 Delete
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }




// export default AddordeleteBook
import { useState, useEffect } from "react";

const AddordeleteBook = () => {
  const [books, setBooks] = useState([]);

  const [form, setForm] = useState({
    bookNo: "",
    name: "",
    description: "",
    date: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addBook = async () => {
    if (form.name.trim() === "") return;

    const res = await fetch("http://localhost:5000/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const newBook = await res.json();
    setBooks([...books, newBook]);

    setForm({
      bookNo: "",
      name: "",
      description: "",
      date: "",
      price: "",
      image: "",
    });
  };

  const deleteBook = async (id) => {
    await fetch(`http://localhost:5000/books/${id}`, {
      method: "DELETE",
    });

    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f')] bg-cover bg-center flex items-center justify-center p-6">
      <div className="bg-white/90 shadow-xl rounded-2xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">
          📚 Library System
        </h1>

        {/* FORM */}
        <div className="space-y-2 mb-4">
          <input name="bookNo" placeholder="Book No" value={form.bookNo} onChange={handleChange} className="w-full border p-2 rounded-xl"/>

          <input name="name" placeholder="Book Name" value={form.name} onChange={handleChange} className="w-full border p-2 rounded-xl"/>

          <input name="description" placeholder="Description" value={form.description} onChange={handleChange} className="w-full border p-2 rounded-xl"/>

          <input type="date" name="date" value={form.date} onChange={handleChange} className="w-full border p-2 rounded-xl"/>

          <input type="number" name="price" placeholder="Price" value={form.price} onChange={handleChange} className="w-full border p-2 rounded-xl"/>

          {/* IMAGE URL */}
          <input
            type="text"
            name="image"
            placeholder="Paste Image URL"
            value={form.image}
            onChange={handleChange}
            className="w-full border p-2 rounded-xl"
          />

          <button onClick={addBook} className="w-full bg-blue-500 text-white py-2 rounded-xl">
            Add Book
          </button>
        </div>

        {/* LIST */}
        <ul className="space-y-3">
          {books.map((book) => (
            <li key={book.id} className="bg-gray-100 p-3 rounded-xl">

              {/* IMAGE */}
              {book.image && (
                <img
                  src={book.image}
                  alt={book.name}
                  className="w-full h-40 object-cover rounded-lg mb-2"
                />
              )}

              <p><b>No:</b> {book.bookNo}</p>
              <p><b>Name:</b> {book.name}</p>
              <p><b>Desc:</b> {book.description}</p>
              <p><b>Date:</b> {book.date}</p>
              <p><b>Price:</b> ₹{book.price}</p>

              <button
                onClick={() => deleteBook(book.id)}
                className="mt-2 bg-red-500 text-white px-3 py-1 rounded-lg"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
};

export default AddordeleteBook;