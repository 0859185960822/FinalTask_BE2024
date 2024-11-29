<script>

/**
 * Register sample page
 */
export default {

};
</script>

<template>
  <div class="account-pages my-5 pt-5">
    <BContainer>
      <BRow class="justify-content-center">
        <BCol md="8" lg="6" xl="5">
          <BCard no-body class="overflow-hidden">
            <div class="bg-primary-subtle">
              <BRow>
                <BCol cols="7">
                  <div class="text-primary p-4">
                    <h5 class="text-primary">Free Register</h5>
                    <p>Get your free Skote account now.</p>
                  </div>
                </BCol>
                <BCol cols="5" class="align-self-end">
                  <img src="@/assets/images/profile-img.png" alt class="img-fluid" />
                </BCol>
              </BRow>
            </div>
            <BCardBody class="pt-0">
              <div>
                <BLink href="/">
                  <div class="avatar-md profile-user-wid mb-4">
                    <span class="avatar-title rounded-circle bg-light">
                      <img src="@/assets/images/logo.svg" alt class="rounded-circle" height="34" />
                    </span>
                  </div>
                </BLink>
              </div>
              <div class="p-2">
                <BForm class="form-horizontal">
                  <div class="mb-3">
                    <label for="useremail">Email</label>
                    <BFormInput type="email" class="form-control" id="useremail" placeholder="Enter email" />
                  </div>

                  <div class="mb-3">
                    <label for="username">Username</label>
                    <BFormInput type="text" class="form-control" id="username" placeholder="Enter username" />
                  </div>

                  <div class="mb-3">
                    <label for="userpassword">Password</label>
                    <BFormInput type="password" class="form-control" id="userpassword" placeholder="Enter password" />
                  </div>

                  <div class="mt-4 d-grid">
                    <BButton variant="primary" type="submit">
                      Register
                    </BButton>
                  </div>
                  <div class="mt-4 text-center">
                    <h5 class="font-size-14 mb-3">Sign up using</h5>

                    <ul class="list-inline">
                      <li class="list-inline-item">
                        <BLink href="javascript: void(0);" class="social-list-item bg-primary text-white border-primary">
                          <i class="mdi mdi-facebook"></i>
                        </BLink>
                      </li>
                      <li class="list-inline-item">
                        <BLink href="javascript: void(0);" class="social-list-item bg-info text-white border-info">
                          <i class="mdi mdi-twitter"></i>
                        </BLink>
                      </li>
                      <li class="list-inline-item">
                        <BLink href="javascript: void(0);" class="social-list-item bg-danger text-white border-danger">
                          <i class="mdi mdi-google"></i>
                        </BLink>
                      </li>
                    </ul>
                  </div>
                  <div class="mt-4 text-center">
                    <p class="mb-0">
                      By registering you agree to the Skote
                      <BLink href="javascript: void(0);" class="text-primary">Terms of Use</BLink>
                    </p>
                  </div>
                </BForm>
              </div>
            </BCardBody>
          </BCard>
          <div class="mt-5 text-center">
            <p>
              Already have an account ?
              <router-link to="/auth/login-1" class="fw-medium text-primary">Login</router-link>
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
</template>
