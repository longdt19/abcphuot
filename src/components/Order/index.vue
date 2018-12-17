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

          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column label="STT"  type="index">
            </el-table-column>

            <el-table-column label="Sản phẩm"  header-align="center" align="center">
              <template slot-scope="scope">
                {{scope.row.product}}
              </template>
            </el-table-column>

            <el-table-column label="Số lượng"  header-align="center" align="center">
              <template slot-scope="scope">
                {{scope.row.quantity}}
              </template>
            </el-table-column>

            <el-table-column label="Giá"  header-align="center" align="center">
              <template slot-scope="scope">
                {{scope.row.price}}
              </template>
            </el-table-column>

            <el-table-column label="Thành tiền"  header-align="center" align="center">
              <template slot-scope="scope">
                {{scope.row.total}}
              </template>
            </el-table-column>

            <el-table-column label="Thao tác"  header-align="center" align="center">
              <template slot-scope="scope">
                <el-button type="danger"
                  @click="remove_item(scope.row)"
                >
                  Hủy
                </el-button>
              </template>
            </el-table-column>
          </el-table>

        </div>
        <div class="col-lg-4 sidebar-widgets">
          <div class="widget-wrap">
            <div class="single-sidebar-widget popular-post-widget">

              <div class="single-post-list d-flex flex-row align-items-center"
                v-for="(item, index) in info_list" v-bind:key="index"
              >
                <div class="thumb">
                  <img class="img-fluid" alt="">
                </div>
                <div class="details">
                  <a>
                    <h6>{{item.key}}</h6>
                  </a>
                  <el-input v-model="item.value"></el-input>
                </div>
              </div>

              <h4 style="margin-top: 80px;" type="button" class="popular-title"
                @click="test()"
              >
                Thanh toán
              </h4>
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
export default {
  data () {
    return {
      quantity: 1,
      tableData: [
        {
          product: 'Sim Viettel',
          quantity: 2,
          price: 20000,
          total: 100000
        },
        {
          product: 'Sim Viettel1',
          quantity: 2,
          price: 20000,
          total: 100000
        }
      ],
      name: '',
      phone: '',
      email: '',
      address: '',
      note: '',
      info_list: [
        {key: 'Họ và tên', value: name},
        {key: 'Số điện thoại', value: ''},
        {key: 'Email', value: ''},
        {key: 'Địa chỉ', value: ''},
        {key: 'Ghi chú', value: ''}
      ]
    }
  },
  watch: {
  },
  methods: {
    test () {
      this.info_list.forEach(item => {
        if (item.key === 'Họ và tên') {
          this.name = item.value
        }
        if (item.key === 'Số điện thoại') {
          this.phone = item.value
        }
        if (item.key === 'Email') {
          this.email = item.value
        }
        if (item.key === 'Địa chỉ') {
          this.address = item.value
        }
        if (item.key === 'Ghi chú') {
          this.note = item.value
        }
      })
    },
    remove_item (item) {
      const index = this.tableData.indexOf(item)
      if (index > -1) {
        this.tableData.splice(index, 1)
      }
    }
  }
}
</script>

<style lang="css">
</style>
