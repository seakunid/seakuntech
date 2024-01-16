<template>
  <div
    class="w-full h-full border-none max-w-[166px] bg-[#08A0810D] !text-[#08A081] bg-opacity-5 rounded-2xl relative z-0"
  >
    <div class="text-center md:pt-[26px] tn:pt-4">
      <div class="md:px-[10.5px] tn:px-[6px]">
        <img
          :src="`${propose.img}`"
          alt="propose your business"
          class="mx-auto mb-2 tn:h-9 tn:w-[45px] md:w-auto"
        />
        <h1 class="md:text-lg tn:text-xs !text-[#08A081]">
          {{ propose.name }} <br />
          <span class=""> {{ propose.preview }} </span>
        </h1>
      </div>
      <div class="md:mt-4 mt-[11px] md:mb-[25px] tn:mb-3">
        <nuxt-link to="/vote">
          <Button
            label="Ajukan layanan"
            class="text-base text-[#08A081] mx-auto border-[1px] border-[#08A081] md:block tn:hidden px-[15px] py-1 rounded-[6px]"
          />
          <Button
            label="Ajukan"
            class="text-sm text-[#08A081] border-[1px] border-[#08A081] md:hidden px-[15px] py-1 rounded-[6px]"
          />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "~/components/atoms/Button.vue";
export default {
  components: {
    Button,
  },
  props: {
    propose: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style lang="scss" scoped></style>
