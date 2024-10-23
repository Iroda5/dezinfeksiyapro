import "./Footer.scss"
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className="footer__div">
            <div className="footer__mal">
                <h1 className="footer__qol">Ma`lumotingizni qoldiring</h1>
                <input className="footer__input" type="text" placeholder="Ismingiz" />
                <input className="footer__input" type="text" placeholder="+99890 123-45-67" />
                <button className="footer__yub">Yuborish</button>
            </div>
            <img className="footer__pos" src="https://www.dezinfeksiyatashkent.uz/assets/contact-a5f11f68.png" alt="" />
        </div>
    </div>
        {/* <div className="footer__line"></div> */}
        <div className="footer__contact">
        <img className="footer__img" src="https://www.dezinfeksiyatashkent.uz/assets/dez_logo2-5b433e48.png" alt="" />
        <div className="footer__two">
        <div className="footer__tact">
            <RoomOutlinedIcon className="footer__icon"/>
            <h4>O`zbekiston, Toshkent shahri</h4>
            <ArrowOutwardOutlinedIcon className="footer__icon"/>
        </div>
        <div className="footer__tact">
            <LocalPhoneOutlinedIcon className="footer__icon"/>
            <h4>+99899 119 99 33</h4>
            <ArrowOutwardOutlinedIcon className="footer__icon"/>
        </div>   

        </div>
        </div>
    </>
  )
}

export default Footer