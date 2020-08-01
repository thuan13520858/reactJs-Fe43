// import {TANG_GIAM} from '../Constants/GameBauCuaConst'
import * as CONST from '../Constants/GameBauCuaConst';
export function datCuocAction(id, flg) {
    return {
        type: CONST.TANG_GIAM,
        id: id,
        flg: flg
      };
}