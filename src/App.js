import { Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Blog from './pages/Blog';
import PostDetail from './pages/PostDetails';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/details' component = {PostDetail} />
      </Switch>
    </>
  );
}

export default App;
