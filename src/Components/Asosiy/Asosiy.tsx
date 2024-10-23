import "./Asosiy.scss"

const Asosiy = () => {
  
  return (
    <div className="cont">
        <div className="cont__left" data-aos="fade-right">
            <h1  className="cont__dez">Dezinfeksiya xizmati</h1>
            <div className="cont__rasm">
                <p className="cont__text">Biz Toshkentda 10 yildan beri professional dezinfeksiya ishlarini olib boramiz, shuning uchun birinchi marta zararkunandalardan qanday qutilishni bilamiz.</p>
                <img className="cont__img" src="https://www.dezinfeksiyatashkent.uz/assets/diz-main-ee209cbc.png" alt="" />
            </div>
        </div>
        <div className="cont__right" data-aos="fade-left">
            <img className="cont__pic" src="https://www.dezinfeksiyatashkent.uz/assets/hero-9df3d259.jpg" alt="" />
        </div>
    </div>
    
  )
}

export default Asosiy