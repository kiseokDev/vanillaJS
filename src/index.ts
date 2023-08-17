import Header from "./component/desktop/Header";
import "./global.css";
const container: HTMLElement | null = document.getElementById("root");

const App = () => {
  //this is the entry point of the app and not woriking now
  return ` ${Header()}`;
};

if (container) {
  container.innerHTML = App();
}
