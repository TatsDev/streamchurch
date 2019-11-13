<template>
  <div class="stream">
    <VueTwitchPlayer :channel="channel"></VueTwitchPlayer>
    <VueTwitchPlayer :video="video"></VueTwitchPlayer>
  </div>
</template>

<script>
import VueTwitchPlayer from "vue-twitch-player";
export default {
  name: "StreamWindow",
  components: {
    VueTwitchPlayer
  },
  data() {
    return {
      video: "117216248",
      channel: "kephaschurch"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
