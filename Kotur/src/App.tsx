import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import AboutUsPage from "./pages/AboutUs/AboutUsPage";
import MenuPage from "./pages/Menu/MenuPage";
import EventsPage from "./pages/Events/EventsPage";
import GalleryPage from "./pages/Gallery/GalleryPage";
import Layout from "./pages/Layout/Layout";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/" element={<LandingPage />} />
					<Route path="/about-us" element={<AboutUsPage />} />
					<Route path="/menu" element={<MenuPage />} />
					<Route path="/events" element={<EventsPage />} />
					<Route path="/gallery" element={<GalleryPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
