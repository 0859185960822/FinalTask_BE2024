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
        <PageHeader title="Job Details" pageTitle="Jobs" />

        <BRow>
            <BCol xl="3">
                <BCard no-body>
                    <BCardBody>
                        <h5 class="fw-semibold">Overview</h5>

                        <div class="table-responsive">
                            <BTableSimple>
                                <BTbody>
                                    <BTr>
                                        <BTh scope="col">Job Title</BTh>
                                        <BTd scope="col">Magento Developer</BTd>
                                    </BTr>
                                    <BTr>
                                        <BTh scope="row">Experience:</BTh>
                                        <BTd>0-2 Years</BTd>
                                    </BTr>
                                    <BTr>
                                        <BTh scope="row">Vacancy</BTh>
                                        <BTd>12</BTd>
                                    </BTr>
                                    <BTr>
                                        <BTh scope="row">Job Type</BTh>
                                        <BTd><span class="badge badge-soft-success">Full Time</span></BTd>
                                    </BTr>
                                    <BTr>
                                        <BTh scope="row">Status</BTh>
                                        <BTd><span class="badge badge-soft-info">New</span></BTd>
                                    </BTr>
                                    <BTr>
                                        <BTh scope="row">Posted Date</BTh>
                                        <BTd>25 June, 2022</BTd>
                                    </BTr>
                                    <BTr>
                                        <BTh scope="row">Close Date</BTh>
                                        <BTd>13 April, 2022</BTd>
                                    </BTr>
                                </BTbody>
                            </BTableSimple>
                        </div>
                        <div class="hstack gap-2">
                            <BButton variant="soft-primary" class="w-100">Apply Now</BButton>
                            <BButton variant="soft-danger" class="w-100">Contact Us</BButton>
                        </div>
                    </BCardBody>
                </BCard>

                <BCard no-body>
                    <BCardBody>
                        <div class="text-center">
                            <img src="@/assets/images/companies/adobe-photoshop.svg" alt="" height="50" class="mx-auto d-block">
                            <h5 class="mt-3 mb-1">Themesbrand</h5>
                            <p class="text-muted mb-0">Since July 2017</p>
                        </div>

                        <ul class="list-unstyled mt-4">
                            <li>
                                <div class="d-flex">
                                    <i class="bx bx-phone text-primary fs-4"></i>
                                    <div class="ms-3">
                                        <h6 class="fs-14 mb-2">Phone</h6>
                                        <p class="text-muted fs-14 mb-0">+589 560 56555</p>
                                    </div>
                                </div>
                            </li>
                            <li class="mt-3">
                                <div class="d-flex">
                                    <i class="bx bx-mail-send text-primary fs-4"></i>
                                    <div class="ms-3">
                                        <h6 class="fs-14 mb-2">Email</h6>
                                        <p class="text-muted fs-14 mb-0">themesbrand@gmail.com</p>
                                    </div>
                                </div>
                            </li>
                            <li class="mt-3">
                                <div class="d-flex">
                                    <i class="bx bx-globe text-primary fs-4"></i>
                                    <div class="ms-3">
                                        <h6 class="fs-14 mb-2">Website</h6>
                                        <p class="text-muted fs-14 text-break mb-0">www.themesbrand.com</p>
                                    </div>
                                </div>
                            </li>
                            <li class="mt-3">
                                <div class="d-flex">
                                    <i class="bx bx-map text-primary fs-4"></i>
                                    <div class="ms-3">
                                        <h6 class="fs-14 mb-2">Location</h6>
                                        <p class="text-muted fs-14 mb-0">Oakridge Lane Richardson.</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div class="mt-4">
                            <BLink href="#!" class="btn btn-soft-primary btn-hover w-100 rounded"><i class="mdi mdi-eye"></i> View Profile</BLink>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xl="9">
                <BCard no-body>
                    <BCardBody class="border-bottom">
                        <div class="d-flex">
                            <img src="@/assets/images/companies/wechat.svg" alt="" height="50">
                            <div class="flex-grow-1 ms-3">
                                <h5 class="fw-semibold">Magento Developer</h5>
                                <ul class="list-unstyled hstack gap-2 mb-0">
                                    <li>
                                        <i class="bx bx-building-house"></i> <span class="text-muted">Themesbrand</span>
                                    </li>
                                    <li>
                                        <i class="bx bx-map"></i> <span class="text-muted">California</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </BCardBody>
                    <BCardBody>
                        <h5 class="fw-semibold mb-3">Description</h5>
                        <p class="text-muted">We are looking to hire a skilled Magento developer to build and maintain eCommerce websites for our clients. As a Magento developer, you will be responsible for liaising with the design team, setting up Magento 1x and 2x sites, building modules and customizing extensions, testing the performance of each site, and maintaining security and feature updates after the installation is complete.</p>

                        <h5 class="fw-semibold mb-3">Responsibilities:</h5>
                        <ul class="vstack gap-3 job-details">
                            <li>
                                Meeting with the design team to discuss the needs of the company.
                            </li>
                            <li>
                                Building and configuring Magento 1x and 2x eCommerce websites.
                            </li>
                            <li>
                                Coding of the Magento templates.
                            </li>
                            <li>
                                Developing Magento modules in PHP using best practices.
                            </li>
                            <li>
                                Designing themes and interfaces.
                            </li>
                            <li>
                                Setting performance tasks and goals.
                            </li>
                            <li>
                                Updating website features and security patches.
                            </li>
                        </ul>

                        <h5 class="fw-semibold mb-3">Requirements:</h5>
                        <ul class="vstack gap-3">
                            <li>
                                Bachelor’s degree in computer science or related field.
                            </li>
                            <li>
                                Advanced knowledge of Magento, JavaScript, HTML, PHP, CSS, and MySQL.
                            </li>
                            <li>
                                Experience with complete eCommerce lifecycle development.
                            </li>
                            <li>
                                Understanding of modern UI/UX trends.
                            </li>
                            <li>
                                Knowledge of Google Tag Manager, SEO, Google Analytics, PPC, and A/B Testing.
                            </li>
                            <li>
                                Good working knowledge of Adobe Photoshop and Adobe Illustrator.
                            </li>
                            <li>
                                Strong attention to detail.
                            </li>
                            <li>
                                Ability to project-manage and work to strict deadlines.
                            </li>
                            <li>
                                Ability to work in a team environment.
                            </li>
                        </ul>

                        <h5 class="fw-semibold mb-3">Qualification:</h5>
                        <ul class="vstack gap-3">
                            <li>
                                B.C.A / M.C.A under National University course complete.
                            </li>
                            <li>
                                3 or more years of professional design experience
                            </li>
                            <li>
                                Advanced degree or equivalent experience in graphic and web design
                            </li>
                        </ul>

                        <h5 class="fw-semibold mb-3">Skill & Experience:</h5>
                        <ul class="vstack gap-3 mb-0">
                            <li>
                                Understanding of key Design Principal
                            </li>
                            <li>
                                Proficiency With HTML, CSS, Bootstrap
                            </li>
                            <li>
                                WordPress: 1 year (Required)
                            </li>
                            <li>
                                Experience designing and developing responsive design websites
                            </li>
                            <li>
                                web designing: 1 year (Preferred)
                            </li>
                        </ul>

                        <div class="mt-4">
                            <BBadge variant="" class="badge-soft-warning">PHP</BBadge>
                            <BBadge variant="" class="badge-soft-warning">Magento</BBadge>
                            <BBadge variant="" class="badge-soft-warning">Marketing</BBadge>
                            <BBadge variant="" class="badge-soft-warning">WordPress</BBadge>
                            <BBadge variant="" class="badge-soft-warning">Bootstrap</BBadge>
                        </div>

                        <div class="mt-4">
                            <ul class="list-inline mb-0">
                                <li class="list-inline-item mt-1">
                                    Share this job:
                                </li>
                                <li class="list-inline-item mt-1">
                                    <BLink href="javascript:void(0)" class="btn btn-outline-primary btn-hover"><i class="uil uil-facebook-f"></i> Facebook</BLink>
                                </li>
                                <li class="list-inline-item mt-1">
                                    <BLink href="javascript:void(0)" class="btn btn-outline-danger btn-hover"><i class="uil uil-google"></i> Google+</BLink>
                                </li>
                                <li class="list-inline-item mt-1">
                                    <BLink href="javascript:void(0)" class="btn btn-outline-success btn-hover"><i class="uil uil-linkedin-alt"></i> linkedin</BLink>
                                </li>
                            </ul>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>