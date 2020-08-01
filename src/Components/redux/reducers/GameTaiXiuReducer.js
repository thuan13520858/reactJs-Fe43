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
        default : {
            return {...state}
        }
    }
}
export default GameTaiXiuReducer;
