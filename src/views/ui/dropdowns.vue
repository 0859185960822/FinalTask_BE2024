<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

/**
 * Dropdowns component
 */
export default {
    components: {
        Layout,
        PageHeader,
    },
};
</script>

<template>
    <Layout>

        <PageHeader title="Dropdowns" pageTitle="UI Elements" />



        <BRow>

            <BCol lg="6">

                <BCard no-body>

                    <BCardBody>

                        <BCardTitle>Single button dropdowns</BCardTitle>

                        <p class="card-title-desc">

                            Any single

                            <code class="highlighter-rouge">.btn</code> can be turned into a dropdown toggle with some markup changes. Here’s how you can put them to work with either

                            <code class="highlighter-rouge">&lt;button&gt;</code> elements:

                        </p>



                        <BRow>

                            <BCol sm="6">

                                <BDropdown>

                                    <template v-slot:button-content>

                                        Dropdown button

                                        <i class="mdi mdi-chevron-down"></i>
                                    </template>
                                    <BDropdownItem>Action</BDropdownItem>
                                    <BDropdownItem>Another Action</BDropdownItem>
                                    <BDropdownItem>Something else here</BDropdownItem>
                                </BDropdown>
                            </BCol>
                        </BRow>
                    </BCardBody>
                </BCard>
            </BCol>

            <BCol lg="6">
                <BCard no-body>
                    <BCardBody>
                        <BCardTitle>Variant</BCardTitle>
                        <p class="card-title-desc mb-3">
                            The best part is you can do this with any button variant, too:
                        </p>

                        <div>
                            <BButtonGroup class="me-2 mt-2">
                                <BDropdown variant="primary">
                                    <template v-slot:button-content>
                                        Primary

                                        <i class="mdi mdi-chevron-down"></i>
                                    </template>
                                    <BDropdownItem href="javascript: void(0);">Action</BDropdownItem>
                                    <BDropdownItem href="javascript: void(0);">Another action</BDropdownItem>
                                    <BDropdownItem href="javascript: void(0);">Something else here</BDropdownItem>
                                    <BDropdownDivider></BDropdownDivider>
                                    <BDropdownItem href="javascript: void(0);">Separated link</BDropdownItem>
                                </BDropdown>
                            </BButtonGroup>

                            <BButtonGroup class="me-2 mt-2">
                                <BDropdown variant="secondary">
                                    <template v-slot:button-content>
                                        Secondary

                                        <i class="mdi mdi-chevron-down"></i>
                                    </template>
                                    <BDropdownItem href="javascript: void(0);">Action</BDropdownItem>
                                    <BDropdownItem href="javascript: void(0);">Another action</BDropdownItem>
                                    <BDropdownItem href="javascript: void(0);">Something else here</BDropdownItem>
                                    <BDropdownDivider></BDropdownDivider>
                                    <BDropdownItem href="javascript: void(0);">Separated link</BDropdownItem>
                                </BDropdown>
                            </BButtonGroup>

                            <BButtonGroup class="me-2 mt-2">
                                <BDropdown variant="success">
                                    <template v-slot:button-content>
                                        Success

                                        <i class="mdi mdi-chevron-down"></i>
                                    </template>
                                    <BDropdownItem href="javascript: void(0);">Action</BDropdownItem>
                                    <BDropdownItem href="javascript: void(0);">Another action</BDropdownItem>
                                    <BDropdownItem href="javascript: void(0);">Something else here</BDropdownItem>
                                    <BDropdownDivider></BDropdownDivider>
                                    <BDropdownItem href="javascript: void(0);">Separated link</BDropdownItem>
                                </BDropdown>
                            </BButtonGroup>

                            <BButtonGroup class="me-2 mt-2">
                                <BDropdown variant="info">
                                    <template v-slot:button-content>
                                        Info

                                        <i class="mdi mdi-chevron-down"></i>
                                    </template>
                                    <BDropdownItem href="javascript: void(0);">Action</BDropdownItem>
                                    <BDropdownItem href="javascript: void(0);">Another action</BDropdownItem>
                                    <BDropdownItem href="javascript: void(0);">Something else here</BDropdownItem>
                                    <BDropdownDivider></BDropdownDivider>
                                    <BDropdownItem href="javascript: void(0);">Separated link</BDropdownItem>
                                </BDropdown>
                            </BButtonGroup>

                            <BButtonGroup class="me-2 mt-2">
                                <BDropdown variant="warning">
                                    <template v-slot:button-content>
                                        Warning

                                        <i class="mdi mdi-chevron-down"></i>
                                    </template>
                                    <BDropdownItem href="javascript: void(0);">Action</BDropdownItem>
                                    <BDropdownItem href="javascript: void(0);">Another action</BDropdownItem>
                                    <BDropdownItem href="javascript: void(0);">Something else here</BDropdownItem>
                                    <BDropdownDivider></BDropdownDivider>
                                    <BDropdownItem href="javascript: void(0);">Separated link</BDropdownItem>
                                </BDropdown>
                            </BButtonGroup>

                            <BButtonGroup class="me-2 mt-2">
                                <BDropdown variant="danger">
                                    <template v-slot:button-content>
                                        Danger

                                        <i class="mdi mdi-chevron-down"></i>
                                    </template>
                                    <BDropdownItem href="javascript: void(0);">Action</BDropdownItem>
                                    <BDropdownItem href="javascript: void(0);">Another action</BDropdownItem>
                                    <BDropdownItem href="javascript: void(0);">Something else here</BDropdownItem>
                                    <BDropdownDivider></BDropdownDivider>
                                    <BDropdownItem href="javascript: void(0);">Separated link</BDropdownItem>
                                </BDropdown>
                            </BButtonGroup>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="6">
                <BCard no-body>
                    <BCardBody>
                        <BCardTitle>Split button dropdowns</BCardTitle>
                        <p class="card-title-desc mb-3">
                            The best part is you can do this with any button variant, too:
                        </p>
                        <BDropdown split text="Primary" class="m-2" variant="primary">
                            <BDropdownItem href="#">Action</BDropdownItem>
                            <BDropdownItem href="#">Another action</BDropdownItem>
                            <BDropdownItem href="#">Something else here...</BDropdownItem>
                            <BDropdownDivider></BDropdownDivider>
                            <BDropdownItem href="javascript: void(0);">Separated link</BDropdownItem>

                        </BDropdown>
                        <BDropdown split text="Secondary" class="m-2" variant="secondary">
                            <BDropdownItem href="#">Action</BDropdownItem>
                            <BDropdownItem href="#">Another action</BDropdownItem>
                            <BDropdownItem href="#">Something else here...</BDropdownItem>
                            <BDropdownDivider></BDropdownDivider>
                            <BDropdownItem href="javascript: void(0);">Separated link</BDropdownItem>

                        </BDropdown>
                        <BDropdown split text="Success" class="m-2" variant="success">
                            <BDropdownItem href="#">Action</BDropdownItem>
                            <BDropdownItem href="#">Another action</BDropdownItem>
                            <BDropdownItem href="#">Something else here...</BDropdownItem>
                            <BDropdownDivider></BDropdownDivider>
                            <BDropdownItem href="javascript: void(0);">Separated link</BDropdownItem>

                        </BDropdown>
                        <BDropdown split text="Info" class="m-2" variant="info">
                            <BDropdownItem href="#">Action</BDropdownItem>
                            <BDropdownItem href="#">Another action</BDropdownItem>
                            <BDropdownItem href="#">Something else here...</BDropdownItem>
                            <BDropdownDivider></BDropdownDivider>
                            <BDropdownItem href="javascript: void(0);">Separated link</BDropdownItem>

                        </BDropdown>
                        <BDropdown split text="Warning" class="m-2" variant="warning">
                            <BDropdownItem href="#">Action</BDropdownItem>
                            <BDropdownItem href="#">Another action</BDropdownItem>
                            <BDropdownItem href="#">Something else here...</BDropdownItem>
                            <BDropdownDivider></BDropdownDivider>
                            <BDropdownItem href="javascript: void(0);">Separated link</BDropdownItem>

                        </BDropdown>
                        <BDropdown split text="Danger" class="m-2" variant="danger">
                            <BDropdownItem href="#">Action</BDropdownItem>
                            <BDropdownItem href="#">Another action</BDropdownItem>
                            <BDropdownItem href="#">Something else here...</BDropdownItem>
                            <BDropdownDivider></BDropdownDivider>
                            <BDropdownItem href="javascript: void(0);">Separated link</BDropdownItem>

                        </BDropdown>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol lg="6">
                <BCard no-body>
                    <BCardBody>
                        <BCardTitle>Sizing</BCardTitle>
                        <p class="card-title-desc mb-3">
                            Button dropdowns work with buttons of all sizes, including default
                            and split dropdown buttons.
                        </p>

                        <div>
                            <div class="me-1 mt-2">
                                <BDropdown size="lg" class="m-2" variant="primary">
                                    <template v-slot:button-content>
                                        Large button

                                        <i class="mdi mdi-chevron-down"></i>
                                    </template>
                                    <BDropdownItemButton>Action</BDropdownItemButton>
                                    <BDropdownItemButton>Another action</BDropdownItemButton>
                                    <BDropdownItemButton>Something else here</BDropdownItemButton>
                                    <BDropdownDivider></BDropdownDivider>
                                    <BDropdownItem href="javascript: void(0);">Separated link</BDropdownItem>

                                </BDropdown>

                                <BDropdown size="lg" class="m-2" split text="Large button">
                                    <BDropdownItemButton>Action</BDropdownItemButton>
                                    <BDropdownItemButton>Another action</BDropdownItemButton>
                                    <BDropdownItemButton>Something else here</BDropdownItemButton>
                                    <BDropdownDivider></BDropdownDivider>
                                    <BDropdownItem href="javascript: void(0);">Separated link</BDropdownItem>

                                </BDropdown>

                                <BDropdown size="sm" class="m-2" variant="info">
                                    <template v-slot:button-content>
                                        Small button

                                        <i class="mdi mdi-chevron-down"></i>
                                    </template>
                                    <BDropdownItemButton>Action</BDropdownItemButton>
                                    <BDropdownItemButton>Another action</BDropdownItemButton>
                                    <BDropdownItemButton>Something else here</BDropdownItemButton>
                                    <BDropdownDivider></BDropdownDivider>
                                    <BDropdownItem href="javascript: void(0);">Separated link</BDropdownItem>

                                </BDropdown>

                                <BDropdown split text="Small Split button" size="sm" class="m-2">
                                    <BDropdownItemButton>Action</BDropdownItemButton>
                                    <BDropdownItemButton>Another action</BDropdownItemButton>
                                    <BDropdownItemButton>Something else here</BDropdownItemButton>
                                    <BDropdownDivider></BDropdownDivider>
                                    <BDropdownItem href="javascript: void(0);">Separated link</BDropdownItem>

                                </BDropdown>
                            </div>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="6">
                <BCard no-body>
                    <BCardBody>
                        <BCardTitle>Menu alignment</BCardTitle>
                        <p class="card-title-desc">
                            Add <code class="highlighter-rouge">.dropdown-menu-right</code> to
                            a <code class="highlighter-rouge">.dropdown-menu</code> to right
                            align the dropdown menu.
                        </p>

                        <BDropdown id="dropdown-dropright" right>
                            <template v-slot:button-content>
                                Menu is right-aligned

                                <i class="mdi mdi-chevron-down"></i>
                            </template>
                            <BDropdownItem href="#">Action</BDropdownItem>
                            <BDropdownItem href="#">Another action</BDropdownItem>
                            <BDropdownItem href="#">Something else here</BDropdownItem>
                        </BDropdown>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol lg="6">
                <BCard no-body>
                    <BCardBody>
                        <BCardTitle>Dropright variation</BCardTitle>
                        <p class="card-title-desc mb-3">
                            Trigger dropdown menus at the right of the elements by adding
                            <code>dropright</code> to the parent element.
                        </p>

                        <div class="dropdown mt-1">
                            <BDropdown dropright variant="info" class="m-2">
                                <template v-slot:button-content>
                                    Dropright

                                    <i class="mdi mdi-chevron-right"></i>
                                </template>
                                <BDropdownItemButton>Action</BDropdownItemButton>
                                <BDropdownItemButton>Another action</BDropdownItemButton>
                                <BDropdownItemButton>Another action</BDropdownItemButton>
                            </BDropdown>

                            <BDropdown split text="Split dropright" dropright variant="info" class="m-2">
                                <BDropdownItemButton>Action</BDropdownItemButton>
                                <BDropdownItemButton>Another action</BDropdownItemButton>
                                <BDropdownItemButton>Something else here</BDropdownItemButton>
                            </BDropdown>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>

            <BCol lg="6">
                <BCard no-body>
                    <BCardBody>
                        <BCardTitle>Dropleft variation</BCardTitle>
                        <p class="card-title-desc mb-3">
                            Trigger dropdown menus at the right of the elements by adding
                            <code>dropleft</code> to the parent element.
                        </p>
                        <BDropdown dropleft variant="info" class="m-2">
                            <template v-slot:button-content>
                                <i class="mdi mdi-chevron-left"></i>

                                Dropleft
                            </template>
                            <BDropdownItemButton>Action</BDropdownItemButton>
                            <BDropdownItemButton>Another action</BDropdownItemButton>
                            <BDropdownItemButton>Something else here</BDropdownItemButton>
                        </BDropdown>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>
