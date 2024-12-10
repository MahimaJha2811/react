import { createRoot } from "react-dom/client";
// import { Fragment } from "react";
// import Header from "./components/Header";
// import MainContent from "./components/MainContent";
// import Footer from "./components/Footer";
const root = createRoot(document.getElementById("root"));
import App from "./assets/AppComponents/App";

function Page() {
  return (
    <>
      <App />
    </>
  );
}

root.render(<Page />);
