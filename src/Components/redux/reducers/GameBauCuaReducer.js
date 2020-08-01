import {getRandomInt} from '../../../utils/randomInt';
import  * as CONST from '../Constants/GameBauCuaConst';

const initialState = {
    total: 100,
    danhSachCuoc : [
        {
            id : "bau",
            url : "./img/bau.png",
            price : 0,
        },
        {
            id : "cua",
            url : "./img/cua.png",
            price : 0,
        },
        {
            id : "tom",
            url : "./img/tom.png",
            price : 0,
        },
        {
            id : "ca",
            url : "./img/ca.png",
            price : 0,
        },
        {
            id : "nai",
            url : "./img/nai.png",
            price : 0,
        },
        {
            id : "ga",
            url : "./img/ga.png",
            price : 0,
        },
        
    ],
    xucXac : [
        {
            id : "bau",
            url : "./img/bau.png",
            price : 0,
        },
        {
            id : "bau",
            url : "./img/bau.png",
            price : 0,
        },
        {
            id : "bau",
            url : "./img/bau.png",
            price : 0,
        },
    ]
}

const GameBauCuaReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONST.TANG_GIAM : {
            let newState = [...state.danhSachCuoc];
            const index = newState.findIndex((element) => element.id == action.id);
            if (action.flg) {
                if (state.total == 0) {
                    alert("Không đủ tiền để cược");
                    return {...state};
                }
                newState[index].price += 10;
                state.total -= 10;
            } else if (newState[index].price > 0) {
                newState[index].price -=10;
                state.total += 10;
            }
            return {...state, danhSachCuoc: newState}
        }
        case CONST.PLAY_GAME: {
            let newXucXac = [...state.xucXac];
            let newDanhSachCuoc = [...state.danhSachCuoc];
            newXucXac = newXucXac.map((item, index) => {
                let idx = getRandomInt(6);
                return state.danhSachCuoc[idx]
            });

            let cuoc = newDanhSachCuoc.filter((ele) => ele.price >0);

            for (let item of cuoc) {
                let priceWin = newXucXac.reduce((sum, e) => {
                        if (item.id == e.id) {
                            sum = sum + e.price;
                        }
                        return sum;
                    }, 0);
                
                state.total += priceWin > 0 && item.price + priceWin;
                item.price = 0;
            }
            state.danhSachCuoc = newDanhSachCuoc;
            state.xucXac = newXucXac;
            return {...state}
        }
        default : 
            return {...state}
    }
}

export default GameBauCuaReducer;