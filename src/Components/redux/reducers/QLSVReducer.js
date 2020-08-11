const initialState = {
    mangSV: [{
        taiKhoan: 'thuan-nvt',
        matKhau: '123',
        soDienThoai: '12346',
        hoTen: 'Thuận',
        email: 'thuan1819@gmail.com',
        maNhom: 'GP16'
        },
        {
            taiKhoan: 'thuan-nvt 2',
            matKhau: '123',
            soDienThoai: '654321',
            hoTen: 'Thuận 2',
            email: 'thuan18192@gmail.com',
            maNhom: 'GP17'
        }
    ],
    userEdit : {
        taiKhoan: '',
        matKhau: '',
        soDienThoai: '',
        hoTen: '',
        email: '',
        maNhom: '',
        edit:false
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
    case 'REGISTER': {
        state.mangSV = [...state.mangSV, {...action.values}];
        return {...state}
    }
    case 'EDIT': {
        state.userEdit = {...action.item, edit: true};
        return {...state}
    }

    case 'UPDATE' : {
        //debugger;
        let mangSVUpate = [...state.mangSV];
        let index = mangSVUpate.findIndex(sv => sv.taiKhoan === action.user.taiKhoan);
        if (index !== -1) {
            mangSVUpate[index] = action.user;
        }
        state.mangSV = mangSVUpate;
        return {...state}
    }

    case 'DELETE' : {
        let mangSVUpate = [...state.mangSV];
        let index = mangSVUpate.findIndex(sv => sv.taiKhoan === action.user.taiKhoan);
        if (index !== -1) {
            mangSVUpate.splice(index, 1);
        }
        state.mangSV = mangSVUpate;
        return {...state}
    }
    default:
        return state
    }
}
