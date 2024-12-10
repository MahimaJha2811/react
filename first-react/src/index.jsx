import { createRoot } from "react-dom/client";
import { Fragment } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

const root = createRoot(document.getElementById("root"));

// function temporaryReact() {
//   return (
//     <main>
//       <img src="src/reactLogo.png" />
//       <h1>"Fun facts about React!"</h1>
//       <ul>
//         <li>"Was first released in 2013"</li>
//         <li>"Was originally created by Walke"</li>
//         <li>"Has well over 100k stars on GitHub"</li>
//         <li>"Is maintained by Meta"</li>
//         <li>"Powers thousands of enterprise apps, including mobile apps"</li>
//       </ul>
//     </main>
//   );
// }

function Page() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

root.render(<Page />);
