<template>
    <div>
        <Navbar/>
        <Header/>

        <div class="action-section bg-white" id="profildesa" style="overflow: hidden">
          <div class="container">
            <h1 class="font-weight-bold text-center mb-5" style="color: #076825 !important" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800"><span>
                Profil Desa
              </span>
            </h1>
            <div class="row justify-content-center">
              <div class="col-md-6" data-aos="fade-right" data-aos-delay="300" data-aos-duration="800">
                <div class="row justify-content-between">
                  <div class="col-md-4 img-profile">
                    <div class="d-flex justify-content-center">
                      <img src="/img/boyolali.png" class="img-fluid rounded-circle" alt="Cinque Terre">
                    </div>
                  </div>
                  <div class="col-md-8" >
                    <h3 class="text-green font-weight-bold">Desa Kendel</h3>
                    <p>Kecamatan Kemusu, Boyolali, Jawa Tengah, Indonesia</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6" data-aos="fade-left" data-aos-delay="300" data-aos-duration="800">
                <div class="row justify-content-between">
                  <div class="col-md-4 img-profile">
                    <div class="d-flex justify-content-center">
                      <img src="" class="img-fluid rounded-circle" alt="">
                      <!-- <img src="/img/PakGuntur.jpeg" class="img-fluid rounded-circle" alt="Cinque Terre"> -->
                    </div>
                  </div>
                  <div class="col-md-8">
                    <h3 class="text-green font-weight-bold">Kusmanto</h3>
                    <p>Kepala Desa Kendel</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="project-section" id="visimisi" style="overflow: hidden;">
          <div class="container">
            <h1 class="font-weight-bold text-center" style="color: #076825 !important" data-translatable="" data-dom-i18n-id="i18n1615256342335539.6009804439918" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800"><span>
                Visi Misi Desa
              </span>
            </h1>

            <div class="row visi justify-content-center mt-5">
              <div class="col-md-12 align-items-center">
                <h3 class="text-green font-weight-bold" data-aos="fade-right" data-aos-delay="200" data-aos-duration="800">VISI</h3>
                <p class="indent" style="text-align: justify" data-aos="fade-right" data-aos-delay="200" data-aos-duration="800">
                  Terwujudnya masyarakat Kendel yang mandiri menuju Boyolali tersenyum yang Pro Investasi untuk mencapai masyarakat yang sehat dan sejahtera.
                </p>
              </div>
            </div>
          </div>

          <div class="container mt-5" >

            <div class="row misi justify-content-center mt-4">
              <div class="col-md-12 align-items-center" data-aos="fade-left" data-aos-delay="200" data-aos-duration="800">
                <h3 class="text-green font-weight-bold">Misi</h3>
                <!-- <p class="indent" style="text-align: justify;">
                  Misi merupakan pernyataan tentang apa yang harus dilaksanakan dalam upaya mencapai visi. Misi merupakan turunan dari pokok-pokok visi yang telah diidentifikasi sebelumnya.
                </p> -->
                <ol class="pl-5">
                  <li>Meningkatkan pembangunan inrastruktur yang mendukung perekonomian desa.</li>
                  <li>Mewujudkan sarana prasarana desa yang baik.</li>
                  <li>Menciptakan tata kelola pemerintahan yang baik.</li>
                  <li>Mewujudkan desa yang unggul dan berprestasi.</li>
                  <li>Mewujudkan masyarakat yang sehat dan sejahtera.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="action-section bg-white" style="overflow: hidden" id="struktur">
          <div class="container">
            <h1 class="font-weight-bold text-center mb-5" style="color: #076825 !important" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800"><span>
                Struktur Organisasi
              </span>
            </h1>
            <div class="row">
              <div class="col-md-12">
                <img src="/img/struktur.png" class="img-struktur" alt="" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
              </div>
            </div>
          </div>
        </div> -->
        <div class="action-section bg-white" style="overflow: hidden" id="berita">
          <div class="container">
            <h1 class="font-weight-bold text-center mb-5" style="color: #076825 !important" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800"><span>
                Berita
              </span>
            </h1>
            <div class="row m-0">
              <div class="col-md-4" v-for="item in pageOfItems" :key="item.id" data-aos="fade-up-right" data-aos-delay="500" data-aos-duration="800">
                <div class="cards">
                  <div class="penampungimg">
                    <a target="new" href="#">
                      <img src="/img/news.jpg" class="imgcontent">
                    </a>
                  </div>
                  <div class="dalemcards">
                    <a href="#">
                      <h1 id="juduld" class="juduldalam">Destinasi</h1>
                    </a>
                    <p class="text-muted tanggal">2020-12-31 14:43:36</p>
                    <p class="sinopsiscard">Berita Terkini</p>
                    <hr>
                    <div style="display: flex;">
                      <div class="icons">
                        <a onClick="window.open('https://www.facebook.com/sharer/sharer.php?u=', '', 'width=400, height=500')" target="_blank">
                          <div class="imgfb" title="Facebook Kemenparekraf">
                            <i class="fab fa-facebook-f"></i>
                          </div>
                        </a>
                        <a href="https://twitter.com/intent/tweet?text=" target="_blank">
                          <div class="imgtwit" title="Twitter Kemenparekraf">
                            <i class="fab fa-twitter"></i>
                          </div>
                        </a>
                        <a data-container="body" data-toggle="popover" data-placement="top" data-content="URL Copied">
                          <div class="imgcop" title="Youtube Kemenparekraf">
                            <i class="fa fa-link example-popover"></i>
                          </div>
                        </a>
                        <!-- <a href="https://www.instagram.com/Mice_indonesia/" target="_blank">
                          <div class="imgsoc" title="Instagram Mice Indonesia"></div>
                        </a> -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class=" col-md-12 pb-0 py-3 row justify-content-center">
                <jw-pagination :items="berita" pageSize="6" @changePage="onChangePage"></jw-pagination>
              </div>
            </div>
          </div>
        </div>
        <!-- <Cta/> -->
        <Footer/>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Header from '../components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Header,
    Footer
    // Cta
  },
  data () {
    return {
      berita: [
        {
          id: 1
        },
        {
          id: 2
        }
      ],
      pageOfItems: []
    }
  },
  methods: {
    onChangePage (pageOfItems) {
      console.log(pageOfItems)
      // update page of items
      this.pageOfItems = pageOfItems
    }
  }
}
</script>

