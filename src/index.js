import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ErrorBoundary from "./ErrorBoundary";
import { PlayerProvider } from "./context/PlayerContext";
import { CategoryProvider } from "./context/CategoryContext";
import { UrlProvider } from "./context/UrlContext";
import { CardProvider } from "./context/CardContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <PlayerProvider>
      <CategoryProvider>
        <UrlProvider>
          <CardProvider>
            <App />
          </CardProvider>
        </UrlProvider>
      </CategoryProvider>
    </PlayerProvider>
  </ErrorBoundary>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
