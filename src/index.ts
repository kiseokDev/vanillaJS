import Header from "./component/desktop/Header";
import {Main} from "./component/desktop/Main";
import "./global.css";
const container: HTMLElement | null = document.getElementById("root");

const App = () => {
  //this is the entry point of the app and not woriking now
  return ` ${Header()} ${Main()}}`;
};

if (container) {
  container.innerHTML = App();
}
