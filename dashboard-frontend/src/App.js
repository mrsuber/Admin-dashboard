import Topbar from './components/topbar/Topbar'
import Sidbar from './components/sidebar/Sidebar'
import './app.css'
function App() {
  return (
    <div>
      <Topbar/>
      <div className="container">
        <Sidbar />
        <div className="others">
          other pages
        </div>
      </div>
    </div>
  );
}

export default App;
