
import { Link } from "react-router-dom"

function Footer(props) {
  return (
    <nav className="navFooter">
            <Link to="/">
                <div>Cheese Home
            <p className="icon">
                <i class="fa-solid fa-biohazard fa-fade"></i>
            </p>
            </div>
            </Link>
    </nav>
  )
}

export default Footer
