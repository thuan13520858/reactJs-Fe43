import * as CONST from '../Constants/GameTaiXiuConst';
export const selecType = (flg) => {
    return {
        type: CONST.SELECT_TYPE,
        flg: flg
    }
}

export const playGame = () => {
    return {
        type: CONST.PLAY_GAME_TAI_XIU
    }
}