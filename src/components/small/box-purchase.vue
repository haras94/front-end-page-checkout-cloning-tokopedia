<template>
      <div class="mother-content">
        <div class="mother-first-chooise">
            <input type="checkbox" id="first-chooise">
            <label for="first-chooise">Pilih semua produk <span class="del">Hapus</span>
            </label>
        </div>
        <div class="first-square">
        <div>
            <input type="checkbox" id="second-chooise">
            <label for="second-chooise">Ink City <span class="text-city">Kota Surabaya
        </span>
        </label>
        </div>
        <div>
            <input type="checkbox" id="third-chooise">
            <label for="third-chooise">
            <img class="img-box" src="https://1.bp.blogspot.com/-ER8FqA_HO7M/XTcqJNdXAPI/AAAAAAAAS3g/yjr7XW-SMVUygkyHbDxyMMaHilLbKUqPwCLcBGAs/s1600/Harga%2Bdan%2BSpesifikasi%2BAsus%2BE402YA%2BGA101T%2BLaptophia.JPG">
        <div class="text-name">Laptop ASUS E402YA-GA202T
        AMD E2-70 4GB|1TB|14"inch|Windows 10|- Blue</div>
        <span class="price">Rp3.450.000</span>
        </label>
        </div>
        <div class="mini-des">Tulis Catatan Untuk Toko</div>
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

    .mother-first-chooise{
    height: 50px;
    position: relative;

    }

    .first-square{
    width: 55%;
    height: 200px;
    position: relative;
    border-top: 4px solid rgba(0, 0, 0, 0.1);
    border-bottom: 4px solid rgba(0, 0, 0, 0.1);
    padding-top: 10px;
    }

    .img-box{
    height: 80px;
    width: auto;
    position: relative;
    top: 20px;
    border: 3px solid brown;
    left: 20px;
    }

    .price{
    left: 150px;
    position: relative;
    top: -50px;
    }

    .text-name{
    position: relative;
    left: 150px;
    top: -60px;
    }

    .mini-des{
    left: 20px;
    position: relative;
    margin-top: -30px;
    }

    .del{
    position: relative;
    left: 520px;
    }

    .text-city{
        position: relative;
        top: 20px;
        left: -57px;
    }

    #third-chooise{
        top: 65px;
        position: relative;
        display: flex;
    }
</style>
