<template>
  <div class="home">
    <Navbar></Navbar>
    <StreamWindow></StreamWindow>
    <Login></Login>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Login from "@/components/Login.vue";
import StreamWindow from "@/components/StreamWindow.vue";

export default {
  name: "home",
  components: {
    Login,
    StreamWindow
  }
};
</script>
