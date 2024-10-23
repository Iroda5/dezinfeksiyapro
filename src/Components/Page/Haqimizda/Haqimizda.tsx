import "./Haqimizda.scss"
import BoltIcon from '@mui/icons-material/Bolt';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';

const Haqimizda = () => {
  return (
    <div className="cont" id="haqimizda">
      <div className="cont__div">
        <BoltIcon className="cont__icon"/>
        <h1 className="cont__xizmat">Tezda Xizmat Ko`rsatish</h1>
        <p className="cont__text">Arizalar kuniga 24 soat qabul qilinadi. Agar muammo shoshilinch bo`lsa, biz darhol borishimiz mumkin. Shu bilan birga sifat mukammal bo`lib qoladi.</p>
      </div>
      <div className="cont__div">
        <WorkspacePremiumIcon className="cont__icon"/>
        <h1 className="cont__xizmat">Yetuk Mutaxasisslarimiz</h1>
        <p className="cont__text">Bizning hodimlarimiz hamma narsaga g`amxo`rlik qiladi: hisob-kitoblar, xonani tayyorlash, qayta ishlash, yakuniy tozalash, ventilatsiya va nazorat tekshiruvi.</p>
      </div>
      <div className="cont__div">
        <HandshakeOutlinedIcon className="cont__icon"/>
        <h1 className="cont__xizmat">Sizga ma`qul vaqtda</h1>
        <p className="cont__text">Siz o`zingiz uchun ma`qul va qulay vaqtni tanlang va bizga murojaat qiling. Sizga kafolatlangan va samarali natijani olib boramiz.</p>
      </div>
    </div>
  )
}

export default Haqimizda