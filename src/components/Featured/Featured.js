import './Featured.scss';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';

const Featured = () => {
  return (
    <div className='featured'>
        <div className="top">
            <h1 className="title">Total Revenue</h1>
            <MoreVertRoundedIcon fontSize="small"/>
        </div>
        <div className="bottom">
            <div className="featuredChart">
                
            </div>
        </div>
    </div>
  )
}

export default Featured;