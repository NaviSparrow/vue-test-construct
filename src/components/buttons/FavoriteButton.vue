<script setup lang="ts">
import useNavigation from "@/hooks/useNavigation";

type FavoriteButtonProps = {
  isFavorite: boolean;
};

const props = defineProps<FavoriteButtonProps>();

const { isDealsPage, isFavoritePage } = useNavigation();
</script>

<template>
  <button
    :class="{
      [$style.button]: !props.isFavorite,
      [$style.smallSize]: isDealsPage || isFavoritePage,
      [$style.active]: props.isFavorite
    }"
    type="button"
  >
    <svg
      :class="props.isFavorite ? $style.activeIcon : $style.icon"
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.334 2.156c-.565.513-.963 1.33-.963 2.568 0 .768.37 1.652 1.023 2.593.645.93 1.52 1.845 2.414 2.66a30.729 30.729 0 0 0 3.185 2.521 33.038 33.038 0 0 0 3.196-2.585c.896-.827 1.771-1.749 2.418-2.673.658-.938 1.022-1.798 1.022-2.516a3.365 3.365 0 0 0-3.36-3.37 3.348 3.348 0 0 0-2.712 1.39.688.688 0 0 1-1.114 0 3.348 3.348 0 0 0-2.713-1.39c-.99 0-1.82.28-2.396.802ZM8 13.323l-.376.567-.002-.002-.005-.003-.017-.011a31.217 31.217 0 0 1-1.152-.807 32.113 32.113 0 0 1-2.57-2.094c-.934-.851-1.889-1.844-2.615-2.89C.545 7.05 0 5.892 0 4.725c0-1.543.508-2.75 1.407-3.566C2.296.352 3.488 0 4.73 0A4.71 4.71 0 0 1 8 1.315a4.728 4.728 0 0 1 8 3.409c0 1.129-.55 2.267-1.265 3.287-.724 1.035-1.677 2.032-2.61 2.892a34.415 34.415 0 0 1-3.651 2.92l-.065.044-.017.012-.005.003h-.001c0 .001-.001.001-.386-.56Zm0 0 .386.56a.694.694 0 0 1-.762.007L8 13.323Z"
      />
    </svg>
  </button>
</template>

<style module>
.button {
  composes: defaultButton from "/public/css/global.module.css";
  padding: 17px 17px;
  margin-left: 12px;
  transition: background-color 0.4s ease-out;
}

.button:hover {
  box-shadow: 0 0 4px 0 #000000;
}

.button:active {
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.23);
}

.active {
  background-color: #2d3b87;
  composes: button;
}

.active:hover {
  box-shadow: 0 0 4px #110e0e;
}

.active:active {
  box-shadow: none;
}

.smallSize {
  composes: button;
  padding: 0;
  min-width: 40px;
  min-height: 40px;
}

.icon {
  fill: #2d3b87;
}

.activeIcon {
  fill: #e5e5e5;
}

@media (max-width: 394px) {
  .button {
    display: flex;
    justify-content: center;
    position: relative;
    padding: 12px 30px;
    margin: 0;
    width: 90%;
  }

  .icon {
    width: 20px;
    height: 20px;
    opacity: 0;
  }

  .button:before {
    content: "?? ??????????????????";
    position: absolute;
  }

  .active:before {
    opacity: 0;
  }

  .activeIcon {
    width: 20px;
    height: 20px;
    opacity: 1;
  }
}
</style>
