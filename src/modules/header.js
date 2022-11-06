import '../styles/header.css';

const header = () => {
  const div = document.createElement('div');
  div.classList.add('header');
  div.innerHTML = `<label>City: </label> <input type="search"/>`;
  return div;
};

export default header;
