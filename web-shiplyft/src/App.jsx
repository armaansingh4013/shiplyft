import "bootstrap/dist/css/bootstrap.min.css";
import { FrappeProvider } from 'frappe-react-sdk'
import AppRoutes from "./routes/routes";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	
	return (
		<div className="App">
			<FrappeProvider enableSocket={true} >
			<ToastContainer/>
				<AppRoutes />
			</FrappeProvider>
		</div>
	)
}

export default App
