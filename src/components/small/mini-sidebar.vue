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
    <div class="border-in-side">
     <div class="text-in-bis">Gunakan Promo Tokopedia</div>
    </div>
    </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'Minis',
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
    }

    .square-in-side{
        border: 1px solid #FF420E ;
        align-items: center;
        height: 40px;
        background-color: #FF420E ;
        margin-top: 20px;
        display: flex;
        cursor: pointer;
    }

    .border-in-side{
        align-items: center;
        height: 45px;
        margin-top: 20px;
        display: flex;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        cursor: pointer;
    }

    .container-side{
    position: relative;
    right: 70px;
    top: -125px;
    }

    /* text on border */
    .mother-estimate{
    margin-top: 35px;
    }

    .price-side{
    float: right;
    }

    .text-on-sis{
        color: #faf8f7;
        left: 160px;
        position: relative;
    }

    .text-in-bis{
        color: #27b04c;
        position: relative;
        left: 50px;
    }
</style>
