// Thay vì khai báo state ở component thì ta khai báo tại reducer
const stateDefault = {
    spChiTiet : {
        "maSP": 1,
        "tenSP": "VinSmart Live",
        "manHinh": "AMOLED, 6.2\", Full HD+",
        "heDieuHanh": "Android 9.0 (Pie)",
        "cameraTruoc": "20 MP",
        "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
        "ram": "4 GB",
        "rom": "64 GB",
        "giaBan": 5700000,
        "hinhAnh": "./img/vsphone.jpg"
    },
    gioHang: []
}

const BaiTapGioHangReducer = (state = stateDefault, action) => {
    switch(action.type) {
        case 'XEM_CHI_TIET': {
            return {...state, spChiTiet: action.sanPham}
        }
        case 'THEM_SAN_PHAM' : {
            let newCard;
            let index = state.gioHang.findIndex((item) => item.maSP == action.sanPham.maSP);
            if (index < 0) {
                let card =  { ...action.sanPham, cnt: 1 };
                newCard = [...state.gioHang, card]
            } else {
                state.gioHang[index].cnt += 1;
                newCard = [...state.gioHang];
            }
            return {...state, gioHang: newCard}
        }
        case 'XOA': {
            let index = state.gioHang.findIndex((item) => item.maSP == action.id);
            let cardList = [...state.gioHang];
            cardList.splice(index, 1);
            return {...state, gioHang: cardList}
        }
        case 'CHANGE_COUNT' :{
            let index = state.gioHang.findIndex((item) => item.maSP == action.id);
            let cardList = [...state.gioHang];
            if (action.flg) {
                cardList[index].cnt += 1;
            } else {
                cardList[index].cnt -= 1;
                if (cardList[index].cnt == 0) {
                    cardList.splice(index, 1);
                }
            }
            return {...state, gioHang: cardList}
        }
        default : {
            return {...state}
        }
    }
}

export default BaiTapGioHangReducer