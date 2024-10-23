import "./Menu.scss"

import { Link } from 'react-router-dom'


const Menu = () => {
  
  return (
 <div className="modalka">
    <ul className="modalka__menu">
      <Link to={"/asosiy"}>Asosiy</Link>
      <div className="modalka__line"></div>
      <Link to={"/haqimizda"}>Biz Haqimizda</Link>
      <div className="modalka__line"></div>
      <Link to={"/xizmatlar"}>Xizmatlar</Link>
      <div className="modalka__line"></div>
      <Link to={"/faq"}>FAQ</Link>
    </ul>
 </div>
  )
}

export default Menu