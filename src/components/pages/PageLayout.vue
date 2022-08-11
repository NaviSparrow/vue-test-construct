<script setup>
import PageFooter from "@/components/PageFooter";
import PageHeader from "@/components/PageHeader";
import useNavigation from "@/hooks/useNavigation";
import PageControls from "@/components/PageControls";

const { pageHeading } = useNavigation();
</script>

<template>
  <page-header />
  <main :class="$style.main">
    <h1 class="visually-hidden">{{ pageHeading }}</h1>
    <page-controls />
    <slot></slot>
  </main>
  <page-footer />
</template>

<style module>
.main {
  flex-grow: 1;
  margin-top: 70px;
}
@media (max-width: 340px) {
  .main {
    margin-top: 20px;
  }
}
</style>
