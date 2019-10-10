<template>
  <div class="home">

    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
      Launch demo modal
    </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>



    <div class="container background">
      <div class="col">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus pariatur ut, aut quis magni ad optio accusamus, ipsa autem accusantium perferendis obcaecati minus qui adipisci consequatur vero vel ab illo?</p>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus pariatur ut, aut quis magni ad optio accusamus, ipsa autem accusantium perferendis obcaecati minus qui adipisci consequatur vero vel ab illo?</p>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus pariatur ut, aut quis magni ad optio accusamus, ipsa autem accusantium perferendis obcaecati minus qui adipisci consequatur vero vel ab illo?</p>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus pariatur ut, aut quis magni ad optio accusamus, ipsa autem accusantium perferendis obcaecati minus qui adipisci consequatur vero vel ab illo?</p>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus pariatur ut, aut quis magni ad optio accusamus, ipsa autem accusantium perferendis obcaecati minus qui adipisci consequatur vero vel ab illo?</p>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus pariatur ut, aut quis magni ad optio accusamus, ipsa autem accusantium perferendis obcaecati minus qui adipisci consequatur vero vel ab illo?</p>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus pariatur ut, aut quis magni ad optio accusamus, ipsa autem accusantium perferendis obcaecati minus qui adipisci consequatur vero vel ab illo?</p>
      </div>
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
                        <img src="../assets/image/undraw_newsletter_vovu.svg" class="img-fuid" alt="an illustration that is reffering newsletter">
                    </div>
                    <!-- End of the image -->

                </div>
            </div>
        </div>
    </section>
    <!-- End of the newsletter -->

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Featured from '@/components/FeaturedComponent.vue'
import Posts from '@/components/PostsComponent.vue'
import Aside from '@/components/AsideComponent.vue'
import Footer from '@/components/FooterComponent.vue'

export default {
  name: 'home',
  components: {
    Featured,
    Posts,
    Aside,
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
    $('.background p:even').css({
      borderWidth: '1px',
      'border-style': 'solid',
      'border-color': 'red'
    });
  }
}
</script>

<style lang="scss">
  .background{
    background-image:url('../assets/image/Surfer-bear-600x421.png');
  }
</style>
