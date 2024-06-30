import React from "react";
import styles from "../styles/Members.module.css"
import MembersDetails from "./MembersDetails";
import Eriko from "../assets/eriko.png";
import Ramune from "../assets/ramune.png";
import Mio from "../assets/mio.png";
import Mikan from "../assets/mikan.png";
import Nana from "../assets/nana.png";
import Satomi from "../assets/satomi.png";
import Momomi from "../assets/momomi.png";
import Keina from "../assets/keina.png";
import Airi from "../assets/airi.png";



const Members: React.FC = () => {

    return (
        <>
            <h3 className={styles.membersHeader}>Members</h3>
            <section className={styles.membersSection}>
            <div className={styles.memberContainer}>
                <MembersDetails name={
                    <>
                    <span className={`${styles.eriko} ${styles.memberName}`}>城田えりこ</span>
                    <br/>
                    <span className={styles.normalTxt}>Shirota Eriko</span>
                    </>} 
                    hobby={
                        <>
                        <span className={styles.memberHobby}>趣味</span>
                        <br/>
                        <span className={styles.normalTxt}>お散歩</span>
                        </>}
                    skill={
                        <>
                        <span className={styles.memberHobby}>特技</span>
                        <br/>
                        <span className={styles.normalTxt}>焼肉屋さんで、テーブル全員分のお肉をやきながら、自分もみんなと同じかそれ以上のスピードで食べられること。</span>
                        </>}
                    color={
                        <>
                        <span className={`${styles.eriko} ${styles.colorBadge}`}>● Royal Blue</span>
                        </>}
                    birthday={
                        <>
                        <span className={`${styles.erikoBackground} ${styles.box4}`}>BIRTH.</span>
                        <span className={styles.normal4}>1997.7.14</span>
                        </>}
                    blood={
                        <>
                        <span className={`${styles.erikoBackground} ${styles.box4}`}>BLOOD</span>
                        <span className={styles.normal4}>B型</span>
                        </>}
                    height={
                        <>
                        <span className={`${styles.erikoBackground} ${styles.box4}`}>HEIGHT</span>
                        <span className={styles.normal4}>160cm</span>
                        </>}
                    born={
                        <>
                        <span className={`${styles.erikoBackground} ${styles.box4}`}>BORN</span>
                        <span className={styles.normal4}>東京</span>
                    </>}
                    imageSource={Eriko}
                />

                <MembersDetails name={
                    <>
                    <span className={`${styles.ramune} ${styles.memberName}`}>水海らむね</span>
                    <br/>
                    <span className={styles.normalTxt}>Mizuumi Ramune</span>
                    </>} 
                    hobby={
                        <>
                        <span className={styles.memberHobby}>趣味</span>
                        <br/>
                        <span className={styles.normalTxt}>カメラ</span>
                        </>}
                    skill={
                        <>
                        <span className={styles.memberHobby}>特技</span>
                        <br/>
                        <span className={styles.normalTxt}>水泳</span>
                        </>}
                    color={
                        <>
                        <span className={styles.ramuneColorBadge}>● Andalusian White</span>
                        </>}
                    height={
                        <>
                        <span className={`${styles.ramuneBackground} ${styles.box4}`}>HEIGHT</span>
                        <span className={styles.normal4}>158cm</span>
                        </>}
                    born={
                        <>
                        <span className={`${styles.ramuneBackground} ${styles.box4}`}>BORN</span>
                        <span className={styles.normal4}>長崎</span>
                        </>}
                    uni={
                        <>
                        <span className={`${styles.ramuneBackground} ${styles.box4}`}>UNIV.</span>
                        <span className={styles.normal4}>聖心女子大学</span>
                    </>}
                    imageSource={Ramune}
                />

                <MembersDetails name={
                    <>
                    <span className={`${styles.mio} ${styles.memberName}`}>毛塚みお</span>
                    <br/>
                    <span className={styles.normalTxt}>Keizuka Mio</span>
                    </>} 
                    hobby={
                        <>
                        <span className={styles.memberHobby}>趣味</span>
                        <br/>
                        <span className={styles.normalTxt}>お菓子作り</span><br/>
                        <span className={styles.normalTxt}>ドラマ鑑賞、ギター</span>
                        </>}
                    skill={
                        <>
                        <span className={styles.memberHobby}>特技</span>
                        <br/>
                        <span className={styles.normalTxt}>ソフトボール、水泳</span><br/>
                        <span className={styles.normalTxt}>ロンダート</span>
                        </>}
                    color={
                        <>
                        <span className={`${styles.mio} ${styles.colorBadge}`}>● Ice Blue</span>
                        </>}
                    birthday={
                        <>
                        <span className={`${styles.mioBackground} ${styles.box4}`}>BIRTH.</span>
                        <span className={styles.normal4}>1995.10.2</span>
                        </>}
                    blood={
                        <>
                        <span className={`${styles.mioBackground} ${styles.box4}`}>BLOOD</span>
                        <span className={styles.normal4}>不明</span>
                        </>}
                    height={
                        <>
                        <span className={`${styles.mioBackground} ${styles.box4}`}>HEIGHT</span>
                        <span className={styles.normal4}>159cm</span>
                        </>}
                    born={
                        <>
                        <span className={`${styles.mioBackground} ${styles.box4}`}>BORN</span>
                        <span className={styles.normal4}>埼玉</span>
                    </>}
                    imageSource={Mio}
                />

                <MembersDetails name={
                    <>
                    <span className={`${styles.mikan} ${styles.memberName}`}>月乃瀬みかん</span>
                    <br/>
                    <span className={styles.normalTxt}>Tukinose Mikan</span>
                    </>} 
                    hobby={
                        <>
                        <span className={styles.memberHobby}>趣味</span>
                        <br/>
                        <span className={styles.normalTxt}>アニメ鑑賞</span><br/>
                        <span className={styles.normalTxt}>漫画を読む、カラオケ</span>
                        </>}
                    skill={
                        <>
                        <span className={styles.memberHobby}>特技</span>
                        <br/>
                        <span className={styles.normalTxt}>イラストを描くこと</span>
                        </>}
                    color={
                        <>
                        <span className={`${styles.mikan} ${styles.colorBadge}`}>● Cherry Red</span>
                        </>}
                    birthday={
                        <>
                        <span className={`${styles.mikanBackground} ${styles.box4}`}>BIRTH.</span>
                        <span className={styles.normal4}>1995.5.24</span>
                        </>}
                    blood={
                        <>
                        <span className={`${styles.mikanBackground} ${styles.box4}`}>BLOOD</span>
                        <span className={styles.normal4}>A型</span>
                        </>}
                    height={
                        <>
                        <span className={`${styles.mikanBackground} ${styles.box4}`}>HEIGHT</span>
                        <span className={styles.normal4}>150cm</span>
                        </>}
                    born={
                        <>
                        <span className={`${styles.mikanBackground} ${styles.box4}`}>BORN</span>
                        <span className={styles.normal4}>札幌</span>
                    </>}
                    uni={
                        <>
                        <span className={`${styles.mikanBackground} ${styles.box4}`}>UNIV.</span>
                        <span className={styles.normal4}>青山学院大学</span>
                    </>}
                    imageSource={Mikan}
                />

                <MembersDetails name={
                    <>
                    <span className={`${styles.nana} ${styles.memberName}`}>星野奈々</span>
                    <br/>
                    <span className={styles.normalTxt}>Hoshino Nana</span>
                    </>} 
                    hobby={
                        <>
                        <span className={styles.memberHobby}>趣味</span>
                        <br/>
                        <span className={styles.normalTxt}>アニソンでDJ、アイカツ</span>
                        <br/>
                        <span className={styles.normalTxt}>リラックマと遊ぶ</span>
                        </>}
                    skill={
                        <>
                        <span className={styles.memberHobby}>特技</span>
                        <br/>
                        <span className={styles.normalTxt}>卓球</span>
                        </>}
                    color={
                        <>
                        <span className={`${styles.nana} ${styles.colorBadge}`}>● Lemon Yellow</span>
                        </>}
                    birthday={
                        <>
                        <span className={`${styles.nanaoBackground} ${styles.box4}`}>BIRTH.</span>
                        <span className={styles.normal4}>1995.10.2</span>
                        </>}
                    blood={
                        <>
                        <span className={`${styles.nanaBackground} ${styles.box4}`}>BLOOD</span>
                        <span className={styles.normal4}>不明</span>
                        </>}
                    height={
                        <>
                        <span className={`${styles.nanaBackground} ${styles.box4}`}>HEIGHT</span>
                        <span className={styles.normal4}>159cm</span>
                        </>}
                    born={
                        <>
                        <span className={`${styles.nanaBackground} ${styles.box4}`}>BORN</span>
                        <span className={styles.normal4}>埼玉</span>
                    </>}
                    imageSource={Nana}
                />

                <MembersDetails name={
                    <>
                    <span className={`${styles.satomi} ${styles.memberName}`}>坂巻里美</span>
                    <br/>
                    <span className={styles.normalTxt}>Sakamaki Satomi</span>
                    </>} 
                    hobby={
                        <>
                        <span className={styles.memberHobby}>趣味</span>
                        <br/>
                        <span className={styles.normalTxt}>カラオケ・妄想</span>
                        </>}
                    skill={
                        <>
                        <span className={styles.memberHobby}>特技</span>
                        <br/>
                        <span className={styles.normalTxt}>ダンス</span>
                        </>}
                    color={
                        <>
                        <span className={`${styles.satomi} ${styles.colorBadge}`}>● Carnation Pink</span>
                        </>}
                    birthday={
                        <>
                        <span className={`${styles.satomiBackground} ${styles.box4}`}>BIRTH.</span>
                        <span className={styles.normal4}>1993.12.30</span>
                        </>}
                    blood={
                        <>
                        <span className={`${styles.satomiBackground} ${styles.box4}`}>BLOOD</span>
                        <span className={styles.normal4}>AB型</span>
                        </>}
                    height={
                        <>
                        <span className={`${styles.satomiBackground} ${styles.box4}`}>HEIGHT</span>
                        <span className={styles.normal4}>162cm</span>
                        </>}
                    imageSource={Satomi}
                />

                <MembersDetails name={
                    <>
                    <span className={`${styles.momomi} ${styles.memberName}`}>望桃美</span>
                    <br/>
                    <span className={styles.normalTxt}>Mochi Momomi</span>
                    </>} 
                    hobby={
                        <>
                        <span className={styles.memberHobby}>趣味</span>
                        <br/>
                        <span className={styles.normalTxt}>カメラ、猫カフェ巡り</span>
                        </>}
                    skill={
                        <>
                        <span className={styles.memberHobby}>特技</span>
                        <br/>
                        <span className={styles.normalTxt}>水泳、寝ること</span>
                        </>}
                    color={
                        <>
                        <span className={`${styles.momomi} ${styles.colorBadge}`}>● Shell Pink</span>
                        </>}
                    birthday={
                        <>
                        <span className={`${styles.momomiBackground} ${styles.box4}`}>BIRTH.</span>
                        <span className={styles.normal4}>1996.12.8</span>
                        </>}
                    blood={
                        <>
                        <span className={`${styles.momomiBackground} ${styles.box4}`}>BLOOD</span>
                        <span className={styles.normal4}>O型</span>
                        </>}
                    height={
                        <>
                        <span className={`${styles.momomiBackground} ${styles.box4}`}>HEIGHT</span>
                        <span className={styles.normal4}>168cm</span>
                        </>}
                    born={
                        <>
                        <span className={`${styles.momomiBackground} ${styles.box4}`}>BORN</span>
                        <span className={styles.normal4}>愛知</span>
                    </>}
                    imageSource={Momomi}
                />
                <MembersDetails name={
                    <>
                    <span className={`${styles.keina} ${styles.memberName}`}>一瀬恵菜</span>
                    <br/>
                    <span className={styles.normalTxt}>Ichinose Keina</span>
                    </>} 
                    hobby={
                        <>
                        <span className={styles.memberHobby}>趣味</span>
                        <br/>
                        <span className={styles.normalTxt}>北海道の馬産地へ育こと</span><br/>
                        <span className={styles.normalTxt}>ギター。作詞作曲、ゲーム</span><br/>
                        <span className={styles.normalTxt}>世界両行ごっこ、乗馬</span><br/>
                        <span className={styles.normalTxt}>ダンス(hiphop)</span>
                        </>}
                    skill={
                        <>
                        <span className={styles.memberHobby}>特技</span>
                        <br/>
                        <span className={styles.normalTxt}>歌を歌うこと</span><br/>
                        <span className={styles.normalTxt}>犬の鳴き真似</span>
                        </>}
                    color={
                        <>
                        <span className={`${styles.keina} ${styles.colorBadge}`}>● Sax Blue</span>
                        </>}
                    birthday={
                        <>
                        <span className={`${styles.keinaBackground} ${styles.box4}`}>BIRTH.</span>
                        <span className={styles.normal4}>1996.12.8</span>
                        </>}
                    blood={
                        <>
                        <span className={`${styles.keinaBackground} ${styles.box4}`}>BLOOD</span>
                        <span className={styles.normal4}>O型</span>
                        </>}
                    height={
                        <>
                        <span className={`${styles.keinaBackground} ${styles.box4}`}>HEIGHT</span>
                        <span className={styles.normal4}>162cm</span>
                        </>}
                    born={
                        <>
                        <span className={`${styles.keinaBackground} ${styles.box4}`}>BORN</span>
                        <span className={styles.normal4}>東京</span>
                    </>}
                    uni={
                        <>
                        <span className={`${styles.keinaBackground} ${styles.box4}`}>UNIV.</span>
                        <span className={styles.normal4}>立教大学</span>
                    </>}
                    imageSource={Keina}
                />

                <MembersDetails name={
                    <>
                    <span className={`${styles.airi} ${styles.memberName}`}>I LOVE U @ あいり</span>
                    <br/>
                    <span className={styles.normalTxt}>I LOVE U Airi</span>
                    </>} 
                    hobby={
                        <>
                        <span className={styles.memberHobby}>趣味</span>
                        <br/>
                        <span className={styles.normalTxt}>外国人とのコミュニケーション、映画鑑賞</span>
                        </>}
                    skill={
                        <>
                        <span className={styles.memberHobby}>特技</span>
                        <br/>
                        <span className={styles.normalTxt}>ダンスの振り付けを覚えるのが早い、子供に好かれる、マイクを持たせたら延々とトークを繰り広げる</span>
                        </>}
                    color={
                        <>
                        <span className={`${styles.airi} ${styles.colorBadge}`}>● Turquoise Blue</span>
                        </>}
                    birthday={
                        <>
                        <span className={`${styles.momomiBackground} ${styles.box4}`}>BIRTH.</span>
                        <span className={styles.normal4}>1997.5.15</span>
                        </>}
                    blood={
                        <>
                        <span className={`${styles.momomiBackground} ${styles.box4}`}>BLOOD</span>
                        <span className={styles.normal4}>A型</span>
                        </>}
                    height={
                        <>
                        <span className={`${styles.momomiBackground} ${styles.box4}`}>HEIGHT</span>
                        <span className={styles.normal4}>158cm</span>
                        </>}
                    born={
                        <>
                        <span className={`${styles.momomiBackground} ${styles.box4}`}>BORN</span>
                        <span className={styles.normal4}>広島</span>
                    </>}
                    imageSource={Airi}
                />
                </div>   
                </section> 
            </>
      );
  }
  
  export default Members;