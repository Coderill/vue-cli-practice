<template>
  <div class="home">
    <div>
      <font-awesome-icon icon="home" />
      <font-awesome-icon icon="user-secret" />
    </div>

    <Featured/>

    <!-- Main wrapper -->
    <div class="main-wrapper">
       <div class="container">
            <div class="row">
                <div class="col-lg-9">
                    <Posts/>
                </div>

                <div class="col-lg-3">
                    <Aside/>
                </div>
            </div>
       </div>
    </div>
    <!-- end of the main wrapper -->

    <!-- Newsletter -->
    <section class="newsletter">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 align-self-center order-2 order-lg-1">

                    <!-- Content -->
                    <div class="content">
                        <span>Newsletter</span>
                        <h2>Never miss a story</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate beatae commodi unde. Mollitia quas voluptate laboriosam temporibus sit dolor omnis itaque consequatur corrupti officia. Vero aliquid obcaecati nemo. Quos aspernatur consequuntur quae soluta! Commodi, adipisci?</p>
                        <form name="newsletter" action="#" method="POST">
                            <div class="input-group">
                                <input type="email" class="form-control" placeholder="Email" aria-label="enter your email for get notified">
                                <div class="input-group-append">
                                    <button class="btn" type="button" id="button-addon2" name="btn" aria-label="submit button">Subscribe</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <!-- End of the content -->

                </div>
                <div class="col-lg-6 order-1 order-lg-2 mb-4 mb-lg-0 d-none d-lg-block">

                    <!-- Image -->
                    <div class="image">
                        <img src="image/undraw_newsletter_vovu.svg" class="img-fuid" alt="an illustration that is reffering newsletter">
                    </div>
                    <!-- End of the image -->

                </div>
            </div>
        </div>
    </section>
    <!-- End of the newsletter -->

    <!-- Footer -->
    <!-- <footer :style="{backgroundImage: 'url( ' + images.sample + ')'}"> -->
    <footer :style="{backgroundImage: 'url( ' + require('@/assets/image/Untitled-1.svg') + ')'}">
        <div class="container text-center">
            <div class="social">
                <a href="#"><i class="icon ion-logo-github" aria-label="Github"></i></a>
                <a href="#"><i class="icon ion-logo-twitter" aria-label="Twitter"></i></a>
                <a href="#"><i class="icon ion-logo-vimeo" aria-label="Github"></i></a>
                <a href="#"><i class="icon ion-logo-googleplus" aria-label="Twitter"></i></a>
            </div>
            <div class="copyright">
                <p>&COPY; 2019 All right reserved</p>
                <p>Develop and technical support by <a href="#" aria-label="Devloped by maxsop">Maxsop</a></p>
            </div>
        </div>
    </footer>
    <!-- End of the footer -->
  </div>
</template>

<script>
// @ is an alias to /src
import Featured from '@/components/FeaturedComponent.vue'
import Posts from '@/components/PostsComponent.vue'
import Aside from '@/components/AsideComponent.vue'

export default {
  name: 'home',
  components: {
    Featured,
    Posts,
    Aside
  },
  data () {
    return {
      images: {
        sample: require('@/assets/image/Untitled-1.svg')
      }
    }
  },
  mounted () {
    console.log(this.$router)
  }
}
</script>
