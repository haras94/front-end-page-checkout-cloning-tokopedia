<template>
      <div class="mother-content">
        <div class="mother-first-chooise">
            <input type="checkbox" id="first-chooise">
            <label for="first-chooise" class="fc"> Pilih semua produk <span class="del">Hapus</span>
            </label>
        </div>
        <div class="first-square">
        <div class="mother-cbx">
            <input type="checkbox" id="second-chooise" class="ipt">
            <label for="second-chooise" class="sc"><img class="king-trop" src="https://ecs7.tokopedia.net/img/newtkpd/powermerchant/ic-powermerchant-130px.png"> <span class="ict"> InkCity </span><span class="text-city">Kota Surabaya
        </span>
        </label>
        </div>
        <div class="mother-tc">
            <input type="checkbox" id="third-chooise">
            <label for="third-chooise">
            <img class="img-box" src="https://1.bp.blogspot.com/-ER8FqA_HO7M/XTcqJNdXAPI/AAAAAAAAS3g/yjr7XW-SMVUygkyHbDxyMMaHilLbKUqPwCLcBGAs/s1600/Harga%2Bdan%2BSpesifikasi%2BAsus%2BE402YA%2BGA101T%2BLaptophia.JPG">
        <div class="text-name">Laptop ASUS E402YA-GA202T
        AMD E2-70 4GB|1TB|14"inch|Windows 10|- Blue</div>
        <span class="price">Rp3.450.000</span>
        </label>
        </div>
        <div class="mini-des">Tulis Catatan Untuk Toko</div>
        <div>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" class="svg-inline--fa fa-trash fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#e3dada" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path></svg>
        </div>
        <div>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" class="svg-inline--fa fa-heart fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#e3dada" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
        </div>
        <div>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="minus-circle" class="svg-inline--fa fa-minus-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#e3dada" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zM124 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H124z"></path></svg>
            <input id="theInput" type="text"  class="input-text-qty-text"
            title="Qty" max="1000" min="1" spinner="1" value="1">
        </div>
        <div>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus-circle" class="svg-inline--fa fa-plus-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#0dbf1c" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path></svg>
        </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'purchase',
};
</script>

<style scoped>
    .mother-content{
    display: flex;
    padding-left: 50px;
    flex-direction: column;
    justify-content: space-around;
    position: relative;
    top: 150px;
    width: auto;
    }

    .mini-des{
        cursor: pointer;
        line-height: 1.4;
        color: rgb(3, 172, 14);
        font-size: 14px;
        font-weight: bold;
        top: 10px;
    }

    .fc{
       cursor: pointer;
       color: rgb(159, 166, 176);
    }

    .king-trop{
        width: 15px;
        height: 15px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
        bottom: 2px;
        position: relative;
    }

    .ict{
        font-size: 16px;
        font-weight: 700;
        color: rgb(49, 53, 59);
        cursor: pointer;
        text-decoration: none;
    }

    .first-square{
        width: 60%;
        height: 230px;
        position: relative;
        border-top: 4px solid rgba(0, 0, 0, 0.1);
        border-bottom: 4px solid rgba(0, 0, 0, 0.1);
        padding-top: 10px;
    }

    .img-box{
        height: 70px;
        width: auto;
        position: relative;
        top: 20px;
        left: 20px;
        outline: none;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        border-radius: 6px;
    }

    .price{
        left: 150px;
        position: relative;
        top: -50px;
        font-weight: bold;
        color: rgb(250, 89, 29);
        }

    .text-name{
        position: relative;
        left: 150px;
        top: -50px;
        font-size: 14;
        font-weight: 700;
        color: rgb(49, 53, 59);
        text-decoration: none;
    }

    .mini-des{
        left: 20px;
        position: relative;
        margin-top: -30px;
    }

    .del{
        position: relative;
        left: 560px;
        font-weight: 700;
        color: rgb(3, 172, 14);
    }

    .text-city{
        position: relative;
        top: 20px;
        left: -70px;
        font-size: 12px;
        color: rgb(159, 166, 176);
    }

    #third-chooise{
        top: 65px;
        position: relative;
        display: flex;
    }

    .fa-trash{
        height: 20px;
        width: 20px;
        right: 150px;
        position: absolute;
        cursor: pointer;
    }

    .fa-heart{
        height: 20px;
        width: 20px;
        right: 195px;
        position: absolute;
        cursor: pointer;
    }

    .input-text-qty-text{
        box-shadow: none !important;
        outline: none !important;
        border-left: none !important;
        border-top: none !important;
        border-right: none !important;
        border-bottom: 1px solid rgb(224, 224, 224) !important;
        padding: 1px !important;
        border-radius: 0px !important;
        margin: 0px !important;
        text-align: center !important;
        width: 80px;
        cursor: text !important;
        position: absolute;
        right: 30px;
        bottom: 30px;
    }

    .fa-minus-circle{
        width: 20px;
        height: 20px;
        cursor: pointer;
        background-size: 20px 20px;
        background-position: center center;
        background-repeat: no-repeat;
        right: 110px;
        position: absolute;
    }

    .fa-plus-circle{
        width: 20px;
        height: 20px;
        cursor: pointer;
        background-size: 20px 20px;
        background-position: center center;
        background-repeat: no-repeat;
        right: 10px;
        position: absolute;
    }
</style>
