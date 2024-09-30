import { Container, Image } from "react-bootstrap";
import style from '../Modules/Summary.module.css';

function Summanry(){
    return(
        <div>
            <Container style={{ display:'flex' }}>
                <div  className={style.pension}>
                    <div className={style.pensionTitle} > 달은 품은 한옥 </div>
                    <div className={ style.pensionCard }>
                        <div className={style.pensionStatus} >
                            <div className={style.roomTitle}>
                                <Image src="/Img/moon.jpg" width={200}></Image>
                                <p style={{ paddingTop:'10px' }} >달은 품은 한옥 · 1호실</p>
                            </div>
                            <div className={style.roomInfo} >3인기준 / 최대 4인</div>
                            <div className={style.roomStatus} >예약중</div>
                            <div className={style.roomDate}>24.09.30 - 24.10.02</div>
                        </div>
                        <div className={style.pensionStatus} >
                            <div className={style.roomTitle}>
                                <Image src="/Img/moon.jpg" width={200}></Image>
                                <p style={{ paddingTop:'10px' }} >달은 품은 한옥 · 2호실</p>
                            </div>
                            <div className={style.roomInfo} >3인기준 / 최대 4인</div>
                            <div className={style.roomStatus} >예약중</div>
                            <div className={style.roomDate}>24.09.30 - 24.10.02</div>
                        </div>
                        <div className={style.pensionStatus} >
                            <div className={style.roomTitle}>
                                <Image src="/Img/moon.jpg" width={200}></Image>
                                <p style={{ paddingTop:'10px' }} >달은 품은 한옥 · 3호실</p>
                            </div>
                            <div className={style.roomInfo} >3인기준 / 최대 4인</div>
                            <div className={style.roomStatus} >예약중</div>
                            <div className={style.roomDate}>24.09.30 - 24.10.02</div>
                        </div>
                    </div>
                    <div className={style.pensionTitle} > 의자왕 </div>
                    <div className={ style.pensionCard }>
                        <div className={style.pensionStatus} >
                            <div className={style.roomTitle}>
                                <Image src="/Img/moon.jpg" width={200}></Image>
                                <p style={{ paddingTop:'10px' }} >의자왕 · 1호실</p>
                            </div>
                            <div className={style.roomInfo} >3인기준 / 최대 4인</div>
                            <div className={style.roomStatus} >예약중</div>
                            <div className={style.roomDate}>24.09.30 - 24.10.02</div>
                        </div>
                        <div className={style.pensionStatus} >
                            <div className={style.roomTitle}>
                                <Image src="/Img/moon.jpg" width={200}></Image>
                                <p style={{ paddingTop:'10px' }} >의자왕 · 2호실</p>
                            </div>
                            <div className={style.roomInfo} >3인기준 / 최대 4인</div>
                            <div className={style.roomStatus} >예약중</div>
                            <div className={style.roomDate}>24.09.30 - 24.10.02</div>
                        </div>
                        <div className={style.pensionStatus} >
                            <div className={style.roomTitle}>
                                <Image src="/Img/moon.jpg" width={200}></Image>
                                <p style={{ paddingTop:'10px' }} >의자왕 · 3호실</p>
                            </div>
                            <div className={style.roomInfo} >3인기준 / 최대 4인</div>
                            <div className={style.roomStatus} >예약중</div>
                            <div className={style.roomDate}>24.09.30 - 24.10.02</div>
                        </div>
                    </div>
                </div>
                
            </Container>
        </div>
    )
}

export default Summanry;