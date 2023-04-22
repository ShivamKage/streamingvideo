import { Provider } from "react-redux";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Body from "./Components/Body";
import Books from "./Components/Books";
import Demo from "./Components/Demo";
import Demo2 from "./Components/Demo2";
import Header from "./Components/Header";
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage";
import store from "./Uttils/Store";
import Result from "./Components/Result";

const appRouter = createHashRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Body />
      </>
    ),
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "books",
        element: <Books />,
      },
      {
        path: "demo",
        element: <Demo />,
      },
      {
        path: "demo2",
        element: <Demo2 />,
      },
      {
        path: "/result/:data",
        element: <Result />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
