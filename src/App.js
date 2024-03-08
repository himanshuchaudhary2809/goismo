import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";

import Accessmanagement from "./pages/Accessmanagement ";
import Projectconfiguration from "./pages/Projectconfiguration";

function App() {
	return (
		<BrowserRouter>
			{/* <Layout> */}
			<Routes>
				<Route path="/homepage" element={<HomePage />} />
				<Route path="/accessmanagement" element={<Accessmanagement />} />
				<Route
					path="/projectconfiguration"
					element={<Projectconfiguration />}
				/>
			</Routes>
			{/* </Layout> */}
		</BrowserRouter>
	);
}

export default App;
