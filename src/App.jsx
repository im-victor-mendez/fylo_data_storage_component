import './App.css'
import './styles/colors.scss'
import './styles/Mobile.scss'
import Management from './components/Management/Management'
import StorageViewer from './components/StorageViewer/StorageViewer'
import StorageMessage from './components/StorageMessage/StorageMessage'

function App() {
  return (
    <div className="App">
      <Management />
      <StorageViewer />
      <StorageMessage />
    </div>
  )
}

export default App
