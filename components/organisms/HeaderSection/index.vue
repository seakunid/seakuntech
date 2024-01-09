<template>
  <div id="head" class="relative">
    <div
      class="absolute top-0 left-0 z-0 w-full tn:h-[411px] xl:h-[520px] bg-header"
    ></div>
    <div
      class="tn:px-[24px] md:!container tn:pt-20 md:pt-24 lg:pt-28 relative z-20"
    >
      <div
        class="w-full rounded-2xl bg-banner flex tn:flex-col md:flex-row md:justify-between md:items-center tn:py-8"
      >
        <div
          class="tn:pt-[10px] md:py-[32px] lg:py-[42px] tn:px-[24px] md:pl-[40px] lg:pl-[63px] md:pr-0 md:w-[620px] lg:w-[610px] tn:order-2 md:order-1"
        >
          <div
            class="font-extrabold text-[16px] md:text-[20px] lg:text-[28px] xl:text-[40px] text-[#15382F] tn:leading-snug xl:leading-[62px] tn:text-center md:text-left"
          >
            <p>Platform Patungan</p>
            <p
              v-if="typedText"
              class="text-[#A8DFC2] bg-[#15382F] p-2 whitespace-nowrap text-[14px] md:text-[18px] lg:text-[26px] xl:text-[38px] w-max mx-auto md:ml-0 mt-2"
            >
              {{ typedText }}
            </p>
          </div>

          <!-- <p
            class="text-dark-green tn:text-[14px] lg:text-[24px] tn:mt-3 tn:text-center md:text-left leading-[13px]"
          >
            Cek pilihan layanan di Seakun sekarang
          </p> -->
          <!-- <div class="text-center md:text-left">
            <NuxtLink to="/#provider">
              <Button
                class-wrapper="!bg-[#15382F] !text-[14px] lg:!text-[24px] text-white w-full !h-[46px] lg:!w-[240px] lg:!h-[64px] rounded-lg font-bold "
                label="Lihat Layanan"
                class="tn:mt-6 xl:mt-12 md:w-auto"
                add-class="text-[24px] font-bold "
              />
            </NuxtLink>
          </div> -->
        </div>
        <div class="tn:px-[27px] md:px-0 md:pr-[42px] tn:order-1 md:order-2">
          <img
            class="md:w-[450px] lg:w-[455px] mx-auto"
            src="/images/header/header.webp"
            alt="seakun"
          />
        </div>
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
  data() {
    return {
      textToType: ["T. Seakun Global Teknologi"],
      currentTextIndex: 0,
      typedText: "PT. Seakun Global Teknologi",
      currentText: "",
      index: 0,
    };
  },
  mounted() {
    // setInterval(() => {
    //   this.currentTextIndex =
    //     (this.currentTextIndex + 1) % this.textToType.length;
    //   this.currentText = this.textToType[this.currentTextIndex];
    //   this.typeText();
    // }, 3000);
  },
  methods: {
    typeText() {
      this.index = 0;
      this.typedText = "P";
      const typeInterval = setInterval(() => {
        if (this.index < this.currentText.length) {
          this.typedText += this.currentText.charAt(this.index);
          this.index++;
        } else {
          clearInterval(typeInterval);
        }
      }, 75);
    },
    onClickOrder() {
      const penggunaSection = document.getElementById("provider");
      penggunaSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    },
  },
};
</script>

<style>
#head {
  font-family: "Nunito Sans", sans-serif;
}
.bg-header {
  background: linear-gradient(180deg, #e3fcf6 0%, #ffffff 116.06%);
}
.bg-banner {
  background: radial-gradient(
    80.18% 813.47% at 80.18% 92.9%,
    #a8dfc2 0%,
    #8dcabe 100%
  );
}
</style>
