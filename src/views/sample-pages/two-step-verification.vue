<script>


/**
 * Two-step-verification component
 */
export default {
  components: {},
  data() {
    return {
      jsonData: [
        {
          id: "digit1-input",
          label: "Digit 1",
          maxLength: 1,
          dataValue: "1"
        },
        {
          id: "digit2-input",
          label: "Digit 2",
          maxLength: 1,
          dataValue: "2"
        },
        {
          id: "digit3-input",
          label: "Digit 3",
          maxLength: 1,
          dataValue: "3"
        },
        {
          id: "digit4-input",
          label: "Digit 4",
          maxLength: 1,
          dataValue: "4"
        },
      ]
    }
  }
};
</script>

<template>
  <div class="account-pages my-5 pt-sm-5">
    <BContainer>
      <BRow>
        <BCol lg="12">
          <div class="text-center mb-5 text-muted">
            <router-link to="/" class="d-block auth-logo">
              <img src="@/assets/images/logo-dark.png" alt="" height="20" class="auth-logo-dark mx-auto" />
              <img src="@/assets/images/logo-light.png" alt="" height="20" class="auth-logo-light mx-auto" />
            </router-link>
            <p class="mt-3">Responsive Bootstrap 5 Admin Dashboard</p>
          </div>
        </BCol>
      </BRow>

      <BRow class="justify-content-center">
        <BCol md="8" lg="6" xl="5">
          <BCard no-body>
            <BCardBody>
              <div class="p-2">
                <div class="text-center">
                  <div class="avatar-md mx-auto">
                    <div class="avatar-title rounded-circle bg-light">
                      <i class="bx bxs-envelope h1 mb-0 text-primary"></i>
                    </div>
                  </div>
                  <div class="p-2 mt-4">
                    <h4>Verify your email</h4>
                    <p class="mb-5">
                      Please enter the 6 digit code sent to
                      <span class="fw-semibold">example@abc.com</span>
                    </p>
                    <BForm>
                      <BRow>
                        <BCol cols="3" v-for="inputData in jsonData" :key="inputData.id">
                          <div class="mb-3">
                            <label :for="inputData.id" class="visually-hidden">{{ inputData.label }}</label>
                            <input type="text" class="form-control form-control-lg text-center two-step" :maxLength="inputData.maxLength" :data-value="inputData.dataValue" :id="inputData.id">
                          </div>
                        </BCol>
                      </BRow>
                    </BForm>
                    <div class="mt-4">
                      <router-link to="/" class="btn btn-success w-md">Confirm</router-link>
                    </div>
                  </div>
                </div>
              </div>
            </BCardBody>
          </BCard>
          <div class="mt-5 text-center">
            <p>
              Didn't receive a code ?
              <Blink href="#" class="fw-medium text-primary"> Resend </Blink>
            </p>
            <p>
              ©
              {{ new Date().getFullYear() }}
              Skote. Crafted with <i class="mdi mdi-heart text-danger"></i> by
              Themesbrand
            </p>
          </div>
        </BCol>
      </BRow>
    </BContainer>
  </div>
</template>