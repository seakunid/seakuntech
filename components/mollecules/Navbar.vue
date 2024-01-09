<template>
  <div id="navbar" class="w-full fixed z-40 py-3 lg:py-2 bg-white shadow">
    <div
      v-if="open"
      class="opacity-20 fixed inset-0 z-90 bg-black"
      @click="open = false"
    ></div>
    <div class="static z-0 w-full text-gray-700">
      <div class="container lg:flex lg:justify-between lg:items-center">
        <a href="/">
          <img
            class="h-[40px]"
            src="/images/navbar/brand_seakun.svg"
            alt="brand seakun"
          />
        </a>
        <div
          class="absolute top-1 right-1 py-4 px-4 md:px-4 lg:top-0 lg:right-0 lg:relative z-100 flex flex-col w-3/5 md:w-1/2 lg:w-4/5 rounded-xl lg:p-0 lg:justify-end lg:flex-row lg:items-center"
          :class="{ shadow: open, 'bg-white': open }"
        >
          <!-- hamburger icon -->
          <div class="items-center">
            <button
              class="lg:hidden rounded-lg focus:outline-none float-right"
              @click="open = !open"
            >
              <svg
                v-if="open"
                fill="#08A081"
                viewBox="0 0 20 20"
                class="w-6 h-6 primary"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div class="pt-1 pr-1" v-else>
                <img
                  class="w-[18px] md:w-[20px]"
                  src="/images/icons/atoms/hamburger.svg"
                  alt="menu"
                />
              </div>
            </button>
          </div>
          <!-- hamburger icon -->

          <nav
            :class="{ flex: open, hidden: !open }"
            class="flex-col pr-4 md:pr-4 lg:pr-0 mt-2 md:p-0 lg:mt-0 lg:flex lg:justify-end lg:flex-row"
            v-for="(navbar, id) in navbarLink"
            :key="id"
          >
            <div
              class="cursor-pointer text-right my-3 text-sm md:text-[14px] font-semibold md:font-bold text-secondary rounded-lg md:py-0 md:mt-0 hover:opacity-50 focus:opacity-50 lg:ml-8 xl:ml-12 relative"
              :class="`${navbar.tag === 'profile' ? 'lg:my-1' : 'lg:my-3'}`"
            >
              <div v-if="navbar.tag === 'profile'">
                <img
                  :src="`/images/profile-page/avatar/${avatar}.svg`"
                  alt="profile"
                  class="rounded-full w-[42px] h-[42px] hidden lg:block border border-[#D8EDEE]"
                />
                <p class="lg:hidden">{{ navbar.label }}</p>
              </div>
              <a :href="`/#${navbar.tag}`" v-else>
                {{ navbar.label }}
              </a>
              <template v-if="navbar.tag === 'sekurban'">
                <img
                  class="transition-opacity ease-in-out delay-50 duration-500 absolute -top-1 -right-1 w-[9px]"
                  :class="`${showSpark1 ? 'opacity-100' : 'opacity-20'}`"
                  src="/images/icons/atoms/spark.svg"
                  alt="spark"
                />
                <img
                  class="transition-opacity ease-in-out delay-50 duration-500 absolute bottom-1 -right-2 w-[8px]"
                  :class="`${showSpark2 ? '!opacity-100' : '!opacity-20'}`"
                  src="/images/icons/atoms/spark.svg"
                  alt="spark"
                />
                <img
                  class="transition-opacity ease-in-out delay-50 duration-500 absolute top-0 -right-4 w-[12px]"
                  :class="`${showSpark3 ? '!opacity-100' : '!opacity-20'}`"
                  src="/images/icons/atoms/spark.svg"
                  alt="spark"
                />
              </template>
            </div>
          </nav>

          <!-- login button -->
          <div v-if="!isLoggedin">
            <nuxt-link
              :class="{ flex: open, hidden: !open }"
              to="/login"
              class="h-[42px] justify-center items-center rounded-[8px] text-white font-bold text-sm lg:text-base bg-primary w-full mt-3"
              >Login</nuxt-link
            >
            <nuxt-link
              to="/login"
              class="w-[112px] h-[42px] hidden lg:flex justify-center items-center rounded-[8px] text-white font-bold text-sm lg:text-base bg-primary lg:ml-10"
              >Login</nuxt-link
            >
          </div>
          <!-- login button -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/atoms/Logo.vue";

export default {
  data() {
    return {
      showSpark1: false,
      showSpark2: false,
      showSpark3: false,
      open: false,
      isLoggedin: true,
      navbarLink: [
        {
          id: 1,
          label: "Cara Bertransaksi",
          tag: "flow",
        },
        {
          id: 2,
          label: "Layanan",
          tag: "provider",
        },
        {
          id: 3,
          label: "Testimoni",
          tag: "testimony",
        },

        // {
        //   id: 7,
        //   label: 'Sequrban',
        //   tag: 'sekurban',
        // },
      ],
    };
  },
  components: {
    Logo,
  },

  mounted() {
    // window.onscroll = () => {
    //   this.handleScrollEffect();
    // };

    // setInterval(() => {
    //   this.showSpark1 = !this.showSpark1;
    // }, 700);
    // setInterval(() => {
    //   this.showSpark2 = !this.showSpark2;
    // }, 800);
    // setInterval(() => {
    //   this.showSpark3 = !this.showSpark3;
    // }, 900);
  },
  methods: {
    handleScrollEffect() {
      const myNav = document.getElementById("navbar");
      if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
      ) {
        myNav.classList.add("bg-nav");
        myNav.classList.remove("bg-none");
      } else {
        myNav.classList.add("bg-none");
        myNav.classList.remove("bg-nav");
      }
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      this.open = false;
    },
    scrollToSection(menu) {
      if (menu.tag === "helpCenter") {
        window.open("https://forms.gle/t1AbaxnjEtJr8NAPA", "_blank");
      } else if (menu.tag === "sekurban") {
        this.$router.push("/sekurban");
      } else if (menu.tag === "profile") {
        this.$router.push("/user/profile");
      } else {
        this.scrollToElementWithOffset(menu.tag, 25);
        this.open = false;
      }
    },
    scrollToElementWithOffset(elementId, offset) {
      var element = document.getElementById(elementId);
      var elementPosition = element.getBoundingClientRect().top;
      var offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style>
.bg-nav {
  background-color: #ffffff !important;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1) !important;
  transition: 1s all ease;
}
.bg-none {
  background-color: transparent !important;
  box-shadow: none !important;
  transition: 1s all ease;
}
@media (min-width: 800px) {
  .bg-nav {
    background-color: #ffffff !important;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1) !important;
    padding-top: 8px !important;
    padding-bottom: 8px !important;
    transition: 1s all ease;
  }
  .bg-none {
    background-color: transparent !important;
    box-shadow: none !important;
    padding-top: 30px !important;
    padding-bottom: 0 !important;
    transition: 1s all ease;
  }
}
@media (max-width: 800px) {
  nav {
    text-transform: uppercase;
  }
}
</style>
