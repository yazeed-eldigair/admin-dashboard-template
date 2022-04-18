import Chart from '../../components/Chart/Chart';
import Featured from '../../components/Featured/Featured';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import TransactionsTable from '../../components/Table/Table';
import Widget from '../../components/Widget/Widget';
import './Home.scss';

export const Home = ({aspect, title}) => {
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
            <Chart aspect={2/1} title={"Last 6 Months (Revenue)"}/>
          </div>
          <div className="listContainer">
            <div className="listTitle">
              Latest Transactions
            </div>
            <TransactionsTable/>
          </div>
        </div>
    </div>
  )
}

export default Home;