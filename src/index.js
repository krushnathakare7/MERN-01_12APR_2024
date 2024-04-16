import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import Counter from "./Counter";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
<div>
    <App />
    <Counter diff= {1} />
    <Counter diff={10}/>
</div>
);
