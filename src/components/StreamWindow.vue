<template>
  <div class="streamwindow">
    <section class="make-center">
      <input
        type="text"
        id="room-id"
        value="abcdef"
        autocorrect="off"
        autocapitalize="off"
        size="20"
      />
      <button id="open-room">Open Room</button>
      <button id="join-room">Join Room</button>
      <button id="open-or-join-room">Auto Open Or Join Room</button>

      <div id="videos-container" style="margin: 20px 0;"></div>

      <div
        id="room-urls"
        style="text-align: center;display: none;background: #F1EDED;margin: 15px -10px;border: 1px solid rgb(189, 189, 189);border-left: 0;border-right: 0;"
      ></div>
    </section>
  </div>
</template>

<script>

export default {
  name: "StreamWindow",
  props: {
    msg: String
  },
  methods: {
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
