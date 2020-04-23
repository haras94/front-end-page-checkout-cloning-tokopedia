<template>
    <div>
        <Navbar/>
    <div>
        <Purchase/>
    </div>
    <div>
        <Minis/>
    </div>
    <div class="content-card">
    <div class="text-conten-card">Terakhir Dilihat
    <span class="text-conten-see">Lihat Semua</span></div>

    </div>
    <div>
    <div class="container">
    <div class="row" v-for="row in 20" :key="row.id" >
        <div class="col">
            <Card/>
        </div>
    </div>
    </div>
    </div>
    <div>
        <Footer/></div>
    </div>
</template>

<script>
import Footer from '../components/small/footer.vue';
import Purchase from '../components/small/box-purchase.vue';
import Navbar from '../components/small/navbar.vue';
import Minis from '../components/small/mini-sidebar.vue';
import Card from '../components/small/card.vue';

export default {
  name: 'checkout',
  components: {
    Footer,
    Purchase,
    Navbar,
    Minis,
    Card,
  },
};
</script>

<style scoped>

    .text-conten-card{
        position: relative;
        padding-left: 55px;
    }

    .text-conten-see{
        position: relative;
        left: 950px;
    }
    .container{
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
    }

</style>
