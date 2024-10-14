<template>
  <router-view />
</template>

<style lang="scss">
#app {
  
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #FFFCF6;
  background-image: url('@/assets/HOME/indexbg.jpg');
  background-size: cover; /* 背景圖片覆蓋整個頁面 */
  background-position: top; /* 背景圖片從頂部顯示 */
  background-repeat: no-repeat; /* 防止背景重複 */
  min-height: 100vh; /* 確保背景圖片覆蓋整個瀏覽器視窗 */
}
</style>
