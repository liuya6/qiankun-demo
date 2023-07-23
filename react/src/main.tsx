import "./publicPath";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";

renderWithQiankun({
  mount(props) {
    console.log("mount");
    render(props);
  },
  bootstrap() {
    console.log("bootstrap");
  },
  unmount(props: any) {
    console.log("unmount");
    // const { container } = props;
    // const mountRoot = container?.querySelector("#root");
    // ReactDOM.unmountComponentAtNode(
    //   mountRoot || document.querySelector("#root")
    // );
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}

function render(props) {
  const { container } = props;
  ReactDOM.createRoot(
    container
      ? container.querySelector("#root")
      : document.querySelector("#root")
  ).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
