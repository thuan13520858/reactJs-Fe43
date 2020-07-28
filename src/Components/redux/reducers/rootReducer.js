import { combineReducers } from "redux";

import stateBaiTapGioHang from './BaiTapGioHangReducer';
import stateBaiTapBurger from './BaiTapBurgerReducer';

// store tổng của ứng dụng chứa tất cả các state của ứng dụng
const rootReducer = combineReducers({
    // nơi khai báo các state từng nghiệp vụ
   // stateBaiTapGioHang: stateBaiTapGioHang,
    stateBaiTapBurger: stateBaiTapBurger
});

export default rootReducer;
