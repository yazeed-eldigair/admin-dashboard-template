import Sidebar from '../../components/Sidebar/Sidebar';
import './Home.scss';

export const Home = () => {
  return (
    <div className='home'>
        <Sidebar/>
        <div className="homeContainer">
          Container
        </div>
    </div>
  )
}

export default Home;