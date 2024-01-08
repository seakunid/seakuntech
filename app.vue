<template>
  <div>
    <Navbar />
    <HeaderSection />
    <PortfolioSection />
    <BenefitSection />
    <ProductSection />
    <OrderFlowSection />
    <TestimonySection />
    <Footer />
  </div>
</template>
<script>
import Navbar from "./components/mollecules/Navbar.vue";
import HeaderSection from "./components/organisms/HeaderSection/index.vue";
import PortfolioSection from "./components/organisms/PortofolioSection/index.vue";
import BenefitSection from "./components/organisms/BenefitSection/index.vue";
import ProductSection from "./components/organisms/ProductSection/index.vue";
import OrderFlowSection from "./components/organisms/OrderFlowSection/index.vue";
import TestimonySection from "./components/organisms/TestimonySection/index.vue";
import Footer from "./components/mollecules/Footer.vue";
export default defineComponent({
  components: {
    Navbar,
    HeaderSection,
    PortfolioSection,
    BenefitSection,
    ProductSection,
    OrderFlowSection,
    TestimonySection,
    Footer,
  },
  data() {
    return {
      hello: "hello world",
    };
  },
});
</script>
