<template>
  <div id="flow" class="tn:pt-20">
    <div
      class="tn:pt-[24px] md:pt-[60px] tn:pb-[40px] md:pb-[84px] bg-[#F4FFFD] container"
    >
      <h2
        class="tn:text-[20px] md:text-[30px] xl:text-[36px] leading-[64px] font-bold text-center"
      >
        Cara Bertransaksi
      </h2>
      <div
        class="flex flex-wrap justify-center xl:justify-between items-center tn:mt-[16px] md:mt-[28px] gap-6 xl:gap-0"
      >
        <div
          v-for="(flow, id) in orderFlow"
          :key="id"
          class="tn:w-[125px] md:w-[170px] mx-auto"
        >
          <img
            class="mx-auto w-[85px] md:w-[140px]"
            :src="`/seakuntech/images/order flow/${flow.img}.svg`"
            :alt="flow.desc"
          />
          <div
            class="flex items-center justify-center tn:space-x-1 md:space-x-2 tn:mt-[20px]"
          >
            <div
              class="tn:w-[12px] tn:h-[12px] md:w-[24px] md:h-[24px] rounded-full flex justify-center items-center text-white bg-primary tn:text-[8px] md:text-[16px] md:py-[2px] md:px-[9px]"
            >
              {{ flow.step }}
            </div>
            <p class="text-secondary font-bold text-[10px] md:text-[18px]">
              {{ flow.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderFlow: [
        {
          step: 1,
          desc: "Pesan layanan",
          img: "step-1",
        },
        {
          step: 2,
          desc: "Cari Teman Patungan",
          img: "step-2",
        },
        {
          step: 3,
          desc: "Pemabayaran",
          img: "step-3",
        },
        {
          step: 4,
          desc: "Menunggu Proses",
          img: "step-4",
        },
        {
          step: 5,
          desc: "Pesanan diterima",
          img: "step-5",
        },
        {
          step: 6,
          desc: "Selesai!",
          img: "step-6",
        },
      ],
    };
  },
};
</script>

<style></style>
