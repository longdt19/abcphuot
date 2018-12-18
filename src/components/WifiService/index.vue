<template>
<section>
<section class="about-banner relative">
  <div class="overlay overlay-bg"></div>
  <div class="container">
    <div class="row d-flex align-items-center justify-content-center">
      <div class="about-content col-lg-12">
        <h1 class="text-white">
          Wifi Quốc Tế
        </h1>
        <!-- <p class="text-white link-nav"><a href="index.html">Home </a> <span class="lnr lnr-arrow-right"></span> <a href="hotels.html"> Hotels</a></p> -->
      </div>
    </div>
  </div>
</section>

<!-- Start destinations Area -->
<section class="destinations-area section-gap">
  <div class="container">
    <div class="row d-flex justify-content-center">
      <div class="menu-content pb-40 col-lg-8">
        <div class="title text-center">
          <h1 class="mb-10">Dịch vụ sản phẩm</h1>
          <p>Chúng tôi sẽ giao hàng cho bạn trước 1 ngày khi du lịch và nhận lại sau 1 ngày khi bạn về</p>
          <p style="color: red">Lưu ý: Nếu trả hàng quá hạn 2 ngày sẽ bị tính thêm phí dịch vụ</p>
          <p style="color: red">Các thiết bị đều phải đặt cọc nhằm đảm bảo việc khách hàng giữ gìn sản phẩm</p>
        </div>
      </div>
    </div>
    <div class="row">

      <div class="col-lg-4" v-for="(wifi, index) in wifi.list" v-bind:key="index">
        <div class="single-destinations">
          <div class="thumb">
            <img src="/static/img/hotels/d1.jpg" alt="">
          </div>
          <div class="details">
            <h4 class="d-flex justify-content-between">
              <span>{{wifi.country}}</span>
            </h4>
            <ul class="package-list">
              <li class="d-flex justify-content-between align-items-center">
                <span>Mạng quốc tế</span>
                <span>{{wifi.internet_name}}</span>
              </li>
              <li class="d-flex justify-content-between align-items-center">
                <span>Số máy kết nối</span>
                <span>{{wifi.connection}}</span>
              </li>
              <li class="d-flex justify-content-between align-items-center">
                <span>Tốc độ download</span>
                <span>{{wifi.speed_download}}</span>
              </li>
              <li class="d-flex justify-content-between align-items-center">
                <span>Tốc độ upload</span>
                <span>{{wifi.speed_upload}}</span>
              </li>
              <li class="d-flex justify-content-between align-items-center">
                <span>Gói cước dữ liệu</span>
                <span>{{wifi.infomation}}</span>
              </li>
              <li class="d-flex justify-content-between align-items-center">
                <span>Phí cọc</span>
                <span>{{wifi.prepayment}}</span>
              </li>
              <li class="d-flex justify-content-between align-items-center">
                <span>Giá thuê 1 ngày</span>
                <a :href="'/chi-tiet-wifi/' + wifi.id" class="price-btn">{{wifi.price_day}}d</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- End destinations Area -->
</section>
</template>

<script>
import { WIFI_URL } from '@/constants/endpoints'

export default {
  data () {
    return {
      wifi: {
        list: {
          asian: [],
          eroupe: [],
          other: []
        },
        loading: false
      }
    }
  },
  methods: {
    async get_wifi_list () {
      if (this.wifi.loading) return
      this.wifi.loading = true
      const response = await this.$services.do_request('get', WIFI_URL)
      this.wifi.loading = false

      if (response.status === 200) {
        this.wifi.list = response.data.result
      } else {
        console.log('load wifi list failed')
      }
    }
  },
  created () {
    this.get_wifi_list()
  }
}
</script>

<style lang="css">
</style>
