import { Link } from "react-router-dom";
import { NAV_ITEMS } from "../data/navigation";

export default function Navbar() {
  return (
  <nav>
    <ul>
        {NAV_ITEMS.map((item) => (
          <li key={item.path}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
    </ul>
  </nav>
  );
}
