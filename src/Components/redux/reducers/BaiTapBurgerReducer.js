const stateDefault = {
    burger : {
        salad: 0,
        cheese: 0,
        beef: 0
    },

    menu: {
        salad : 10,
        cheese: 10,
        beef: 10
    }
}

const BaiTapBurgerReducer = (state = stateDefault, action) => {
    switch(action.type) {
        case 'CHANGE_COUNT' : {
            let newBurger = {...state.burger};
            let newMenu = {};
            if (action.flg) {
                newBurger[action.kind] += 1;
            } else if (newBurger[action.kind] > 0) {
                newBurger[action.kind] -= 1;
            }
            return {...state, burger: newBurger}
        }
        default :       
            return {...state}
    }
}

export default BaiTapBurgerReducer