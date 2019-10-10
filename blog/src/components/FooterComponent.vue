<template>
    <!-- Footer -->
    <footer class="footer" :style="{backgroundImage: 'url( ' + images.sample + ')'}">
        <div class="container text-center">
            <div class="social">
                <a href="#"><font-awesome-icon :icon="['fab', 'github']" /></a>
                <a href="#"><font-awesome-icon :icon="['fab', 'facebook']" /></a>
                <a href="#"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
                <a href="#"><font-awesome-icon :icon="['fab', 'youtube']" /></a>
            </div>
            <div class="copyright">
                <p>&COPY; 2019 All right reserved</p>
                <p>Develop and technical support by <a href="http://maxsop.com" target="_blank" aria-label="Devloped by maxsop">Maxsop</a></p>
            </div>
        </div>
    </footer>
    <!-- End of the footer -->
</template>

<script>
export default {
  name: 'footer-component',
  data () {
    return {
      images: {
        sample: require('@/assets/image/Untitled-1.svg')
      }
    }
  }

}
</script>
