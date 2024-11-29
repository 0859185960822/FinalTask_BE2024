<script>
import { cards, clients, timelineData, teamData, blogData } from "./data"
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import logoDark from "@/assets/images/logo-dark.png"
import logoLight from "@/assets/images/logo-light.png"
import Img1 from "@/assets/images/crypto/features-img/img-1.png"
import Img2 from "@/assets/images/crypto/features-img/img-2.png"
/**
 * Crypto ICO-landing page
 */
export default {
  components: { Swiper, SwiperSlide },
  data() {
    return {
      logoDark, logoLight, Img1, Img2, Navigation, Pagination,
      start: "",
      end: "",
      interval: "",
      days: "",
      minutes: "",
      hours: "",
      seconds: "",
      starttime: "Nov 5, 2020 15:37:25",
      endtime: "Dec 31, 2026 16:37:25",
      cards, clients, timelineData, teamData, blogData,
      Autoplay: Autoplay,
      breakpoints: { 576:{ slidesPerView:2 }, 768:{ slidesPerView:3 }, 992:{ slidesPerView:4 }}
    };
  },
  created() {
    window.addEventListener("scroll", this.windowScroll);
  },
  mounted() {
    this.start = new Date(this.starttime).getTime();
    this.end = new Date(this.endtime).getTime();
    // Update the count down every 1 second
    this.timerCount(this.start, this.end);
    this.interval = setInterval(() => {
      this.timerCount(this.start, this.end);
    }, 1000);
  },
  methods: {
    timerCount: function (start, end) {
      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now an the count down date
      var distance = start - now;
      var passTime = end - now;

      if (distance < 0 && passTime < 0) {
        clearInterval(this.interval);
        return;
      } else if (distance < 0 && passTime > 0) {
        this.calcTime(passTime);
      } else if (distance > 0 && passTime > 0) {
        this.calcTime(distance);
      }
    },
    calcTime: function (dist) {
      // Time calculations for days, hours, minutes and seconds
      this.days = Math.floor(dist / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((dist % (1000 * 60)) / 1000);
    },
    /**
     * Window scroll method
     */
    windowScroll() {
      const navbar = document.getElementById("navbar");
      if (navbar) {
        if (
          document.body.scrollTop >= 50 ||
          document.documentElement.scrollTop >= 50
        ) {
          navbar.classList.add("nav-sticky");
        } else {
          navbar.classList.remove("nav-sticky");
        }
      }
    },
    /**
     * Toggle menu
     */
    toggleMenu() {
      document.getElementById("topnav-menu-content").classList.toggle("show");
    },
    // nextSlide() {
    //   console.log("goToPage");
    //   this.$refs.carousel.goToPage(this.$refs.carousel.getNextPage());
    // },
    // prevSlide() {
    //   this.$refs.carousel.goToPage(this.$refs.carousel.getPreviousPage());
    // },
    toggleAccordion(item) {
      item.open = !item.open;
    }
  },
};
</script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg navigation fixed-top sticky" id="navbar">
      <BContainer>
        <router-link class="navbar-logo" to="/">
          <img :src=logoDark alt height="19" class="logo logo-dark" />
          <img :src="logoLight" alt height="19" class="logo logo-light" />
        </router-link>

        <BButton variant="white" class="btn btn-sm px-3 font-size-16 d-lg-none header-item" data-toggle="collapse"
          @click="toggleMenu()">
          <i class="fa fa-fw fa-bars"></i>
        </BButton>

        <div class="collapse navbar-collapse" id="topnav-menu-content">
          <ul class="navbar-nav ms-auto" id="topnav-menu" v-scroll-spy-active="{ selector: 'a.nav-link' }">
            <li class="nav-item">
              <BLink class="nav-link" v-scroll-to="'#home'" href="#home">Home</BLink>
            </li>
            <li class="nav-item">
              <BLink class="nav-link" v-scroll-to="'#about'" href="#about">About</BLink>
            </li>
            <li class="nav-item">
              <BLink class="nav-link" v-scroll-to="'#features'" href="#features">Features</BLink>
            </li>
            <li class="nav-item">
              <BLink class="nav-link" v-scroll-to="'#roadmap'" href="#roadmap">Roadmap</BLink>
            </li>
            <li class="nav-item">
              <BLink class="nav-link" v-scroll-to="'#team'" href="#team">Team</BLink>
            </li>
            <li class="nav-item">
              <BLink class="nav-link" v-scroll-to="'#news'" href="#news">News</BLink>
            </li>
            <li class="nav-item">
              <BLink class="nav-link" v-scroll-to="'#faqs'" href="#faqs">FAQs</BLink>
            </li>
          </ul>

          <div class="ms-lg-2">
            <BLink href="javascript: void(0);" class="btn btn-outline-success w-xs">Sign in</BLink>
          </div>
        </div>
      </BContainer>
    </nav>
    <div v-scroll-spy>
      <section class="section hero-section bg-ico-hero" id="home">
        <div class="bg-overlay bg-primary"></div>
        <BContainer>
          <BRow class="align-items-center">
            <BCol lg="5">
              <div class="text-white-50">
                <h1 class="text-white fw-semibold mb-3 hero-title">Skote - Ico Landing for a cryptocurrency business</h1>
                <p class="font-size-14">It will be as simple as occidental in fact to an English person, it will seem like
                  simplified as a skeptical Cambridge</p>

                <div class="button-items mt-4">
                  <BLink href="javascript: void(0);" class="btn btn-success">Get Whitepaper</BLink>
                  <BLink href="javascript: void(0);" class="btn btn-light ms-2">How it work</BLink>
                </div>
              </div>
            </BCol>
            <BCol lg="5" md="8" sm="10" class="ms-lg-auto">
              <BCard no-body class="overflow-hidden mb-0 mt-5 mt-lg-0">
                <BCrdHeader class="text-center">
                  <h5 class="pt-2">ICO Countdown time</h5>
                </BCrdHeader>
                <BCardBody>
                  <div class="text-center">
                    <h5>Time left to Ico :</h5>
                    <div class="mt-4">
                      <div data-countdown="2023/12/31" class="counter-number ico-countdown">
                        <div class="coming-box">
                          {{ days }}
                          <span>Days</span>
                        </div>
                        <div class="coming-box">
                          {{ hours }}
                          <span>Hours</span>
                        </div>
                        <div class="coming-box">
                          {{ minutes }}
                          <span>Minutes</span>
                        </div>
                        <div class="coming-box">
                          {{ seconds }}
                          <span>Seconds</span>
                        </div>
                      </div>
                    </div>

                    <div class="mt-4">
                      <BButton variant="success" class="w-md">Get Token</BButton>
                    </div>

                    <div class="mt-5">
                      <h4 class="fw-semibold">1 ETH = 2235 SKT</h4>
                      <div class="clearfix mt-4">
                        <h5 class="float-end font-size-14">5234.43</h5>
                      </div>
                      <BProgress class="progress p-1 progress-xl softcap-progress">
                        <BProgressBar variant="info" style="width: 15%" aria-valuenow="15" aria-valuemin="0"
                          aria-valuemax="100">
                          <div class="progress-label">15 %</div>
                        </BProgressBar>
                        <BProgressBar striped :animated="animate" style="width: 30%" aria-valuenow="30" aria-valuemin="0"
                          aria-valuemax="100">
                          <div class="progress-label">30 %</div>
                        </BProgressBar>
                      </BProgress>
                    </div>
                  </div>
                </BCardBody>
              </BCard>
            </BCol>
          </BRow>
        </BContainer>
      </section>
      <section class="section bg-white p-0">
        <BContainer>
          <div class="currency-price">
            <BRow>
              <BCol md="4" v-for="(card, index) in cards" :key="index">
                <BCard no-body>
                  <BCardBody>
                    <div class="d-flex">
                      <div class="avatar-xs me-3">
                        <span
                          :class="`avatar-title rounded-circle bg-${card.avatarClass}-subtle text-${card.avatarClass} font-size-18 mdi mdi-${card.avatar}`"></span>
                      </div>
                      <div class="flex-grow-1">
                        <p class="text-muted">{{ card.name }}</p>
                        <h5>{{ card.price }}</h5>
                        <p class="text-muted text-truncate mb-0">
                          {{ card.change }}
                          <i :class="card.changeClass"></i>
                        </p>
                      </div>
                    </div>
                  </BCardBody>
                </BCard>
              </BCol>
            </BRow>
          </div>
        </BContainer>
      </section>
      <section class="section pt-4 bg-white" id="about">
        <BContainer>
          <BRow>
            <BCol lg="12">
              <div class="text-center mb-5">
                <div class="small-title">About us</div>
                <h4>What is ICO Token?</h4>
              </div>
            </BCol>
          </BRow>
          <BRow class="align-items-center">
            <BCol lg="5">
              <div class="text-muted">
                <h4>Best ICO for your cryptocurrency business</h4>
                <p>If several languages coalesce, the grammar of the resulting that of the individual new common language
                  will be more simple and regular than the existing.</p>
                <p class="mb-4">It would be necessary to have uniform pronunciation.</p>

                <div class="button-items">
                  <BLink href="javascript: void(0);" class="btn btn-success">Read More</BLink>
                  <BLink href="javascript: void(0);" class="btn btn-outline-primary ms-2">How It work</BLink>
                </div>

                <BRow class="mt-4">
                  <BCol lg="4" cols="6">
                    <div class="mt-4">
                      <h4>$ 6.2 M</h4>
                      <p>Invest amount</p>
                    </div>
                  </BCol>
                  <BCol lg="4" cols="6">
                    <div class="mt-4">
                      <h4>16245</h4>
                      <p>Users</p>
                    </div>
                  </BCol>
                </BRow>
              </div>
            </BCol>

            <BCol lg="6" class="ms-auto">
              <div class="mt-4 mt-lg-0">
                <BRow>
                  <BCol sm="6">
                    <BCard no-body class="border">
                      <BCardBody>
                        <div class="mb-3">
                          <i class="mdi mdi-bitcoin h2 text-success"></i>
                        </div>
                        <h5>Lending</h5>
                        <p class="text-muted mb-0">At vero eos et accusamus et iusto blanditiis</p>
                      </BCardBody>
                      <div class="card-footer bg-transparent border-top text-center">
                        <BLink class="text-primary">Learn more</BLink>
                      </div>
                    </BCard>
                  </BCol>
                  <BCol sm="6">
                    <BCard no-body class="border mt-lg-5">
                      <BCardBody>
                        <div class="mb-3">
                          <i class="mdi mdi-wallet-outline h2 text-success"></i>
                        </div>
                        <h5>Wallet</h5>
                        <p class="text-muted mb-0">Quis autem vel eum iure reprehenderit</p>
                      </BCardBody>
                      <div class="card-footer bg-transparent border-top text-center">
                        <BLink class="text-primary">Learn more</BLink>
                      </div>
                    </BCard>
                  </BCol>
                </BRow>
              </div>
            </BCol>
          </BRow>

          <hr class="my-5" />

          <BRow>
            <BCol lg="12">
              <swiper :loop="true" :modules="[Autoplay]" :slides-per-view="4"  :breakpoints="breakpoints" :space-between="20"
                :autoplay="{ delay: 2500, disableOnInteraction: false }">
                <swiper-slide v-for="(client, index) in clients" :key="index">
                  <div class="item">
                    <div class="client-images">
                      <img :src="client.imageSrc" alt="client-img" class="mx-auto img-fluid d-block" />
                    </div>
                  </div>
                </swiper-slide>
              </swiper>
            </BCol>
          </BRow>
        </BContainer>
      </section>

      <section class="section" id="features">
        <BContainer>
          <BRow>
            <BCol lg="12">
              <div class="text-center mb-5">
                <div class="small-title">Features</div>
                <h4>Key features of the product</h4>
              </div>
            </BCol>
          </BRow>

          <BRow class="align-items-center pt-4">
            <BCol md="6" sm="8">
              <div>
                <img :src="Img1" alt class="img-fluid mx-auto d-block" />
              </div>
            </BCol>
            <BCol md="5" class="ml-auto" style="margin-left: 95px;">
              <div class="mt-4 mt-md-auto">
                <div class="d-flex align-items-center mb-2">
                  <div class="features-number fw-semibold display-4 me-3">01</div>
                  <h4 class="mb-0">Lending</h4>
                </div>
                <p class="text-muted">If several languages coalesce, the grammar of the resulting language is more simple
                  and regular than of the individual will be more simple and regular than the existing.</p>
                <div class="text-muted mt-4">
                  <p class="mb-2">
                    <i class="mdi mdi-circle-medium text-success me-1"></i>Donec pede justo vel aliquet
                  </p>
                  <p>
                    <i class="mdi mdi-circle-medium text-success me-1"></i>Aenean et nisl sagittis
                  </p>
                </div>
              </div>
            </BCol>
          </BRow>

          <BRow class="align-items-center mt-5 pt-md-5">
            <BCol md="5">
              <div class="mt-4 mt-md-0">
                <div class="d-flex align-items-center mb-2">
                  <div class="features-number fw-semibold display-4 me-3">02</div>
                  <h4 class="mb-0">Wallet</h4>
                </div>
                <p class="text-muted">It will be as simple as Occidental; in fact, it will be Occidental. To an English
                  person, it will seem like simplified English, as a skeptical Cambridge friend.</p>
                <div class="text-muted mt-4">
                  <p class="mb-2">
                    <i class="mdi mdi-circle-medium text-success me-1"></i>Donec pede justo vel aliquet
                  </p>
                  <p>
                    <i class="mdi mdi-circle-medium text-success me-1"></i>Aenean et nisl sagittis
                  </p>
                </div>
              </div>
            </BCol>
            <BCol md="6" sm="6" class="ms-md-auto">
              <div class="mt-4 me-md-0">
                <img :src="Img2" alt class="img-fluid mx-auto d-block" />
              </div>
            </BCol>
          </BRow>
        </BContainer>
      </section>

      <section class="section bg-white" id="roadmap">
        <BContainer>
          <BRow>
            <BCol lg="12">
              <div class="text-center mb-5">
                <div class="small-title">Timeline</div>
                <h4>Our Roadmap</h4>
              </div>
            </BCol>
          </BRow>

          <BRow class="mt-4">
            <BCol lg="12">
              <div class="hori-timeline">
                <swiper class="swiper-wrapper" :loop="true" :modules="[Autoplay, Navigation, Pagination]"
                  :slides-per-view="3" :space-between="20" 
                  :breakpoints="breakpoints"
                  :autoplay="{ delay: 2500, disableOnInteraction: false }"
                  :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }"
                  :pagination="{ clickable: true, el: '.swiper-pagination' }">
                  <swiper-slide v-for="(event, index) in timelineData" :key="index">
                    <div class="item event-list text-center" :class="{ active: event.active }">
                      <div>
                        <div class="event-date">
                          <div class="text-primary mb-1">{{ event.date }}</div>
                          <h5 class="mb-4">{{ event.title }}</h5>
                        </div>
                        <div class="event-down-icon">
                          <i class="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"></i>
                        </div>

                        <div class="mt-3 px-3">
                          <p class="text-muted">{{ event.description }}</p>
                        </div>
                      </div>
                    </div>
                  </swiper-slide>
                  <div class="owl-nav">
                    <BButton role="presentation" class="owl-prev swiper-button-prev"></BButton>
                    <BButton role="presentation" class="owl-next swiper-button-next"></BButton>
                  </div>
                </swiper>
              </div>
            </BCol>
          </BRow>
        </BContainer>
      </section>

      <section class="section" id="team">
        <BContainer c>
          <BRow>
            <BCol lg="12">
              <div class="text-center mb-5">
                <div class="small-title">Team</div>
                <h4>Meet our team</h4>
              </div>
            </BCol>
          </BRow>

          <BCol lg="12">
            <swiper class="mySwiper" :loop="true" :modules="[Autoplay]" :slides-per-view="4" :space-between="20"
              :autoplay="{ delay: 2500, disableOnInteraction: false }">
              <swiper-slide v-for="(teamMember, index) in teamData" :key="index">
                <BCard no-body class="text-center team-box">
                  <BCardBody>
                    <div>
                      <img :src="teamMember.image" alt="" class="rounded teambg">
                    </div>

                    <div class="mt-3">
                      <h5>{{ teamMember.name }}</h5>
                      <p class="text-muted mb-0">{{ teamMember.role }}</p>
                    </div>
                  </BCardBody>
                  <BCardFooter class="bg-transparent border-top">
                    <div class="d-flex mb-0 team-social-links">
                      <div class="flex-fill" v-for="(link, linkIndex) in teamMember.socialLinks" :key="linkIndex">
                        <BLink href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top"
                          :title="link.title">
                          <i :class="link.iconClass"></i>
                        </BLink>
                      </div>
                    </div>
                  </BCardFooter>
                </BCard>
              </swiper-slide>
            </swiper>
          </BCol>
        </BContainer>
      </section>

      <section class="section bg-white" id="news">
        <BContainer>
          <BRow>
            <BCol lg="12">
              <div class="text-center mb-5">
                <div class="small-title">Blog</div>
                <h4>Latest News</h4>
              </div>
            </BCol>
          </BRow>

          <BRow>
            <BCol v-for="(blogItem, index) in blogData" :key="index" xl="4" sm="6">
              <div class="blog-box mb-4 mb-xl-0">
                <div class="position-relative">
                  <img :src="blogItem.image" alt class="rounded img-fluid mx-auto d-block" />
                  <BBadge variant="success" class="blog-badge font-size-11">Cryptocurrency</BBadge>
                </div>

                <div class="mt-4 text-muted">
                  <p class="mb-2">
                    <i class="bx bx-calendar me-1"></i> {{ blogItem.date }}
                  </p>
                  <h5 class="mb-3">{{ blogItem.title }}</h5>
                  <p>{{ blogItem.content }}</p>

                  <div>
                    <BLink href="#">Read more</BLink>
                  </div>
                </div>
              </div>
            </BCol>
          </BRow>
        </BContainer>
      </section>

      <section class="section" id="faqs">
        <BContainer>
          <BRow>
            <BCol lg="12">
              <div class="text-center mb-5">
                <div class="small-title">FAQs</div>
                <h4>Frequently asked questions</h4>
              </div>
            </BCol>
          </BRow>
          <BRow>
            <BCol lg="12">
              <div class="vertical-nav">
                <BTabs pills vertical nav-wrapper-class="col-lg-2 col-sm-4">
                  <BTab active>
                    <template v-slot:title>
                      <i class="bx bx-help-circle nav-icon d-block mb-2"></i>
                      <p class="fw-bold mb-0">General Questions</p>
                    </template>
                    <BCard no-body>
                      <BCardBody>
                        <BCardTitle class="mb-4">General Questions</BCardTitle>
                        <div role="tablist">
                          <BCard no-body class="custom-accordion shadow-none mb-3">
                            <BCardHeader header-tag="header" role="tab">
                              <BLink href="javascript: void(0);" class="accordion-list  p-0" v-b-toggle.accordion-1>
                                <div>What is Lorem Ipusm?</div>
                                <i class="mdi mdi-minus accor-plus-icon"></i>
                              </BLink>
                            </BCardHeader>
                            <BCollapse visible id="accordion-1" accordion="my-accordion" role="tabpanel">
                              <BCardBody>
                                <p class="mb-0">Everyone realizes why a new common language would be desirable: one
                                  could refuse to pay expensive translators. To achieve this, it would be necessary to
                                  have uniform grammar, pronunciation and more common words.</p>
                              </BCardBody>
                            </BCollapse>
                          </BCard>

                          <BCard no-body class="custom-accordion shadow-none mb-3">
                            <BCardHeader header-tag="header" role="tab">
                              <BLink href="javascript: void(0);" class="accordion-list p-0" v-b-toggle.accordion-2>
                                <div>Why do we use it ?</div>
                                <i class="mdi mdi-minus accor-plus-icon"></i>
                              </BLink>
                            </BCardHeader>
                            <BCollapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                              <BCardBody>
                                <p class="mb-0">If several languages coalesce, the grammar of the resulting language
                                  is more simple and regular than that of the individual languages. The new common
                                  language will be more simple and regular than the existing European languages.</p>
                              </BCardBody>
                            </BCollapse>
                          </BCard>

                          <BCard no-body class="custom-accordion shadow-none mb-3">
                            <BCardHeader header-tag="header" role="tab">
                              <BLink href="javascript: void(0);" class="accordion-list p-0" v-b-toggle.accordion-3>
                                <div>Where does it come from ?</div>
                                <i class="mdi mdi-minus accor-plus-icon"></i>
                              </BLink>
                            </BCardHeader>
                            <BCollapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                              <BCardBody>
                                <p class="mb-0">It will be as simple as Occidental; in fact, it will be Occidental. To
                                  an English person, it will seem like simplified English, as a skeptical Cambridge
                                  friend of mine told me what Occidental.</p>
                              </BCardBody>
                            </BCollapse>
                          </BCard>

                          <BCard no-body class="custom-accordion shadow-none mb-0">
                            <BCardHeader header-tag="header" role="tab">
                              <BLink href="javascript: void(0);" class="accordion-list collapsed p-0"
                                v-b-toggle.accordion-4>
                                <div>Where can I get some ?</div>
                                <i class="mdi mdi-minus accor-plus-icon"></i>
                              </BLink>
                            </BCardHeader>
                            <BCollapse id="accordion-4" accordion="my-accordion" role="tabpanel">
                              <BCardBody>
                                <p class="mb-0">To an English person, it will seem like simplified English, as a
                                  skeptical Cambridge friend of mine told me what Occidental is. The European languages
                                  are members of the same family. Their separate existence is a myth.</p>
                              </BCardBody>
                            </BCollapse>
                          </BCard>
                        </div>
                      </BCardBody>
                    </BCard>
                  </BTab>
                  <BTab>
                    <template v-slot:title>
                      <i class="bx bx-receipt nav-icon d-block mb-2"></i>
                      <p class="fw-bold mb-0">Token sale</p>
                    </template>
                    <BCard no-body>
                      <BCardBody>
                        <BCardTitle class="mb-4">Token Sale</BCardTitle>
                        <div role="tablist">
                          <BCard no-body class="custom-accordion shadow-none mb-3">
                            <BCardHeader header-tag="header" role="tab">
                              <BLink href="javascript: void(0);" class="accordion-list p-0" v-b-toggle.accordion-2>
                                <div>Why do we use it ?</div>
                                <i class="mdi mdi-minus accor-plus-icon"></i>
                              </BLink>
                            </BCardHeader>
                            <BCollapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                              <BCardBody>
                                <p class="mb-0">If several languages coalesce, the grammar of the resulting language
                                  is more simple and regular than that of the individual languages. The new common
                                  language will be more simple and regular than the existing European languages.</p>
                              </BCardBody>
                            </BCollapse>
                          </BCard>
                          <BCard no-body class="custom-accordion shadow-none mb-3">
                            <BCardHeader header-tag="header" role="tab">
                              <BLink href="javascript: void(0);" class="accordion-list collapsed p-0"
                                v-b-toggle.accordion-1>
                                <div>What is Lorem Ipsum ?</div>
                                <i class="mdi mdi-minus accor-plus-icon"></i>
                              </BLink>
                            </BCardHeader>
                            <BCollapse id="accordion-1" accordion="my-accordion" role="tabpanel">
                              <BCardBody>
                                <p class="mb-0">Everyone realizes why a new common language would be desirable: one
                                  could refuse to pay expensive translators. To achieve this, it would be necessary to
                                  have uniform grammar, pronunciation and more common words.</p>
                              </BCardBody>
                            </BCollapse>
                          </BCard>
                          <BCard no-body class="custom-accordion shadow-none mb-3">
                            <BCardHeader header-tag="header" role="tab">
                              <BLink href="javascript: void(0);" class="accordion-list collapsed p-0"
                                v-b-toggle.accordion-4>
                                <div>Where can I get some ?</div>
                                <i class="mdi mdi-minus accor-plus-icon"></i>
                              </BLink>
                            </BCardHeader>
                            <BCollapse id="accordion-4" visible accordion="my-accordion" role="tabpanel">
                              <BCardBody>
                                <p class="mb-0">To an English person, it will seem like simplified English, as a
                                  skeptical Cambridge friend of mine told me what Occidental is. The European languages
                                  are members of the same family. Their separate existence is a myth.</p>
                              </BCardBody>
                            </BCollapse>
                          </BCard>
                          <BCard no-body class="custom-accordion shadow-none mb-0">
                            <BCardHeader header-tag="header" role="tab">
                              <BLink href="javascript: void(0);" class="accordion-list p-0" v-b-toggle.accordion-3>
                                <div>Where does it come from ?</div>
                                <i class="mdi mdi-minus accor-plus-icon"></i>
                              </BLink>
                            </BCardHeader>
                            <BCollapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                              <BCardBody>
                                <p class="mb-0">It will be as simple as Occidental; in fact, it will be Occidental. To
                                  an English person, it will seem like simplified English, as a skeptical Cambridge
                                  friend of mine told me what Occidental.</p>
                              </BCardBody>
                            </BCollapse>
                          </BCard>
                        </div>
                      </BCardBody>
                    </BCard>
                  </BTab>
                  <BTab>
                    <template v-slot:title>
                      <i class="bx bx-timer d-block nav-icon mb-2"></i>
                      <p class="fw-bold mb-0">Roadmap</p>
                    </template>
                    <BCard no-body>
                      <BCardBody>
                        <BCardTitle class="mb-4">Roadmap</BCardTitle>
                        <BCard no-body class="custom-accordion shadow-none mb-3">
                          <BCardHeader header-tag="header" role="tab">
                            <BLink href="javascript: void(0);" class="accordion-list collapsed p-0"
                              v-b-toggle.demoaccordion-1>
                              <div>Where can I get some ?</div>
                              <i class="mdi mdi-minus accor-plus-icon"></i>
                            </BLink>
                          </BCardHeader>
                          <BCollapse id="demoaccordion-1" visible accordion="accordion-1" role="tabpanel">
                            <BCardBody>
                              <p class="mb-0">To an English person, it will seem like simplified English, as a skeptical
                                Cambridge friend of mine told me what Occidental is. The European languages are members
                                of the same family. Their separate existence is a myth.</p>
                            </BCardBody>
                          </BCollapse>
                        </BCard>
                        <BCard no-body class="custom-accordion shadow-none mb-3">
                          <BCardHeader header-tag="header" role="tab">
                            <BLink href="javascript: void(0);" class="accordion-list collapsed p-0"
                              v-b-toggle.demoaccordion-2>
                              <div>What is Lorem Ipsum ?</div>
                              <i class="mdi mdi-minus accor-plus-icon"></i>
                            </BLink>
                          </BCardHeader>
                          <BCollapse id="demoaccordion-2" accordion="accordion-1" role="tabpanel">
                            <BCardBody>
                              <p class="mb-0">Everyone realizes why a new common language would be desirable: one could
                                refuse to pay expensive translators. To achieve this, it would be necessary to have
                                uniform grammar, pronunciation and more common words.</p>
                            </BCardBody>
                          </BCollapse>
                        </BCard>
                        <BCard no-body class="custom-accordion shadow-none mb-3">
                          <BCardHeader header-tag="header" role="tab">
                            <BLink href="javascript: void(0);" class="accordion-list p-0" v-b-toggle.demoaccordion-3>
                              <div>Why do we use it ?</div>
                              <i class="mdi mdi-minus accor-plus-icon"></i>
                            </BLink>
                          </BCardHeader>
                          <BCollapse id="demoaccordion-3" visible accordion="accordion-1" role="tabpanel">
                            <BCardBody>
                              <p class="mb-0">If several languages coalesce, the grammar of the resulting language is
                                more simple and regular than that of the individual languages. The new common language
                                will be more simple and regular than the existing European languages.</p>
                            </BCardBody>
                          </BCollapse>
                        </BCard>
                        <BCard no-body class="custom-accordion shadow-none mb-0">
                          <BCardHeader header-tag="header" role="tab">
                            <BLink href="javascript: void(0);" class="accordion-list p-0" v-b-toggle.demoaccordion-4>
                              <div>Where does it come from ?</div>
                              <i class="mdi mdi-minus accor-plus-icon"></i>
                            </BLink>
                          </BCardHeader>
                          <BCollapse id="demoaccordion-4" accordion="accordion-1" role="tabpanel">
                            <BCardBody>
                              <p class="mb-0">It will be as simple as Occidental; in fact, it will be Occidental. To
                                an English person, it will seem like simplified English, as a skeptical Cambridge
                                friend of mine told me what Occidental.</p>
                            </BCardBody>
                          </BCollapse>
                        </BCard>
                      </BCardBody>
                    </BCard>
                  </BTab>
                </BTabs>
              </div>
            </BCol>
          </BRow>
        </BContainer>
      </section>

      <footer class="landing-footer">
        <BContainer>
          <BRow>
            <BCol lg="3" sm="6">
              <div class="mb-4 mb-lg-0">
                <h5 class="mb-3 footer-list-title">Company</h5>
                <ul class="list-unstyled footer-list-menu">
                  <li>
                    <BLink>About Us</BLink>
                  </li>
                  <li>
                    <BLink>Features</BLink>
                  </li>
                  <li>
                    <BLink>Team</BLink>
                  </li>
                  <li>
                    <BLink>News</BLink>
                  </li>
                  <li>
                    <BLink>FAQs</BLink>
                  </li>
                </ul>
              </div>
            </BCol>
            <BCol lg="3" sm="6">
              <div class="mb-4 mb-lg-0">
                <h5 class="mb-3 footer-list-title">Resources</h5>
                <ul class="list-unstyled footer-list-menu">
                  <li>
                    <BLink>Whitepaper</BLink>
                  </li>
                  <li>
                    <BLink>Token sales</BLink>
                  </li>
                  <li>
                    <BLink>Privacy Policy</BLink>
                  </li>
                  <li>
                    <BLink>Terms & Conditions</BLink>
                  </li>
                </ul>
              </div>
            </BCol>
            <BCol lg="3" sm="6">
              <div class="mb-4 mb-lg-0">
                <h5 class="mb-3 footer-list-title">Links</h5>
                <ul class="list-unstyled footer-list-menu">
                  <li>
                    <BLink>Tokens</BLink>
                  </li>
                  <li>
                    <BLink>Roadmap</BLink>
                  </li>
                  <li>
                    <BLink>FAQs</BLink>
                  </li>
                </ul>
              </div>
            </BCol>

            <BCol lg="3" sm="6">
              <div class="mb-4 mb-lg-0">
                <h5 class="mb-3 footer-list-title">Latest News</h5>
                <div class="blog-post">
                  <BLink class="post">
                    <div class="badge badge-soft-success font-size-11 mb-3">Cryptocurrency</div>
                    <h5 class="post-title">Donec pede justo aliquet nec</h5>
                    <p class="mb-0">
                      <i class="bx bx-calendar me-1"></i> 04 Mar, 2020
                    </p>
                  </BLink>
                  <BLink class="post">
                    <div class="badge badge-soft-success font-size-11 mb-3">Cryptocurrency</div>
                    <h5 class="post-title">In turpis, Pellentesque</h5>
                    <p class="mb-0">
                      <i class="bx bx-calendar me-1"></i> 12 Mar, 2020
                    </p>
                  </BLink>
                </div>
              </div>
            </BCol>
          </BRow>

          <hr class="footer-border my-5" />

          <BRow>
            <BCol lg="6">
              <div class="mb-4">
                <img :src=logoLight alt height="20" />
              </div>

              <p class="mb-2">{{ new Date().getFullYear() }} © Skote. Design & Develop by Themesbrand</p>
              <p>It will be as simple as occidental in fact, it will be to an english person, it will seem like simplified
                English, as a skeptical</p>
            </BCol>
          </BRow>
        </BContainer>
      </footer>
    </div>
  </div>
</template>

<style>
.teambg {
  display: block;
  width: 100%;
}
</style>