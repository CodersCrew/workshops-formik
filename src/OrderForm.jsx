import React from 'react';
import Input from './Input';
import Checkbox from './Checkbox';

const handleSubmit = e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const values = {};

  for (const [key, value] of formData.entries()) {
    values[key] = value;
  }

  console.log(values);
};

const RegistrationForm = () => (
  <form onSubmit={handleSubmit}>
    <h1 class="subtitle is-4">Gdzie dostarczyć zamówienie?</h1>
    <Input name="address" label="Adres" />
    <Input name="postalCode" label="Kod pocztowy" />
    <Input name="city" label="Miasto" />
    <Input name="floor" label="Piętro" />

    <h1 class="subtitle is-4">Jak możemy się z Tobą skontaktować?</h1>
    <Input name="name" label="Imię i nazwisko" />
    <Input name="email" label="E-mail" />
    <Input name="phone" label="Numer telefonu" />

    <h1 class="subtitle is-4">Załóż konto, aby zamawiać szybciej i zyskać dostęp do historii zamówień</h1>
    <Input name="password" type="password" label="Hasło" />
    <Input name="repeatPassword" type="password" label="Powtórz hasło" />
    <Checkbox name="conditions" text="Przeczytałem i akceptuję warunki regulaminu oraz politykę prywatności" />

    <button className="button is-link" type="submit">
      Złóż zamówienie
    </button>
  </form>
);

export default RegistrationForm;
