import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import GameLayout from "./app/components/GameLayout"
import reportWebVitals from "./reportWebVitals"
import { Provider } from "react-redux"
import { store } from "./app/store"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./app/components/Layout"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"

const root = ReactDOM.createRoot(document.getElementById("root")!)

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <App />,
            },
            {
                path: "/game/:id",
                element: <GameLayout />,
            },
        ],
    },
])

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
            <ToastContainer
                position="top-center"
                autoClose={1500}
                hideProgressBar={false}
                closeOnClick
            />
        </Provider>
    </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
