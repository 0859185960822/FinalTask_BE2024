<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import { textualInputs } from './elementsData'

/**
 * Form-element component
 */
export default {
  components: { Layout, PageHeader },
  data() {
    return {

      exManualSelected: null,

      selectedprimary: "primary",
      selectedinfo: "info",
      selecteddanger: "danger",
      selectedwarning: "warning",
      selectedsuccess: "success",
      selectedToogle: "A",
      selectedDefault: "a",
      status: true,
      rightcheck: true,
      primarycheck: true,
      primarycheck2: true,
      successcheck: true,
      infocheck: true,
      warningcheck: true,
      dangercheck: true,
      primaryoutlinecheck: true,
      successoutlinecheck: true,
      infooutlinecheck: true,
      warningoutlinecheck: true,
      dangeroutlinecheck: true,
      checked: true,
      smchecked: true,
      lgchecked: true,
      textualInputs,
      indeterminate: true,
      indeterminate2: true,
      indeterminate3: true,
      indeterminate4: true,

    };
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="Form Elements" pageTitle="Forms" />

    <BRow>
      <BCol cols="12">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Textual inputs</BCardTitle>
            <p class="card-title-desc">
              Here are examples of
              <code>.form-control</code> applied to each textual HTML5
              <code>&lt;input&gt;</code>
              <code>type</code>.
            </p>

            <BRow>
              <BCol cols="12">
                <BForm class="form-horizontal" role="form">

                  <BFormGroup v-for="(textualInput, index) in textualInputs" :key="'textual-inputs-' + index" class="mb-3" :id="textualInput.id" label-cols-lg="2" :label="textualInput.label" :label-for="textualInput.for">
                    <BFormInput :for="textualInput.for" :value="textualInput.value" :type="textualInput.type"></BFormInput>
                  </BFormGroup>

                  <BRow class="mb-3">
                    <label class="col-md-2 col-form-label">Select</label>
                    <BCol md='10'>
                      <BFormSelect v-model="exManualSelected" class="form-select">
                        <BFormSelectOption :value="null">Select</BFormSelectOption>
                        <BFormSelectOption value="1">Large select</BFormSelectOption>
                        <BFormSelectOption value="2">Small select</BFormSelectOption>
                      </BFormSelect>
                    </BCol>
                  </BRow>

                  <BRow>
                    <label for="exampleDataList" class="col-md-2 col-form-label">Datalists</label>
                    <BCol md="10">
                      <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
                      <datalist id="datalistOptions">
                        <option value="San Francisco"></option>
                        <option value="New York"></option>
                        <option value="Seattle"></option>
                        <option value="Los Angeles"></option>
                        <option value="Chicago"></option>
                      </datalist>
                    </BCol>
                  </BRow>
                </BForm>
              </BCol>
            </BRow>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Sizing</BCardTitle>
            <p class="card-title-desc">
              Set heights using size like
              <code>lg</code> and <code>sm</code>.
            </p>
            <div>
              <div class="mb-4">
                <BFormInput id="input-md" placeholder="Default input"></BFormInput>
              </div>
              <div class="mb-4">
                <BFormInput id="input-small" size="sm" placeholder=".form-control-sm"></BFormInput>
              </div>
              <div class="mb-4">
                <BFormInput id="input-lg" size="lg" placeholder=".form-control-lg"></BFormInput>
              </div>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Range Inputs</BCardTitle>

            <p class="card-title-desc">
              Set horizontally scrollable range inputs using
              <code>.form-control-range</code>.
            </p>

            <div>
              <h5 class="font-size-14">Example</h5>
              <input id="formControlRange" type="range" class="form-control-range form-range" />
            </div>
            <div class="mt-4">
              <h5 class="font-size-14">Custom Range</h5>
              <BFormInput id="custom-range" type="range" class="form-range"></BFormInput>

              <BFormInput id="customRange2" class="mt-4 form-range" type="range" min="0" max="5"></BFormInput>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardBody class="pb-0">
            <BCardTitle>Checkboxes</BCardTitle>

            <BRow>
              <BCol xl="3" sm="6">
                <div class="mt-4 form-check">
                  <h5 class="font-size-14 mb-4">
                    <i class="mdi mdi-arrow-right text-primary me-1"></i>
                    Default Checkboxes
                  </h5>

                  <div class="mb-2">
                    <BFormCheckbox class="mb-3 form-check-input" checked plain>Default checkbox</BFormCheckbox>
                  </div>

                  <div>
                    <BFormCheckbox class="form-check-input" v-model="rightcheck" plain>Default checkbox Right</BFormCheckbox>
                  </div>
                </div>
              </BCol>
              <BCol xl="3" sm="6">
                <div class="mt-4">
                  <h5 class="font-size-14 mb-4">
                    <i class="mdi mdi-arrow-right text-primary me-1"></i> Form
                    Checkboxes Right
                  </h5>

                  <div>
                    <BFormGroup class="form-check-right mb-3">
                      <BFormCheckbox id="formCheckboxRight1">Form Checkbox Right</BFormCheckbox>
                    </BFormGroup>
                  </div>

                  <div>
                    <BFormGroup class="form-check-right">
                      <BFormCheckbox id="formCheckboxRight1" v-model="checked">Form Checkbox Right checked</BFormCheckbox>
                    </BFormGroup>
                  </div>
                </div>

              </BCol>
              <BCol xl="3" sm="6">
                <div class="mt-4">
                  <h5 class="font-size-14">
                    <i class="mdi mdi-arrow-right text-primary me-1"></i>
                    Custom Checkboxes colors
                  </h5>
                  <p class="sub-header mb-4">
                    Add class
                    <code>.form-check-*</code> for a color Checkboxes
                  </p>

                  <div>
                    <div>
                      <BFormGroup class="form-check-primary mb-3">
                        <BFormCheckbox v-model="primarycheck">Checkbox Primary</BFormCheckbox>
                      </BFormGroup>
                      <BFormGroup class="form-check-success mb-3">
                        <BFormCheckbox v-model="successcheck">Checkbox Success</BFormCheckbox>
                      </BFormGroup>
                      <BFormGroup class="form-check-info mb-3">
                        <BFormCheckbox v-model="infocheck">Checkbox Info</BFormCheckbox>
                      </BFormGroup>
                      <BFormGroup class="form-check-warning mb-3">
                        <BFormCheckbox v-model="warningcheck">Checkbox Warning</BFormCheckbox>
                      </BFormGroup>
                      <BFormGroup class="form-check-danger mb-3">
                        <BFormCheckbox v-model="dangercheck">Checkbox Danger</BFormCheckbox>
                      </BFormGroup>
                    </div>
                  </div>

                </div>
              </BCol>

              <BCol xl="3" sm="6">
                <div class="mt-4">
                  <h5 class="font-size-14">
                    <i class="mdi mdi-arrow-right text-primary me-1"></i> Custom
                    Checkboxes Outline
                  </h5>
                  <p class="sub-header mb-4">
                    Add class
                    <code>.form-checkbox-outline</code> &amp;
                    <code>.form-check-*</code> for a color Checkboxes
                  </p>

                  <div>
                    <div>
                      <BFormGroup class="form-checkbox-outline form-check-primary mb-3">
                        <BFormCheckbox v-model="primaryoutlinecheck">Checkbox Outline Primary</BFormCheckbox>
                      </BFormGroup>
                      <BFormGroup class="form-checkbox-outline form-check-success mb-3">
                        <BFormCheckbox v-model="successoutlinecheck">Checkbox Outline Success</BFormCheckbox>
                      </BFormGroup>
                      <BFormGroup class="form-checkbox-outline form-check-info mb-3">
                        <BFormCheckbox v-model="infooutlinecheck">Checkbox Outline Info</BFormCheckbox>
                      </BFormGroup>
                      <BFormGroup class="form-checkbox-outline form-check-warning mb-3">
                        <BFormCheckbox v-model="warningoutlinecheck">Checkbox Outline Warning</BFormCheckbox>
                      </BFormGroup>
                      <BFormGroup class="form-checkbox-outline form-check-danger mb-3">
                        <BFormCheckbox v-model="dangeroutlinecheck">Checkbox Outline Danger</BFormCheckbox>
                      </BFormGroup>
                    </div>
                  </div>

                </div>
              </BCol>
            </BRow>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Radios</BCardTitle>

            <BRow>
              <BCol xl="3" sm="6">
                <div class="mt-4">
                  <h5 class="font-size-14 mb-4">Default Radios</h5>

                  <BFormGroup>
                    <BFormRadio v-model="selectedDefault" class="mb-3 me-2" value="a" plain>Default radio</BFormRadio>
                    <BFormRadio v-model="selectedDefault" class="form-check-right me-2 align-middle" value="b" plain>Default radio Right</BFormRadio>
                  </BFormGroup>
                </div>
              </BCol>

              <BCol xl="3" sm="6">
                <div class="mt-4">
                  <h5 class="font-size-14 mb-4">Form Radios Right</h5>

                  <div>
                    <BFormGroup class="form-check-right mb-3">
                      <BFormRadio v-model="radio1" value="checked" name="flexRadioDefault" id="flexRadioDefault1">Form Radio Right</BFormRadio>
                    </BFormGroup>
                  </div>

                  <div>
                    <BFormGroup class="form-check-right mb-3">
                      <BFormRadio v-model="radio1" value="default" name="flexRadioDefault" id="flexRadioDefault2">Form Radio Right checked</BFormRadio>
                    </BFormGroup>
                  </div>
                </div>
              </BCol>

              <BCol xl="3" sm="6">
                <div class="mt-4">
                  <h5 class="font-size-14">
                    <i class="mdi mdi-arrow-right text-primary me-1"></i> Form
                    Radio colors
                  </h5>
                  <p class="sub-header mb-4">
                    Add class <code>.form-radio-* </code> for a color Radios
                  </p>

                  <div>
                    <BFormGroup class="form-radio-primary mb-3">
                      <BFormRadio v-model="primarycheck2">Radio Primary</BFormRadio>
                    </BFormGroup>

                    <BFormGroup class="form-radio-success mb-3">
                      <BFormRadio v-model="primarycheck2">Radio Success</BFormRadio>
                    </BFormGroup>

                    <BFormGroup class="form-radio-info mb-3">
                      <BFormRadio v-model="primarycheck2">Radio Info</BFormRadio>
                    </BFormGroup>

                    <BFormGroup class="form-radio-warning mb-3">
                      <BFormRadio v-model="primarycheck2">Radio Warning</BFormRadio>
                    </BFormGroup>

                    <BFormGroup class="form-radio-danger mb-3">
                      <BFormRadio v-model="primarycheck2">Radio Danger</BFormRadio>
                    </BFormGroup>
                  </div>

                </div>
              </BCol>
              <BCol xl="3" sm="6">
                <div class="mt-4">
                  <h5 class="font-size-14">
                    <i class="mdi mdi-arrow-right text-primary me-1"></i> Form
                    Radio Outline
                  </h5>
                  <p class="sub-header mb-4">
                    Add class <code>form-radio-outline</code> &amp;
                    <code>.form-radio-* </code> for a color Checkboxes
                  </p>

                  <div>
                    <BFormGroup class="form-radio-outline form-radio-primary mb-3">
                      <BFormRadio v-model="primarycheck2">Radio Outline Primary</BFormRadio>
                    </BFormGroup>

                    <BFormGroup class="form-radio-outline form-radio-success mb-3">
                      <BFormRadio v-model="primarycheck2">Radio Outline Success</BFormRadio>
                    </BFormGroup>

                    <BFormGroup class="form-radio-outline form-radio-info mb-3">
                      <BFormRadio v-model="primarycheck2">Radio Outline Info</BFormRadio>
                    </BFormGroup>

                    <BFormGroup class="form-radio-outline form-radio-warning mb-3">
                      <BFormRadio v-model="primarycheck2">Radio Outline Warning</BFormRadio>
                    </BFormGroup>

                    <BFormGroup class="form-radio-outline form-radio-danger mb-3">
                      <BFormRadio v-model="primarycheck2">Radio Outline Danger</BFormRadio>
                    </BFormGroup>
                  </div>

                </div>
              </BCol>
            </BRow>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Switches</BCardTitle>

            <p class="card-title-desc">
              A switch has the markup of a custom checkbox but uses the
              <code>.custom-switch</code> class to render a toggle switch.
              Switches also support the <code>disabled</code> attribute.
            </p>

            <BRow>
              <BCol sm="6">
                <div>
                  <h5 class="font-size-14 mb-3">Switch examples</h5>

                  <div>
                    <BFormCheckbox class=" mb-3" id="flexSwitchCheckDefault" switch inline>
                      Default switch checkbox input
                    </BFormCheckbox>
                  </div>

                  <div>
                    <BFormCheckbox v-model="indeterminate" class="mb-3" type="checkbox" id="flexSwitchCheckChecked" switch inline checked>
                      Checked switch checkbox input
                    </BFormCheckbox>
                  </div>

                  <div>
                    <BFormCheckbox class="mb-3" id="flexSwitchCheckCheckedDisabled" switch inline checked disabled>
                      Disabled switch checkbox input
                    </BFormCheckbox>
                  </div>

                  <div>
                    <BFormCheckbox v-model="indeterminate2" class="mb-3" id="flexSwitchCheckCheckedDisabled" switch checked="" disabled="">
                      Disabled checked switch checkbox input
                    </BFormCheckbox>
                  </div>

                </div>
              </BCol>

              <BCol sm="6">
                <div class="mt-4 mt-sm-0">
                  <h5 class="font-size-14 mb-3">Switch sizes</h5>

                  <div class="mb-3">
                    <BFormCheckbox v-model="indeterminate3" id="SwitchCheckSizesm" switch>
                      Small Size Switch
                    </BFormCheckbox>
                  </div>

                  <div class="mb-3">
                    <BFormCheckbox id="SwitchCheckSizemd" switch class="form-switch-md me-2">
                      Medium Size Switch
                    </BFormCheckbox>
                  </div>

                  <div class="mb-3">
                    <BFormCheckbox v-model="indeterminate4" id="SwitchCheckSizelg" switch checked class="form-switch-lg me-2">
                      Large Size Switch
                    </BFormCheckbox>
                  </div>
                </div>
              </BCol>

            </BRow>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">File browser</BCardTitle>

            <div>
              <h5 class="font-size-14">
                <i class="mdi mdi-arrow-right text-primary"></i> Default file
                input
              </h5>
              <BRow>
                <BCol sm="6">
                  <div class="mt-3">
                    <label for="formFile" class="form-label">Default file input example</label>
                    <input class="form-control" type="file" id="formFile" />
                  </div>
                </BCol>
              </BRow>

              <BRow>
                <BCol sm="6">
                  <div class="mt-4">
                    <div>
                      <label for="formFileSm" class="form-label">Small file input example</label>
                      <input class="form-control form-control-sm" id="formFileSm" type="file" />
                    </div>
                  </div>
                </BCol>

                <BCol sm="6">
                  <div class="mt-4">
                    <div>
                      <label for="formFileLg" class="form-label">Large file input example</label>
                      <input class="form-control form-control-lg" id="formFileLg" type="file" />
                    </div>
                  </div>
                </BCol>
              </BRow>
            </div>

            <div class="mt-4 pt-2">
              <h5 class="font-size-14 mb-0">
                <i class="mdi mdi-arrow-right text-primary"></i> Custom file
                input
              </h5>
            </div>

            <BRow>
              <BCol sm="6">
                <div class="mt-4">
                  <div>
                    <label class="form-label">With Label</label>
                    <div class="input-group mb-3">
                      <label class="input-group-text" for="inputGroupFile01">Upload</label>
                      <input type="file" class="form-control" id="inputGroupFile01" />
                    </div>
                    <div class="input-group">
                      <input type="file" class="form-control" id="inputGroupFile02" />
                      <label class="input-group-text" for="inputGroupFile02">Upload</label>
                    </div>
                  </div>
                </div>
              </BCol>

              <BCol sm="6">
                <div class="mt-4">
                  <div>
                    <label class="form-label">With Button</label>
                    <div class="input-group mb-3">
                      <BButton variant="primary" type="button" id="inputGroupFileAddon03">
                        Button
                      </BButton>
                      <input type="file" class="form-control" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" aria-label="Upload" />
                    </div>

                    <div class="input-group">
                      <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                      <BButton variant="primary" type="button" id="inputGroupFileAddon04">
                        Button
                      </BButton>
                    </div>
                  </div>
                </div>
              </BCol>
            </BRow>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>