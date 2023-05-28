import Navbar from "./Navbar"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div className="bg-gray-900 min-h-screen px-4 py-2">
            <div className="w-full max-w-[1200px] mx-auto">
                <Navbar />
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
