import {createRoot} from "react-dom/client"
import App from "./App"
import "./styles/style.css"
import { Provider } from "react-redux"
import { store } from "./features/store/store"
createRoot(document.getElementById('root')).render(<Provider store={store}>
    <App></App>
</Provider>)