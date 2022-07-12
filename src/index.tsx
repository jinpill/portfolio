import ReactDOM from "react-dom/client";
import App from "./App";
import "./global.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );