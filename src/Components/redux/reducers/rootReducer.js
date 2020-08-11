import { combineReducers } from "redux";

import stateBaiTapGioHang from './BaiTapGioHangReducer';
import stateBaiTapBurger from './BaiTapBurgerReducer';
import stateGameBauCua from './GameBauCuaReducer';
import stateGameTaixiu from './GameTaiXiuReducer';
import QLSVReducer from './QLSVReducer'

// store tổng của ứng dụng chứa tất cả các state của ứng dụng
const rootReducer = combineReducers({
    // nơi khai báo các state từng nghiệp vụ
    // stateBaiTapGioHang: stateBaiTapGioHang,
    // stateBaiTapBurger: stateBaiTapBurger,
    stateGameBauCua : stateGameBauCua,
    stateGameTaixiu: stateGameTaixiu,
    stateQLSV: QLSVReducer
});

export default rootReducer;
