<template>
<section>
  <section class="banner-area relative">
    <div class="overlay overlay-bg"></div>
    <div class="container">
      <div class="row fullscreen align-items-center justify-content-between">
        <div class="col-lg-6 col-md-6 banner-left">
          <h6 class="text-white">Away from monotonous life</h6>
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

  <!-- Start popular-destination Area -->
  <!-- <section class="popular-destination-area section-gap">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="menu-content pb-70 col-lg-8">
          <div class="title text-center">
            <h1 class="mb-10">Popular Destinations</h1>
            <p>We all live in an age that belongs to the young at heart. Life that is becoming extremely fast, day.</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4">
          <div class="single-destination relative">
            <div class="thumb relative">
              <div class="overlay overlay-bg"></div>
              <img class="img-fluid" src="/static/img/d1.jpg" alt="">
            </div>
            <div class="desc">
              <a href="#" class="price-btn">$150</a>
              <h4>Mountain River</h4>
              <p>Paraguay</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="single-destination relative">
            <div class="thumb relative">
              <div class="overlay overlay-bg"></div>
              <img class="img-fluid" src="/static/img/d2.jpg" alt="">
            </div>
            <div class="desc">
              <a href="#" class="price-btn">$250</a>
              <h4>Dream City</h4>
              <p>Paris</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="single-destination relative">
            <div class="thumb relative">
              <div class="overlay overlay-bg"></div>
              <img class="img-fluid" src="/static/img/d3.jpg" alt="">
            </div>
            <div class="desc">
              <a href="#" class="price-btn">$350</a>
              <h4>Cloud Mountain</h4>
              <p>Sri Lanka</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> -->
  <!-- End popular-destination Area -->

  <!-- Start price Area -->
  <section class="price-area section-gap">
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
              <li class="d-flex justify-content-between align-items-center">
                <span>New York</span>
                <a href="#" class="price-btn">$1500</a>
              </li>
              <li class="d-flex justify-content-between align-items-center">
                <span>Maldives</span>
                <a href="#" class="price-btn">$1500</a>
              </li>
              <li class="d-flex justify-content-between align-items-center">
                <span>Sri Lanka</span>
                <a href="#" class="price-btn">$1500</a>
              </li>
              <li class="d-flex justify-content-between align-items-center">
                <span>Nepal</span>
                <a href="#" class="price-btn">$1500</a>
              </li>
              <li class="d-flex justify-content-between align-items-center">
                <span>Thiland</span>
                <a href="#" class="price-btn">$1500</a>
              </li>
              <li class="d-flex justify-content-between align-items-center">
                <span>Singapore</span>
                <a href="#" class="price-btn">$1500</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="single-price">
            <h4>Châu Âu</h4>
            <ul class="price-list">
              <li class="d-flex justify-content-between align-items-center">
                <span>New York</span>
                <a href="#" class="price-btn">$1500</a>
              </li>
              <li class="d-flex justify-content-between align-items-center">
                <span>Maldives</span>
                <a href="#" class="price-btn">$1500</a>
              </li>
              <li class="d-flex justify-content-between align-items-center">
                <span>Sri Lanka</span>
                <a href="#" class="price-btn">$1500</a>
              </li>
              <li class="d-flex justify-content-between align-items-center">
                <span>Nepal</span>
                <a href="#" class="price-btn">$1500</a>
              </li>
              <li class="d-flex justify-content-between align-items-center">
                <span>Thiland</span>
                <a href="#" class="price-btn">$1500</a>
              </li>
              <li class="d-flex justify-content-between align-items-center">
                <span>Singapore</span>
                <a href="#" class="price-btn">$1500</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="single-price">
            <h4>Khác</h4>
            <ul class="price-list">
              <li class="d-flex justify-content-between align-items-center">
                <span>New York</span>
                <a href="#" class="price-btn">$1500</a>
              </li>
              <li class="d-flex justify-content-between align-items-center">
                <span>Maldives</span>
                <a href="#" class="price-btn">$1500</a>
              </li>
              <li class="d-flex justify-content-between align-items-center">
                <span>Sri Lanka</span>
                <a href="#" class="price-btn">$1500</a>
              </li>
              <li class="d-flex justify-content-between align-items-center">
                <span>Nepal</span>
                <a href="#" class="price-btn">$1500</a>
              </li>
              <li class="d-flex justify-content-between align-items-center">
                <span>Thiland</span>
                <a href="#" class="price-btn">$1500</a>
              </li>
              <li class="d-flex justify-content-between align-items-center">
                <span>Singapore</span>
                <a href="#" class="price-btn">$1500</a>
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
            <h1 class="mb-10">Other issues we can help you with</h1>
            <p>We all live in an age that belongs to the young at heart. Life that is.</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-6">
          <div class="single-other-issue">
            <div class="thumb">
              <img class="img-fluid" src="/static/img/o1.jpg" alt="">
            </div>
            <a href="#">
              <h4>Rent a Car</h4>
            </a>
            <p>
              The preservation of human life is the ultimate value, a pillar of ethics and the foundation.
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="single-other-issue">
            <div class="thumb">
              <img class="img-fluid" src="/static/img/o2.jpg" alt="">
            </div>
            <a href="#">
              <h4>Cruise Booking</h4>
            </a>
            <p>
              I was always somebody who felt quite sorry for myself, what I had not got compared.
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="single-other-issue">
            <div class="thumb">
              <img class="img-fluid" src="/static/img/o3.jpg" alt="">
            </div>
            <a href="#">
              <h4>To Do List</h4>
            </a>
            <p>
              The following article covers a topic that has recently moved to center stage–at least it seems.
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="single-other-issue">
            <div class="thumb">
              <img class="img-fluid" src="/static/img/o4.jpg" alt="">
            </div>
            <a href="#">
              <h4>Food Features</h4>
            </a>
            <p>
              There are many kinds of narratives and organizing principles. Science is driven by evidence.
            </p>
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
            <h1 class="mb-10">Latest from Our Blog</h1>
            <p>With the exception of Nietzsche, no other madman has contributed so much to human sanity as has.</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="active-recent-blog-carusel">
          <div class="single-recent-blog-post item">
            <div class="thumb">
              <img class="img-fluid" src="/static/img/b1.jpg" alt="">
            </div>
            <div class="details">
              <div class="tags">
                <ul>
                  <li>
                    <a href="#">Travel</a>
                  </li>
                  <li>
                    <a href="#">Life Style</a>
                  </li>
                </ul>
              </div>
              <a href="#">
                <h4 class="title">Low Cost Advertising</h4>
              </a>
              <p>
                Acres of Diamonds… you’ve read the famous story, or at least had it related to you. A farmer.
              </p>
              <h6 class="date">31st January,2018</h6>
            </div>
          </div>
          <div class="single-recent-blog-post item">
            <div class="thumb">
              <img class="img-fluid" src="/static/img/b2.jpg" alt="">
            </div>
            <div class="details">
              <div class="tags">
                <ul>
                  <li>
                    <a href="#">Travel</a>
                  </li>
                  <li>
                    <a href="#">Life Style</a>
                  </li>
                </ul>
              </div>
              <a href="#">
                <h4 class="title">Creative Outdoor Ads</h4>
              </a>
              <p>
                Acres of Diamonds… you’ve read the famous story, or at least had it related to you. A farmer.
              </p>
              <h6 class="date">31st January,2018</h6>
            </div>
          </div>
          <div class="single-recent-blog-post item">
            <div class="thumb">
              <img class="img-fluid" src="/static/img/b3.jpg" alt="">
            </div>
            <div class="details">
              <div class="tags">
                <ul>
                  <li>
                    <a href="#">Travel</a>
                  </li>
                  <li>
                    <a href="#">Life Style</a>
                  </li>
                </ul>
              </div>
              <a href="#">
                <h4 class="title">It's Classified How To Utilize Free</h4>
              </a>
              <p>
                Acres of Diamonds… you’ve read the famous story, or at least had it related to you. A farmer.
              </p>
              <h6 class="date">31st January,2018</h6>
            </div>
          </div>
          <div class="single-recent-blog-post item">
            <div class="thumb">
              <img class="img-fluid" src="/static/img/b1.jpg" alt="">
            </div>
            <div class="details">
              <div class="tags">
                <ul>
                  <li>
                    <a href="#">Travel</a>
                  </li>
                  <li>
                    <a href="#">Life Style</a>
                  </li>
                </ul>
              </div>
              <a href="#">
                <h4 class="title">Low Cost Advertising</h4>
              </a>
              <p>
                Acres of Diamonds… you’ve read the famous story, or at least had it related to you. A farmer.
              </p>
              <h6 class="date">31st January,2018</h6>
            </div>
          </div>
          <div class="single-recent-blog-post item">
            <div class="thumb">
              <img class="img-fluid" src="/static/img/b2.jpg" alt="">
            </div>
            <div class="details">
              <div class="tags">
                <ul>
                  <li>
                    <a href="#">Travel</a>
                  </li>
                  <li>
                    <a href="#">Life Style</a>
                  </li>
                </ul>
              </div>
              <a href="#">
                <h4 class="title">Creative Outdoor Ads</h4>
              </a>
              <p>
                Acres of Diamonds… you’ve read the famous story, or at least had it related to you. A farmer.
              </p>
              <h6 class="date">31st January,2018</h6>
            </div>
          </div>
          <div class="single-recent-blog-post item">
            <div class="thumb">
              <img class="img-fluid" src="/static/img/b3.jpg" alt="">
            </div>
            <div class="details">
              <div class="tags">
                <ul>
                  <li>
                    <a href="#">Travel</a>
                  </li>
                  <li>
                    <a href="#">Life Style</a>
                  </li>
                </ul>
              </div>
              <a href="#">
                <h4 class="title">It's Classified How To Utilize Free</h4>
              </a>
              <p>
                Acres of Diamonds… you’ve read the famous story, or at least had it related to you. A farmer.
              </p>
              <h6 class="date">31st January,2018</h6>
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
export default {}
</script>

<style lang="css">
</style>
