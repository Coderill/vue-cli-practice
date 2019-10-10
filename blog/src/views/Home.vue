<template>
  <div class="home">
    <!-- Featured -->
    <Featured/>

    <!-- Main wrapper -->
    <div class="main-wrapper">
       <div class="container">
            <div class="row">
                <div class="col-lg-9">
                  <!-- post -->
                  <Posts/>
                </div>

                <div class="col-lg-3">
                  <!-- post -->
                  <Aside/>
                </div>
            </div>
       </div>
    </div>
    <!-- end of the main wrapper -->

    <!-- Newsletter -->
    <Newsletter/>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Featured from '@/components/FeaturedComponent.vue'
import Posts from '@/components/PostsComponent.vue'
import Aside from '@/components/AsideComponent.vue'
import Newsletter from '@/components/NewsletterComponent.vue'
import Footer from '@/components/FooterComponent.vue'

export default {
  name: 'home',
  components: {
    Featured,
    Posts,
    Aside,
    Newsletter,
    Footer
  },
  data () {
    return {
      images: {
        sample: require('@/assets/image/Untitled-1.svg')
      }
    }
  },

  mounted () {

  }
}
</script>

<style lang="scss">
  .background{
    background-image:url('../assets/image/Surfer-bear-600x421.png');
  }
</style>
