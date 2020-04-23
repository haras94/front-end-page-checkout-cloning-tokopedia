<template>
  <div>
    <div class="navbar">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>

    .navbar{
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    background: #FFFFFF;
    box-sizing: border-box;
    width: 100%;
    height: 100px;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    left: 0px;
    z-index: 1;
    top: 0px;
    }
</style>
