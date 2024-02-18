import { Link } from "react-router-dom";
import { Logo } from "./Svg";

const Navbar = () => {
  return (
    <section className="navbar-section">
      <Logo />
      <nav className="nav">
        <ul className="nav-list list">
          <li className="nav-list-item">
            <Link to="/home" className="nav-link">
              Иван Иванов
            </Link>
          </li>
          <li className="nav-list-item">
            <Link to="/users" className="nav-link">
              Пользователи
            </Link>
          </li>
          <li className="nav-list-item">
            <Link to="/groups" className="nav-link">
              Группы компаний
            </Link>
          </li>
          <li className="nav-list-item">
            <Link to="/clients" className="nav-link">
              Контрагенты
            </Link>
          </li>
          <li className="nav-list-item">
            <Link to="/contracts" className="nav-link">
              Контракты
            </Link>
          </li>
          <li className="nav-list-item">
            <Link to="/deals" className="nav-link">
              Сделки
            </Link>
          </li>
          <li className="nav-list-item">
            <Link to="/settings" className="nav-link">
              Настройки
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
