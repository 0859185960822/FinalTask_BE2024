<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import useVuelidate from "@vuelidate/core";

import {
  required,
  helpers,
  email,
  minLength,
  sameAs,
  maxLength,
  minValue,
  maxValue,
  numeric,
  url,
  alphaNum,
} from "@vuelidate/validators";

/**
 * Form validation component
 */
export default {
  components: { Layout, PageHeader },
  data() {
    return {
      form: {
        fname: "",
        lname: "",
        city: "",
        state: "",
        zipcode: "",
      },
      tooltipform: {
        fname: "",
        lname: "",
        username: "",
        city: "",
        state: "",
      },
      range: {
        minlen: "",
        maxlength: "",
        between: "",
        minval: "",
        maxval: "",
        rangeval: "",
        expr: "",
      },
      typeform: {
        name: "",
        password: "",
        confirmPassword: "",
        email: "",
        url: "",
        digit: "",
        number: "",
        alphanum: "",
        textarea: "",
      },
      submitted: false,
      submitform: false,
      submit: false,
      typesubmit: false,
    };
  },
  setup() {
    return { v$: useVuelidate() };
  },
  validations: {
    form: {
      fname: {
        required: helpers.withMessage("First Name is required", required),
      },
      lname: {
        required: helpers.withMessage("Last Name is required", required),
      },
      city: { required: helpers.withMessage("City is required", required) },
      state: { required: helpers.withMessage("State is required", required) },
      zipcode: {
        required: helpers.withMessage("Zipcode is required", required),
      },
    },
    tooltipform: {
      fname: { required: helpers.withMessage("Fname is required", required) },
      lname: { required: helpers.withMessage("Lname is required", required) },
      username: {
        required: helpers.withMessage("Username is required", required),
      },
      city: { required: helpers.withMessage("City is required", required) },
      state: { required: helpers.withMessage("State is required", required) },
    },
    range: {
      minlen: {
        required: helpers.withMessage("Minlen is required", required),
        minLength: minLength(6),
      },
      maxlength: {
        required: helpers.withMessage("Maxlength is required", required),
        maxLength: maxLength(6),
      },
      between: {
        required: helpers.withMessage("Between is required", required),
        minLength: minLength(5),
        maxLength: maxLength(10),
      },
      minval: {
        required: helpers.withMessage("Minval is required", required),
        minValue: minValue(6),
      },
      maxval: {
        required: helpers.withMessage("Maxval is required", required),
        maxValue: maxValue(6),
      },
      rangeval: {
        required: helpers.withMessage("Rangeval is required", required),
        minValue: minValue(6),
        maxValue: maxValue(100),
      },
      expr: { required: helpers.withMessage("Expr is required", required) },
    },
    typeform: {
      name: { required: helpers.withMessage("Name is required", required) },
      password: {
        required: helpers.withMessage("Password is required", required),
        minLength: minLength(6),
      },
      confirmPassword: {
        required: helpers.withMessage("ConfirmPassword is required", required),
        sameAsPassword: sameAs("password"),
      },
      email: {
        required: helpers.withMessage("Email is required", required),
        email,
      },
      url: { required: helpers.withMessage("Url is required", required), url },
      digit: {
        required: helpers.withMessage("Digit is required", required),
        numeric,
      },
      number: {
        required: helpers.withMessage("Number is required", required),
        numeric,
      },
      alphanum: {
        required: helpers.withMessage("Alphanum is required", required),
        alphaNum,
      },
      textarea: {
        required: helpers.withMessage("Textarea is required", required),
      },
    },
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    formSubmit(e) {
      this.submitted = true;
      // stop here if form is invalid
      this.v$.$touch();
    },

    tooltipForm() {
      this.submitform = true;
      this.v$.$touch();
    },

    /**
     * Range validation form submit
     */
    // eslint-disable-next-line no-unused-vars
    rangeform(e) {
      this.submit = true;
      // stop here if form is invalid
      this.v$.$touch();
    },
    /**
     * Validation type submit
     */
    // eslint-disable-next-line no-unused-vars
    typeForm(e) {
      this.typesubmit = true;
      // stop here if form is invalid
      this.v$.$touch();
    },
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="Form Validation" pageTitle="Forms" />

    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Bootstrap Validation - Normal</BCardTitle>

            <p class="card-title-desc">
              Provide valuable, actionable feedback to your users with HTML5
              form validation–available in all our supported browsers.
            </p>
            <BForm class="needs-validation" @submit.prevent="formSubmit">
              <BRow>
                <BCol md="6">
                  <div class="mb-3">
                    <label>First name</label>
                    <BFormInput v-model="form.fname" placeholder="First name" :class="{
                      'is-invalid': submitted && v$.form.fname.$error,
                      'is-valid': submitted && !v$.form.fname.$error,

                    }" />
                    <div v-if="submitted && v$.form.fname.$error" class="invalid-feedback">
                      <span v-if="v$.form.fname.required.$message">
                        {{ v$.form.fname.required.$message }}
                      </span>
                    </div>
                  </div>
                </BCol>
                <BCol md="6">
                  <div class="mb-3">
                    <label>Last name</label>
                    <BFormInput v-model="form.lname" placeholder="Last name" :class="{
                      'is-invalid': submitted && v$.form.lname.$error,
                      'is-valid': submitted && !v$.form.lname.$error,

                    }" />
                    <div v-if="submitted && v$.form.lname.$error" class="invalid-feedback">
                      <span v-if="v$.form.lname.required.$message">{{
                        v$.form.lname.required.$message
                      }}</span>
                    </div>
                  </div>
                </BCol>
              </BRow>
              <BRow>
                <BCol md="4">
                  <div class="mb-3">
                    <label>City</label>
                    <BFormInput v-model="form.city" placeholder="City" :class="{
                      'is-invalid': submitted && v$.form.city.$error,
                      'is-valid': submitted && !v$.form.city.$error,
                    }" />
                    <div v-if="submitted && v$.form.city.$error" class="invalid-feedback">
                      <span v-if="v$.form.city.required.$message">{{
                        v$.form.city.required.$message
                      }}</span>
                    </div>
                  </div>
                </BCol>
                <BCol md="4">
                  <div class="mb-3">
                    <label>State</label>
                    <BFormInput v-model="form.state" placeholder="State" :class="{
                      'is-invalid': submitted && v$.form.state.$error,
                      'is-valid': submitted && !v$.form.state.$error,
                    }" />
                    <div v-if="submitted && v$.form.state.$error" class="invalid-feedback">
                      <span v-if="v$.form.state.required.$message">{{
                        v$.form.state.required.$message
                      }}</span>
                    </div>
                  </div>
                </BCol>
                <BCol md="4">
                  <div class="mb-3">
                    <label>Zip</label>
                    <BFormInput v-model="form.zipcode" placeholder="Zip" :class="{
                      'is-invalid': submitted && v$.form.zipcode.$error,
                      'is-valid': submitted && !v$.form.zipcode.$error,
                    }" />
                    <div v-if="submitted && v$.form.zipcode.$error" class="invalid-feedback">
                      <span v-if="v$.form.zipcode.required.$message">{{
                        v$.form.zipcode.required.$message
                      }}</span>
                    </div>
                  </div>
                </BCol>
              </BRow>
              <div class="form-check mb-3 ps-0">
                <div class="d-flex">
                  <BFormCheckbox class="form-check-input " type="checkbox" id="invalidCheck" required />
                  <label class="form-check-label" for="invalidCheck">
                    Agree to terms and conditions
                  </label>
                </div>
                <div class="invalid-feedback">
                  You must agree before submitting.
                </div>
              </div>
              <BButton variant="primary" type="submit">Submit form</BButton>
            </BForm>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Bootstrap Validation (Tooltips)</BCardTitle>

            <p class="card-title-desc">
              If your form layout allows it, you can swap the
              <code>.{valid|invalid}-feedback</code> classes for
              <code>.{valid|invalid}-tooltip</code> classes to display
              validation feedback in a styled tooltip.
            </p>
            <BForm class="needs-validation" @submit.prevent="tooltipForm">
              <BRow>
                <BCol md="4">
                  <div class="mb-3 position-relative">
                    <label>First name</label>
                    <BFormInput v-model="tooltipform.fname" placeholder="First name" :class="{
                      'is-invalid': submitform && v$.tooltipform.fname.$error,
                      'is-valid': submitform && !v$.tooltipform.fname.$error,
                    }" />
                    <div v-if="submitted && v$.tooltipform.fname.$error" class="invalid-feedback">
                      <span v-if="v$.tooltipform.fname.required.$message">{{
                        v$.tooltipform.fname.required.$message
                      }}</span>
                    </div>
                  </div>
                </BCol>

                <BCol md="4">
                  <div class="mb-3 position-relative">
                    <label>Last name</label>
                    <BFormInput v-model="tooltipform.lname" placeholder="Last name" :class="{
                      'is-invalid': submitform && v$.tooltipform.lname.$error,
                      'is-valid': submitform && !v$.tooltipform.lname.$error,
                    }" />
                    <div v-if="submitted && v$.tooltipform.lname.$error" class="invalid-feedback">
                      <span v-if="v$.tooltipform.lname.required.$message">{{
                        v$.tooltipform.lname.required.$message
                      }}</span>
                    </div>
                  </div>
                </BCol>

                <BCol md="4">
                  <div class="mb-3 position-relative">
                    <label for="validationTooltipUsername">Username</label>
                    <BInputGroup>
                      <BInputGroupPrepend is-text>@</BInputGroupPrepend>
                      <BFormInput v-model="tooltipform.username" placeholder="Username" :class="{
                        'is-invalid': submitform && v$.tooltipform.username.$error,
                        'is-valid': submitform && !v$.tooltipform.username.$error,
                      }" />
                      <div v-if="submitted && v$.tooltipform.username.$error" class="invalid-feedback">
                        <span v-if="v$.tooltipform.username.required.$message">{{ v$.tooltipform.username.required.$message }}</span>
                      </div>
                    </BInputGroup>
                  </div>
                </BCol>

              </BRow>
              <BRow>
                <BCol md="6">
                  <div class="mb-3 position-relative">
                    <label>City</label>
                    <BFormInput v-model="tooltipform.city" placeholder="City" :class="{
                      'is-invalid': submitform && v$.tooltipform.city.$error,
                      'is-valid': submitform && !v$.tooltipform.city.$error,
                    }" />
                    <div v-if="submitted && v$.tooltipform.city.$error" class="invalid-feedback">
                      <span v-if="v$.tooltipform.city.required.$message">{{
                        v$.tooltipform.city.required.$message
                      }}</span>
                    </div>
                  </div>
                </BCol>

                <BCol md="6">
                  <div class="mb-3 position-relative">
                    <label>State</label>
                    <BFormInput v-model="tooltipform.state" placeholder="State" :class="{
                      'is-invalid': submitform && v$.tooltipform.state.$error,
                      'is-valid': submitform && !v$.tooltipform.state.$error,
                    }" />
                    <div v-if="submitted && v$.tooltipform.state.$error" class="invalid-feedback">
                      <span v-if="v$.tooltipform.state.required.$message">{{
                        v$.tooltipform.state.required.$message
                      }}</span>
                    </div>
                  </div>
                </BCol>
              </BRow>
              <BButton variant="primary" type="submit">Submit form</BButton>
            </BForm>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Validation type</BCardTitle>

            <p class="card-title-desc">
              Parsley is a javascript form validation library. It helps you
              provide your users with feedback on their form submission before
              sending it to your server.
            </p>

            <BForm action="#" @submit.prevent="typeForm">
              <div class="mb-3">
                <label>Required</label>
                <BFormInput v-model="typeform.name" placeholder="Type something" :class="{
                  'is-invalid': typesubmit && v$.typeform.name.$error,
                  'is-valid': typesubmit && !v$.typeform.name.$error,

                }" />
                <div v-if="submitted && v$.typeform.name.$error" class="invalid-feedback">
                  <span v-if="v$.typeform.name.required.$message">{{
                    v$.typeform.name.required.$message
                  }}</span>
                </div>
              </div>

              <div class="mb-3">
                <label>Equal To</label>
                <div>
                  <BFormInput v-model="typeform.password" type="password" :class="{
                    'is-invalid': typesubmit && v$.typeform.password.$error,
                    'is-valid': typesubmit && !v$.typeform.password.$error,

                  }" placeholder="Password" />
                  <div v-for="(item, index) in v$.typeform.password.$errors" :key="index" class="invalid-feedback">
                    <span v-if="item.$message">{{ item.$message }}</span>
                  </div>
                </div>
                <div class="mt-2">
                  <BFormInput v-model="typeform.confirmPassword" type="password" :class="{
                    'is-invalid': typesubmit && v$.typeform.confirmPassword.$error,
                    'is-valid': typesubmit && !v$.typeform.confirmPassword.$error,

                  }" placeholder="Re-Type Password" />
                  <div v-for="(item, index) in v$.typeform.confirmPassword.$errors" :key="index" class="invalid-feedback">
                    <span v-if="item.$message">{{ item.$message }}</span>
                  </div>
                </div>
              </div>

              <div class="mb-3">
                <label>E-Mail</label>
                <div>
                  <BFormInput v-model="typeform.email" :class="{
                    'is-invalid': typesubmit && v$.typeform.email.$error,
                    'is-valid': typesubmit && !v$.typeform.email.$error,

                  }" placeholder="Enter a valid e-mail" />
                  <div v-for="(item, index) in v$.typeform.email.$errors" :key="index" class="invalid-feedback">
                    <span v-if="item.$message">{{ item.$message }}</span>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label>URL</label>
                <div>
                  <BFormInput v-model="typeform.url" placeholder="URL" :class="{
                    'is-invalid': typesubmit && v$.typeform.url.$error,
                    'is-valid': typesubmit && !v$.typeform.url.$error,
                  }" />
                  <div v-for="(item, index) in v$.typeform.url.$errors" :key="index" class="invalid-feedback">
                    <span v-if="item.$message">{{ item.$message }}</span>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label>Digits</label>
                <div>
                  <BFormInput v-model="typeform.digit" :class="{
                    'is-invalid': typesubmit && v$.typeform.digit.$error,
                    'is-valid': typesubmit && !v$.typeform.digit.$error,
                  }" placeholder="Enter only digits" />
                  <div v-for="(item, index) in v$.typeform.digit.$errors" :key="index" class="invalid-feedback">
                    <span v-if="item.$message">{{ item.$message }}</span>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label>Number</label>
                <div>
                  <BFormInput v-model="typeform.number" :class="{
                    'is-invalid': typesubmit && v$.typeform.number.$error,
                    'is-valid': typesubmit && !v$.typeform.number.$error,
                  }" placeholder="Enter only numbers" />
                  <div v-for="(item, index) in v$.typeform.number.$errors" :key="index" class="invalid-feedback">
                    <span v-if="item.$message">{{ item.$message }}</span>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label>Alphanumeric</label>
                <div>
                  <BFormInput v-model="typeform.alphanum" :class="{
                    'is-invalid': typesubmit && v$.typeform.alphanum.$error,
                    'is-valid': typesubmit && !v$.typeform.alphanum.$error,

                  }" placeholder="Enter alphanumeric value" />
                  <div v-for="(item, index) in v$.typeform.alphanum.$errors" :key="index" class="invalid-feedback">
                    <span v-if="item.$message">{{ item.$message }}</span>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label>Textarea</label>
                <div>
                  <BFormTextarea v-model="typeform.textarea" :class="{
                    'is-invalid': typesubmit && v$.typeform.textarea.$error,
                    'is-valid': typesubmit && !v$.typeform.textarea.$error,
                  }" rows="5"></BFormTextarea>
                  <div v-if="typesubmit && v$.typeform.textarea.$error" class="invalid-feedback">
                    <span v-if="!v$.typeform.textarea.required">This value is required.</span>
                  </div>
                </div>
              </div>
              <div class="mb-3 mb-0">
                <div>
                  <BButton type="submit" variant="primary">Submit</BButton>
                  <BButton type="reset" variant="secondary" class="ms-1">
                    Cancel
                  </BButton>
                </div>
              </div>
            </BForm>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Range validation</BCardTitle>

            <p class="card-title-desc">
              Parsley is a javascript form validation library. It helps you
              provide your users with feedback on their form submission before
              sending it to your server.
            </p>

            <BForm action="#" @submit.prevent="rangeform">
              <div class="mb-3">
                <label>Min Length</label>
                <div>
                  <BFormInput v-model="range.minlen" :class="{ 'is-invalid': submit && v$.range.minlen.$error }" placeholder="Min 6 chars." />
                  <div v-for="(item, index) in v$.range.minlen.$errors" :key="index" class="invalid-feedback">
                    <span v-if="item.$message">{{ item.$message }}</span>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label>Max Length</label>
                <div>
                  <BFormInput v-model="range.maxlength" :class="{
                    'is-invalid': submit && v$.range.maxlength.$error,
                    'is-valid': submit && !v$.range.maxlength.$error,

                  }" placeholder="Max 6 chars." />
                  <div v-for="(item, index) in v$.range.maxlength.$errors" :key="index" class="invalid-feedback">
                    <span v-if="item.$message">{{ item.$message }}</span>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label>Range Length</label>
                <div>
                  <BFormInput v-model="range.between" :class="{
                    'is-invalid': submit && v$.range.between.$error,
                    'is-valid': submit && !v$.range.between.$error

                  }" placeholder="Text between 5 - 10 chars length" />
                  <div v-for="(item, index) in v$.range.between.$errors" :key="index" class="invalid-feedback">
                    <span v-if="item.$message">{{ item.$message }}</span>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label>Min Value</label>
                <div>
                  <BFormInput v-model="range.minval" :class="{
                    'is-invalid': submit && v$.range.minval.$error,
                    'is-valid': submit && !v$.range.minval.$error
                  }" placeholder="Min value is 6" />
                  <div v-for="(item, index) in v$.range.minval.$errors" :key="index" class="invalid-feedback">
                    <span v-if="item.$message">{{ item.$message }}</span>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label>Max Value</label>
                <div>
                  <BFormInput v-model="range.maxval" :class="{
                    'is-invalid': submit && v$.range.maxval.$error,
                    'is-valid': submit && !v$.range.maxval.$error
                  }" placeholder="Max value is 6" />
                  <div v-for="(item, index) in v$.range.maxval.$errors" :key="index" class="invalid-feedback">
                    <span v-if="item.$message">{{ item.$message }}</span>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label>Range Value</label>
                <div>
                  <BFormInput v-model="range.rangeval" :class="{
                    'is-invalid': submit && v$.range.rangeval.$error,
                    'is-valid': submit && !v$.range.rangeval.$error,
                  }" placeholder="Number between 6 - 100" />
                  <div v-for="(item, index) in v$.range.rangeval.$errors" :key="index" class="invalid-feedback">
                    <span v-if="item.$message">{{ item.$message }}</span>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label>Regular Exp</label>
                <div>
                  <BFormInput v-model="range.expr" :class="{
                    'is-invalid': submit && v$.range.expr.$error,
                    'is-valid': submit && !v$.range.expr.$error
                  }" placeholder="Hex. Color" />
                  <div v-for="(item, index) in v$.range.expr.$errors" :key="index" class="invalid-feedback">
                    <span v-if="item.$message">{{ item.$message }}</span>
                  </div>
                </div>
              </div>

              <div class="mb-3 mb-0">
                <div>
                  <BButton type="submit" variant="primary">Submit</BButton>
                  <BButton type="reset" variant="secondary" class="ms-1">
                    Cancel
                  </BButton>
                </div>
              </div>
            </BForm>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>