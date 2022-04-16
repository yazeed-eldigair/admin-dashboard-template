import "./Navbar.scss";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import FullscreenExitRoundedIcon from '@mui/icons-material/FullscreenExitRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchTwoToneIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageRoundedIcon className='icon' />
            English
          </div>
          <div className="item">
            <DarkModeRoundedIcon className='icon'/>
          </div>
          <div className="item">
            <FullscreenExitRoundedIcon className='icon'/>
          </div>
          <div className="item">
            <NotificationsRoundedIcon className='icon'/>
            <div className="counter">3</div>
          </div>
          <div className="item">
            <ChatBubbleRoundedIcon className='icon'/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <FormatListBulletedRoundedIcon className='icon'/>
          </div>
          <div className="item">
            
            <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" alt="" className="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;