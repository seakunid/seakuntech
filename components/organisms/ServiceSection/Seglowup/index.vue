<template>
  <div class="mt-6 md:mt-[44px] lg:mt-[64px]" id="service-seglowup">
    <div
      class="container-semabar w-full text-center text-[#2A5446] max-w-[928px] mx-auto"
    >
      <h1 class="text-dmsans font-bold text-base md:text-xl lg:text-[30px]">
        Layanan
      </h1>
      <p class="text-sm md:text-base lg:text-xl pt-2">
        Berikut ini beragam layanan yang tersedia di SeGlowUp
      </p>
    </div>
    <section
      class="md:container-semabar flex items-center w-full mt-6 pl-[23px] !justify-center gap-4"
    >
      <ButtonChevron
        variant="bg-[#00BA881A]"
        fillColor="#00BA88"
        mode="left"
        @click-chevron="scrollFill('left')"
        class="hidden md:block"
      />
      <div
        class="flex w-max items-center gap-[9px] lg:gap-4 overflow-x-scroll service-parent scroll-smooth pl-4 pr-8"
        id="service-wrapper"
      >
        <section
          v-for="(service, id) in menus"
          :key="id"
          class="transition-all ease-in duration-200 p-2 lg:p-4 rounded-t-xl min-w-[120px] lg:min-w-[190px]"
          :class="[
            service.name == activeMenu ? 'bg-[#DEF3EF] cursor-pointer' : '',
          ]"
        >
          <div
            class="w-full h-[48px] md:h-[60px] lg:h-[70px] bg-[#DEF3EF] rounded-lg flex items-center justify-center"
          >
            <div
              class="bg-[#DEF3EF] w-full h-full rounded-lg flex items-center justify-center"
              :class="{
                'border-[3px] border-[#23D7A6] !bg-white':
                  service.name === activeMenu,
              }"
            >
              <img
                v-if="service.background"
                :src="`/images/product/${service.background}`"
                :alt="service.name"
                class="w-full h-[26px] md:h-10 lg:h-[60px]"
              />
            </div>
          </div>
        </section>
      </div>
      <ButtonChevron
        variant="bg-[#00BA881A]"
        fillColor="#00BA88"
        @click-chevron="scrollFill('right')"
        class="hidden md:block"
      />
    </section>

    <div class="container-semabar">
      <div class="p-3 md:p-5 lg:p-8 bg-[#DEF3EF] text-dmsans rounded-lg">
        <header class="flex justify-between items-center text-main">
          <p class="text-sm font-medium md:text-base lg:text-[20px] text-main">
            ZAP Series
          </p>
        </header>

        <section
          class="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6 mt-3 md:mt-6 w-full"
        >
          <CardService
            v-for="(service, id) in zap.variants"
            :key="id"
            :data="service"
            :zap-uid="zap.uid"
            :package-uid="service.packageUid"
            :id="1 + id"
          />
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Chevron from "~/components/atoms/Chevron.vue";
import ButtonChevron from "~/components/atoms/ButtonChevron.vue";
import CardShimmer from "./views/CardShimmer.vue";
import CardService from "./views/CardService.vue";

