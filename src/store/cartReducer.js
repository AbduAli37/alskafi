import { createSlice } from "@reduxjs/toolkit";
let talabaty = localStorage.getItem("talabaty");
if (talabaty) {
  talabaty = JSON.parse(talabaty);
} else {
  talabaty = null;
}

let initialState = talabaty
  ? talabaty
  : {
      data: [],
      cartProductId: 0,
    };

const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    updateCartDataPayement: (state, action) => {
      state.type = action?.payload?.way;
    },

    updateCartDataWay: (state, action) => {
      // console.log(action?.payload?.city_id);
      state.waydeliv = action?.payload?.waydeliv;
      state.address = action?.payload?.address;
      state.order_time = action?.payload?.order_time;
      state.date = action?.payload?.date;
      state.lat = action?.payload?.lat;
      state.lang = action?.payload?.lang;
      state.alllocations = action?.payload?.alllocations;
      state.location = action?.payload?.location;
      state.state = action?.payload?.state;
      state.city_id = action?.payload?.city_id;
      state.delivery = action?.payload?.delivery;
      state.map_location = action?.payload?.map_location;
    },
    updateloc: (state, action) => {
      state.lat = action?.payload?.late;
      state.lang = action?.payload?.lang;
      state.maploc = action?.payload?.maploc;
    },

    updateCartCopun: (state, action) => {
      state.copun = action?.payload?.copun;
    },

    updata_product_totalPrice: (state, action) => {
      state.product_all_totalPrice = action?.payload?.price;
      // state.totalPrice = state.delivery
      //   ? state.product_all_totalPrice + state.delivery
      //   : state.product_all_totalPrice;
    },
    updateCartData: (state, action) => {
      // =====================================================================
      state.totalPrice = state?.data.reduce(
        (acc, cur) => acc + cur.totalPrice,
        0
      );

      // console.log("Tot", state.totalPrice);
      // =====================================================================
      state.totalquantity = state?.data.reduce(
        (acc, cur) => acc + cur.quantity,
        0
      );

      // =====================================================================
      state.product_ids = state?.data.map((acc, i) => acc?.item?.id).join("/");
      // console.log(
      //   "notes",
      //   state?.data.map((acc, i) => acc.notes)
      // );
      state.product_note = state?.data.map((acc, i) => acc?.notes).join("/*/");

      // =====================================================================
      state.product_totalPrice = state?.data
        .map((acc, i) => acc?.totalPrice)
        .join("/");

      state.product_all_totalPrice = state.totalPrice;
      state.cart_totalPrice = state.totalPrice;

      // =====================================================================
      state.product_name = state?.data
        .map((acc, i) => acc?.item?.title)
        .join("/");

      // =====================================================================
      state.product_price = state?.data
        .map((item, i) =>
          parseInt(item?.singlePrice)
            ? parseFloat(item?.singlePrice)
            : parseFloat(item?.singlePrice)
        )
        .join("/");

      // =====================================================================
      state.product_quantity = state?.data
        .map((acc, i) => acc?.quantity)
        .join("/");

      // =====================================================================
      state.product_extension = state?.data
        .map((acc, i) =>
          acc.selectedExtensions && acc.selectedExtensions.length
            ? acc.selectedExtensions.map((item) => item?.id).join(",")
            : null
        )
        .join("/");

      // =====================================================================
      state.product_size = state?.data
        .map((acc, i) =>
          acc.selectedSize && acc.selectedSize.length
            ? acc.selectedSize.map((item) => item?.size_id).join(",")
            : null
        )
        .join("/");

      // =====================================================================
      state.product_rice = state?.data
        .map((acc, i) =>
          acc.selectedRice && acc.selectedRice.length
            ? acc.selectedRice.map((item) => item?.id).join(",")
            : null
        )
        .join("/");

      // =====================================================================
      state.product_dish = state?.data
        .map((acc, i) =>
          acc.selectedDishes && acc.selectedDishes.length
            ? acc.selectedDishes.map((item) => item?.id).join(",")
            : null
        )
        .join("/");
      let sumD = 0;

      let loc =
        state?.data && state?.data?.length
          ? state?.data.map(
              (acc_c, i) =>
                (sumD +=
                  acc_c.selectedDishes && acc_c.selectedDishes.length
                    ? acc_c.selectedDishes.reduce(
                        (acc, cur) =>
                          parseFloat(acc) + parseInt(cur?.dis_price)
                            ? parseFloat(cur?.dis_price)
                            : parseInt(cur?.price),
                        0
                      ) * acc_c?.quantity
                    : 0)
            )
          : 0;
      // console.log("sumD", sumD);
      state.product_dishes_price = sumD;

      // =====================================================================
      state.number_of_items = state?.data.length;

      // =====================================================================
      // console.log("Deleivery", state.delivery)
      // if (state.delivery && state.product_all_totalPrice == state.totalPrice) {
      //   state.totalPrice += state.delivery;
      // } else if (
      //   state.delivery &&
      //   state.product_all_totalPrice != state.totalPrice
      // ) {
      //   state.totalPrice -= state.delivery;
      //   state.totalPrice += state.delivery;
      // }

      // delete state.copun;

      localStorage.setItem("talabaty", JSON.stringify(state));
    },

    updateCartNotes: (state, action) => {
      state.description = action?.payload?.notes;
    },

    updateCart: (state, action) => {
      if (action.payload) {
        if (state?.data) {
          state?.data.push(action?.payload);
        }
      }
    },

    updateCartItem: (state, action) => {
      state?.data.map((item) => {
        if (
          item.cartProductId == action.payload.cartProductId &&
          action.payload.type === "increase"
        ) {
          ++item.quantity;
          item.totalPrice += item.singlePrice;
          state.totalPrice = state?.data.reduce(
            (acc, cur) => acc + cur.totalPrice,
            0
          );
          if (state.delivery) {
            state.totalPrice += state.delivery;
          }
        } else if (
          item.cartProductId == action.payload.cartProductId &&
          action.payload.type === "decrease"
        ) {
          if (item.quantity != 1 && item.quantity > 1) {
            item.quantity =
              item.quantity != 1 ? --item.quantity : item.quantity;
            if (item.totalPrice > 0) {
              item.totalPrice -= item.singlePrice;
            }
            state.totalPrice = state?.data.reduce(
              (acc, cur) => acc + cur.totalPrice,
              0
            );
            if (state.delivery) {
              state.totalPrice += state.delivery;
            }
            if (action?.payload?.function) {
              action?.payload.function();
            }
          }
        }
      });
    },

    removeCartItem: (state, action) => {
      state.data = state?.data.filter((item) => {
        return item.cartProductId !== action.payload.cartProductId;
      });
      state.totalPrice = state?.data.reduce(
        (acc, cur) => acc + cur.totalPrice,
        0
      );
      state.number_of_items = state?.data.length;
      if (action?.payload?.function) {
        action?.payload.function();
      }
    },

    adddelivery: (state, action) => {
      state.totalPrice -= state?.delivery ? state?.delivery : 0;
      state.delivery = 0;
      state.delivery = action.payload.delivery;
      state.totalPrice += action.payload.delivery;
    },

    deletecart: (state, action) => {
      state.data.length = 0;
      state.delivery = 0;
      state = {
        data: [],
        cartProductId: 0,
      };
    },

    resetcart: (state, action) => {
      state = initialState;
    },
    handleremovelocaldata: (state, action) => {
      state.waydeliv = 1;
      state.address = null;
      state.order_time = null;
      state.date = null;
      state.lat = null;
      state.lang = null;
      state.alllocations = null;
      state.location = null;
      state.state = null;
      state.city = null;
      state.delivery = null;
      state.type = null;
    },
    emptycart: (state, action) => {
      // state?.data.talabaty={};
      localStorage.setItem("talabaty", JSON.stringify({}));
      localStorage.removeItem("talabaty");
      state.data.length = 0;
      state.data = [];
      state.cartProductId = 0;
      state = {
        data: [],
        cartProductId: 0,
      };
    },
    updatepaymentstatus: (state, action) => {
      state.paymentstatus = action.payload.paymentstatus;
    },
    // updateproductcode:(state,action)=>{
    //   delete state.copun;
    // },
  },
});

export const {
  resetcart,
  updateloc,
  updateCarttaxt,
  updateCartDataPayement,
  handleremovelocaldata,
  updateCartDataWay,
  updateCart,
  updateCartItem,
  updateCartNotes,
  removeCartItem,
  updateCartData,
  adddelivery,
  deletecart,
  updata_product_totalPrice,
  updateCartCopun,
  emptycart,
  updatepaymentstatus,
} = cartSlice.actions;
export default cartSlice.reducer;
