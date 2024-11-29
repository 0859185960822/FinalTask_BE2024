<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

/**
 * Form-mask component
 */
export default {
  components: {
    Layout,
    PageHeader
  },
  data() {
    return {
      digit: "",
      zipcode: "",
      crazyzip: "",
      money: "",
      date: "",
      hour: "",
      datetime: "",
      ipaddress: "",
      cnpj: "",
      cpf: "",
      celphone: "",
      ustelephone: "",
      areacode: "",
      telephone: ""
    };
  }
};
</script>

<template>
  <Layout>
    <PageHeader title="Form Mask" pageTitle="Forms" />

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Example</BCardTitle>

            <BForm>
              <BRow>
                <BCol lg="6">
                  <div>
                    <div>
                      <label for="regexp-mask" class="form-label">Dynamic mask</label>
                      <BFormInput type="text" v-maska :data-maska="['#.## cm']" class="form-control" id="regexp-mask" />
                      <div class="text-muted">["# cm", "#.# cm", "#.## cm"]</div>
                    </div>

                    <div class="mt-4">
                      <label for="phone-mask" class="form-label">Phone with code</label>
                      <BFormInput type="text" v-maska :data-maska="['+1 (###) ##-##-##']" class="form-control" id="phone-mask" />
                      <div class="text-muted">+1 (###) ###-####</div>
                    </div>

                    <div class="mt-4">
                      <label for="number-mask" class="form-label">Credit card</label>
                      <BFormInput type="text" v-maska :data-maska="'#### #### #### ####'" class="form-control" id="number-mask" />
                      <div class="text-muted">#### #### #### ####</div>
                    </div>
                  </div>
                </BCol>

                <BCol lg="6">
                  <div class="mt-4 mt-lg-0">

                    <div>
                      <label for="date-mask" class="form-label">Date</label>
                      <BFormInput type="text" v-maska :data-maska="'##/##/####'" class="form-control" id="date-mask" />
                      <div class="text-muted">##/##/####</div>
                    </div>
                   
                    <div class="mt-4">
                      <label class="form-label">IP Address</label>
                      <BFormInput type="text" v-maska :data-maska="'###.###.###.###'" class="form-control" />
                      <div class="text-muted">e.g "xxx.xxx.xxx.xxx"</div>
                    </div>

                    <div class="mt-4">
                      <label class="form-label">CPF/CNPJ</label>
                      <BFormInput type="text" v-maska :data-maska="['###.###.###-##', '##.###.###/####-##']" class="form-control" id="currency-mask" />
                      <div class="text-muted">["###.###.###-##", "##.###.###/####-##"]</div>
                    </div>

                  </div>
                </BCol>
              </BRow>
            </BForm>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>