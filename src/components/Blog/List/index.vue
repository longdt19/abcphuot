<template>
<section>
  <!-- start banner Area -->
  <section class="banner-area relative blog-home-banner" id="home">
    <div class="overlay overlay-bg"></div>
    <div class="container">
      <div class="row d-flex align-items-center justify-content-center">
        <div class="about-content blog-header-content col-lg-12">
          <h1 class="text-white">
            Những bài viết của chúng tôi
          </h1>
          <!-- <p class="text-white">
            There is a moment in the life of any aspiring astronomer that it is time to buy that first
          </p>
          <a href="blog-single.html" class="primary-btn">View More</a> -->
        </div>
      </div>
    </div>
  </section>
  <!-- End banner Area -->

  <!-- Start top-category-widget Area -->
  <section class="top-category-widget-area pt-90 pb-90 ">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="single-cat-widget">
            <div class="content relative">
              <div class="overlay overlay-bg"></div>
              <a href="#" target="_blank">
                <div class="thumb">
                  <img class="content-image img-fluid d-block mx-auto" src="/static/img/blog/cat-widget1.jpg" alt="">
                </div>
                <div class="content-details">
                  <h4 class="content-title mx-auto text-uppercase">Kinh nghiệm</h4>
                  <span></span>
                  <p>Enjoy your social life together</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="single-cat-widget">
            <div class="content relative">
              <div class="overlay overlay-bg"></div>
              <a href="#" target="_blank">
                <div class="thumb">
                  <img class="content-image img-fluid d-block mx-auto" src="/static/img/blog/cat-widget2.jpg" alt="">
                </div>
                <div class="content-details">
                  <h4 class="content-title mx-auto text-uppercase">Cảm nhận</h4>
                  <span></span>
                  <p>Be a part of politics</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="single-cat-widget">
            <div class="content relative">
              <div class="overlay overlay-bg"></div>
              <a href="#" target="_blank">
                <div class="thumb">
                  <img class="content-image img-fluid d-block mx-auto" src="/static/img/blog/cat-widget3.jpg" alt="">
                </div>
                <div class="content-details">
                  <h4 class="content-title mx-auto text-uppercase">Địa điểm</h4>
                  <span></span>
                  <p>Let the food be finished</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End top-category-widget Area -->

  <!-- Start post-content Area -->
  <section class="post-content-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 posts-list">
          <div class="single-post row" v-for="(blog, index) in blog_list" v-bind:key="index">
            <div class="col-lg-3  col-md-3 meta-details">
              <ul class="tags">
                <li><a href="#">{{blog.category_id}}</a></li>
              </ul>
              <div class="user-details row">
                <p class="user-name col-lg-12 col-md-12 col-6"><a href="#">Mark wiens</a> <span class="lnr lnr-user"></span></p>
                <p class="date col-lg-12 col-md-12 col-6"><a href="#">12 Dec, 2017</a> <span class="lnr lnr-calendar-full"></span></p>
                <p class="view col-lg-12 col-md-12 col-6"><a href="#">1.2M Views</a> <span class="lnr lnr-eye"></span></p>
                <p class="comments col-lg-12 col-md-12 col-6"><a href="#">06 Comments</a> <span class="lnr lnr-bubble"></span></p>
              </div>
            </div>
            <div class="col-lg-9 col-md-9 ">
              <div class="feature-img">
                <img class="img-fluid" :src="blog.banner_url" style="width: 550px; height:320px" alt="">
              </div>
              <a class="posts-title" href="#">
                <h3>{{blog.name}}</h3>
              </a>
              <p class="excert">
                MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.
              </p>
              <a href="/chi-tiet-blog" class="primary-btn">View More</a>
            </div>
          </div>

          <nav class="blog-pagination justify-content-center d-flex">
            <ul class="pagination">
              <li class="page-item">
                <a href="#" class="page-link" aria-label="Previous">
                  <span aria-hidden="true">
                    <span class="lnr lnr-chevron-left"></span>
                  </span>
                </a>
              </li>
              <li class="page-item active"><a href="#" class="page-link">01</a></li>
              <li class="page-item"><a href="#" class="page-link">02</a></li>
              <li class="page-item"><a href="#" class="page-link">03</a></li>
              <li class="page-item"><a href="#" class="page-link">04</a></li>
              <li class="page-item"><a href="#" class="page-link">09</a></li>
              <li class="page-item">
                <a href="#" class="page-link" aria-label="Next">
                  <span aria-hidden="true">
                    <span class="lnr lnr-chevron-right"></span>
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="col-lg-4 sidebar-widgets">
          <div class="widget-wrap">
            <div class="single-sidebar-widget search-widget">
              <form class="search-form" action="#">
                <input placeholder="Search Posts" name="search" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Search Posts'">
                <button type="submit"><i class="fa fa-search"></i></button>
              </form>
            </div>
            <div class="single-sidebar-widget popular-post-widget">
              <h4 class="popular-title">Popular Posts</h4>
              <div class="popular-post-list">

                <div class="single-post-list d-flex flex-row align-items-center"
                  v-for="(blog, index) in blog_list_random" v-bind:key="index"
                >
                  <div class="thumb">
                    <img class="img-fluid" :src="blog.banner_url" style="width: 100px" alt="">
                  </div>
                  <div class="details">
                    <a :href="'/chi-tiet-blog/' + blog.id">
                      <h6>{{blog.name}}</h6>
                    </a>
                    <p>{{formatDate(blog.created_at)}}</p>
                  </div>
                </div>

                <div class="single-post-list d-flex flex-row align-items-center">
                  <div class="thumb">
                    <img class="img-fluid" src="/static/img/blog/pp1.jpg" alt="">
                  </div>
                  <div class="details">
                    <a href="blog-single.html">
                      <h6>Space The Final Frontier</h6>
                    </a>
                    <p>02 Hours ago</p>
                  </div>
                </div>
                <div class="single-post-list d-flex flex-row align-items-center">
                  <div class="thumb">
                    <img class="img-fluid" src="/static/img/blog/pp2.jpg" alt="">
                  </div>
                  <div class="details">
                    <a href="blog-single.html">
                      <h6>The Amazing Hubble</h6>
                    </a>
                    <p>02 Hours ago</p>
                  </div>
                </div>
                <div class="single-post-list d-flex flex-row align-items-center">
                  <div class="thumb">
                    <img class="img-fluid" src="/static/img/blog/pp3.jpg" alt="">
                  </div>
                  <div class="details">
                    <a href="blog-single.html">
                      <h6>Astronomy Or Astrology</h6>
                    </a>
                    <p>02 Hours ago</p>
                  </div>
                </div>
                <div class="single-post-list d-flex flex-row align-items-center">
                  <div class="thumb">
                    <img class="img-fluid" src="/static/img/blog/pp4.jpg" alt="">
                  </div>
                  <div class="details">
                    <a href="blog-single.html">
                      <h6>Asteroids telescope</h6>
                    </a>
                    <p>02 Hours ago</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="single-sidebar-widget post-category-widget">
              <h4 class="category-title">Post Catgories</h4>
              <ul class="cat-list">
                <li>
                  <a href="#" class="d-flex justify-content-between">
                    <p>Kinh nghiệm</p>
                    <p>37</p>
                  </a>
                </li>
                <li>
                  <a href="#" class="d-flex justify-content-between">
                    <p>Cảm nhận</p>
                    <p>24</p>
                  </a>
                </li>
                <li>
                  <a href="#" class="d-flex justify-content-between">
                    <p>Địa điểm</p>
                    <p>59</p>
                  </a>
                </li>
              </ul>
            </div>
            <div class="single-sidebar-widget newsletter-widget">
              <h4 class="newsletter-title">Newsletter</h4>
              <p>
                Here, I focus on a range of items and features that we use in life without
                giving them a second thought.
              </p>
              <div class="form-group d-flex flex-row">
                <div class="col-autos">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <div class="input-group-text"><i class="fa fa-envelope" aria-hidden="true"></i>
                      </div>
                    </div>
                    <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Enter email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email'">
                  </div>
                </div>
                <a href="#" class="bbtns">Subcribe</a>
              </div>
              <p class="text-bottom">
                You can unsubscribe at any time
              </p>
            </div>
            <div class="single-sidebar-widget tag-cloud-widget">
              <h4 class="tagcloud-title">Tag Clouds</h4>
              <ul>
                <li><a href="#">Technology</a></li>
                <li><a href="#">Fashion</a></li>
                <li><a href="#">Architecture</a></li>
                <li><a href="#">Fashion</a></li>
                <li><a href="#">Food</a></li>
                <li><a href="#">Technology</a></li>
                <li><a href="#">Lifestyle</a></li>
                <li><a href="#">Art</a></li>
                <li><a href="#">Adventure</a></li>
                <li><a href="#">Food</a></li>
                <li><a href="#">Lifestyle</a></li>
                <li><a href="#">Adventure</a></li>
              </ul>
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
import { BLOG_LIST_URL } from '@/constants/endpoints'
import formatDate from '@/utils/formatDate'

export default {
  data () {
    return {
      blog_list: [],
      loading: false,
      blog_list_random: []
    }
  },
  methods: {
    formatDate,
    async get_blog_list () {
      if (this.loading) return
      this.loading = true
      const response = await this.$services.do_request('get', BLOG_LIST_URL)
      console.log('response', response)
      this.loading = false

      if (response.status === 200) {
        this.blog_list = response.data.result
        this.blog_list_random = this.shuffle(this.blog_list)
        console.log('randome', this.blog_list_random)
      } else {
        console.log('load blog list failed')
      }
    },
    shuffle (array) {
      var currentIndex = array.length
      var temporaryValue = null
      var randomIndex = null

      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1
        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
      }

      return array
    }
  },
  created () {
    this.get_blog_list()
  }
}
</script>

<style lang="css">
</style>
