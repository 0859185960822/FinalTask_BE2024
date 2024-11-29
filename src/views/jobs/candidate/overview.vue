<script>
import Layout from "../../../layouts/main";

/**
 * Starter component
 */
export default {
    components: { Layout },
    data() {
        return {

        };
    }
};
</script>
<template>
    <Layout>
        <BRow>
            <BCol lg="12">
                <BCard no-body class="mx-n4 mt-n4 bg-info-subtle">
                    <BCardBody>
                        <div class="text-center mb-4">
                            <img src="@/assets/images/users/avatar-6.jpg" alt="" class="avatar-md rounded-circle mx-auto d-block" />
                            <h5 class="mt-3 mb-1">Steven Franklin</h5>
                            <p class="text-muted mb-3">UI/UX Designer</p>
                            <div class="mx-auto">
                                <BBadge class="text-bg-info me-1">Freelance</BBadge>
                                <BBadge class="text-bg-success me-1">Active</BBadge>
                                <BBadge class="text-bg-warning me-1">Adobe XD</BBadge>
                                <BBadge class="text-bg-warning me-1">Figma</BBadge>
                                <BBadge class="text-bg-warning">Sketch</BBadge>
                            </div>
                        </div>
                        <div class="d-flex align-items-center">
                            <ul class="list-unstyled hstack gap-3 mb-0 flex-grow-1">
                                <li>
                                    <i class="bx bx-map align-middle"></i> California
                                </li>
                                <li>
                                    <i class="bx bx-money align-middle"></i> $87 / hrs
                                </li>
                                <li>
                                    <i class="bx bx-time align-middle"></i> 5 days working
                                </li>
                            </ul>
                            <div class="hstack gap-2">
                                <BButton variant="primary" type="button">Download CV <i class='bx bx-download align-baseline ms-1'></i></BButton>
                                <BButton variant="light" type="button"><i class='bx bx-bookmark align-baseline'></i></BButton>
                            </div>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="3">
                <BCard no-body>
                    <BCardBody>
                        <ul class="list-unstyled vstack gap-3 mb-0">
                            <li>
                                <div class="d-flex">
                                    <i class='bx bx-calendar font-size-18 text-primary'></i>
                                    <div class="ms-3">
                                        <h6 class="mb-1 fw-semibold">Experience:</h6>
                                        <span class="text-muted">2+ Years</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex">
                                    <i class='bx bx-money font-size-18 text-primary'></i>
                                    <div class="ms-3">
                                        <h6 class="mb-1 fw-semibold">Current Salary:</h6>
                                        <span class="text-muted">$ 3451</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex">
                                    <i class='bx bx-money font-size-18 text-primary'></i>
                                    <div class="ms-3">
                                        <h6 class="mb-1 fw-semibold">Expected Salary:</h6>
                                        <span class="text-muted">$ 4000+</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex">
                                    <i class='bx bx-user font-size-18 text-primary'></i>
                                    <div class="ms-3">
                                        <h6 class="mb-1 fw-semibold">Gender:</h6>
                                        Male
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex">
                                    <i class='mdi mdi-book-education font-size-18 text-primary'></i>
                                    <div class="ms-3">
                                        <h6 class="mb-1 fw-semibold">Qualification:</h6>
                                        <span class="text-muted">Master Degree</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex">
                                    <i class='mdi mdi-google-translate font-size-18 text-primary'></i>
                                    <div class="ms-3">
                                        <h6 class="mb-1 fw-semibold">Languages:</h6>
                                        <span class="text-muted">English, France</span>
                                    </div>
                                </div>
                            </li>
                            <li class="hstack gap-2 mt-3">
                                <BLink href="#!" class="btn btn-soft-primary w-100">Hire Now</BLink>
                                <BLink href="#!" class="btn btn-soft-danger w-100">Contact Us</BLink>
                            </li>
                        </ul>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol lg="9">
                <BCard no-body>
                    <BCardBody>
                        <h5 class="mb-3">About Us</h5>
                        <p class="text-muted">Very well thought out and articulate communication. Clear milestones, deadlines and fast work. Patience. Infinite patience. No shortcuts. Even if the client is being careless. Some quick example text to build on the card title and bulk the card's content Moltin gives you platform.</p>
                        <p class="text-muted mb-4">As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience lies in successfully conceptualizing, designing, and modifying consumer products specific to interior design and home furnishings.</p>

                        <h5 class="mb-3">Education</h5>
                        <ul class="verti-timeline list-unstyled">
                            <li class="event-list">
                                <div class="event-timeline-dot">
                                    <i class="bx bx-right-arrow-circle"></i>
                                </div>
                                <div class="d-flex">
                                    <div class="flex-grow-1">
                                        <div>
                                            <h6 class="font-size-14 mb-1">BCA - Bachelor of Computer Applications</h6>
                                            <p class="text-muted">International University - (2004-2010)</p>

                                            <p class="text-muted mb-0">There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.</p>

                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="event-list">
                                <div class="event-timeline-dot">
                                    <i class="bx bx-right-arrow-circle"></i>
                                </div>
                                <div class="d-flex">
                                    <div class="flex-grow-1">
                                        <div>
                                            <h6 class="font-size-14 mb-1">MCA - Master of Computer Application</h6>
                                            <p class="text-muted">International University - (2010-2012)</p>

                                            <p class="text-muted mb-0">There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="event-list">
                                <div class="event-timeline-dot">
                                    <i class="bx bx-right-arrow-circle"></i>
                                </div>
                                <div class="d-flex">
                                    <div class="flex-grow-1">
                                        <div>
                                            <h6 class="font-size-14 mb-1">Design Communication Visual</h6>
                                            <p class="text-muted">International University - (2012-2015)</p>

                                            <p class="text-muted mb-0">There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </BCardBody>
                </BCard>

                <BRow>
                    <BCol lg="12">
                        <h5 class="mb-3">Projects</h5>
                    </BCol>
                    <BCol xl="4">
                        <BCard no-body>
                            <BCardBody>
                                <div class="d-flex">
                                    <div class="flex-shrink-0 me-4">
                                        <div class="avatar-md">
                                            <span class="avatar-title rounded-circle bg-light text-danger font-size-16">
                                                <img src="@/assets/images/companies/img-1.png" alt="" height="30">
                                            </span>
                                        </div>
                                    </div>


                                    <div class="flex-grow-1 overflow-hidden">
                                        <h5 class="text-truncate font-size-15"><BLink href="javascript: void(0);" class="text-dark">New admin Design</BLink></h5>
                                        <p class="text-muted mb-4">It will be as simple as Occidental</p>
                                        <div class="avatar-group">
                                            <div class="avatar-group-item">
                                                <BLink href="javascript: void(0);" class="d-inline-block">
                                                    <img src="@/assets/images/users/avatar-4.jpg" alt="" class="rounded-circle avatar-xs">
                                                </BLink>
                                            </div>
                                            <div class="avatar-group-item">
                                                <BLink href="javascript: void(0);" class="d-inline-block">
                                                    <img src="@/assets/images/users/avatar-5.jpg" alt="" class="rounded-circle avatar-xs">
                                                </BLink>
                                            </div>
                                            <div class="avatar-group-item">
                                                <BLink href="javascript: void(0);" class="d-inline-block">
                                                    <div class="avatar-xs">
                                                        <span class="avatar-title rounded-circle bg-success text-white font-size-16">
                                                            A
                                                        </span>
                                                    </div>
                                                </BLink>
                                            </div>
                                            <div class="avatar-group-item">
                                                <BLink href="javascript: void(0);" class="d-inline-block">
                                                    <img src="@/assets/images/users/avatar-2.jpg" alt="" class="rounded-circle avatar-xs">
                                                </BLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </BCardBody>
                            <div class="px-4 py-3 border-top">
                                <ul class="list-inline mb-0">
                                    <li class="list-inline-item me-3">
                                        <BBadge class="bg-success">Completed</BBadge>
                                    </li>
                                    <li class="list-inline-item me-3">
                                        <i class="bx bx-calendar me-1"></i> 15 Oct, 22
                                    </li>
                                    <li class="list-inline-item me-3">
                                        <i class="bx bx-comment-dots me-1"></i> 214
                                    </li>
                                </ul>
                            </div>
                        </BCard>
                    </BCol>
                    <BCol xl="4">
                        <BCard no-body>
                            <BCardBody>
                                <div class="d-flex">
                                    <div class="flex-shrink-0 me-4">
                                        <div class="avatar-md">
                                            <span class="avatar-title rounded-circle bg-light text-danger font-size-16">
                                                <img src="@/assets/images/companies/img-4.png" alt="" height="30">
                                            </span>
                                        </div>
                                    </div>

                                    <div class="flex-grow-1 overflow-hidden">
                                        <h5 class="text-truncate font-size-15"><BLink href="javascript: void(0);" class="text-dark">App Landing UI</BLink></h5>
                                        <p class="text-muted mb-4">To achieve it would be necessary</p>
                                        <div class="avatar-group">
                                            <div class="avatar-group-item">
                                                <BLink href="javascript: void(0);" class="d-inline-block">
                                                    <div class="avatar-xs">
                                                        <span class="avatar-title rounded-circle bg-pink text-white font-size-16">
                                                            L
                                                        </span>
                                                    </div>
                                                </BLink>
                                            </div>
                                            <div class="avatar-group-item">
                                                <BLink href="javascript: void(0);" class="d-inline-block">
                                                    <img src="@/assets/images/users/avatar-2.jpg" alt="" class="rounded-circle avatar-xs">
                                                </BLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </BCardBody>
                            <div class="px-4 py-3 border-top">
                                <ul class="list-inline mb-0">
                                    <li class="list-inline-item me-3">
                                        <BBadge class="bg-success">Completed</BBadge>
                                    </li>
                                    <li class="list-inline-item me-3">
                                        <i class="bx bx-calendar me-1"></i> 11 Oct, 22
                                    </li>
                                    <li class="list-inline-item me-3">
                                        <i class="bx bx-comment-dots me-1"></i> 185
                                    </li>
                                </ul>
                            </div>
                        </BCard>
                    </BCol>
                    <BCol xl="4">
                        <BCard no-body>
                            <BCardBody>
                                <div class="d-flex">
                                    <div class="flex-shrink-0 me-4">
                                        <div class="avatar-md">
                                            <span class="avatar-title rounded-circle bg-light text-danger font-size-16">
                                                <img src="@/assets/images/companies/img-5.png" alt="" height="30">
                                            </span>
                                        </div>
                                    </div>

                                    <div class="flex-grow-1 overflow-hidden">
                                        <h5 class="text-truncate font-size-15"><BLink href="javascript: void(0);" class="text-dark">Skote Dashboard UI</BLink></h5>
                                        <p class="text-muted mb-4">Separate existence is a myth</p>
                                        <div class="avatar-group">
                                            <div class="avatar-group-item">
                                                <BLink href="javascript: void(0);" class="d-inline-block">
                                                    <img src="@/assets/images/users/avatar-1.jpg" alt="" class="rounded-circle avatar-xs">
                                                </BLink>
                                            </div>
                                            <div class="avatar-group-item">
                                                <BLink href="javascript: void(0);" class="d-inline-block">
                                                    <img src="@/assets/images/users/avatar-3.jpg" alt="" class="rounded-circle avatar-xs">
                                                </BLink>
                                            </div>
                                            <div class="avatar-group-item">
                                                <BLink href="javascript: void(0);" class="d-inline-block">
                                                    <div class="avatar-xs">
                                                        <span class="avatar-title rounded-circle bg-danger text-white font-size-16">
                                                            3+
                                                        </span>
                                                    </div>
                                                </BLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </BCardBody>
                            <div class="px-4 py-3 border-top">
                                <ul class="list-inline mb-0">
                                    <li class="list-inline-item me-3">
                                        <BBadge class="bg-success">Completed</BBadge>
                                    </li>
                                    <li class="list-inline-item me-3">
                                        <i class="bx bx-calendar me-1"></i> 13 Oct, 22
                                    </li>
                                    <li class="list-inline-item me-3">
                                        <i class="bx bx-comment-dots me-1"></i> 194
                                    </li>
                                </ul>
                            </div>
                        </BCard>
                    </BCol>
                </BRow>

                <BRow>
                    <BCol lg="12">
                        <BCard no-body>
                            <BCardBody class="border-bottom">
                                <h5 class="mb-3">Social Media</h5>
                                <div class="hstack gap-2">
                                    <BLink href="#!" class="btn btn-soft-primary"><i class="bx bxl-facebook align-middle me-1"></i> Facebook </BLink>
                                    <BLink href="#!" class="btn btn-soft-info"><i class="bx bxl-twitter align-middle me-1"></i> Twitter</BLink>
                                    <BLink href="#!" class="btn btn-soft-pink"><i class="bx bxl-instagram align-middle me-1"></i> Instagram</BLink>
                                    <BLink href="#!" class="btn btn-soft-success"><i class="bx bxl-whatsapp align-middle me-1"></i> Whatsapp</BLink>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                </BRow>

            </BCol>
        </BRow>
    </Layout>
</template>