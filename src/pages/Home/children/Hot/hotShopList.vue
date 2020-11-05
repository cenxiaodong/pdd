<template>
  <div class="shoplist">
    <ul class="shop-list">
      <li class="list-item">
        <img src="../../imgs/shop_list/shop_item.png" alt="" width="100%" />
        <h4>
          【唐幂】整条刺绣民族风围巾女士秋冬季中年妈妈羊绒羊毛披肩保暖,【唐幂】整条刺绣民族风围巾女士秋冬季中年妈妈羊绒羊毛披肩保暖
        </h4>
        <div class="item-data">
          <span class="data_price">¥26.9</span>
          <span class="data_num">已拼5489件</span>
          <span class="data_user">
            <img src="../../imgs/shop_list/user1.jpg" alt="" />
            <img src="../../imgs/shop_list/user2.jpg" alt="" />
          </span>
          <span class="data_button">
            <button>去拼单 ></button>
          </span>
        </div>
      </li>
      <li class="list-item">
        <img src="../../imgs/shop_list/shop_item.png" alt="" width="100%" />
        <h4>【唐幂】整条刺绣民族风围巾女士秋冬季中年妈妈羊绒羊毛披肩保暖</h4>
        <div class="item-data">
          <span class="data_price">¥26.9</span>
          <span class="data_num">已拼5489件</span>
          <span class="data_user">
            <img src="../../imgs/shop_list/user1.jpg" alt="" />
            <img src="../../imgs/shop_list/user2.jpg" alt="" />
          </span>
          <span class="data_button">
            <button>去拼单 ></button>
          </span>
        </div>
      </li>
      <li class="list-item">
        <img src="../../imgs/shop_list/shop_item.png" alt="" width="100%" />
        <h4>【唐幂】整条刺绣民族风围巾女士秋冬季中年妈妈羊绒羊毛披肩保暖</h4>
        <div class="item-data">
          <span class="data_price">¥26.9</span>
          <span class="data_num">已拼5489件</span>
          <span class="data_user">
            <img src="../../imgs/shop_list/user1.jpg" alt="" />
            <img
              src="../../imgs/shop_list/user2.jpg"
              alt=""
              class="user_imgtwo"
            />
          </span>
          <span class="data_button">
            <button>去拼单 ></button>
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.shop-list {
  margin-bottom: 50px;
  .list-item {
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h4 {
      line-height: 22px;
      height: 44px;
      color: #666;
      margin: 10px 0 0 3%;
      //文字超出用...代替
      display: -webkit-box;
      text-overflow: ellipsis;
      overflow: hidden;
      width: 94%;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .item-data {
      width: 96%;
      margin-left: 3%;
      margin: 10px 0;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      .data_price {
        flex: 1;
        color: red;
        font-size: 18px;
        margin-left: 10px;
      }
      .data_num {
        flex: 2;
        color: blue;
        font-size: 14px;
      }
      .data_user {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 35px;
          border-radius: 50%;
        }
        img:nth-child(2){
          margin-left: -10px;
        }
      }
      .data_button {
        flex: 2;
        button {
          width: 80%;
          height: 35px;
          background-color: red;
          color: #fff;
          border-radius: 10px;
          margin-left: 15px;
        }
      }
    }
  }
}
</style>