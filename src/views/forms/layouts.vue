<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

/**
 * Form Layouts component
 */
export default {
  components: { Layout, PageHeader },
  data() {
    return {
      selected: null
    };
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="Form Layouts" pageTitle="Forms" />

    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Form Grid layout</BCardTitle>

            <BForm>
              <BFormGroup class="mb-3" label="First name" label-for="formrow-firstname-input">
                <BFormInput id="formrow-firstname-input" type="text" placeholder="Enter Your First Name"></BFormInput>
              </BFormGroup>

              <BRow>
                <BCol md="6">
                  <BFormGroup class="mb-3" label="Email" label-for="formrow-email-input">
                    <BFormInput id="formrow-email-input" type="email" placeholder="Enter Your Email ID"></BFormInput>
                  </BFormGroup>
                </BCol>
                <BCol md="6">
                  <div class="form-group">
                    <BFormGroup class="mb-3" label="Password" label-for="formrow-password-input">
                      <BFormInput id="formrow-password-input" type="password" placeholder="Enter Your Password"></BFormInput>
                    </BFormGroup>
                  </div>
                </BCol>
              </BRow>

              <BRow>
                <BCol lg="4">
                  <BFormGroup class="mb-3" label="City" label-for="formrow-inputCity">
                    <BFormInput id="formrow-inputCity" type="text" placeholder="Enter Your Living City"></BFormInput>
                  </BFormGroup>
                </BCol>
                <BCol lg="4">
                  <BFormGroup class="mb-3 form-label" id="input-group-1" label="State" label-for="formrow-inputState">
                    <BFormSelect class="form-select" id="formrow-inputState" :options="['Choose...', '...']" type="text"></BFormSelect>
                  </BFormGroup>
                </BCol>

                <BCol lg="4">
                  <BFormGroup class="mb-3" label="Zip" label-for="formrow-inputZip">
                    <BFormInput id="formrow-inputZip" type="text" placeholder="Enter Your Zip Code"></BFormInput>
                  </BFormGroup>
                </BCol>
              </BRow>

              <div class="mb-3">
                <div class="form-check d-flex ps-0">
                  <BFormCheckbox class="form-check-input" type="checkbox" id="gridCheck" />
                  <label class="form-check-label" for="gridCheck">
                    Check me out
                  </label>
                </div>
              </div>
              <div>
                <BButton type="submit" variant="primary">Submit</BButton>
              </div>
            </BForm>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Horizontal form layout</BCardTitle>

            <BForm>
              <BFormGroup class="mb-3" label="First name" label-for="horizontal-firstname-input" label-cols-sm="3">
                <BFormInput id="horizontal-firstname-input" type="text" placeholder="Enter Your Name"></BFormInput>
              </BFormGroup>

              <BFormGroup class="mb-4" label="Email" label-for="horizontal-email-input" label-cols-sm="3">
                <BFormInput id="horizontal-email-input" type="email" placeholder="Enter Your Email ID"></BFormInput>
              </BFormGroup>

              <BFormGroup class="mb-4" label="Password" label-for="horizontal-password-input" label-cols-sm="3">
                <BFormInput id="horizontal-password-input" type="password" placeholder="Enter Your Password"></BFormInput>
              </BFormGroup>

              <BRow class="justify-content-end">
                <BCol sm="9">
                  <div class="form-check mb-4 d-flex ps-0">
                    <BFormCheckbox class="form-check-input" type="checkbox" id="horizontalLayout-Check" />
                    <label class="form-check-label" for="horizontalLayout-Check">
                      Remember me
                    </label>
                  </div>

                  <div>
                    <BButton type="submit" variant="primary">Submit</BButton>
                  </div>
                </BCol>
              </BRow>
            </BForm>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Inline forms layout</BCardTitle>

            <BForm inline class="row gy-2 gx-3 align-items-center">

              <BCol class="col-sm-auto">
                <label class="visually-hidden" for="inlineFormInputName2">Username</label>
                <div class="input-group">
                  <div class="input-group-text">@</div>
                  <BFormInput type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Username" />
                </div>
              </BCol>

              <BCol class="col-sm-auto">
                <label class="visually-hidden" for="autoSizingSelect">Preference</label>

                <BFormSelect class="form-select" v-model="selected">
                  <BFormSelect-option :value="null">Choose...</BFormSelect-option>
                  <BFormSelect-option value="a">One</BFormSelect-option>
                  <BFormSelect-option value="b">Two</BFormSelect-option>
                  <BFormSelect-option value="b">Thress</BFormSelect-option>
                </BFormSelect>
              </BCol>

              <BCol class="col-sm-auto">
                <div class="form-check d-flex ps-0">
                  <BFormCheckbox class="form-check-input" type="checkbox" id="autoSizingCheck" />
                  <label class="form-check-label" for="autoSizingCheck">
                    Remember me
                  </label>
                </div>
              </BCol>
              <div class="col-sm-auto">
                <BButton type="submit" variant="primary" class="w-md">Submit</BButton>
              </div>
            </BForm>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>