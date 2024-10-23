import "./Navigation.scss"
 import MenuIcon from '@mui/icons-material/Menu';
import Menu from "./Menu/Menu";
import { useTranslation } from "react-i18next"
import { useState } from "react";
import { ChangeEvent } from "react";

const Navigation = () => {
  const [menuModel, setMenuModel] = useState<boolean>(false);
  const { t, i18n } = useTranslation()
  const selectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value)
  }


  return (
    <div className='navbar'>
      <img className="navbar__img" src="https://www.dezinfeksiyatashkent.uz/assets/dez_logo2-5b433e48.png" alt="" />
      <ul className="navbar__menu">
        <a href="#asosiy">{t("basic")}</a>           
        <a href="#haqimizda">{t("about")}</a>
        <a href={"/xizmatlar"}>{t("services")}</a>
        <a href={"/faq"}>{t("faq")}</a>       </ul>
      <select onChange={selectHandler} className="navbar__option" name="" id="">
        <option value="English">{t("english")}</option>
        <option value="Русский">{t("rus")}</option>
        <option value="O`zbekcha">{t("uzbek")}</option>
      </select>
      <button className="navbar__btn">{t("btn")}</button>
      <button className="modal-btn">
      <MenuIcon  onClick={() => setMenuModel(prev => !prev)} />
      </button>
      {menuModel && <Menu />}
    </div>
  )
}

export default Navigation