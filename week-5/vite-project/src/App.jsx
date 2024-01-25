import { useEffect, useState } from "react";
import "./App.css";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/about",
    element: <div>About</div>,
  },
]);


function App() {

  const [image, setImage] = useState("Fetching image of dog...");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => setImage(data.message));
  }, []);

  return (
    <>
      <img src={image} alt="photo of a dog" width={500} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
