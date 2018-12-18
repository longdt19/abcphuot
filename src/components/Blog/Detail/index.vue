<template>
<section>
  <!-- start banner Area -->
  <section class="relative about-banner">
    <div class="overlay overlay-bg"></div>
    <div class="container">
      <div class="row d-flex align-items-center justify-content-center">
        <div class="about-content col-lg-12">
          <h1 class="text-white">
            Blog Details Page
          </h1>
          <p class="text-white link-nav"><a href="index.html">Home </a> <span class="lnr lnr-arrow-right"></span><a href="blog-home.html">Blog </a> <span class="lnr lnr-arrow-right"></span> <a href="blog-single.html"> Blog Details Page</a></p>
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
            <div class="col-lg-3  col-md-3 meta-details">
              <ul class="tags">
                <li><a href="#">{{blog.category_id}}</a></li>
              </ul>
              <div class="user-details row">
                <p class="user-name col-lg-12 col-md-12 col-6"><a href="#">Mark wiens</a> <span class="lnr lnr-user"></span></p>
                <p class="date col-lg-12 col-md-12 col-6"><a href="#">12 Dec, 2017</a> <span class="lnr lnr-calendar-full"></span></p>
                <p class="view col-lg-12 col-md-12 col-6"><a href="#">1.2M Views</a> <span class="lnr lnr-eye"></span></p>
                <p class="comments col-lg-12 col-md-12 col-6"><a href="#">06 Comments</a> <span class="lnr lnr-bubble"></span></p>
                <ul class="social-links col-lg-12 col-md-12 col-6">
                  <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fa fa-github"></i></a></li>
                  <li><a href="#"><i class="fa fa-behance"></i></a></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-9 col-md-9">
              <h3 class="mt-20 mb-20">{{blog.name}}</h3>
              <div class="" v-html="blog.content">

              </div>
            </div>
            <!-- <div class="col-lg-12">
              <div class="quotes">
                MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who
                has
                the willpower to actually sit through a self-imposed MCSE training.
              </div>
              <div class="row mt-30 mb-30">
                <div class="col-6">
                  <img class="img-fluid" src="img/blog/post-img1.jpg" alt="">
                </div>
                <div class="col-6">
                  <img class="img-fluid" src="img/blog/post-img2.jpg" alt="">
                </div>
                <div class="col-lg-12 mt-30">
                  <p>
                    MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However,
                    who
                    has the willpower.
                  </p>
                  <p>
                    MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However,
                    who
                    has the willpower.
                  </p>
                </div>
              </div>
            </div> -->
          </div>
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
import { BLOG_URL, BLOG_LIST_URL } from '@/constants/endpoints'

export default {
  data () {
    return {
      blog: {},
      loading_blog: false,
      loading_list: false,
      blog_id: '',
      blog_list_random: []
    }
  },
  methods: {
    async get_blog () {
      if (this.loading) return
      this.loading = true
      const params = {
        'id': this.blog_id
      }
      const data = {
        'params': params
      }
      const response = await this.$services.do_request('get', BLOG_URL, data)
      console.log('response', response)
      this.loading = false

      if (response.status === 200) {
        this.blog = response.data
      } else {
        console.log('load blog list failed')
      }
    },
    async get_blog_list () {
      if (this.loading) return
      this.loading = true
      const response = await this.$services.do_request('get', BLOG_LIST_URL)
      console.log('response123', response)
      this.loading = false

      if (response.status === 200) {
        this.blog_list_random = this.shuffle(response.data)
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
    this.blog_id = this.$route.params.id
    this.get_blog()
    this.get_blog_list()
  }
}
</script>

<style lang="css">
</style>