export default {
  components: {
    Chevron,
    ButtonChevron,
    CardService,
    CardShimmer,
  },

  // computed: {
  //   zap() {
  //     return this.dataProviderListActive.list.find(
  //       (provider) => provider.slug == "zap"
  //     );
  //   },
  // },

  data() {
    return {
      zap: {
        variants: [
          {
            uid: "ecb7da28-de0c-40b4-9a34-fe44704545c3",
            packageUid: "bf8cc054-39d0-41a9-a845-1f611ca63fa6",
            packageName: "Series 749K",
            name: "Series 749K",
            adminFee: 45800,
            price: 5093200,
            grandTotal: 5139000,
            notes: "Zap Series 749K",
            duration: 18,
            durations: "18",
            isActive: 0,
            isDisplayed: 1,
            isHost: 0,
            isPo: 0,
            benefits: [
              {
                uid: "911e39a6-5245-42e1-85a1-88adf6065188",
                description:
                  "ZAP Series terdiri dari berbagai pilihan perawatan serta varian harga yang bisa dipilih sesuai dengan kebutuhan kulit Anda",
              },
              {
                uid: "5311325a-781e-4f30-84d4-6615703003e5",
                description:
                  "Mendapat harga per treatment yang lebih terjangkau",
              },
              {
                uid: "65e63ae0-deb4-4121-90b0-2f42874ee654",
                description:
                  "Dengan ZAP Series, dapat melakukan booking perawatan secara langsung ataupun melalui aplikasi ZAP",
              },
              {
                uid: "465a143c-3d1d-40dd-9440-ad39d0995115",
                description:
                  "Memiliki data yang terintegrasi secara online sehingga Anda bisa merawat diri di outlet ZAP Clinic mana pun di seluruh Indonesia",
              },
              {
                uid: "b257b4e6-18dc-4048-830f-6eb856b937b3",
                description: "Masing-masing anggota mendapatkan 8x perawatan",
              },
            ],
          },
          {
            uid: "e56d76fd-42be-4032-8daf-9f701c3d578e",
            packageUid: "7378d8e8-f966-42f8-9463-f89ae6de53dd",
            packageName: "Series 449K",
            name: "Series 449K",
            adminFee: 30800,
            price: 3393200,
            grandTotal: 3424000,
            notes: "Zap Series 449K",
            duration: 18,
            durations: "18",
            isActive: 0,
            isDisplayed: 1,
            isHost: 0,
            isPo: 0,
            benefits: [
              {
                uid: "4dca1146-ea7d-444f-8c64-fc25c7658f75",
                description:
                  "ZAP Series terdiri dari berbagai pilihan perawatan serta varian harga yang bisa dipilih sesuai dengan kebutuhan kulit Anda",
              },
              {
                uid: "2b14e8f3-a0c1-4a00-b467-d30e74984b63",
                description:
                  "Mendapat harga per treatment yang lebih terjangkau",
              },
              {
                uid: "3ccb0b2a-1bcd-494f-8285-ea41fcadc388",
                description:
                  "Dengan ZAP Series, dapat melakukan booking perawatan secara langsung ataupun melalui aplikasi ZAP",
              },
              {
                uid: "0f43bed0-95b6-4909-a754-4c8668e22c40",
                description:
                  "Memiliki data yang terintegrasi secara online sehingga Anda bisa merawat diri di outlet ZAP Clinic mana pun di seluruh Indonesia",
              },
              {
                uid: "20b7f12d-3ae9-4cfc-b602-66a194d4643a",
                description: "Masing-masing anggota mendapatkan 8x perawatan",
              },
            ],
          },
          {
            uid: "e02695e2-2986-4565-a65a-c8d51c689eff",
            packageUid: "bd38a9b9-902c-44dd-b784-5b94494fc29d",
            packageName: "Series 299K",
            name: "Series 299K",
            adminFee: 18800,
            price: 2033200,
            grandTotal: 2052000,
            notes: "Zap Series 299K",
            duration: 18,
            durations: "18",
            isActive: 0,
            isDisplayed: 1,
            isHost: 0,
            isPo: 0,
            benefits: [
              {
                uid: "999506f6-496d-4084-b602-1a2321f17fb9",
                description:
                  "ZAP Series terdiri dari berbagai pilihan perawatan serta varian harga yang bisa dipilih sesuai dengan kebutuhan kulit Anda",
              },
              {
                uid: "f2a100df-5bd8-4a69-8251-75a394446467",
                description:
                  "Mendapat harga per treatment yang lebih terjangkau",
              },
              {
                uid: "25de620e-5d26-4421-a639-74d05c47da30",
                description:
                  "Dengan ZAP Series, dapat melakukan booking perawatan secara langsung ataupun melalui aplikasi ZAP",
              },
              {
                uid: "9361053b-e436-46c8-9533-0b5401858f7f",
                description:
                  "Memiliki data yang terintegrasi secara online sehingga Anda bisa merawat diri di outlet ZAP Clinic mana pun di seluruh Indonesia",
              },
              {
                uid: "67787af7-11bb-48e2-a800-798ad50b4a67",
                description: "Masing-masing anggota mendapatkan 8x perawatan",
              },
            ],
          },
          {
            uid: "fa3c2432-a589-4174-86b1-573cf2aa5ff3",
            packageUid: "1c95b544-5880-4e30-82ce-2136089f0733",
            packageName: "Series 199K",
            name: "Series 199K",
            adminFee: 12800,
            price: 1353200,
            grandTotal: 1366000,
            notes: "Zap Series 199K",
            duration: 18,
            durations: "18",
            isActive: 0,
            isDisplayed: 1,
            isHost: 0,
            isPo: 0,
            benefits: [
              {
                uid: "da6e5d6c-766f-4214-aebb-a4689e498ff6",
                description:
                  "ZAP Series terdiri dari berbagai pilihan perawatan serta varian harga yang bisa dipilih sesuai dengan kebutuhan kulit Anda",
              },
              {
                uid: "5da726e9-3fca-4bc0-bd6e-c0f778a9b598",
                description:
                  "Mendapat harga per treatment yang lebih terjangkau",
              },
              {
                uid: "c238af6b-a737-4f32-8f4d-1c4666f772f2",
                description:
                  "Dengan ZAP Series, dapat melakukan booking perawatan secara langsung ataupun melalui aplikasi ZAP",
              },
              {
                uid: "d69bb390-8280-44f0-bf3b-9685c2b6e037",
                description:
                  "Memiliki data yang terintegrasi secara online sehingga Anda bisa merawat diri di outlet ZAP Clinic mana pun di seluruh Indonesia",
              },
              {
                uid: "d33500a4-0295-4de6-a903-20b59b845e11",
                description: "Masing-masing anggota mendapatkan 8x perawatan",
              },
            ],
          },
        ],
      },
      activeMenu: "Zap",
      menus: [
        {
          name: "Zap",
          background: "zap.svg",
        },
        {
          name: "coming-soon",
        },
        {
          name: "coming-soon",
        },
        {
          name: "coming-soon",
        },
      ],
    };
  },

  methods: {
    updateFilteredList() {
      const screenWidth = window.innerWidth;

      if (screenWidth < 768) {
        this.filteredList = this.dataVenue.list.slice(0, 3);
      } else if (screenWidth < 1024) {
        this.filteredList = this.dataVenue.list.slice(0, 4);
      } else {
        this.filteredList = this.dataVenue.list.slice(0, 8);
      }
    },
    showAllDataVenue() {
      this.filteredList = this.dataVenue.list;
    },
    handleClickMenu(name) {
      this.activeMenu = name;
    },
    scrollFill(direction) {
      const wrapper = document.getElementById("service-wrapper");
      if (direction == "left") {
        wrapper.scrollLeft = 0;
      } else {
        wrapper.scrollLeft += wrapper.offsetWidth - 100;
      }
    },
  },
};
</script>

<style scoped>
.text-nunito {
  font-family: "Nunito Sans", sans-serif;
}
.text-dmsans {
  font-family: "DM Sans", sans-serif;
}
.service-menu::after {
  border-radius: 6px;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
  background: rgba(0, 0, 0, 0.45);
}
/* Hide scrollbar for Chrome, Safari and Opera */
.service-parent::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.service-parent {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
