<template>
  <div class="navbar">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/home" class="navbar-brand">Kephas Church</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse align-content-center" id="navbarNav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/stream" class="nav-link">
              Stream
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">A MIRACLE?</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About Us</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0 mx-auto">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button type="button" class="btn btn-default my-2 my-sm-0">
            Search
          </button>
        </form>
        <button type="button" class="btn btn-success" id="donate">
          Donate
        </button>
        <a
          class="btn btn-outline-info"
          data-toggle="modal"
          data-target="#login"
        >
          Login
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
ul {
  font-size: 27px;
}
.btn {
  font-weight: 700;
}
#donate {
  margin-right: 27px;
}
</style>
