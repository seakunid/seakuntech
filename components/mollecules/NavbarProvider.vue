<template>
  <div
    class="w-full h-max md:!h-auto fixed z-50 bg-white shadow-md md:shadow-none"
  >
    <div
      class="md:container bg-white block md:flex md:justify-between md:items-center py-3 border-b md:border-none"
    >
      <div
        class="flex justify-between items-center px-[20px] md:px-0 md:container"
      >
        <NuxtLink to="/" class="">
          <img
            class="h-[40px]"
            src="/images/navbar/brand_seakun.svg"
            alt="brand seakun"
          />
        </NuxtLink>
        <div
          role="button"
          class="md:hidden"
          @click="(isOpen = !isOpen), $emit('toggleMenu', isOpen)"
        >
          <img
            v-if="!isOpen"
            class="w-[22px]"
            src="/images/icons/atoms/hamburger.svg"
            alt="menu"
          />
          <img
            v-else
            class="w-[24px]"
            src="/images/icons/atoms/close-menu.svg"
            alt="tutup menu"
          />
        </div>
      </div>
      <div>
        <div v-if="!isLoggedin" class="hidden md:flex items-center gap-[16px]">
          <NuxtLink
            class="w-full md:w-[120px] h-[36px] md:h-[46px] font-bold flex justify-center items-center border border-primary bg-white text-primary rounded-[4px] md:rounded-[8px]"
            to="/login"
          >
            <p>Masuk</p>
          </NuxtLink>
          <NuxtLink
            class="w-full md:w-[120px] h-[36px] md:h-[46px] font-bold flex justify-center items-center border border-primary bg-primary text-white rounded-[4px] md:rounded-[8px]"
            to="/register"
          >
            <p>Daftar</p>
          </NuxtLink>
        </div>
        <NuxtLink v-else to="/">
          <img
            :src="`/images/profile-page/avatar/${avatar}.svg`"
            alt="profile"
            class="rounded-full w-[42px] h-[42px] hidden md:block border border-[#D8EDEE]"
          />
        </NuxtLink>
      </div>
    </div>

    <div
      class="md:hidden overflow-hidden transition-all ease-in-out duration-300 shadow-md"
      :class="`${
        !isOpen ? 'max-h-0 opacity-0 -mt-20' : 'h-auto opacity-100 mt-0'
      }`"
    >
      <div
        v-if="!isLoggedin"
        class="grid grid-cols-2 items-center gap-3 mt-5 mx-auto w-[321px]"
      >
        <NuxtLink
          class="w-full h-[36px] font-bold flex justify-center items-center border border-primary bg-white text-primary rounded-[4px]"
          to="/login"
        >
          <p>Masuk</p>
        </NuxtLink>
        <NuxtLink
          class="w-full h-[36px] font-bold flex justify-center items-center border border-primary bg-primary text-white rounded-[4px]"
          to="/register"
        >
          <p>Daftar</p>
        </NuxtLink>
      </div>
      <div v-else class="py-3 border-b">
        <NuxtLink class="" to="/">
          <div class="mx-auto w-[321px] md:w-full flex items-center gap-3">
            <img
              :src="`/images/profile-page/avatar/${avatar}.svg`"
              alt="profile"
              class="rounded-full w-[42px] h-[42px] border border-[#D8EDEE]"
            />
            <p>Profil</p>
          </div>
        </NuxtLink>
      </div>
      <NuxtLink to="/">
        <div class="my-4 flex items-center gap-1 mx-auto w-[321px] md:w-full">
          <img src="/images/icons/atoms/home.svg" alt="kembali" />
          <p>Kembali ke Beranda</p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/atoms/Logo.vue";
// import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      isOpen: false,
      isLoggedin: true,
    };
  },
  components: {
    Logo,
  },
  computed: {},
  mounted() {
    const username = this.$cookies.get("username");
    if (username) {
      if (!this.avatar) {
        const ava = this.$cookies.get("avatar");
        const newAva = ava ? ava : "default";
        this.setUserAvatar(newAva);
      }
      this.isLoggedin = true;
    } else {
      this.isLoggedin = false;
    }
  },
  methods: {
    // ...mapActions({
    //   setUserAvatar: "setUserAvatar",
    // }),
  },
};
</script>

<style></style>
