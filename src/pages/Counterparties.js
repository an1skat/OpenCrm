const Counterparties= () => {
    return (
      <>
        <section className="counterparties">
        <div className="counterparties-div"> <h1 className="counterparties-div-title">Контрагенты </h1>
          <button className="counterparties-div-btn">Новый контрагент</button>
        </div>
        <ul className="counterparties-mesenges-list list">
          <li className="counterparties-meseges-item">
            <h2 className="counterparties-meseges-item-subtitle">Ожидают подписания контракта</h2>
            <p className="counterparties-meseges-item-text">Обработайте этих клиентов или отложите подписание контракта</p>
          </li>
          <li className="counterparties-meseges-item">
            <h2 className="counterparties-meseges-item-subtitle">Ожидают поставки</h2>
            <p className="counterparties-meseges-item-text">Контрагенты, у которых близится срок завершения сделки. Обработайте их или перенесите даты завершения сделки.</p>
          </li>
          <li className="counterparties-meseges-item">
            <h2 className="counterparties-meseges-item-subtitle">Клиенты в стадии сделки</h2>
            <p className="counterparties-meseges-item-text">Контрагенты, с которыми есть незавершенные сделки. Сроки поставок впереди, срочности в обработке этих контрагентов нет.</p>
          </li>
        </ul>
          <form className="counterparties-form">
          <input type="text" name="name" placeholder="Телефон, название...."className="counterparties-form-input" />
          <button type="submit" className="counterparties-form-btn">Искать</button>
          </form>
        </section> 
        <section> 
          <table>
            <thead>
              <tr>
                <th> Контрагент</th>
                <th> Главный контакт</th>
                 <th>Должность </th>
                <th> Сделки</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ИП Иванов Иван Иванович</td>
                <td><a href="ИвановИванИванович">Иванов Иван Иванович</a></td>
                <td><a href="ip.ivanov@nomail.com">ip.ivanov@nomail.com</a></td>
                <td><p>Гендиректор</p></td>
                <td><p>2</p></td>
                <td><p>1</p></td>
              </tr>
              <tr>
                <td>ИП Иванов Иван Иванович</td>
                <td><a href="ИвановИванИванович">Иванов Иван Иванович</a></td>
                <td><a href="ip.ivanov@nomail.com">ip.ivanov@nomail.com</a></td>
                <td><p>Гендиректор</p></td>
                <td><p>2</p></td>
                <td><p>2</p></td>
              </tr>
              <tr>
                <td>ИП Иванов Иван Иванович</td>
                <td><a href="ИвановИванИванович">Иванов Иван Иванович</a></td>
                <td><a href="ip.ivanov@nomail.com">ip.ivanov@nomail.com</a></td>
                <td><p>Гендиректор</p></td>
                <td><p>2</p></td>
                <td><p>1</p></td>
              </tr>
              <tr>
                <td>ИП Иванов Иван Иванович</td>
                <td><a href="ИвановИванИванович">Иванов Иван Иванович</a></td>
                <td><a href="ip.ivanov@nomail.com">ip.ivanov@nomail.com</a></td>
                <td><p>Гендиректор</p></td>
                <td><p>2</p></td>
                <td></td>
              </tr>
              <tr>
                <td>ИП Иванов Иван Иванович</td>
                <td><a href="ИвановИванИванович">Иванов Иван Иванович</a></td>
                <td><a href="ip.ivanov@nomail.com">ip.ivanov@nomail.com</a></td>
                <td><p>Гендиректор</p></td>
                <td><p>2</p></td>
                <td><p>1</p></td>
              </tr>
              <tr>
                <td>ИП Иванов Иван Иванович</td>
                <td><a href="ИвановИванИванович">Иванов Иван Иванович</a></td>
                <td><a href="ip.ivanov@nomail.com">ip.ivanov@nomail.com</a></td>
                <td><p>Гендиректор</p></td>
                <td><p>2</p></td>
                <td></td>
              </tr>
              <tr>
                <td>ИП Иванов Иван Иванович</td>
                <td><a href="ИвановИванИванович">Иванов Иван Иванович</a></td>
                <td><a href="ip.ivanov@nomail.com">ip.ivanov@nomail.com</a></td>
                <td><p>Гендиректор</p></td>
                <td><p>2</p></td>
                <td></td>
              </tr>
              <tr>
                <td>ИП Иванов Иван Иванович</td>
                <td><a href="ИвановИванИванович">Иванов Иван Иванович</a></td>
                <td><a href="ip.ivanov@nomail.com">ip.ivanov@nomail.com</a></td>
                <td><p>Гендиректор</p></td>
                <td><p>2</p></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </section>
      </>
  );
};

export default Counterparties;
