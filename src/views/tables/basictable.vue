<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

/**
 * Basic-table component
 */
export default {
  components: { Layout, PageHeader },
};
</script>

<template>
  <Layout>
    <PageHeader title="Basic Tables" pageTitle="Tables" />

    <BRow>
      <BCol xl="6">
        <BCard no-body>
          <BCardBody class="pb-0">
            <BCardTitle>Basic example</BCardTitle>

            <p class="card-title-desc">
              For basic styling—light padding and only horizontal dividers—add
              the base class <code>.table</code> to any
              <code>&lt;table&gt;</code>.
            </p>

            <div class="table-responsive">
              <BTableSimple class="mb-0">
                <BThead>
                  <BTr>
                    <BTh>#</BTh>
                    <BTh>First Name</BTh>
                    <BTh>Last Name</BTh>
                    <BTh>Username</BTh>
                  </BTr>
                </BThead>
                <BTbody>
                  <BTr>
                    <BTh scope="row">1</BTh>
                    <BTd>Mark</BTd>
                    <BTd>Otto</BTd>
                    <BTd>@mdo</BTd>
                  </BTr>
                  <BTr>
                    <BTh scope="row">2</BTh>
                    <BTd>Jacob</BTd>
                    <BTd>Thornton</BTd>
                    <BTd>@fat</BTd>
                  </BTr>
                  <BTr>
                    <BTh scope="row">3</BTh>
                    <BTd>Larry</BTd>
                    <BTd>the Bird</BTd>
                    <BTd>@twitter</BTd>
                  </BTr>
                </BTbody>
              </BTableSimple>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol xl="6">
        <BCard no-body>
          <BCardBody class="pb-0">
            <BCardTitle>Dark table</BCardTitle>

            <p class="card-title-desc">
              You can also invert the colors—with light text on dark
              backgrounds—with <code>.table-dark</code>.
            </p>

            <div class="table-responsive">
              <BTableSimple class="table-dark mb-0">
                <BThead>
                  <BTr>
                    <BTh>#</BTh>
                    <BTh>First Name</BTh>
                    <BTh>Last Name</BTh>
                    <BTh>Username</BTh>
                  </BTr>
                </BThead>
                <BTbody>
                  <BTr>
                    <BTh scope="row">1</BTh>
                    <BTd>Mark</BTd>
                    <BTd>Otto</BTd>
                    <BTd>@mdo</BTd>
                  </BTr>
                  <BTr>
                    <BTh scope="row">2</BTh>
                    <BTd>Jacob</BTd>
                    <BTd>Thornton</BTd>
                    <BTd>@fat</BTd>
                  </BTr>
                  <BTr>
                    <BTh scope="row">3</BTh>
                    <BTd>Larry</BTd>
                    <BTd>the Bird</BTd>
                    <BTd>@twitter</BTd>
                  </BTr>
                </BTbody>
              </BTableSimple>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol xl="6">
        <BCard no-body>
          <BCardBody class="pb-0">
            <BCardTitle>Table head</BCardTitle>

            <p class="card-title-desc">
              Use one of two modifier classes to make
              <code>&lt;thead&gt;</code>s appear light or dark gray.
            </p>

            <div class="table-responsive">
              <BTableSimple class="mb-0">
                <BThead class="table-light">
                  <BTr>
                    <BTh>#</BTh>
                    <BTh>First Name</BTh>
                    <BTh>Last Name</BTh>
                    <BTh>Username</BTh>
                  </BTr>
                </BThead>
                <BTbody>
                  <BTr>
                    <BTh scope="row">1</BTh>
                    <BTd>Mark</BTd>
                    <BTd>Otto</BTd>
                    <BTd>@mdo</BTd>
                  </BTr>
                  <BTr>
                    <BTh scope="row">2</BTh>
                    <BTd>Jacob</BTd>
                    <BTd>Thornton</BTd>
                    <BTd>@fat</BTd>
                  </BTr>
                  <BTr>
                    <BTh scope="row">3</BTh>
                    <BTd>Larry</BTd>
                    <BTd>the Bird</BTd>
                    <BTd>@twitter</BTd>
                  </BTr>
                </BTbody>
              </BTableSimple>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol xl="6">
        <BCard no-body>
          <BCardBody class="pb-0">
            <BCardTitle>Striped rows</BCardTitle>

            <p class="card-title-desc">
              Use <code>.table-striped</code> to add zebra-striping to any table
              row within the <code>&lt;tbody&gt;</code>.
            </p>

            <div class="table-responsive">
              <BTableSimple class="table-striped mb-0">
                <BThead>
                  <BTr>
                    <BTh>#</BTh>
                    <BTh>First Name</BTh>
                    <BTh>Last Name</BTh>
                    <BTh>Username</BTh>
                  </BTr>
                </BThead>
                <BTbody>
                  <BTr>
                    <BTh scope="row">1</BTh>
                    <BTd>Mark</BTd>
                    <BTd>Otto</BTd>
                    <BTd>@mdo</BTd>
                  </BTr>
                  <BTr>
                    <BTh scope="row">2</BTh>
                    <BTd>Jacob</BTd>
                    <BTd>Thornton</BTd>
                    <BTd>@fat</BTd>
                  </BTr>
                  <BTr>
                    <BTh scope="row">3</BTh>
                    <BTd>Larry</BTd>
                    <BTd>the Bird</BTd>
                    <BTd>@twitter</BTd>
                  </BTr>
                </BTbody>
              </BTableSimple>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol xl="6">
        <BCard no-body>
          <BCardBody class="pb-0">
            <BCardTitle>Bordered table</BCardTitle>

            <p class="card-title-desc">
              Add <code>.table-bordered</code> for borders on all sides of the
              table and cells.
            </p>

            <div class="table-responsive">
              <BTableSimple class="table-bordered mb-0">
                <BThead>
                  <BTr>
                    <BTh>#</BTh>
                    <BTh>First Name</BTh>
                    <BTh>Last Name</BTh>
                    <BTh>Username</BTh>
                  </BTr>
                </BThead>
                <BTbody>
                  <BTr>
                    <BTh scope="row">1</BTh>
                    <BTd>Mark</BTd>
                    <BTd>Otto</BTd>
                    <BTd>@mdo</BTd>
                  </BTr>
                  <BTr>
                    <BTh scope="row">2</BTh>
                    <BTd>Jacob</BTd>
                    <BTd>Thornton</BTd>
                    <BTd>@fat</BTd>
                  </BTr>
                  <BTr>
                    <BTh scope="row">3</BTh>
                    <BTd>Larry</BTd>
                    <BTd>the Bird</BTd>
                    <BTd>@twitter</BTd>
                  </BTr>
                </BTbody>
              </BTableSimple>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol xl="6">
        <BCard no-body>
          <BCardBody class="pb-0">
            <BCardTitle>Borderless table</BCardTitle>

            <p class="card-title-desc">
              Add <code>.table-borderless</code> for a table without borders.
            </p>

            <div class="table-responsive">
              <BTableSimple class="table-borderless mb-0">
                <BThead>
                  <BTr>
                    <BTh>#</BTh>
                    <BTh>First Name</BTh>
                    <BTh>Last Name</BTh>
                    <BTh>Username</BTh>
                  </BTr>
                </BThead>
                <BTbody>
                  <BTr>
                    <BTh scope="row">1</BTh>
                    <BTd>Mark</BTd>
                    <BTd>Otto</BTd>
                    <BTd>@mdo</BTd>
                  </BTr>
                  <BTr>
                    <BTh scope="row">2</BTh>
                    <BTd>Jacob</BTd>
                    <BTd>Thornton</BTd>
                    <BTd>@fat</BTd>
                  </BTr>
                  <BTr>
                    <BTh scope="row">3</BTh>
                    <BTd>Larry</BTd>
                    <BTd>the Bird</BTd>
                    <BTd>@twitter</BTd>
                  </BTr>
                </BTbody>
              </BTableSimple>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol xl="6">
        <BCard no-body>
          <BCardBody class="pb-0">
            <BCardTitle>Table Border color</BCardTitle>

            <p class="card-title-desc">
              Add <code>.table-bordered</code> & <code>.border-*</code> for
              colored borders on all sides of the table and cells.
            </p>

            <div class="table-responsive">
              <BTableSimple class="table-bordered border-primary mb-0">
                <BThead>
                  <BTr>
                    <BTh>#</BTh>
                    <BTh>First Name</BTh>
                    <BTh>Last Name</BTh>
                    <BTh>Username</BTh>
                  </BTr>
                </BThead>
                <BTbody>
                  <BTr>
                    <BTh scope="row">1</BTh>
                    <BTd>Mark</BTd>
                    <BTd>Otto</BTd>
                    <BTd>@mdo</BTd>
                  </BTr>
                  <BTr>
                    <BTh scope="row">2</BTh>
                    <BTd>Jacob</BTd>
                    <BTd>Thornton</BTd>
                    <BTd>@fat</BTd>
                  </BTr>
                  <BTr>
                    <BTh scope="row">3</BTh>
                    <BTd>Larry</BTd>
                    <BTd>the Bird</BTd>
                    <BTd>@twitter</BTd>
                  </BTr>
                </BTbody>
              </BTableSimple>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol xl="6">
        <BCard no-body>
          <BCardBody class="pb-0">
            <BCardTitle>Table Border color</BCardTitle>

            <p class="card-title-desc">
              Add <code>.table-bordered</code> & <code>.border-*</code> for
              colored borders on all sides of the table and cells.
            </p>

            <div class="table-responsive">
              <BTableSimple class="table-bordered border-success mb-0">
                <BThead>
                  <BTr>
                    <BTh>#</BTh>
                    <BTh>First Name</BTh>
                    <BTh>Last Name</BTh>
                    <BTh>Username</BTh>
                  </BTr>
                </BThead>
                <BTbody>
                  <BTr>
                    <BTh scope="row">1</BTh>
                    <BTd>Mark</BTd>
                    <BTd>Otto</BTd>
                    <BTd>@mdo</BTd>
                  </BTr>
                  <BTr>
                    <BTh scope="row">2</BTh>
                    <BTd>Jacob</BTd>
                    <BTd>Thornton</BTd>
                    <BTd>@fat</BTd>
                  </BTr>
                  <BTr>
                    <BTh scope="row">3</BTh>
                    <BTd>Larry</BTd>
                    <BTd>the Bird</BTd>
                    <BTd>@twitter</BTd>
                  </BTr>
                </BTbody>
              </BTableSimple>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol xl="6">
        <BCard no-body>
          <BCardBody class="pb-0">
            <div class="table-responsive">
              <BCardTitle>Vertical alignment</BCardTitle>

              <p class="card-title-desc">
                Table cells in <code>&lt;tbody&gt;</code> inherit their
                alignment from <code>&lt;table&gt;</code> and are aligned to the
                the top by default. Use the vertical align classes to re-align
                where needed.
              </p>

              <div class="table-responsive">
                <BTableSimple class="align-middle mb-0">
                  <BThead>
                    <BTr>
                      <BTh>#</BTh>
                      <BTh>First Name</BTh>
                      <BTh>Last Name</BTh>
                      <BTh>Action</BTh>
                    </BTr>
                  </BThead>
                  <BTbody>
                    <BTr>
                      <BTh scope="row">1</BTh>
                      <BTd>Mark</BTd>
                      <BTd>Otto</BTd>
                      <BTd>
                        <BButton variant="light" type="button" class="btn-sm">
                          View
                        </BButton>
                      </BTd>
                    </BTr>
                    <BTr>
                      <BTh scope="row">2</BTh>
                      <BTd>Jacob</BTd>
                      <BTd>Thornton</BTd>
                      <BTd>
                        <BButton variant="light" type="button" class="btn-sm">
                          View
                        </BButton>
                      </BTd>
                    </BTr>
                    <BTr>
                      <BTh scope="row">3</BTh>
                      <BTd>Larry</BTd>
                      <BTd>the Bird</BTd>
                      <BTd>
                        <BButton variant="light" type="button" class="btn-sm">
                          View
                        </BButton>
                      </BTd>
                    </BTr>
                    <BTr>
                      <BTh scope="row">4</BTh>
                      <BTd>Jacob</BTd>
                      <BTd>Thornton</BTd>
                      <BTd>
                        <BButton variant="light" type="button" class="btn-sm">
                          View
                        </BButton>
                      </BTd>
                    </BTr>
                  </BTbody>
                </BTableSimple>
              </div>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol xl="6">
        <BCard no-body>
          <BCardBody class="pb-0">
            <BCardTitle>Nesting</BCardTitle>

            <p class="card-title-desc">
              Border styles, active styles, and table variants are not inherited
              by nested tables.
            </p>

            <div class="table-responsive">
              <BTableSimple class="table-striped table-bordered mb-0">
                <BThead>
                  <BTr>
                    <BTh scope="col">#</BTh>
                    <BTh scope="col">First</BTh>
                    <BTh scope="col">Last</BTh>
                    <BTh scope="col">Handle</BTh>
                  </BTr>
                </BThead>
                <BTbody>
                  <BTr>
                    <BTh scope="row">1</BTh>
                    <BTd>Mark</BTd>
                    <BTd>Otto</BTd>
                    <BTd>@mdo</BTd>
                  </BTr>
                  <BTr>
                    <BTd colspan="4">
                      <BTableSimple class="mb-0">
                        <BThead>
                          <BTr>
                            <BTh scope="col">Header</BTh>
                            <BTh scope="col">Header</BTh>
                            <BTh scope="col">Header</BTh>
                          </BTr>
                        </BThead>
                        <tbody>
                          <BTr>
                            <BTh scope="row">A</BTh>
                            <BTd>First</BTd>
                            <BTd>Last</BTd>
                          </BTr>
                          <BTr>
                            <BTh scope="row">B</BTh>
                            <BTd>First</BTd>
                            <BTd>Last</BTd>
                          </BTr>
                        </tbody>
                      </BTableSimple>
                    </BTd>
                  </BTr>
                  <BTr>
                    <BTh scope="row">3</BTh>
                    <BTd>Jacob</BTd>
                    <BTd>Thornton</BTd>
                    <BTd>@fat</BTd>
                  </BTr>
                </BTbody>
              </BTableSimple>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol xl="6">
        <BCard no-body>
          <BCardBody class="pb-0">
            <BCardTitle>Hoverable rows</BCardTitle>

            <p class="card-title-desc">
              Add <code>.table-hover</code> to enable a hover state on table
              rows within a <code>&lt;tbody&gt;</code>.
            </p>

            <div class="table-responsive">
              <BTableSimple class="table-hover mb-0">
                <BThead>
                  <BTr>
                    <BTh>#</BTh>
                    <BTh>First Name</BTh>
                    <BTh>Last Name</BTh>
                    <BTh>Username</BTh>
                  </BTr>
                </BThead>
                <BTbody>
                  <BTr>
                    <BTh scope="row">1</BTh>
                    <BTd>Mark</BTd>
                    <BTd>Otto</BTd>
                    <BTd>@mdo</BTd>
                  </BTr>
                  <BTr>
                    <BTh scope="row">2</BTh>
                    <BTd>Jacob</BTd>
                    <BTd>Thornton</BTd>
                    <BTd>@fat</BTd>
                  </BTr>
                  <BTr>
                    <BTh scope="row">3</BTh>
                    <BTd>Larry</BTd>
                    <BTd>the Bird</BTd>
                    <BTd>@twitter</BTd>
                  </BTr>
                </BTbody>
              </BTableSimple>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol xl="6">
        <BCard no-body>
          <BCardBody class="pb-0">
            <BCardTitle>Small table</BCardTitle>

            <p class="card-title-desc">
              Add <code>.table-sm</code> to make tables more compact by cutting
              cell padding in half.
            </p>

            <div class="table-responsive">
              <BTableSimple class="table-sm m-0">
                <BThead>
                  <BTr>
                    <BTh>#</BTh>
                    <BTh>First Name</BTh>
                    <BTh>Last Name</BTh>
                    <BTh>Username</BTh>
                  </BTr>
                </BThead>
                <BTbody>
                  <BTr>
                    <BTh scope="row">1</BTh>
                    <BTd>Mark</BTd>
                    <BTd>Otto</BTd>
                    <BTd>@mdo</BTd>
                  </BTr>
                  <BTr>
                    <BTh scope="row">2</BTh>
                    <BTd>Jacob</BTd>
                    <BTd>Thornton</BTd>
                    <BTd>@fat</BTd>
                  </BTr>
                  <BTr>
                    <BTh scope="row">3</BTh>
                    <BTd>Larry</BTd>
                    <BTd>the Bird</BTd>
                    <BTd>@twitter</BTd>
                  </BTr>
                  <BTr>
                    <BTh scope="row">4</BTh>
                    <BTd>Mark</BTd>
                    <BTd>Otto</BTd>
                    <BTd>@mdo</BTd>
                  </BTr>
                  <BTr>
                    <BTh scope="row">5</BTh>
                    <BTd>Jacob</BTd>
                    <BTd>Thornton</BTd>
                    <BTd>@fat</BTd>
                  </BTr>
                </BTbody>
              </BTableSimple>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol xl="6">
        <BCard no-body>
          <BCardBody class="pb-0">
            <BCardTitle>Contextual classes</BCardTitle>

            <p class="card-title-desc">
              Use contextual classes to color table rows or individual cells.
            </p>

            <div class="table-responsive">
              <BTableSimple class="mb-0">
                <BThead>
                  <BTr>
                    <BTh>#</BTh>
                    <BTh>Column heading</BTh>
                    <BTh>Column heading</BTh>
                    <BTh>Column heading</BTh>
                  </BTr>
                </BThead>
                <BTbody>
                  <BTr class="table-light">
                    <BTh scope="row">1</BTh>
                    <BTd>Column content</BTd>
                    <BTd>Column content</BTd>
                    <BTd>Column content</BTd>
                  </BTr>

                  <BTr class="table-success">
                    <BTh scope="row">2</BTh>
                    <BTd>Column content</BTd>
                    <BTd>Column content</BTd>
                    <BTd>Column content</BTd>
                  </BTr>

                  <BTr class="table-info">
                    <BTh scope="row">3</BTh>
                    <BTd>Column content</BTd>
                    <BTd>Column content</BTd>
                    <BTd>Column content</BTd>
                  </BTr>

                  <BTr class="table-warning">
                    <BTh scope="row">4</BTh>
                    <BTd>Column content</BTd>
                    <BTd>Column content</BTd>
                    <BTd>Column content</BTd>
                  </BTr>

                  <BTr class="table-danger">
                    <BTh scope="row">5</BTh>
                    <BTd>Column content</BTd>
                    <BTd>Column content</BTd>
                    <BTd>Column content</BTd>
                  </BTr>
                </BTbody>
              </BTableSimple>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol xl="6">
        <BCard no-body>
          <BCardBody class="pb-0">
            <BCardTitle>Captions</BCardTitle>

            <p class="card-title-desc">
              A <code>&lt;caption&gt;</code> functions like a heading for a
              table. It helps users with screen readers to find a table and
              understand what it’s about and decide if they want to read it.
            </p>

            <div class="table-responsive">
              <BTableSimple class="mb-0">
                <caption>
                  List of users
                </caption>
                <BThead>
                  <BTr>
                    <BTh>#</BTh>
                    <BTh>First Name</BTh>
                    <BTh>Last Name</BTh>
                    <BTh>Username</BTh>
                  </BTr>
                </BThead>
                <BTbody>
                  <BTr>
                    <BTh scope="row">1</BTh>
                    <BTd>Mark</BTd>
                    <BTd>Otto</BTd>
                    <BTd>@mdo</BTd>
                  </BTr>
                  <BTr>
                    <BTh scope="row">2</BTh>
                    <BTd>Jacob</BTd>
                    <BTd>Thornton</BTd>
                    <BTd>@fat</BTd>
                  </BTr>
                  <BTr>
                    <BTh scope="row">3</BTh>
                    <BTd>Larry</BTd>
                    <BTd>the Bird</BTd>
                    <BTd>@twitter</BTd>
                  </BTr>
                </BTbody>
              </BTableSimple>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardBody class="pb-0">
            <BCardTitle>Responsive tables</BCardTitle>

            <p class="card-title-desc">
              Create responsive tables by wrapping any <code>.table</code> in
              <code>.table-responsive</code>
              to make them scroll horizontally on small devices (under 768px).
            </p>

            <div class="table-responsive">
              <BTableSimple class="mb-0">
                <BThead>
                  <BTr>
                    <BTh>#</BTh>
                    <BTh>Table heading</BTh>
                    <BTh>Table heading</BTh>
                    <BTh>Table heading</BTh>
                    <BTh>Table heading</BTh>
                    <BTh>Table heading</BTh>
                    <BTh>Table heading</BTh>
                  </BTr>
                </BThead>
                <BTbody>
                  <BTr>
                    <BTh scope="row">1</BTh>
                    <BTd>Table cell</BTd>
                    <BTd>Table cell</BTd>
                    <BTd>Table cell</BTd>
                    <BTd>Table cell</BTd>
                    <BTd>Table cell</BTd>
                    <BTd>Table cell</BTd>
                  </BTr>
                  <BTr>
                    <BTh scope="row">2</BTh>
                    <BTd>Table cell</BTd>
                    <BTd>Table cell</BTd>
                    <BTd>Table cell</BTd>
                    <BTd>Table cell</BTd>
                    <BTd>Table cell</BTd>
                    <BTd>Table cell</BTd>
                  </BTr>
                  <BTr>
                    <BTh scope="row">3</BTh>
                    <BTd>Table cell</BTd>
                    <BTd>Table cell</BTd>
                    <BTd>Table cell</BTd>
                    <BTd>Table cell</BTd>
                    <BTd>Table cell</BTd>
                    <BTd>Table cell</BTd>
                  </BTr>
                </BTbody>
              </BTableSimple>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>