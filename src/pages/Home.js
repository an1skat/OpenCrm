import "../styles/style.css"
import "../styles/home.css"

const Home = () => {
  return (
    <section className="home-section">
      <ul className="home-list list">
        <li className="home-list-item">
          <div className="home-list-text-container">
            <p className="home-list-number">15</p>
            <h2 className="home-list-title">пользователей проявили интерес</h2>
          </div>
          <div className="home-list-btn-container">
            <button type="button" className="home-list-btn">обработать</button>
            <p className="home-list-btn-text">Обработайте заявки пользователей, создайте контрагентов или отметьте их как просмотренные.</p>
          </div>
        </li>
        <li className="home-list-item">
          <div className="home-list-text-container">
            <p className="home-list-number">23</p>
            <h2 className="home-list-title">контрагента ожидают в стадии “Подписание <br /> контракта”</h2>
          </div>
          <div className="home-list-btn-container">
            <button type="button" className="home-list-btn">обработать</button>
            <p className="home-list-btn-text">Подпишите контракты с контрагентами или переведите их в архивные</p>
          </div>
        </li>
        <li className="home-list-item">
          <div className="home-list-text-container">
            <p className="home-list-number">2</p>
            <h2 className="home-list-title">сделки с близким сроком завершения</h2>
          </div>
          <div className="home-list-btn-container">
            <button type="button" className="home-list-btn">обработать</button>
            <p className="home-list-btn-text">Проверьте исполнение обязательство по контракту, отметьте сделки как выполненные или перенести срок исполнения</p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Home;
