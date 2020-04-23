<template>
  <div>
        <footer class="footer-new">
            <div class="parent-footer-text-one">
                <h5>Tokopedia</h5>
                <a href="#">Tentang Tokopedia</a>
                <a href="#">Karir</a>
                <a href="#">Blog</a>
                <a href="#">Tokopedia Saham</a>
                <a href="#">Hotel</a>
                <a href="#">Bridestory</a>
                <a href="#">Parentstory</a>
                <a href="#">Kamus Tokopedia</a>
                <a href="#">Official Store</a>
                <a href="#">Aplikasi Tokopedia</a>
                <a href="#">Tagihan & Top up</a>
                <a href="#">Deals Tokopedia</a>
                <a href="#">Keuangan</a>
                <a href="#">Bebas Ongkir</a>
                <a href="#">Tukar Tambah Handphone</a>
                <a href="#">Paket Umroh</a>
                <a href="#">Alquran Online</a>
                <a href="#">Kotak Kejutan</a>
            </div>
            <div class="parent-footer-text-two">
                <h5>Beli</h5>
                <a href="#>">Tiket Kereta</a>
                <a href="#>">Tiket Pesawat</a>
                <a href="#>">Tiket Events</a>
                <a href="#>">Hotlist</a>
                <a href="#>">Kategori</a>
            </div>
             <div class="parent-footer-text-three">
                <h5>Jual</h5>
                <a href="#>">Pusat Edukasi Seller</a>
                <a href="#>">Mitra Toppers</a>
                <a href="#>">Daftar Official Store</a>
            </div>
            <div class="parent-footer-text-four">
                <h5>Bantuan dan Panduan</h5>
                <a href="#>">Tokopedia Care</a>
                <a href="#>">Syarat dan Ketentuan</a>
                <a href="#>">Kebijakan Privasi</a>
            </div>
            <div></div>
        <div></div>
        </footer>
  </div>
</template>

<script>
export default {
  name: 'footer',
};
</script>

<style scoped>
    .footer-new{
        position: relative;
        border-top: 4px solid rgba(0, 0, 0, 0.1);
        margin-top: 270px;
        height: 100vh;
        width: 100%;
        margin-bottom: 20px;
        padding-top: 10px;
        display: flex;
        border-bottom: 4px solid rgba(0, 0, 0, 0.1);
        justify-content: space-around;
    }

    .parent-footer-text-two{
       display: flex;
        flex-direction: column;
        left: 403px;
        position: absolute;
    }

    .parent-footer-text-one{
        display: flex;
        flex-direction: column;
        position: absolute;
        left: 100px;
    }

    .parent-footer-text-three{
         display: flex;
        flex-direction: column;
        top: 207px;
        right: 805px;
        position: absolute;
    }

    .parent-footer-text-four{
        display: flex;
        flex-direction: column;
        right: 500px;
        position: absolute;
    }
</style>
