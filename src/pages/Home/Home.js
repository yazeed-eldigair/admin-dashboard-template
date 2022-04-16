import Chart from '../../components/Chart/Chart';
import Featured from '../../components/Featured/Featured';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Widget from '../../components/Widget/Widget';
import './Home.scss';

export const Home = () => {
  return (
    <div className='home'>
        <Sidebar/>
        <div className="homeContainer">
          <Navbar/>
          <div className="widgets">
            <Widget type="user"/>
            <Widget type="order"/>
            <Widget type="earnings"/>
            <Widget type="balance"/>
          </div>
          <div className="charts">
            <Featured/>
            <Chart/>
          </div>
        </div>
    </div>
  )
}

export default Home;