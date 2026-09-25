import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import About from "./pages/About/AboutPage.tsx";
import Home from "./pages/Home/HomePage.tsx";
import Flowers from "./pages/Flowers/FlowerPage.tsx";
import Contact from "./pages/Contact/ContactPage.tsx";
import Reservations from "./pages/Reservations/Reservations.tsx";
import "./index.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "contact",
				element: <Contact />,
			},
			{
				path: "reservations",
				element: <Reservations />,
			},
			{
				path: "flowers",
				element: <Flowers />,
			},
		],
	},
]);
const root = document.getElementById("root");

if (!root) {
	throw new Error('Root element "root" not found');
}

ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
