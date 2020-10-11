import  React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


function Navigation() {

  const [showMenu, setShowMenu] = useState(false)

  let menu;

  if(showMenu){
    menu =<div className="show-menu shadow fixed top-auto mt-3 left-0 w-full 
          z-50 rounded-b-lg">
       <ul>
        <li className="p-2 pl-3 cursor-pointer">L Music Player</li>   
        <li className="p-2 pl-3 cursor-pointer">Food Order</li>   
        <li className="p-2 pl-3 cursor-pointer">Bluetooth Beacons</li>   
        <li className="p-2 pl-3 cursor-pointer rounded-b-lg">Hire Manikiran ?</li>   
        </ul> 
    </div>
  }

  return (
    <nav> 
        <span className="text-xl font-bold cursor-pointer">           
            <FontAwesomeIcon 
                icon={faBars}
                onClick={() => setShowMenu(!showMenu)}
            />           
        </span>
        {menu}
    </nav>
  );
}

export default Navigation;
