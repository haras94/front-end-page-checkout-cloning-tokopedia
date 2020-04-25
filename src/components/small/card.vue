<template>
    <div class="card">
        <div>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" class="svg-inline--fa fa-heart fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#e3dada" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
            <img src="../../assets/logo.png" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
            <div class="des-card">
                <h5 class="card-title">Laptop ASUS E402YA-GA202T AMD E2-70 4GB</h5>
            </div>
            <div class="price-card">
                <p class="card-text">Rp 3.450.000</p>
            </div>
            <div class="official">
                <p class="card-owner"><img class="king-ir" src="https://ecs7.tokopedia.net/img/newtkpd/powermerchant/ic-powermerchant-130px.png"> <span>Surabaya</span></p>
            </div>
            <div class="icon-rating">
            </div>
            <div class="rating">
                   <img class="star-one" src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/4fede911.svg">
            <span class="total-rating">
                (37)
            </span>
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
        margin-bottom: 0px;
        cursor: pointer;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        height: 340px;
    }

    .fa-heart{
        width: 25px;
        height: 25px;
        position: absolute;
        cursor: pointer;
        right: 5px;
        margin-top: 10px;
    }

    .card-img-top{
      width: 100%;
      height: 172px;
      border-radius: 6px;
    }

    .card-body{
        padding: 8px;
        height: 118px;
    }

    .card-title{
        font-size: 13px;
        height: 38px;
        overflow: hidden;
        font-weight: bold;
    }

    .price-card{
        color: #d6830f;
        font-size: 12px;
        font-weight: bold;
    }

    .official{
        font-size: 11px;
        margin-bottom: 8px;
    }

    .rating{
        margin-top: -20px;
        position: relative;
    }
    .king-ir{
        width: 12px;
        height: 12px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
        position: relative;
        margin-bottom: 25px;
        top: 10px;
    }

    .star-one{
        height: 12px;
        width: 12px;
        border-style: none;
    }

    .total-rating{
        vertical-align: middle;
        color: rgba(49, 53, 59, 0.44);
        font-size: 12px;
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
