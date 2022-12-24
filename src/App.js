import './App.css';
import { GrReactjs } from 'react-icons/gr';
import { FaJava } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';
import { DiJavascript1 } from 'react-icons/di';



const image = require('./Assets/B4373.jpg');
function App() {
  return (
    <div className="App">
        <div className='leftWrapper'>
          <div className='titleBox'>
            <h1>Sankeerthan V R</h1>
            <button>Follow</button>
          </div>
          <h3 className="nameTag">Associate Software Engineer</h3><br /><br />
          <div className='skillBox'>
            <div>
              <GrReactjs style={{ fontSize: '16PX', margin: '9px', }} />
              <p>ReactJS</p>
            </div>
            <div>
              <FaJava style={{ fontSize: '16PX', margin: '9px', }} />
              <p>JAVA</p>
            </div>
            <div>
              <DiJavascript1 style={{ fontSize: '16PX', margin: '9px', }} />
              <p>JavaScript</p>
            </div>
            <div>
              <SiMysql style={{ fontSize: '16PX', margin: '9px', }} />
              <p>SQL</p>
            </div>
          </div>
        </div>
        <div className='rightWrapper'>
          <img src={image} alt='myImg' className='userImg'></img>
        </div>
    </div>
  );
}

export default App;
