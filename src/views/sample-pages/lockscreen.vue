<script>

/**
 * Lock screen page -component
 */
export default {

};
</script>

<template>
  <div>
    <div class="home-btn d-none d-sm-block">
      <router-link to="/" class="text-dark">
        <i class="mdi mdi-home-variant h2"></i>
      </router-link>
    </div>
    <div class="account-pages my-5 pt-5">
      <BContainer>
        <BRow class="justify-content-center">
          <BCol md="8" lg="6" xl="5">
            <BCard no-body class="overflow-hidden">
              <div class="bg-primary-subtle">
                <BRow>
                  <BCol cols="7">
                    <div class="text-primary p-4">
                      <h5 class="text-primary">Lock screen</h5>
                      <p>Enter your password to unlock the screen!</p>
                    </div>
                  </BCol>
                  <BCol cols="5">
                    <img src="@/assets/images/profile-img.png" alt class="img-fluid mt-3" />
                  </BCol>
                </BRow>
              </div>
              <BCardBody class="pt-0">
                <div>
                  <router-link to="/">
                    <div class="avatar-md profile-user-wid mb-4">
                      <span class="avatar-title rounded-circle bg-light">
                        <img src="@/assets/images/logo.svg" alt class="rounded-circle" height="34" />
                      </span>
                    </div>
                  </router-link>
                </div>
                <div class="p-2">
                  <BForm class="form-horizontal">
                    <div class="user-thumb text-center mb-4">
                      <img src="@/assets/images/users/avatar-1.jpg" class="rounded-circle img-thumbnail avatar-md" alt="thumbnail" />
                      <h5 class="font-size-15 mt-3">Maria Laird</h5>
                    </div>

                    <div class="mb-3">
                      <label for="userpassword">Password</label>
                      <BFormInput type="password" id="userpassword" placeholder="Enter password" />
                    </div>

                    <BRow class="mb-0">
                      <BCol cols="12" class="text-end">
                        <BButton variant="primary" class="px-4" type="submit">
                          Unlock
                        </BButton>
                      </BCol>
                    </BRow>
                  </BForm>
                </div>
              </BCardBody>
            </BCard>
            <div class="mt-5 text-center">
              <p>
                Not you ? return
                <router-link to="/auth/login-1" class="fw-medium text-primary">Sign In</router-link>
              </p>
              <p>
                © {{ new Date().getFullYear() }} Skote. Crafted with
                <i class="mdi mdi-heart text-danger"></i> by Themesbrand
              </p>
            </div>
          </BCol>
        </BRow>
      </BContainer>
    </div>
  </div>
</template>
