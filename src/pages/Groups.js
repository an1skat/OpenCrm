import "../styles/style.css";
import "../styles/groups.css";
const Groups = () => {
  return (
      <>
          <section class="group">
      <h1 class="group-title">Группы компаний</h1>
              <button class="group-btn" type="button">Новая группа</button>
              <form class="form-group">
      <label for="phone" class="form-label">
        Телефон, название....
        <input type="text" id="phone" name="phoen" class="form-input"></input>
          </label></form>
              <button class="search-btn" type="button">Искать</button>
              </section>
    </>
  );
};
export default Groups;