<style>
  .imgfb i{
    color: #3C5A99;
    margin: 0 5px;
    font-size: 16px;
    width: 35px;
    height: 35px;
    border-radius: 100%;
    background-color: #E6E6E6;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .imgtwit i{
    color: #1da1f2;
    margin: 0 5px;
    font-size: 16px;
    width: 35px;
    height: 35px;
    border-radius: 100%;
    background-color: #E6E6E6;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .imgcop i{
    color: rgb(85, 85, 85);
    margin: 0 5px;
    font-size: 16px;
    width: 35px;
    height: 35px;
    border-radius: 100%;
    background-color: #E6E6E6;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .img-struktur{
    width: 100%;
  }
  a{
    text-decoration: none !important;
  }
  .cards{
    overflow: hidden;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.122);
    border-radius: 10px;
    height:420px;
    width: 100%;
    margin:20px 0px;
    background: white;
  }
  .penampungimg{
    width: 100%;
    height: 193px;
    overflow: hidden;
  }
  .imgcontent{
    width: 100%;
    height: 193px;
    object-fit: cover;
    transition: all 1s;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .imgcontent:hover{
    transform: scale(1.2);
  }
  .dalemcards{
    padding: 12px 20px 0 20px;
    width: 100%;
  }
  .tanggal {
    font-size: 14px;
    margin: 0;
    font-family: 'SecondFont';
  }
  .juduldalam{
    color: #435177;
    font-size: 23px;
    width: 100%;
    height: auto;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-family: 'myFirstFont';
    /* font-weight: semibol; */
  }
  .sinopsiscard{
    /* box-sizing: /; */
    width: 260px;
    height: 63px;
    overflow: hidden;
    font-size: 14px;
    font-family: 'SecondFont';
    margin: 15px 0;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .icons{
    display: flex;
  }
  .icons div{
    margin-bottom: 0 20px 0 0;
  }
.img-fluid{
  overflow: hidden;
  width: 145px;
  height: 145px !important;
  object-fit: contain;
  border: 5px solid #d2d2d2;
}
@media only screen and (max-width: 600px) {
  .img-profile{
    margin-bottom: 30px;
  }
  .visi{
    flex-direction: column-reverse;
  }
  .misi{
    flex-direction: row-reverse;
  }
}
#visimisi ol li, #visimisi p {
  color: #076825;
}
</style>
