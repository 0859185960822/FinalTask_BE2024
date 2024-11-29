<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

/**
 * Starter component
 */
export default {
    components: { Layout, PageHeader },
};
</script>
<template>
    <Layout>
        <PageHeader title="Utilities" pageTitle="UI Elements" />

        <BRow>
            <BCol xl="12">
                <BCard no-body>
                    <BCardBody>
                        <BCardTitle>Borders</BCardTitle>
                        <p class="card-title-desc">Use border utilities to add or remove an element’s borders. Choose from
                            all borders or one at a time.</p>

                        <div class="mb-3">
                            <h6 class="mb-3">Border Width</h6>

                            <div class="hstack gap-3">
                                <div class="avatar-md">
                                    <div class="avatar-title bg-transparent border text-center"><code>.border</code></div>
                                </div>
                                <div class="avatar-md">
                                    <div class="avatar-title bg-transparent border border-1 text-center">
                                        <code>.border-1</code>
                                    </div>
                                </div>
                                <div class="avatar-md">
                                    <div class="avatar-title bg-transparent border border-2 text-center">
                                        <code>.border-2</code>
                                    </div>
                                </div>
                                <div class="avatar-md">
                                    <div class="avatar-title bg-transparent border border-3 text-center">
                                        <code>.border-3</code>
                                    </div>
                                </div>
                                <div class="avatar-md">
                                    <div class="avatar-title bg-transparent border border-4 text-center">
                                        <code>.border-4</code>
                                    </div>
                                </div>
                                <div class="avatar-md">
                                    <div class="avatar-title bg-transparent border border-5 text-center">
                                        <code>.border-5</code>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <BRow>
                            <BCol xl="6">
                                <div>
                                    <h6 class="mb-3">Additive</h6>

                                    <div class="hstack gap-3">
                                        <div class="avatar-md">
                                            <div class="avatar-title bg-light border-primary border text-center">
                                                <code>.border</code>
                                            </div>
                                        </div>
                                        <div class="avatar-md">
                                            <div class="avatar-title bg-light border-primary border-top text-center">
                                                <code>.border-top</code>
                                            </div>
                                        </div>
                                        <div class="avatar-md">
                                            <div class="avatar-title bg-light border-primary border-end text-center">
                                                <code>.border-end</code>
                                            </div>
                                        </div>
                                        <div class="avatar-md">
                                            <div class="avatar-title bg-light border-primary border-bottom text-center">
                                                <code>.border-bottom</code>
                                            </div>
                                        </div>
                                        <div class="avatar-md">
                                            <div class="avatar-title bg-light border-primary border-start text-center">
                                                <code>.border-start</code>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </BCol>

                            <BCol xl="6">
                                <div>
                                    <h6 class="mb-3">Subtractive</h6>

                                    <div class="hstack gap-3">
                                        <div class="avatar-md">
                                            <div class="avatar-title bg-light border-primary border-0 text-center">
                                                <code>.border-0</code>
                                            </div>
                                        </div>
                                        <div class="avatar-md">
                                            <div class="avatar-title bg-light border-primary border border-top-0 text-center">
                                                <code>.border-top-0</code>
                                            </div>
                                        </div>
                                        <div class="avatar-md">
                                            <div class="avatar-title bg-light border-primary border border-end-0 text-center">
                                                <code>.border-end-0</code>
                                            </div>
                                        </div>
                                        <div class="avatar-md">
                                            <div class="avatar-title bg-light border-primary border border-bottom-0 text-center">
                                                <code>.border-bottom-0</code>
                                            </div>
                                        </div>
                                        <div class="avatar-md">
                                            <div class="avatar-title bg-light border-primary border border-start-0 text-center">
                                                <code>.border-start-0</code>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </BCol>

                        </BRow>

                        <div class="mt-4">
                            <h6 class="mb-3">Border Color</h6>

                            <div class="hstack gap-3">
                                <div class="avatar-md">
                                    <div class="avatar-title bg-transparent border border-primary text-center">
                                        <code>.border-primary</code>
                                    </div>
                                </div>
                                <div class="avatar-md">
                                    <div class="avatar-title bg-transparent border border-secondary text-center">
                                        <code>.border-secondary</code>
                                    </div>
                                </div>
                                <div class="avatar-md">
                                    <div class="avatar-title bg-transparent border border-success text-center">
                                        <code>.border-success</code>
                                    </div>
                                </div>
                                <div class="avatar-md">
                                    <div class="avatar-title bg-transparent border border-danger text-center">
                                        <code>.border-danger</code>
                                    </div>
                                </div>
                                <div class="avatar-md">
                                    <div class="avatar-title bg-transparent border border-info text-center">
                                        <code>.border-info</code>
                                    </div>
                                </div>
                                <div class="avatar-md">
                                    <div class="avatar-title bg-transparent border border-warning text-center">
                                        <code>.border-warning</code>
                                    </div>
                                </div>
                                <div class="avatar-md">
                                    <div class="avatar-title bg-transparent border border-dark text-center">
                                        <code>.border-dark</code>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mt-4">
                            <h6 class="mb-3">Border Opacity</h6>

                            <div class="hstack gap-4">
                                <div class="text-center">
                                    <div class="avatar-md mx-auto mb-1">
                                        <div class="avatar-title bg-transparent border border-primary text-center"></div>
                                    </div>
                                    <code>default</code>
                                </div>
                                <div class="text-center">
                                    <div class="avatar-md mx-auto mb-1">
                                        <div class="avatar-title bg-transparent border border-primary border-opacity-75 text-center">
                                        </div>
                                    </div>
                                    <code>.border-opacity-75</code>
                                </div>
                                <div class="text-center">
                                    <div class="avatar-md mx-auto mb-1">
                                        <div class="avatar-title bg-transparent border border-primary border-opacity-50 text-center">
                                        </div>
                                    </div>
                                    <code>.border-opacity-50</code>
                                </div>
                                <div class="text-center">
                                    <div class="avatar-md mx-auto mb-1">
                                        <div class="avatar-title bg-transparent border border-primary border-opacity-25 text-center">
                                        </div>
                                    </div>
                                    <code>.border-opacity-25</code>
                                </div>
                                <div class="text-center">
                                    <div class="avatar-md mx-auto mb-1">
                                        <div class="avatar-title bg-transparent border border-primary border-opacity-10 text-center">
                                        </div>
                                    </div>
                                    <code>.border-opacity-10</code>
                                </div>
                            </div>
                        </div>

                        <div class="mt-4">
                            <h6 class="mb-3">Border Radius</h6>

                            <div class="hstack gap-4">
                                <div class="text-center">
                                    <img src="@/assets/images/users/avatar-5.jpg" alt="" class="avatar-md rounded d-block mx-auto">
                                    <code>.rounded</code>
                                </div>
                                <div class="text-center">
                                    <img src="@/assets/images/users/avatar-5.jpg" alt="" class="avatar-md rounded-top d-block mx-auto">
                                    <code>.rounded-top</code>
                                </div>
                                <div class="text-center">
                                    <img src="@/assets/images/users/avatar-5.jpg" alt="" class="avatar-md rounded-end d-block mx-auto">
                                    <code>.rounded-end</code>
                                </div>
                                <div class="text-center">
                                    <img src="@/assets/images/users/avatar-5.jpg" alt="" class="avatar-md rounded-bottom d-block mx-auto">
                                    <code>.rounded-bottom</code>
                                </div>
                                <div class="text-center">
                                    <img src="@/assets/images/users/avatar-5.jpg" alt="" class="avatar-md rounded-start d-block mx-auto">
                                    <code>.rounded-start</code>
                                </div>
                                <div class="text-center">
                                    <img src="@/assets/images/users/avatar-5.jpg" alt="" class="avatar-md rounded-circle d-block mx-auto">
                                    <code>.rounded-circle</code>
                                </div>
                                <div class="text-center">
                                    <img src="@/assets/images/small/img-3.jpg" alt="" height="72" class="rounded-pill d-block mx-auto">
                                    <code>.rounded-pill</code>
                                </div>
                            </div>

                            <div class="mt-4">
                                <h6 class="mb-3">Border Radius Sizes</h6>
                                <div class="hstack gap-4">
                                    <div class="text-center">
                                        <img src="@/assets/images/users/avatar-2.jpg" alt="" class="avatar-md rounded-0 d-block mx-auto">
                                        <code>.rounded-0</code>
                                    </div>
                                    <div class="text-center">
                                        <img src="@/assets/images/users/avatar-2.jpg" alt="" class="avatar-md rounded-1 d-block mx-auto">
                                        <code>.rounded-1</code>
                                    </div>
                                    <div class="text-center">
                                        <img src="@/assets/images/users/avatar-2.jpg" alt="" class="avatar-md rounded-2 d-block mx-auto">
                                        <code>.rounded-2</code>
                                    </div>
                                    <div class="text-center">
                                        <img src="@/assets/images/users/avatar-2.jpg" alt="" class="avatar-md rounded-3 d-block mx-auto">
                                        <code>.rounded-3</code>
                                    </div>
                                    <div class="text-center">
                                        <img src="@/assets/images/users/avatar-2.jpg" alt="" class="avatar-md rounded-4 d-block mx-auto">
                                        <code>.rounded-4</code>
                                    </div>
                                    <div class="text-center">
                                        <img src="@/assets/images/users/avatar-2.jpg" alt="" class="avatar-md rounded-5 d-block mx-auto">
                                        <code>.rounded-5</code>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xl="6">
                <BCard no-body>
                    <BCardBody>
                        <BCardTitle>Stacks - Vertical</BCardTitle>
                        <p class="card-title-desc">Use <code>.vstack</code> to create vertical layouts. Stacked items are
                            full-width by default. Use <code>.gap-*</code> utilities to add space between items.</p>

                        <div class="vstack gap-3 mb-4">
                            <div class="bg-light border">First item</div>
                            <div class="bg-light border">Second item</div>
                            <div class="bg-light border">Third item</div>
                        </div>

                        <h6 class="mb-3">Vertical Stacks Example</h6>
                        <div class="vstack gap-2 col-md-5 mx-auto">
                            <BButton variant="primary">Save changes</BButton>
                            <BButton variant="outline-danger">Cancel</BButton>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>

            <BCol xl="6">
                <BCard no-body>
                    <BCardBody>
                        <BCardTitle>Stacks - Horizontal</BCardTitle>
                        <p class="card-title-desc">Use <code>.vstack</code> to create vertical layouts. Stacked items are
                            full-width by default. Use <code>.gap-*</code> utilities to add space between items.</p>

                        <div class="hstack gap-3 mb-4">
                            <div class="bg-light border">First item</div>
                            <div class="bg-light border">Second item</div>
                            <div class="bg-light border">Third item</div>
                        </div>

                        <p class="card-title-desc">Using horizontal margin utilities like ms-auto as spacers:</p>
                        <div class="hstack gap-3 mb-4">
                            <div class="bg-light border">First item</div>
                            <div class="bg-light border ms-auto">Second item</div>
                            <div class="vr"></div>
                            <div class="bg-light border">Third item</div>
                        </div>

                        <h6 class="mb-3">Horizontal Stacks Examples</h6>
                        <div class="hstack gap-3">
                            <input class="form-control me-auto" type="text" placeholder="Add your item here..." aria-label="Add your item here...">
                            <BButton variant="secondary">Submit</BButton>
                            <div class="vr"></div>
                            <BButton variant="outline-danger">Reset</BButton>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardBody>
                        <BCardTitle>Shadows</BCardTitle>
                        <p class="card-title-desc">While shadows on components are disabled by default in Bootstrap and can
                            be enabled via <code>$enable-shadows</code>, you can also quickly add or remove a shadow with
                            our <code>box-shadow</code> utility classes. Includes support for <code>.shadow-none</code> and
                            three default sizes (which have associated variables to match).</p>

                        <div class="vstack gap-5">
                            <div class="shadow-none p-3 bg-light rounded">No shadow <code>.shadow-none</code></div>
                            <div class="shadow-sm p-3 bg-body rounded">Small shadow <code>shadow-sm</code></div>
                            <div class="shadow p-3 bg-white rounded">Regular shadow <code>shadow</code></div>
                            <div class="shadow-lg p-3 bg-body rounded">Larger shadow <code>shadow-lg</code></div>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

    </Layout>
</template>