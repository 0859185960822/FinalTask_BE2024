<script>

/**
 * Maintenance component
 */
export default {

};
</script>
<template>
  <div>
    <div class="home-btn d-none d-sm-block">
      <router-link to="/" class="text-body">
        <i class="fas fa-home h2"></i>
      </router-link>
    </div>
    <section class="my-5 pt-sm-5">
      <BContainer>
        <BRow>
          <BCol cols="12" class="text-center">
            <div class="home-wrapper">
              <div class="mb-5">
                <router-link to="/" class="d-block auth-logo">
                  <img src="@/assets/images/logo-dark.png" alt="" height="20" class="auth-logo-dark mx-auto" />
                  <img src="@/assets/images/logo-light.png" alt="" height="20" class="auth-logo-light mx-auto" />
                </router-link>
              </div>

              <BRow class="justify-content-center">
                <BCol sm="4">
                  <div class="maintenance-img">
                    <img src="@/assets/images/maintenance.svg" alt class="img-fluid mx-auto d-block" />
                  </div>
                </BCol>
              </BRow>
              <h3 class="mt-5">Site is Under Maintenance</h3>
              <p>Please check back in sometime.</p>

              <BRow>
                <BCol md="4">
                  <BCard no-body class="mt-4 maintenance-box">
                    <BCardBody>
                      <i class="bx bx-broadcast mb-4 h1 text-primary"></i>
                      <h5 class="font-size-15 text-uppercase">
                        Why is the Site Down?
                      </h5>
                      <p class="text-muted mb-0">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration.
                      </p>
                    </BCardBody>
                  </BCard>
                </BCol>
                <BCol md="4">
                  <BCard no-body class="mt-4 maintenance-box">
                    <BCardBody>
                      <i class="bx bx-time-five mb-4 h1 text-primary"></i>
                      <h5 class="font-size-15 text-uppercase">
                        What is the Downtime?
                      </h5>
                      <p class="text-muted mb-0">
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical.
                      </p>
                    </BCardBody>
                  </BCard>
                </BCol>
                <BCol md="4">
                  <BCard no-body class="mt-4 maintenance-box">
                    <BCardBody>
                      <i class="bx bx-envelope mb-4 h1 text-primary"></i>
                      <h5 class="font-size-15 text-uppercase">
                        Do you need Support?
                      </h5>
                      <p class="text-muted mb-0">
                        If you are going to use a passage of Lorem Ipsum, you
                        need to be sure there isn't anything embar..
                        <BLink href="mailto:no-reply@domain.com" class="text-decoration-underline">no-reply@domain.com</BLink>
                      </p>
                    </BCardBody>
                  </BCard>
                </BCol>
              </BRow>
            </div>
          </BCol>
        </BRow>
      </BContainer>
    </section>
  </div>
</template>
