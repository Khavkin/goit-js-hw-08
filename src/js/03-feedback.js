const throttle = require('lodash.throttle');
class LocalStorage {
  static storageKey;
  static read() {
    return localStorage.getItem(this.storageKey);
  }

  static save(value) {
    localStorage.setItem(this.storageKey, value);
  }

  static remove() {
    localStorage.removeItem(this.storageKey);
  }

  static clear() {
    localStorage.clear();
  }
}

LocalStorage.storageKey = 'feedback-form-state';

const CurrentFormValues = {
  email: '',
  message: '',
};

const feedbackForm = document.querySelector('.feedback-form');

const onInputHandler = event => {
  event.preventDefault();

  CurrentFormValues[event.target.name] = event.target.value;
  try {
    LocalStorage.save(JSON.stringify(CurrentFormValues));
  } catch (error) {
    console.log(error);
  }
};

const onSubmitHandler = event => {
  event.preventDefault();

  [...event.currentTarget.elements]
    .filter(({ type }) => type != 'submit')
    .forEach(element => {
      CurrentFormValues[element.name] = element.value;
      element.value = '';
    });

  console.log(CurrentFormValues);
  LocalStorage.remove();
};

feedbackForm.addEventListener('input', throttle(onInputHandler, 500));
feedbackForm.addEventListener('submit', onSubmitHandler);

document.addEventListener('DOMContentLoaded', () => {
  try {
    const tmp = JSON.parse(LocalStorage.read());
    if (tmp) {
      CurrentFormValues.email = tmp.email;
      CurrentFormValues.message = tmp.message;
      feedbackForm.elements['email'].value = tmp.email;
      feedbackForm.elements['message'].value = tmp.message;
    }
  } catch (error) {
    console.log(error);
  }
});
