import { AuthProvider } from "./context/AuthContext";
import LoginPage from "./pages/LoginPage";
import ListPage from "./pages/ListPage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
return ( <AuthProvider> <ProtectedRoute> <ListPage /> </ProtectedRoute> </AuthProvider>
);
}

export default App;
