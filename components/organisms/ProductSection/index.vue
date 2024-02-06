<template>
  <div id="provider" class="container tn:pt-6">
    <div class="">
      <div id="product-ondemand" class="md:py-4 pt-5">
        <h1 class="tn:text-xl md:text-[30px] xl:text-[36px] font-bold">
          Layanan Patungan
        </h1>
      </div>

      <div class="tn:mt-7">
        <div
          class="w-full h-full grid xl:grid-cols-6 lg:grid-cols-5 sm:grid-cols-4 tn:grid-cols-3 tn:gap-3 md:gap-4 lg:gap-8 px-0 justify-center place-items-stretch items-stretch"
        >
          <div class="" v-for="(product, id) in dataProductOnDemand" :key="id">
            <NuxtLink :to="product.slug">
              <ProductCard :product="product" class="md:w-full md:h-full" />
            </NuxtLink>
          </div>
          <!-- <div class="">
            <ProposeCard
              :propose="dataProposeProvider"
              class="md:w-full h-full"
            />
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "~/components/mollecules/ProductCard";
import ProviderCard from "~/components/mollecules/ProviderCard";
import ProposeCard from "~/components/mollecules/ProposeCard";
export default {
  components: {
    ProductCard,
    ProviderCard,
    ProposeCard,
  },
  data() {
    return {
      showModalScheme: false,
      dataDetailProvider: {
        list: {},
        slug: "",
        name: "",
      },
      dataProductOnDemand: [
        {
          name: "Semabar",
          slug: "semabar",
          img: "/images/product/on demand/new/semabar.png",
          isActive: true,
          preview: "(Main Bareng)",
        },
        {
          name: "SeGlowUp",
          slug: "seglowup",
          img: "/images/product/on demand/new/seglowup.png",
          isActive: true,
          // preview:
          //   'Cari teman patungan beli barang Buy 1 Get 1 atau beli barang dengan kuantitas banyak untuk mendapatkan discount sampai 50%.',
        },
        {
          name: "Sekurban",
          slug: "sekurban",
          img: "/images/product/on demand/new/sekurban.png",
          isActive: true,
          // preview:
          //   'Cari teman patungan beli barang Buy 1 Get 1 atau beli barang dengan kuantitas banyak untuk mendapatkan discount sampai 50%.',
        },
        {
          name: "Sekeranjang",
          slug: "sekeranjang",
          img: "/images/product/on demand/new/sekeranjang.png",
          isActive: true,
          // preview:
          //   'Cari teman patungan beli barang Buy 1 Get 1 atau beli barang dengan kuantitas banyak untuk mendapatkan discount sampai 50%.',
        },
        // {
        //   name: "Sefitnes",
        //   slug: "sefitnes",
        //   img: "/images/product/on demand/new/sefitnes.png",
        //   isActive: false,
        //   // preview:
        //   //   'Cari teman patungan berlangganan gym, fitness dan fasilitas olahraga untuk mendapatakan potongan harga.',
        // },
        // {
        //   name: "Seatap",
        //   slug: "seatap",
        //   img: "/images/product/on demand/new/seatap.png",
        //   isActive: false,
        //   // preview:
        //   //   'Cari teman patungan untuk sewa rumah, kostan atau apartemen.',
        // },
        // {
        //   name: "Sekelas",
        //   slug: "sekelas",
        //   img: "/images/product/on demand/new/sekelas.png",
        //   isActive: false,
        //   // preview:
        //   //   'Cari teman patungan untuk beli dan berlangganan kelas online atau offline.',
        // },
        // {
        //   name: "Sekatering",
        //   slug: "sekatering",
        //   img: "/images/product/on demand/new/sekatering.png",
        //   isActive: false,
        //   // preview: 'Cari teman patungan berlangganan katering terdekat.',
        // },
        // {
        //   name: "Sekantor",
        //   slug: "sekantor",
        //   img: "/images/product/on demand/new/sekantor.png",
        //   isActive: false,
        //   // preview: 'Cari teman patungan berlangganan katering terdekat.',
        // },
        // {
        //   name: "Sejalan",
        //   slug: "sejalan",
        //   img: "/images/product/on demand/new/sejalan.png",
        //   isActive: false,
        //   // preview: 'Berlangganan bersama ojek online terpercaya.',
        // },
        // {
        //   name: "Seumrah",
        //   slug: "seumrah",
        //   img: "/images/product/on demand/new/seumrah.png",
        //   isActive: false,
        //   // preview: 'Berlangganan bersama ojek online terpercaya.',
        // },
        // {
        //   name: "Setrip",
        //   slug: "setrip",
        //   img: "/images/product/on demand/new/setrip.png",
        //   isActive: false,
        //   // preview: 'Berlangganan bersama ojek online terpercaya.',
        // },
      ],
      dataProposeProvider: {
        name: "Layananmu",
        preview: "belum terdaftar?",
        img: "/images/product/propose-new.svg",
      },
      isShowModalPackages: false,
      choosedProvider: {},
      choosedSlugProvider: "",
      isShowCategoryList: false,
      isShowProductTypeList: false,
      categoryButton: "Kategori produk",
      productTypeButton: "Tipe produk",
      productTypeList: [
        {
          text: "All",
          value: 0,
        },
        {
          text: "Ready",
          value: 1,
        },
        {
          text: "Pre-order",
          value: 2,
        },
      ],
    };
  },
};
</script>

<style scoped></style>
