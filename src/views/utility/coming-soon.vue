<script>

/**
 * Maintenance component
 */
export default {
  data() {
    return {
      start: "",
      end: "",
      interval: "",
      days: "",
      minutes: "",
      hours: "",
      seconds: "",
      starttime: "Nov 5, 2021 15:37:25",
      endtime: "Dec 31, 2026 16:37:25",
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
  },
};
</script>
<template>
  <div>
    <div class="home-btn d-none d-sm-block">
      <router-link to="/" class="text-dark">
        <i class="fas fa-home h2"></i>
      </router-link>
    </div>
    <section class="my-5 pt-sm-5">
      <BContainer>
        <BRow>
          <BCol lg="12">
            <div class="text-center">
              <router-link to="/" class="d-block auth-logo">
                <img src="@/assets/images/logo-dark.png" alt="" height="20" class="auth-logo-dark mx-auto" />
                <img src="@/assets/images/logo-light.png" alt="" height="20" class="auth-logo-light mx-auto" />
              </router-link>
              <BRow class="justify-content-center mt-5">
                <BCol sm="4">
                  <div class="maintenance-img">
                    <img src="@/assets/images/coming-soon.svg" alt="" class="img-fluid mx-auto d-block" />
                  </div>
                </BCol>
              </BRow>
              <h4 class="mt-5">Let's get started with Skote</h4>
              <p class="text-muted">
                It will be as simple as Occidental in fact it will be
                Occidental.
              </p>

              <BRow class="justify-content-center mt-5">
                <BCol md="8">
                  <div class="counter-number ico-countdown">
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
                </BCol>
              </BRow>
            </div>
          </BCol>
        </BRow>
      </BContainer>
    </section>
  </div>
</template>
