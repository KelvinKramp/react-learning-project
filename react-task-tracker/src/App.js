import './App.css';
import PropTypes from 'prop-types'
import Header from './components/Header'

function App() {
  return (
    <div className="container">
      <h1>Hello from react</h1>
      <Header />
    </div>
  );
}

Header.defaultProps = {
  woman: "someone"
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default App;
