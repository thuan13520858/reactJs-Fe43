import { combineReducers } from "redux";

import stateBaiTapGioHang from './BaiTapGioHangReducer';

// store tổng của ứng dụng chứa tất cả các state của ứng dụng
const rootReducer = combineReducers({
    // nơi khai báo các state từng nghiệp vụ
    stateBaiTapGioHang: stateBaiTapGioHang
});

export default rootReducer;
