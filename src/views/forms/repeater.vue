<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

/**
 * Form-repeater Component
 */
export default {
  components: { Layout, PageHeader },
  data() {
    return {
      fields: [{ id: 1 }],
      phoneData: [{ id: 1 }],
    };
  },

  methods: {
    /**
     * Push the row in form
     */
    AddformData() {
      this.fields.push({ name: "", email: "", subject: "", message: "" });
    },
    /**
     * Delete the row
     */
    deleteRow(index) {
      if (confirm("Are you sure you want to delete this element?"))
        this.fields.splice(index, 1);
    },
    /**
     * Add the phone number in form
     */
    AddPhoneNo() {
      this.phoneData.push({ phone: "" });
    },
    /**
     * Delete the row from form
     */
    deletePhone(index) {
      this.phoneData.splice(index, 1);
    },
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="Form Repeater" pageTitle="Forms" />

    <BRow>
      <BCol cols="12">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Example</BCardTitle>

            <BForm class="repeater" enctype="multipart/form-data">
              <div>
                <BRow v-for="(field, index) in fields" :key="field.id">
                  <BCol lg="2" class="mb-3">
                    <label for="name">Name</label>
                    <BFormInput v-model="field.name" name="untyped-input" placeholder="Enter Your Name" />
                  </BCol>

                  <BCol lg="2" class="mb-3">
                    <label for="email">Email</label>
                    <BFormInput v-model="field.email" placeholder="Enter Your Email ID" />
                  </BCol>

                  <BCol lg="2" class="mb-3">
                    <label for="subject">Subject</label>
                    <BFormInput v-model="field.subject" placeholder="Enter Your Subject" />
                  </BCol>

                  <BCol lg="2" class="mb-3">
                    <label for="resume">Resume</label>
                    <BFormInput id="resume" type="file" class="form-control-file" />
                  </BCol>

                  <BCol lg="2" class="mb-3">
                    <label for="message">Message</label>
                    <BFormTextarea id="message" v-model="field.message" placeholder="Enter Your Message"></BFormTextarea>
                  </BCol>

                  <BCol lg="2" class="align-self-center">
                    <div class="d-grid">
                      <BButton variant="primary" type="button" class="py-2 btn-block" @click="deleteRow(index)" >Delete</BButton>
                    </div>
                  </BCol>
                </BRow>
              </div>
              <BButton variant="success" type="button" class="mt-3 mt-lg-0" @click="AddformData"  >Add</BButton>
            </BForm>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Nested</BCardTitle>
            <BForm class="outer-repeater">
              <div class="outer">
                <div class="outer">
                  <div class="mb-3">
                    <label for="formname">Name :</label>
                    <BFormInput id="formname" type="text" class="form-control" placeholder="Enter your Name..." />
                  </div>

                  <div class="mb-3">
                    <label for="formemail">Email :</label>
                    <BFormInput id="formemail" type="email" class="form-control" placeholder="Enter your Email..." />
                  </div>

                  <div class="inner-repeater mb-4">
                    <div class="inner mb-3">
                      <label>Phone no :</label>
                      <div v-for="(data, index) in phoneData" :key="data.id" class="inner mb-3 row">
                        <BCol md="10" cols="8">
                          <BFormInput v-model="data.phone" type="text" class="inner form-control" placeholder="Enter your phone no..." />
                        </BCol>
                        <BCol md="2" cols="4">
                          <div class="d-grid">
                            <BButton variant="primary" type="button" class="btn-block inner" @click="deletePhone(index)" >Delete</BButton>
                          </div>
                        </BCol>
                      </div>
                    </div>
                    <BButton variant="success" type="button" class="inner" @click="AddPhoneNo" >Add Number</BButton>
                  </div>

                  <div class="mb-3">
                    <label class="d-block mb-3">Gender :</label>

                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="gender" id="inlineRadio1" value="option1" />
                      <label class="form-check-label" for="inlineRadio1">Male</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="gender" id="inlineRadio2" value="option2" />
                      <label class="form-check-label" for="inlineRadio2">Female</label>
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="formmessage">Message :</label>
                    <BFormTextarea id="formmessage" rows="3" placeholder="Enter Your Message"></BFormTextarea>
                  </div>
                  <BButton variant="primary" type="submit">Submit</BButton>
                </div>
              </div>
            </BForm>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>