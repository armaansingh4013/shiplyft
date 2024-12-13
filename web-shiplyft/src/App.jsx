import "bootstrap/dist/css/bootstrap.min.css";
import { FrappeProvider } from 'frappe-react-sdk'
import AppRoutes from "./routes/routes";
import "./App.css";
function App() {
	

	return (
		<div className="App">
			<FrappeProvider enableSocket={true} >
				<AppRoutes />
			</FrappeProvider>
		</div>
	)
}

export default App
