import css from "./Admin.module.css";
import { useState } from 'react';

export default function Admin() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

  const submit = (e) => {
      e.preventDefault();
      // TODO: add auth logic
      alert(login + " " + password)
  }  
  return (
    <div>
      <form onSubmit={submit} className={css.form}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Login
          </label>
          <input type="text" class="form-control" value={login} onChange={(e) => setLogin(e.target.value) } />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            value={password} onChange={(e) => setPassword(e.target.value) }
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Войти
        </button>
      </form>
    </div>
  );
}
