import './Sidebar.scss';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import HealthAndSafetyRoundedIcon from '@mui/icons-material/HealthAndSafetyRounded';
import TextSnippetRoundedIcon from '@mui/icons-material/TextSnippetRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';


export const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <span className="logo">adminpanel</span>
        </div>
        <hr/>
        <div className="center">
            <ul>
                <p className="title">
                    MAIN
                </p>
                <li>
                    <DashboardRoundedIcon className='icon'/>
                    <span>Dashboard</span>
                </li>
                <p className="title">
                    LISTS
                </p>
                <li>
                    <PeopleAltRoundedIcon className='icon'/>
                    <span>Users</span>
                </li>
                <li>
                    <CategoryRoundedIcon className='icon'/>
                    <span>Products</span>
                </li>
                <li>
                    <Inventory2RoundedIcon className='icon'/>
                    <span>Orders</span>
                </li>
                <li>
                    <LocalShippingRoundedIcon className='icon'/>
                    <span>Delivery</span>
                </li>
                <p className="title">
                    USEFUL
                </p>
                <li>
                    <QueryStatsRoundedIcon className='icon'/>
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsRoundedIcon className='icon'/>
                    <span>Notifications</span>
                </li>
                <p className="title">
                    SERVICE
                </p>
                <li>
                    <HealthAndSafetyRoundedIcon className='icon'/>
                    <span>System Health</span>
                </li>
                <li>
                    <TextSnippetRoundedIcon className='icon'/>
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsIcon className='icon'/>
                    <span>Settings</span>
                </li>
                <p className="title">
                    USER
                </p>
                <li>
                    <AccountCircleRoundedIcon className='icon'/>
                    <span>Profile</span>
                </li>
                <li>
                    <ExitToAppRoundedIcon className='icon'/>
                    <span>Log Out</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
    </div>
  )
}

export default Sidebar;
