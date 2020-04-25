<template>
    <div class="container-side">
    <div class="second-square">
    <h3 class="header-text">Ringkasan Belanja</h3>
    <div class="mother-estimate">
    <div class="estimate-side">Total Harga <span class="price-side">Rp3.450.000</span></div></div>
    <div class="square-in-side">
    <div class="text-on-sis">Beli(1)</div>
    </div>
    <div>
    <div class="border-in-side" @click="$emit('addModal')" data-toggle="modal"
    data-target=".bd-example-modal-lg">
     <div class="voucher">
         <img class="voucher-gbr" src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/1c511130.png">
     </div>
     <div class="text-in-bis">Gunakan Promo Tokopedia</div>
     <div class="mother-bbis">
     <div class="border-in-bis"></div>
     <div class="text-in-bbis"> 2 Kupon </div>
     </div>
       <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog"
       aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <h5>Gunakan Promo/Kupon</h5>
                <div class="border-mini-modal">
                <input class="ipt-bmm" type="text"  placeholder="Ketik Kode Promo">
                 <a href="#" role="button" class="btn btn-secondary popover-test"
                title="kupon title" data-content="Popover body content is
                set in this attribute."><p class="text-use">Gunakan</p></a>
                </div>
                <div class="text-kupon">Kupon Milik Saya</div>
                <div class="img-icn">
                <img class="icon-kupon" src="https://ecs7.tokopedia.net/img/blog/promo/2020/04/Catalog-Detail-Banner_Lite-640x213-191.jpg">
                <img class="icon-kupon-one" src="https://ecs7.tokopedia.net/img/blog/promo/2020/04/Catalog-Detail-Banner_Lite-640x213-191.jpg">
                </div>
            </div>
        </div>
        </div>

    </div>
    </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'Minis',
  methods: {
    open() {
      document.querySelector('.modal-add').classList.toggle('modal');
    },
  },
};
</script>

<style scoped>
    /* border */
    .second-square{
    width: 30%;
    height: 250px;
    position: relative;
    padding-top: 10px;
    left: 900px ;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    padding-right: 20px;
    border-radius: 6px;
    }

    .square-in-side{
        border: 1px solid #FF420E ;
        align-items: center;
        height: 40px;
        background-color: #FF420E ;
        margin-top: 20px;
        display: flex;
        cursor: pointer;
        font-weight: 800;
        padding: 0px 16px;
        border-radius: 6px;
    }

    .bd-example-modal-lg{
        display: block;
        z-index: 1050;
        min-width: 500px;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-width: 1px;
        border-style: solid;
        border-color: rgb(224, 224, 224);
        border-radius: 8px;
        padding: 32px 0px 0px;
        transition: opacity 0.2s ease 0s;
    }

    .border-mini-modal{
        display: block;
        position: relative;
        background-color: rgb(255, 255, 255);
        box-shadow: rgba(49, 53, 59, 0.12) 0px 1px 6px 0px;
        margin: 0px;
        padding: 24px 22px 28px;
        border-radius: 8px;
        margin-top: 40px;
        width: 55%;
        left: 180px;
    }

    h5{
        text-align: center;
        display: block;
        position: relative;
        font-weight: 800;
        font-size: 25px;
        line-height: 30px;
        color: rgba(49, 53, 59, 0.68);
        margin: 0px 0px 16px;
        padding-top: 20px;
    }

    .ipt-bmm{
        display: block;
        width: 71%;
        font-weight: 600;
        user-select: auto;
        font-size: 14px;
        line-height: 1px;
        outline: 0px;
        border-width: 0px 0px 1px;
        border-bottom: 1px solid rgb(219, 222, 226);
        padding: 8px 0px;
        position: relative;
        top: 30px;
    }

    .popover-test{
        position: relative;
        right: -300px;
        top: -10px;
        color: rgb(255, 255, 255);
        font-family: "Nunito Sans", sans-serif;
        font-size: 14px;
        height: 40px;
        line-height: 20px;
        width: auto;
        font-weight: 800;
        cursor: pointer;
        position: relative;
        border-radius: 8px;
        outline: none;
        padding: 0px 16px;
        transition: background 0.8s ease 0s;
        background: radial-gradient(circle, transparent 1%, rgb(3, 172, 14) 1%)
        center center / 15000% rgb(3, 172, 14);
        border-width: initial;
        border-style: none;
    }

    .text-use{
        padding-top: 10px;
    }

    .text-kupon{
        margin-bottom: 10px;
        font-size: 0.857143rem;
        line-height: 1.4;
        padding-left: 30px;
        padding-right: 30px;
        color: rgba(0,0,0,.54);
        left: 120px;
        position: relative;
        padding-top: 20px;
    }

    .icon-kupon{
        display: block;
        width: 100%;
        border-radius: 4px 4px 0px 0px;
        height: 200px;
        width: 300px;
        left: 150px;
        position: relative;
        padding-bottom: 20px;
    }

    .icon-kupon-one{
        display: block;
        width: 100%;
        border-radius: 4px 4px 0px 0px;
        height: 200px;
        width: 300px;
        left: 150px;
        position: relative;
        padding-bottom: 20px;
        padding-left: 10px;
    }

    .img-icn{
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
    }

    .border-in-side{
        align-items: center;
        height: 45px;
        margin-top: 20px;
        display: flex;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        cursor: pointer;
        padding: 10px 0px 12px 18px;
        border-radius: 6px;
    }

    .voucher-gbr{
        width: 25px;
        height: 25px;
        flex-shrink: 0;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
        left: 20px;
        position: relative;
    }

    .mother-bbis{
        align-items: center;
        font-weight: 700;
        line-height: 16px;
        position: relative;
        justify-content: center;
        margin-top: 15px;

    }

    .border-in-bis{
        border: 2px solid #f26907;
        background-color: #f26907;
        height: 20px;
        width: 60px;
        position: relative;
        right: -60px;
        padding: 0px 8px;
        border-radius: 6px;
    }

    .container-side{
    position: relative;
    right: 0px;
    top: -125px;
    }

    /* text on border */
    .header-text{
        font-weight: bold;
        color: rgb(49, 53, 59);
        padding-bottom: 8px;
        font-size: 16px;
    }

    .mother-estimate{
        margin-top: 35px;
    }

    .price-side{
        float: right;
        font-weight: bold;
        color: rgb(49, 53, 59);
    }

    .text-on-sis{
        color: #faf8f7;
        left: 140px;
        position: relative;
    }

    .text-in-bis{
        color: #27b04c;
        position: relative;
        left: 30px;
        font-size: 14px;
        font-weight: 700;
    }

    .text-in-bbis{
        color: white;
        font-size: 10px;
        position: relative;
        right: -70px;
        bottom: 17px;
    }

    .estimate-side{
        color: rgba(0,0,0,.54);
    }
</style>
