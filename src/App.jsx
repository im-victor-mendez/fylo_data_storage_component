import './App.css'
import './styles/colors.scss'
import Management from './components/Management/Management'
import StorageViewer from './components/StorageViewer/StorageViewer'

function App() {
  return (
    <div className="App">
      <Management />
      <StorageViewer />
    </div>
  )
}

export default App
