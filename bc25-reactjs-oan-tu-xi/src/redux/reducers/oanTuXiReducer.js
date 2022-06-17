const stateDefault = {
  oanTuXi: [
    { ma: "keo", anh: "./img/keo.png", datCuoc: false },
    { ma: "bua", anh: "./img/bua.png", datCuoc: false },
    { ma: "bao", anh: "./img/bao.png", datCuoc: true },
  ],
  oanTuXiBoss: { ma: "bao", anh: "./img/bao.png" },
  ketqua: "I'm iron man , i love you 3000 !!",
  soBanThang: 0,
  tongSoBanChoi: 0,
};
const GameTuXiReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "Oan_Tu_Xi": {
      let mangXucXacUpdate = [...state.oanTuXi];
      mangXucXacUpdate = mangXucXacUpdate.map((item, index) => {
        if (item.ma === action.oanTuXi) {
          return { ...item, datCuoc: true };
        }
        return { ...item, datCuoc: false };
      });
      // //Tìm maCuoc đã change trạng thái đặt cước ứng với mă cược đó
      // let index = mangXucXacUpdate.findIndex((qc) => qc.ma === action.oanTuXi);
      // if (index !== -1) {
      //   mangXucXacUpdate[index].datCuoc = true;
      // }
      state.oanTuXi = mangXucXacUpdate;
      return { ...state };
    }
    case "PLAY_GAME": {
      let soNgauNhien = Math.floor(Math.random() * 3);
      let quanCuocNgauNhien = state.oanTuXi[soNgauNhien];
      state.oanTuXiBoss = quanCuocNgauNhien;
      return { ...state };
    }
    case "END_GAME": {
      let player = state.oanTuXi.find((item) => item.datCuoc === true);
      let boss = state.oanTuXiBoss;
      switch (player.ma) {
        case "keo":
          if (boss.ma === "keo") {
            state.ketqua = "Hoà";
          } else if (boss.ma === "bua") {
            state.ketqua = "Thua";
          } else {
            state.ketqua = "I'm iron man , i love you 3000 !!";
            state.soBanThang += 1;
          }
          break;
        case "bua":
          if (boss.ma === "keo") {
            state.ketqua = "I'm iron man , i love you 3000 !!";
            state.soBanThang += 1;
          } else if (boss.ma === "bua") {
            state.ketqua = "Hoà";
          } else {
            state.ketqua = "Thua";
          }
          break;
        case "bao":
          if (boss.ma === "keo") {
            state.ketqua = "Thua";
          } else if (boss.ma === "bua") {
            state.ketqua = "I'm iron man , i love you 3000 !!";
            state.soBanThang += 1;
          } else {
            state.ketqua = "Hoà";
          }
          break;
        default:
          return { ...state };
      }
      state.tongSoBanChoi += 1;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
export default GameTuXiReducer;
