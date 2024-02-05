<template>
  <div id="product-list" class="tn:pt-20 container">
    <h1
      class="tn:text-[28px] md:text-[32px] lg:text-[40px] font-bold text-center"
    >
      Produk Sekeranjang
    </h1>

    <div>
      <div class="tn:mt-6 md:mt-10 flex justify-center items-start flex-wrap">
        <ProductCard
          class="tn:m-1 md:m-3"
          v-for="(productData, id) in productsData.list"
          :key="id"
          :product="productData"
          @onClickProduct="onClickProduct"
        />
      </div>
    </div>
    <div v-if="!productsData.loading" class="tn:hidden md:block md:mt-14">
      <Pagination
        v-if="productsData.pagination"
        :current-page="productsData.pagination.currentPage"
        :num-of-pages="productsData.pagination.numOfPages"
        @clickPagination="onClickPagination"
      />
    </div>
    <div v-if="!productsData.loading" class="tn:mt-10 md:hidden">
      <PaginationMobile
        v-if="productsData.pagination"
        :current-page="productsData.pagination.currentPage"
        :num-of-pages="productsData.pagination.numOfPages"
        @clickPagination="onClickPagination"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from "./views/ProductCard.vue";
import ProductCardShimmer from "./views/ProductCardShimmer.vue";
import Pagination from "../Pagination.vue";
import PaginationMobile from "../PaginationMobile.vue";

export default {
  components: {
    ProductCard,
    ProductCardShimmer,
    Pagination,
    PaginationMobile,
  },
  data() {
    return {
      productsData: {
        loading: false,
        list: [
          {
            id: 1,
            uid: "0ebd1e0b-5ae7-48b4-b29e-9eec2f22c112",
            statusUid: "5f735bb3-60c4-11ed-bf81-42010ab8000e",
            promoTypeUid: "77814d88-6aa1-11ed-87f9-42010ab80010",
            sekeranjangCode: "SKJ22110002",
            isSeakun: 0,
            name: "Informa Jason Rak Besi 5 Tingkat - Putih",
            brand: "Jason",
            promoType: "Buy 1 Get 1",
            promoTypeRefId: 1,
            quota: 2,
            thumbnail:
              "https://storage.googleapis.com/seakunid_prod-bucket/sekeranjang/5c9be960-2cde-4cc4-af62-2d82b71fe64f.png",
            promoStartAt: 1668096000,
            promoEndAt: 1669737600,
            status: "Active",
            statusRefId: 2,
            price: 1299000,
            finalPrice: 681975,
            notes: "",
            createdBy: "9cee79a7-8c35-4e88-adce-baf974f82e5b",
            createdAt: 1668146007,
          },
        ],
      },
    };
  },
  // mounted() {
  //   if (this.productsData.list.length === 0) {
  //     this.applyFilterProduct(1);
  //   }
  // },
  methods: {
    onClickProduct(productUid) {},
    onClickPagination(page) {},
  },
};
</script>

<style></style>
