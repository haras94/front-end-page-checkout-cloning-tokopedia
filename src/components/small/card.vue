<template>
    <div class="card">
        <img src="../../assets/logo.png" class="card-img-top" alt="...">
        <div class="card-body">
            <div class="des-card">
                <h5 class="card-title">LAPTOP ASUS X441MA-GA011T -
                N4000|RAM 4GB|HDD 1TB|DVD|14"|W10|BLACK</h5>
            </div>
            <div class="price-card">
                <p class="card-text">Rp 3.450.000</p>
            </div>
            <div class="official">
                <p class="card-owner">Official Store</p>
            </div>
            <div class="rating">
            </div>
        </div>
        <div class="btn-card">
            <a href="#" class="btn add-cart" >Tambah Keranjang</a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Card',
};
</script>

<style  scoped>


    .card{
        width: 172px;
        margin: 5px 5px;
        margin-top: 20px;
        margin-bottom: 20px;
        cursor: pointer;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        height: 338px;
    }

    .card-img-top{
      width: 100%;
      height: 172px;
    }

    .card-body{
        padding: 8px;
        height: 118px;
    }

    .card-title{
        font-size: 11px;
        height: 38px;
        overflow: hidden;
        font-weight: bold;
    }

    .price-card{
        color: #d6830f;
        font-size: 9px;
        font-weight: bold;
    }

    .official{
        font-size: 9px;
        margin-bottom: 8px;
    }

    .add-cart{
        font-size: 13px;
        width: 100%;
        border: 1px solid orangered;
        font-weight: bold;
        color: orangered;
    }

    .btn-card{
        padding: 8px;
    }
</style>
