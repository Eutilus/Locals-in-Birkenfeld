<template>
  <div class="scroll">
    <a class="scrollToTop" href="#">
      <font-awesome-icon icon="arrow-up" />
    </a>
  </div>
</template>

<script>
import $ from "jquery";
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > $(document).height() - $(window).height() - 100) {
      $(".scrollToTop").fadeIn();
    } else {
      $(".scrollToTop").fadeOut();
    }
  });
});
export default {};
</script>
<style>
* {
  scroll-behavior: smooth;
}

.scrollToTop {
  width: 45px;
  padding: 10px;
  text-align: center;
  background: #204c78;
  font-weight: bold;
  color: #444;
  text-decoration: none;
  position: fixed;
  bottom: 75px;
  right: 40px;
  display: none;
}
.scrollToTop:hover {
  text-decoration: none;
}

.fa-arrow-up {
  color: white;
}
</style>
