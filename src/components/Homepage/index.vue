<template>
<section>
  <section class="banner-area relative">
    <div class="overlay overlay-bg"></div>
    <div class="container">
      <div class="row fullscreen align-items-center justify-content-between">
        <div class="col-lg-6 col-md-6 banner-left">
          <h6 class="text-white">from monotonous life</h6>
          <h1 class="text-white">Magical Travel</h1>
          <p class="text-white">
            If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each.
          </p>
          <a href="#" class="primary-btn text-uppercase">Sim du lịch</a>
        </div>
        <div class="col-lg-4 col-md-6 banner-right">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" id="flight-tab" data-toggle="tab" href="#flight" role="tab" aria-controls="flight" aria-selected="true">Dịch vụ wifi</a>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="flight" role="tabpanel" aria-labelledby="flight-tab">
              <form class="form-wrap">
                <input type="text" class="form-control" name="name" placeholder="Điểm đến " onfocus="this.placeholder = ''" onblur="this.placeholder = 'From '">
                <input type="text" class="form-control date-picker" name="start" placeholder="Ngày đi" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Start '">
                <input type="text" class="form-control date-picker" name="return" placeholder="Ngày về " onfocus="this.placeholder = ''" onblur="this.placeholder = 'Return '">
                <a href="#" class="primary-btn text-uppercase">Đặt ngay</a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Start price Area -->
  <section class="price-area section-gap" v-loading="wifi.loading">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="menu-content pb-70 col-lg-8">
          <div class="title text-center">
            <h1 class="mb-10">Quốc gia hỗ trợ</h1>
            <p>Dịch vụ cho thuê wifi nội địa và quốc tế</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4">
          <div class="single-price">
            <h4>Châu Á</h4>
            <ul class="price-list">
              <li class="d-flex justify-content-between align-items-center"
                v-for="(wifi, index) in wifi.list.asian" v-bind:key="index"
              >
                <span>{{wifi.country}}</span>
                <a :href=" '/chi-tiet-wifi/' + wifi.id" class="price-btn">{{wifi.price_day}}đ</a>
              </li>
            </ul>
          </div>

        </div>
        <div class="col-lg-4">
          <div class="single-price">
            <h4>Châu Âu</h4>
            <ul class="price-list">
              <li class="d-flex justify-content-between align-items-center"
                v-for="(wifi, index) in wifi.list.eroupe" v-bind:key="index"
              >
                <span>{{wifi.country}}</span>
                <a :href=" '/chi-tiet-wifi/' + wifi.id" class="price-btn">{{wifi.price_day}}đ</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="single-price">
            <h4>Khác</h4>
            <ul class="price-list">
              <li class="d-flex justify-content-between align-items-center"
                v-for="(wifi, index) in wifi.list.other" v-bind:key="index"
              >
                <span>{{wifi.country}}</span>
                <a :href=" '/chi-tiet-wifi/' + wifi.id" class="price-btn">{{wifi.price_day}}đ</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End price Area -->

  <!-- Start other-issue Area -->
  <section class="other-issue-area section-gap">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="menu-content pb-70 col-lg-9">
          <div class="title text-center">
            <h1 class="mb-10">Sim du lịch quốc tế</h1>
            <!-- <p>We all live in an age that belongs to the young at heart. Life that is.</p> -->
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-6" v-for="(sim, index) in sim.list" v-bind:key="index">
          <div class="single-other-issue">
            <div class="thumb">
              <img class="img-fluid" :src="sim.image" style="width: 250px; height: 180px;">
            </div>
            <a :href=" '/chi-tiet-sim/' + sim.id">
              <h4>{{sim.country}}</h4>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End other-issue Area -->

  <!-- Start blog Area -->
  <section class="recent-blog-area section-gap">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="menu-content pb-60 col-lg-9">
          <div class="title text-center">
            <h1 class="mb-10">Những bài viết mới nhất của chúng tôi</h1>
            <p>Những bài viết về trải nghiệm,...</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="active-recent-blog-carusel">

          <div class="single-recent-blog-post item"
            v-for="(blog, index) in blog.list" v-bind:key="index"
          >
            <div class="owl-item active" style="width: 360px; margin-right: 10px;">
              <div class="thumb">
                <img class="img-fluid" :src="blog.banner_url" alt="" style="width: 250px; height: 250px">
              </div>
              <div class="details">
                <div class="tags">
                  <ul>
                    <li>
                      <a href="#">{{blog.category_id}}</a>
                    </li>
                  </ul>
                </div>
                <a :href="'/chi-tiet-blog/' + blog.id">
                  <h4 class="title">{{blog.name}}</h4>
                </a>
                <p>
                  something
                </p>
                <h6 class="date">31st January,2018</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End recent-blog Area -->

</section>
</template>

<script>
import { SIM_URL, WIFI_URL, BLOG_LIST_URL } from '@/constants/endpoints'

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
      },
      sim: {
        list: [],
        loading: false
      },
      blog: {
        list: [],
        loading: false
      }
    }
  },
  methods: {
    async get_sim_list () {
      if (this.sim.loading) return
      this.sim.loading = true
      const response = await this.$services.do_request('get', SIM_URL)
      this.sim.loading = false
      if (response.status === 200) {
        this.sim.list = response.data.result
      } else {
        console.log('load sim list failed')
      }
    },
    async get_wifi_list () {
      if (this.wifi.loading) return
      this.wifi.loading = true
      const response = await this.$services.do_request('get', WIFI_URL)
      this.wifi.loading = false

      if (response.status === 200) {
        let result = response.data.result

        result.forEach(item => {
          if (item.continent === 'asian') {
            this.wifi.list.asian.push(item)
          } else if (item.continent === 'eroupe') {
            this.wifi.list.eroupe.push(item)
          } else {
            this.wifi.list.other.push(item)
          }
        })
      } else {
        console.log('load wifi list failed')
      }
    },
    async get_blog_list () {
      if (this.blog.loading) return
      this.blog.loading = true
      const response = await this.$services.do_request('get', BLOG_LIST_URL)
      console.log('response', response)
      this.blog.loading = false

      if (response.status === 200) {
        this.blog.list = response.data.result.slice(0, 6)
        // if (response.data.result.length > 6) {
        //   let i = 0
        //   for (i = 0; i < 6; i++) {
        //     console.log('i', i)
        //     this.blog.list.unshift(response.data.result[i])
        //   }
        // } else {
        //   this.blog.list = response.data.result
        // }
        // this.blog.list = response.data.result
        console.log('blog list', this.blog.list)
      } else {
        console.log('load blog list failed')
      }
    },
    go_detail_wifi (id) {
      this.$router.push('/chi-tiet-wifi/' + id)
    },
    go_detail_sim (id) {
      this.$router.push('/chi-tiet-sim/' + id)
    }
  },
  created () {
    this.get_sim_list()
    this.get_wifi_list()
    this.get_blog_list()
  }
}
</script>

<style lang="css">
</style>
