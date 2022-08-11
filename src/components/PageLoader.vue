<template>
  <div :class="$style.dualRing"></div>
</template>

<style module>
.dualRing {
  margin: auto;
  display: inline-block;
  width: 200px;
  height: 200px;
}
.dualRing:after {
  content: " ";
  display: block;
  width: 128px;
  height: 128px;
  margin: 18px;
  border-radius: 50%;
  border: 10px solid #ffffff;
  border-color: #5f60f3 transparent #020202 transparent;
  animation: dualRing 1.2s linear infinite;
}
@keyframes dualRing {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
