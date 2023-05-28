import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="flex items-center mb-8 mt-4">
            <Link to="/">
                <img
                    src="https://kanongaming.com/wp-content/uploads/2022/11/KanonGaming100x60-01-1.png"
                    alt="logo"
                />
            </Link>
        </div>
    )
}

export default Navbar
