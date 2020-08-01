import * as CONST from '../Constants/GameTaiXiuConst'
import {getRandomInt} from '../../../utils/randomInt';

const danhSachXucXac = [
    { ma: "one", classes: "fa fa-dice-one", so: 1 },
    { ma: "two", classes: "fa fa-dice-two", so: 2 },
    { ma: "three", classes: "fa fa-dice-three", so: 3 },
    { ma: "four", classes: "fa fa-dice-four", so: 4 },
    { ma: "five", classes: "fa fa-dice-five", so: 5 },
    { ma: "six", classes: "fa fa-dice-six", so: 6 },
    ];

const inititalState = {
    xucXac: [
        { ma: "one", classes: "fa fa-dice-one", so: 1 },
        { ma: "one", classes: "fa fa-dice-one", so: 1 },
        { ma: "one", classes: "fa fa-dice-one", so: 1 },
    ],
    taiXiu: false, // false : xỉu, true: tài
    soBanThang: 0,
    soBanChoi: 0
}

const GameTaiXiuReducer = (state = inititalState, action) =>{
    switch (action.type) {
        case CONST.SELECT_TYPE : {
            state.taiXiu = action.flg;
            return {...state}
        }
        case CONST.PLAY_GAME_TAI_XIU: {
            state.soBanChoi +=1;
            state.xucXac = [
                danhSachXucXac[getRandomInt(6)],
                danhSachXucXac[getRandomInt(6)],
                danhSachXucXac[getRandomInt(6)]
            ]
            const total = state.xucXac.reduce((sum, item) => {
                return sum + item.so;
            }, 0);
            state.soBanThang += (total > 0 && total < 11) ? 1 : 0 ;
            return {...state}
        }
        default : {
            return {...state}
        }
    }
}
export default GameTaiXiuReducer;
