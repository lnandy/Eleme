<template>
  <div id="app">
    <!-- <transition :name="transitionName">
        <router-view class="router-view"></router-view>
    </transition> -->
     <transition name="fade" mode="out-in">
          <keep-alive v-if="$route.meta.keepAlive">
            <router-view></router-view>
          </keep-alive>
           <router-view v-else></router-view>
     </transition>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data (){
      return {
        transitionName:''
      }
    },
    watch:{
      $route(to, from) {
        //如果to索引大于from索引,判断为前进状态,反之则为后退状态
        if(to.meta.index > from.meta.index){
          //设置动画名称
          this.transitionName = 'slide-left';
        }else{
          this.transitionName = 'slide-right';
        }
      }
    }
  }
</script>

<style>
html,body{
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
#app {
  font-family: 'Helvetica Neue',Tahoma,Arial,PingFangSC-Regular,'Hiragino Sans GB','Microsoft Yahei',sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.slide-right-enter-active,
   .slide-right-leave-active,
   .slide-left-enter-active,
   .slide-left-leave-active {
       will-change: transform;
       transition: all .3s;
       position: absolute;
       width:100%;
       left:0;
   }
   .slide-right-enter {
       transform: translateX(-100%);
   }
   .slide-right-leave-active {
       transform: translateX(100%);
   }
   .slide-left-enter {
       transform: translateX(100%);
   }
   .slide-left-leave-active {
       transform: translateX(-100%);
   }


   .fade-enter-active, .fade-leave-active {
     transition: opacity .5s
   }
   .fade-enter, .fade-leave-active {
     opacity: 0
   }
</style>
