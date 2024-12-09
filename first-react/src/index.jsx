import { createRoot } from "react-dom/client";
import { Fragment } from "react";

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

function Header() {
  return (
    <header className="nav-bar">
      <img src="src/reactLogo.png" className="nav-logo" />
      <nav>
        <ul className="nav-list">
          <li className="nav-list-item">Pricing</li>
          <li className="nav-list-item">About</li>
          <li className="nav-list-item">Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <main>
      <h1>"Reasons I'm excited to learn React"</h1>
      <ol>
        <li>
          React is a popular library, so I will be able to fit in with all the
          coolest devs out there! 😎
        </li>
        <li>
          I am more likely to get a job as a front end developer if I know React
        </li>
      </ol>{" "}
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <small>© 2024 Jha development. All rights reserved</small>
    </footer>
  );
}
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
