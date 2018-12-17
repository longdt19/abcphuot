<template>
<section>
  <!-- start banner Area -->
  <section class="relative about-banner">
    <div class="overlay overlay-bg"></div>
    <div class="container">
      <div class="row d-flex align-items-center justify-content-center">
        <div class="about-content col-lg-12">
          <!-- <h1 class="text-white">
            Blog Details Page
          </h1> -->
          <!-- <p class="text-white link-nav"><a href="index.html">Home </a> <span class="lnr lnr-arrow-right"></span><a href="blog-home.html">Blog </a> <span class="lnr lnr-arrow-right"></span> <a href="blog-single.html"> Blog Details Page</a></p> -->
        </div>
      </div>
    </div>
  </section>
  <!-- End banner Area -->
  <!-- Start post-content Area -->
  <section class="post-content-area single-post-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 posts-list">
          <div class="single-post row">
            <div class="col-lg-12">
              <div class="feature-img">
                <img class="img-fluid" src="img/blog/feature-img1.jpg" alt="">
              </div>
            </div>
            <div class="col-lg-5  col-md-5 meta-details">
              <div class="user-details row">
                <img :src="wifi.image" alt="" style="width: 270px; height: 270px">
              </div>
            </div>

            <div class="col-lg-7 col-md-7">
              <h3 class="mt-20 mb-20">{{wifi.country}}</h3>
              <p class="user-name col-lg-12 col-md-12 col-6"><a href="#">Châu lục: </a> <span>{{wifi.continent}}</span></p>
              <p class="date col-lg-12 col-md-12 col-6"><a href="#">Mạng quốc tế: </a> <span>{{wifi.internet_name}}</span></p>
              <p class="view col-lg-12 col-md-12 col-6"><a href="#">Số máy kết nối: </a> <span>{{wifi.connection}}</span></p>
              <p class="view col-lg-12 col-md-12 col-6"><a href="#">Tốc độ download: </a> <span>{{wifi.speed_download}}</span></p>
              <p class="view col-lg-12 col-md-12 col-6"><a href="#">Tốc độ upload: </a> <span>{{wifi.speed_upload}}</span></p>
              <p class="view col-lg-12 col-md-12 col-6"><a href="#">Gói cước dữ liệu: </a> <span>{{wifi.information}}</span></p>
              <p class="view col-lg-12 col-md-12 col-6"><a href="#">Phí cọc: </a> <span>{{wifi.prepayment}}</span></p>
              <p class="view col-lg-12 col-md-12 col-6"><a href="#">Giá thuê 1 ngày: </a> <span>{{wifi.price_day}}</span></p>

              <ul class="social-links col-lg-12 col-md-12 col-6">
                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-github"></i></a></li>
                <li><a href="#"><i class="fa fa-behance"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-4 sidebar-widgets">
          <div class="widget-wrap">
            <div class="single-sidebar-widget popular-post-widget">

              <div class="popular-post-list">
                <div class="single-post-list d-flex flex-row align-items-center">
                  <div class="thumb">
                    <img class="img-fluid" src="img/blog/pp1.jpg" alt="">
                  </div>
                  <div class="details">
                    <a href="blog-single.html">
                      <h6>Số lượng cần mua</h6>
                    </a>
                    <el-input type="number" v-model="quantity" min="1"></el-input>
                  </div>
                </div>
                <h5 style="margin-bottom: 80px; background: #759c15" type="button" class="popular-title" @click="test()">Thêm vào giỏ hàng</h5>
                <h4 type="button" class="popular-title" @click="test()">Mua ngay</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End post-content Area -->
</section>
</template>

<script>
import { GET_WIFI_URL } from '@/constants/endpoints'

export default {
  data () {
    return {
      quantity: 1,
      wifi_id: '',
      loading: false,
      wifi: {}
    }
  },
  watch: {
  },
  methods: {
    test () {
      console.log('test', this.quantity)
    },
    async get_wifi () {
      if (this.loading) return
      this.loading = true
      const data = {
        'product_id': this.wifi_id
      }
      const response = await this.$services.do_request('post', GET_WIFI_URL, data)
      this.loading = false
      console.log('response', response)
      if (response.status === 200) {
        this.wifi = response.data
      } else {
        console.log('load wifi list failed')
      }
    }
  },
  created () {
    this.wifi_id = this.$route.params.id
    this.get_wifi()
  }
}
</script>

<style lang="css">
</style>
