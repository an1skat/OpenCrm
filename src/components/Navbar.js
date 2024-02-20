import { Link } from "react-router-dom";
import {
  LogoSvg,
  LogoutSvg,
  SmallAvatarSvg,
  GroupSvg,
  BuildingSvg,
  ShareSvg,
  ContractSvg,
  DealSvg,
  SettingsSvg,
} from "./Svg";
import "../styles/style.css";

const Navbar = () => {
  return (
    <section className="navbar-section">
      <LogoSvg />
      <nav className="nav">
        <ul className="nav-list list">
          <li className="nav-list-item">
            <SmallAvatarSvg />
            <Link to="/home" className="nav-link link">
              Иван Иванов
            </Link>
            <LogoutSvg />
          </li>
          <li className="nav-list-item">
            <GroupSvg />
            <p to="/users" className="nav-link-text">
              Пользователи
            </p>
            <Link className="nav-link link">
              <div className="nav-link-arrow"></div>
            </Link>
          </li>
          <li className="nav-list-item">
            <BuildingSvg />
            <p to="/groups" className="nav-link-text">
              Группы компаний
            </p>
            <Link className="nav-link link">
              <div className="nav-link-arrow"></div>
            </Link>
          </li>
          <li className="nav-list-item">
            <ShareSvg />
            <p to="/clients" className="nav-link-text">
              Контрагенты
            </p>
            <Link className="nav-link link">
              <div className="nav-link-arrow"></div>
            </Link>
          </li>
          <li className="nav-list-item">
            <ContractSvg />
            <p to="/contracts" className="nav-link-text">
              Контракты
            </p>
            <Link className="nav-link link">
              <div className="nav-link-arrow"></div>
            </Link>
          </li>
          <li className="nav-list-item">
            <DealSvg />
            <p to="/deals" className="nav-link-text">
              Сделки
            </p>
            <Link className="nav-link link">
              <div className="nav-link-arrow"></div>
            </Link>
          </li>
          <li className="nav-list-item">
            <SettingsSvg />
            <p to="/settings" className="nav-link-text">
              Настройки
            </p>
            <Link className="nav-link link">
              <div className="nav-link-arrow"></div>
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
