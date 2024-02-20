import "../styles/style.css"
import "../styles/settings.css"

const Settings = () => {
    return (
        <>
            <section className="settings">
                <h1 className="settings-name">Настройки</h1>
                <p className="settings-subtitle">Параметр</p>
                <p className="settings-subtitle">Значение</p>
                <hr className="settings-hr"></hr>
                <ul className="list settings-list">
                    <li className="settings-item">
                        <p className="settings-item-text">Название компании</p>
                        <p className="settings-item-text">ООО “Иванов и партнеры”</p>
                        <button className="settings-item-btn">
                            {/* свг */}
                        </button>
                    </li>
                    <li className="settings-item">
                        <p className="settings-item-text">Валюта по-умолчанию</p>
                        {/* инпут с выбором чего то */}
                        <button className="settings-item-btn">
                            {/* свг */}
                        </button>
                    </li>
                    <li className="settings-item">
                        <p className="settings-item-text">Разрешить пользователям самостоятельную регистрацию</p>
                        {/* 2 инпута с выбором да/нет (типо только 1 или только 2) */}
                        <button className="settings-item-btn">
                            {/* свг */}
                        </button>
                    </li>
                </ul>
        </section>
        </>
    )
}
export default Settings;