<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

/**
 * Buttons component
 */
export default {
  components: {
    Layout,
    PageHeader,
  },
  data() {
    return {
      selected: "radio1",
      options: [
        {
          text: "Active",
          value: "radio1",
        },
        {
          text: "Radio",
          value: "radio2",
        },
        {
          text: "Radio",
          value: "radio3",
        },
      ],
      selectedCheck: [], // Must be an array reference!
      optionsCheck: [
        {
          text: "Checked-1",
          value: "checked1",
        },
        {
          text: "Checked-2",
          value: "checked2",
        },
        {
          text: "Checked-3",
          value: "checked3",
        },
      ],
    };
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="Buttons" pageTitle="UI Elements" />

    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Default buttons</BCardTitle>
            <p class="card-title-desc">
              Bootstrap includes six predefined button styles, each serving its
              own semantic purpose.
            </p>
            <div class="button-items">
              <BButton class="me-2" variant="primary">Primary</BButton>
              <BButton class="me-2" variant="secondary">Secondary</BButton>
              <BButton class="me-2" variant="success">Success</BButton>
              <BButton class="me-2" variant="info">Info</BButton>
              <BButton class="me-2" variant="warning">Warning</BButton>
              <BButton class="me-2" variant="danger">Danger</BButton>
              <BButton class="me-2" variant="dark">Dark</BButton>
              <BButton class="me-2" variant="link">Link</BButton>
              <BButton variant="light">Light</BButton>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Outline buttons</BCardTitle>
            <p class="card-title-desc">
              Replace the default modifier classes with the
              <code class="highlighter-rouge">outline-*</code> ones to remove
              all background images and colors on any button.
            </p>
            <div class="button-items">
              <BButton class="me-2" variant="outline-primary">Primary</BButton>
              <BButton class="me-2" variant="outline-secondary">Secondary</BButton>
              <BButton class="me-2" variant="outline-success">Success</BButton>
              <BButton class="me-2" variant="outline-info">Info</BButton>
              <BButton class="me-2" variant="outline-warning">Warning</BButton>
              <BButton class="me-2" variant="outline-danger">Danger</BButton>
              <BButton class="me-2" variant="outline-dark">Dark</BButton>
              <BButton variant="outline-light">Light</BButton>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Rounded buttons</BCardTitle>

            <p class="card-title-desc">
              Use
              <code>pill</code> for button round border.
            </p>
            <div class="button-items">
              <BButton class="me-2" pill variant="primary">Primary</BButton>
              <BButton class="me-2" pill variant="secondary">Secondary</BButton>
              <BButton class="me-2" pill variant="success">Success</BButton>
              <BButton class="me-2" pill variant="info">Info</BButton>
              <BButton class="me-2" pill variant="warning">Warning</BButton>
              <BButton class="me-2" pill variant="danger">Danger</BButton>
              <BButton class="me-2" pill variant="dark">Dark</BButton>
              <BButton class="me-2" pill variant="link">Link</BButton>
              <BButton pill variant="light">Light</BButton>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Buttons with icon</BCardTitle>

            <p class="card-title-desc">Add icon in button.</p>

            <div class="button-items">
              <BButton class="me-2" variant="primary">
                <i class="bx bx-smile font-size-16 align-middle me-2"></i>
                Primary
              </BButton>
              <BButton class="me-2" variant="success">
                <i class="bx bx-check-double font-size-16 align-middle me-2"></i>
                Success
              </BButton>
              <BButton class="me-2" variant="warning">
                <i class="bx bx-error font-size-16 align-middle me-2"></i>
                Warning
              </BButton>
              <BButton class="me-2" variant="danger">
                <i class="bx bx-block font-size-16 align-middle me-2"></i>
                Danger
              </BButton>
              <BButton class="me-2" variant="dark">
                <i class="bx bx-loader bx-spin font-size-16 align-middle me-2"></i>
                Loading
              </BButton>
              <BButton class="me-2" variant="light">
                <i class="bx bx-hourglass bx-spin font-size-16 align-middle"></i>
                Loading
              </BButton>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Snip Buttons</BCardTitle>

            <BRow>
              <BCol lg="4">
                <div class="mt-4">
                  <h5 class="font-size-15 mb-3">Example 1</h5>

                  <div>
                    <BButtonGroup class="btn-group-example mb-3">
                      <BButton variant="outline-primary" class="w-sm">Left</BButton>
                      <BButton variant="outline-primary" class="w-sm">Middle</BButton>
                      <BButton variant="outline-primary" class="w-sm">Right</BButton>
                    </BButtonGroup>

                    <div>
                      <BButtonGroup class="btn-group-example mb-3">
                        <BButton variant="primary" class="w-xs">
                          <i class="mdi mdi-thumb-up"></i>
                        </BButton>
                        <BButton variant="danger" class="w-xs">
                          <i class="mdi mdi-thumb-down"></i>
                        </BButton>
                      </BButtonGroup>
                    </div>

                    <div>
                      <BButtonGroup class="btn-group-example">
                        <BButton variant="outline-secondary" class="w-xs">
                          <i class="bx bx-menu-alt-right"></i>
                        </BButton>
                        <BButton variant="outline-secondary" class="w-xs">
                          <i class="bx bx-menu"></i>
                        </BButton>
                        <BButton variant="outline-secondary" class="w-xs">
                          <i class="bx bx-menu-alt-left"></i>
                        </BButton>
                      </BButtonGroup>
                    </div>
                  </div>
                </div>
              </BCol>

              <BCol lg="4">
                <div class="mt-4">
                  <h5 class="font-size-15 mb-3">Example 2</h5>

                  <div class="button-items">
                    <BButton variant="primary" class="btn-label me-2">
                      <i class="bx bx-smile label-icon"></i> Primary
                    </BButton>
                    <BButton variant="success" class="btn-label me-2">
                      <i class="bx bx-check-double label-icon"></i> Success
                    </BButton>
                    <BButton variant="warning" class="btn-label me-2">
                      <i class="bx bx-error label-icon"></i> Warning
                    </BButton>
                    <BButton variant="danger" class="btn-label">
                      <i class="bx bx-block label-icon"></i> Danger
                    </BButton>
                    <BButton variant="dark" class="btn-label me-2 mt-2">
                      <i class="bx bx-loader label-icon"></i> Dark
                    </BButton>
                    <BButton variant="light" class="btn-label mt-2">
                      <i class="bx bx-hourglass label-icon"></i> Light
                    </BButton>
                  </div>
                </div>
              </BCol>

              <BCol lg="4">
                <div class="mt-4">
                  <h5 class="font-size-15 mb-3">Example 3</h5>

                  <div class="button-items">
                    <BButton variant="primary" class="w-sm me-2">
                      <i class="mdi mdi-download d-block font-size-16"></i>
                      Download
                    </BButton>
                    <BButton variant="light" class="w-sm me-2">
                      <i class="mdi mdi-upload d-block font-size-16"></i> Upload
                    </BButton>
                    <BButton variant="success" class="w-sm me-2">
                      <i class="mdi mdi-pencil d-block font-size-16"></i> Edit
                    </BButton>
                    <BButton variant="danger" class="w-sm">
                      <i class="mdi mdi-trash-can d-block font-size-16"></i>
                      Delete
                    </BButton>
                  </div>
                </div>
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
            <BCardTitle>Buttons Sizes</BCardTitle>

            <p class="card-title-desc">
              Add
              <code>lg</code> or <code>sm</code> for additional sizes.
            </p>

            <div class="button-items">
              <BButton class="me-2" size="lg" variant="primary">Large button</BButton>
              <BButton class="me-2" size="lg">Large button</BButton>
              <BButton class="me-2" size="sm" variant="primary">Small button</BButton>
              <BButton size="sm">Small button</BButton>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Buttons width</BCardTitle>
            <p class="card-title-desc">
              Add
              <code>.w-xs</code>, <code>.w-sm</code>, <code>.w-md</code> and
              <code>.w-lg</code> class for additional buttons width.
            </p>

            <div class="button-items">
              <BButton variant="primary" class="w-xs me-2">Xs</BButton>
              <BButton variant="danger" class="w-sm ml-1 me-2">Small</BButton>
              <BButton variant="warning" class="w-md ml-1 me-2">Medium</BButton>
              <BButton variant="success" class="w-lg">Large</BButton>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Buttons tags</BCardTitle>
            <p class="card-title-desc">
              The
              <code class="highlighter-rouge">.btn</code>
              classes are designed to be used with the
              <code class="highlighter-rouge">&lt;button&gt;</code> element.
              However, you can also use these classes on
              <code class="highlighter-rouge">&lt;a&gt;</code> or
              <code class="highlighter-rouge">&lt;input&gt;</code> elements
              (though some browsers may apply a slightly different rendering).
            </p>

            <div class="button-items">
              <BLink class="btn btn-primary me-2" href="javascript: void(0);" role="button">Link</BLink>
              <BButton class="me-2" variant="success" type="submit">Button</BButton>
              <input class="btn btn-info me-2" type="button" value="Input" />
              <input class="btn btn-danger me-2" type="submit" value="Submit" />
              <input class="btn btn-warning me-2" type="reset" value="Reset" />
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Toggle states</BCardTitle>

            <p class="card-title-desc">
              Add
              <code class="highlighter-rouge">data-toggle="button"</code>
              to toggle a button’s
              <code class="highlighter-rouge">active</code>
              state. If you’re pre-toggling a button, you must manually add the
              <code class="highlighter-rouge">.active</code> class
              <strong>and</strong>
              <code class="highlighter-rouge">aria-pressed="true"</code> to the
              <code class="highlighter-rouge">&lt;button&gt;</code>.
            </p>

            <div class="button-items">
              <BButton varinat="primary" data-toggle="button" aria-pressed="false">
                Single toggle
              </BButton>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Block Buttons</BCardTitle>
            <p class="card-title-desc">
              Create block level buttons—those that span the full width of a
              parent—by adding
              <code class="highlighter-rouge">.btn-block</code>.
            </p>

            <div class="d-grid gap-2">
              <BButton block variant="primary" size="lg">Block Level Button</BButton>
              <BButton block size="sm">Block Level Button</BButton>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Checkbox & Radio Buttons</BCardTitle>
            <p class="card-title-desc">
              Bootstrap’s
              <code class="highlighter-rouge">.button</code> styles can be
              applied to other elements, such as
              <code class="highlighter-rouge">&lt;label&gt;</code>s, to provide
              checkbox or radio style button toggling. Add
              <code class="highlighter-rouge">data-toggle="buttons"</code> to a
              <code class="highlighter-rouge">.btn-group</code> containing those
              modified buttons to enable toggling in their respective styles.
            </p>

            <BRow>
              <BCol xl="6">
                <BFormCheckboxGroup v-model="selectedCheck" :options="optionsCheck" name="buttons-1" class="check-group" buttons button-variant="primary"></BFormCheckboxGroup>
              </BCol>
              <BCol xl="6">
                <BFormRadioGroup id="btn-radios-1" class="check-group" v-model="selected" :options="options" buttons name="radios-btn-default"></BFormRadioGroup>
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
            <BCardTitle>Button group</BCardTitle>
            <p class="card-title-desc">
              Wrap a series of buttons with
              <code class="highlighter-rouge">.btn</code> in
              <code class="highlighter-rouge">.btn-group</code>.
            </p>

            <BRow>
              <BCol md="6">
                <div class="d-flex flex-wrap gap-2">
                  <BButtonGroup>
                    <BButton variant="primary">Left</BButton>
                    <BButton variant="primary">Middle</BButton>
                    <BButton variant="primary">Right</BButton>
                  </BButtonGroup>

                  <BButtonGroup>
                    <BButton variant="outline-primary" active>Left</BButton>
                    <BButton variant="outline-primary">Middle</BButton>
                    <BButton variant="outline-primary">Right</BButton>
                  </BButtonGroup>
                </div>
              </BCol>

              <BCol md="6">
                <div class="d-flex flex-wrap gap-3 mt-4 mt-md-0">
                  <BButtonGroup class="mt-4 mt-md-0">
                    <BButton>
                      <i class="bx bx-menu-alt-right"></i>
                    </BButton>
                    <BButton>
                      <i class="bx bx-menu"></i>
                    </BButton>
                    <BButton>
                      <i class="bx bx-menu-alt-left"></i>
                    </BButton>
                  </BButtonGroup>

                  <BButtonGroup class="mt-4 mt-md-0">
                    <BButton variant="outline-secondary">
                      <i class="bx bx-menu-alt-right"></i>
                    </BButton>
                    <BButton variant="outline-secondary">
                      <i class="bx bx-menu"></i>
                    </BButton>
                    <BButton variant="outline-secondary">
                      <i class="bx bx-menu-alt-left"></i>
                    </BButton>
                  </BButtonGroup>
                </div>
              </BCol>
            </BRow>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Button toolbar</BCardTitle>
            <p class="card-title-desc">
              Combine sets of button groups into button toolbars for more
              complex components. Use utility classes as needed to space out
              groups, buttons, and more.
            </p>
            <div class="d-flex flex-wrap gap-4">
              <BButtonToolbar>
                <BButtonGroup class="me-2">
                  <BButton varinat="secondary">1</BButton>
                  <BButton varinat="secondary">2</BButton>
                  <BButton varinat="secondary">3</BButton>
                  <BButton varinat="secondary">4</BButton>
                </BButtonGroup>
                <BButtonGroup class="me-2">
                  <BButton varinat="secondary">5</BButton>
                  <BButton varinat="secondary">6</BButton>
                  <BButton varinat="secondary">7</BButton>
                </BButtonGroup>
                <BButtonGroup>
                  <BButton varinat="secondary">8</BButton>
                </BButtonGroup>
              </BButtonToolbar>
              <BButtonToolbar>
                <BButtonGroup class="me-2">
                  <BButton variant="outline-secondary">1</BButton>
                  <BButton variant="outline-secondary">2</BButton>
                  <BButton variant="outline-secondary">3</BButton>
                  <BButton variant="outline-secondary">4</BButton>
                </BButtonGroup>
                <BButtonGroup class="me-2">
                  <BButton variant="outline-secondary">5</BButton>
                  <BButton variant="outline-secondary">6</BButton>
                  <BButton variant="outline-secondary">7</BButton>
                </BButtonGroup>
                <BButtonGroup>
                  <BButton variant="outline-secondary">8</BButton>
                </BButtonGroup>
              </BButtonToolbar>
            </div>
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
              Instead of applying button sizing classes to every button in a
              group, just add
              <code class="highlighter-rouge">.btn-group-*</code> to each
              <code class="highlighter-rouge">.btn-group</code>, including each
              one when nesting multiple groups.
            </p>
            <div class="d-flex flex-wrap gap-3">
              <BButtonGroup size="lg">
                <BButton variant="primary">Left</BButton>
                <BButton variant="primary">Middle</BButton>
                <BButton variant="primary">Right</BButton>
              </BButtonGroup>
              <BButtonGroup size="lg">
                <BButton variant="outline-primary">
                  Left
                </BButton>
                <BButton variant="outline-primary">
                  Middle
                </BButton>
                <BButton variant="outline-primary">
                  Right
                </BButton>
              </BButtonGroup>
            </div>
            <br />
            <div class="d-flex flex-wrap gap-3">
              <BButtonGroup>
                <BButton variant="secondary">Left</BButton>
                <BButton variant="secondary">Middle</BButton>
                <BButton variant="secondary">Right</BButton>
              </BButtonGroup>
              <BButtonGroup>
                <BButton variant="outline-secondary">
                  Left
                </BButton>
                <BButton variant="outline-secondary">
                  Middle
                </BButton>
                <BButton variant="outline-secondary">
                  Right
                </BButton>
              </BButtonGroup>
            </div>

            <br />
            <div class="d-flex flex-wrap gap-3">
              <BButtonGroup size="sm">
                <BButton variant="danger">Left</BButton>
                <BButton variant="danger">Middle</BButton>
                <BButton variant="danger">Right</BButton>
              </BButtonGroup>
              <BButtonGroup size="sm">
                <BButton variant="outline-danger">
                  Left
                </BButton>
                <BButton variant="outline-danger">
                  Middle
                </BButton>
                <BButton variant="outline-danger">
                  Right
                </BButton>
              </BButtonGroup>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Vertical variation</BCardTitle>
            <p class="card-title-desc">
              Make a set of buttons appear vertically stacked rather than
              horizontally. Split button dropdowns are not supported here.
            </p>
            <div class="d-flex flex-wrap gap-3 align-items-center">
              <BButtonGroup vertical>
                <BButton variant="secondary">Button</BButton>
                <BDropdown variant="secondary">
                  <template v-slot:button-content>
                    Dropdown
                    <i class="mdi mdi-chevron-down"></i>
                  </template>
                  <BDropdownItem>Dropdown Link</BDropdownItem>
                  <BDropdownItem>Dropdown Link</BDropdownItem>
                </BDropdown>
                <BButton variant="secondary">Button</BButton>
                <BButton variant="secondary">Button</BButton>
              </BButtonGroup>

              <BButtonGroup vertical>
                <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio1" autocomplete="off" checked="" />
                <label class="btn btn-outline-danger mb-0" for="vbtn-radio1">Radio 1</label>
                <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio2" autocomplete="off" />
                <label class="btn btn-outline-danger mb-0" for="vbtn-radio2">Radio 2</label>
                <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio3" autocomplete="off" />
                <label class="btn btn-outline-danger mb-0" for="vbtn-radio3">Radio 3</label>
              </BButtonGroup>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>
