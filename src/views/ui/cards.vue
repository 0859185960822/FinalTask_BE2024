<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

/**
 * Cards component
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
        <PageHeader title="Cards" pageTitle="UI Elements" />

        <BRow>
            <BCol lg="6" xl="3">
                <BCard :img-src="require('@/assets/images/small/img-1.jpg')" img-alt="Card image" img-top>
                    <BCardTitle class="h5">Card title</BCardTitle>
                    <BCardText>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </BCardText>
                    <BButton href="javascript:void(0);" variant="primary">Button</BButton>
                </BCard>
            </BCol>

            <BCol lg="6" xl="3">
                <BCard no-body :img-src="require('@/assets/images/small/img-2.jpg')" img-alt="Card image" img-top>
                    <BCardBody>
                        <BCardTitle class="h5">Card title</BCardTitle>
                        <BCardText>Some quick example text to build on the card title and make up
                            the bulk of the card's content.</BCardText>
                    </BCardBody>
                    <BListGroup>
                        <BListGroupItem>Cras justo odio</BListGroupItem>
                        <BListGroupItem>Dapibus ac facilisis in</BListGroupItem>
                    </BListGroup>
                    <BCardBody>
                        <BLink href="javascript:void(0);" class="card-link text-custom">Card link</BLink>
                        <BLink href="javascript:void(0);" class="card-link text-custom">Another link</BLink>
                    </BCardBody>
                </BCard>
            </BCol>

            <BCol lg="6" xl="3">
                <BCard :img-src="require('@/assets/images/small/img-3.jpg')" img-alt="Card image" img-top>
                    <BCardText>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </BCardText>
                </BCard>
            </BCol>

            <BCol lg="6" xl="3">
                <BCard no-body>
                    <BCardBody>
                        <BCardTitle>Card title</BCardTitle>
                        <BCardSubtitle>
                            <h6 class="text-muted">Support card subtitle</h6>
                        </BCardSubtitle>
                    </BCardBody>
                    <img src="@/assets/images/small/img-4.jpg" class="img-fluid" />
                    <BCardBody>
                        <BCardText>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </BCardText>
                        <BLink href="javascript:void(0);" class="card-link text-custom">Card link</BLink>
                        <BLink href="javascript:void(0);" class="card-link text-custom">Another link</BLink>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="6">
                <BCard no-body>
                    <BCardBody>
                        <BCardTitle>Special title treatment</BCardTitle>
                        <BCardText>
                            With supporting text below as a natural lead-in to additional
                            content.
                        </BCardText>
                        <BLink href="javascript:void(0);" class="btn btn-primary btn-block waves-effect waves-light">Go somewhere</BLink>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol lg="6">
                <BCard no-body>
                    <BCardBody>
                        <BCardTitle>Special title treatment</BCardTitle>
                        <BCardText>
                            With supporting text below as a natural lead-in to additional
                            content.
                        </BCardText>
                        <BLink href="javascript:void(0);" class="btn btn-primary btn-block waves-effect waves-light">Go somewhere</BLink>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol md="4">
                <BCard no-body>
                    <BCardBody>
                        <BCardTitle>Special title treatment</BCardTitle>
                        <BCardText>
                            With supporting text below as a natural lead-in to additional
                            content.
                        </BCardText>
                        <BLink href="javascript:void(0);" class="btn btn-primary btn-block waves-effect waves-light">Go somewhere</BLink>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol md="4">
                <BCard no-body class="text-center">
                    <BCardBody>
                        <BCardTitle>Special title treatment</BCardTitle>
                        <BCardText>
                            With supporting text below as a natural lead-in to additional
                            content.
                        </BCardText>
                        <BLink href="javascript:void(0);" class="btn btn-primary btn-block waves-effect waves-light">Go somewhere</BLink>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol md="4">
                <BCard no-body class="text-end">
                    <BCardBody>
                        <BCardTitle>Special title treatment</BCardTitle>
                        <BCardText>
                            With supporting text below as a natural lead-in to additional
                            content.
                        </BCardText>
                        <BLink href="javascript:void(0);" class="btn btn-primary btn-block waves-effect waves-light">Go somewhere</BLink>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol md="4">
                <BCard>
                    <BCardTitle class="h5">Special title treatment</BCardTitle>
                    <h5 class="mb-0">Featured</h5>
                    <BCardText>With supporting text below as a natural lead-in to additional
                        content.</BCardText>
                    <BButton href="javascript: void(0);" variant="primary">Go somewhere</BButton>
                </BCard>
            </BCol>
            <BCol md="4">
                <BCard header="Quote">
                    <BCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                        posuere erat a ante.</BCardText>
                    <BCardFooter>
                        Someone famous in
                        <cite title="Source Title">Source Title</cite>
                    </BCardFooter>
                </BCard>
            </BCol>
            <BCol md="4">
                <BCard header="Featured" footer="2 days ago" class="text-center">
                    <BCardText>
                        <BCardTitle>Special title treatment</BCardTitle>
                        <BCardText>
                            With supporting text below as a natural lead-in to additional
                            content.
                        </BCardText>
                        <BLink href="javascript: void(0);" class="btn btn-primary">Go somewhere</BLink>
                    </BCardText>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol md="4">
                <BCard :img-src="require('@/assets/images/small/img-5.jpg')" img-alt="Card image" img-top>
                    <BCardTitle>Card title</BCardTitle>
                    <BCardText>
                        <p>
                            This is a wider card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </p>
                        <p>
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </p>
                    </BCardText>
                </BCard>
            </BCol>
            <BCol md="4">
                <BCard :img-src="require('@/assets/images/small/img-7.jpg')" img-alt="Card image" img-bottom>
                    <BCardTitle>Card title</BCardTitle>
                    <BCardText>
                        <p>
                            This is a wider card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </p>
                        <p>
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </p>
                    </BCardText>
                </BCard>
            </BCol>
            <BCol md="4">
                <BCard overlay :img-src="require('@/assets/images/small/img-6.jpg')" img-alt="Card Image" text-variant="white">
                    <BCardTitle>
                        <h5 class="text-white">Card title</h5>
                    </BCardTitle>
                    <BCardText>
                        <p>
                            This is a wider card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </p>
                        <p>
                            <small class="text-white">Last updated 3 mins ago</small>
                        </p>
                    </BCardText>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="6">
                <BCard no-body>
                    <BRow no-gutters class="align-items-center">
                        <BCol md="4">
                            <BCardImg :src="require('@/assets/images/small/img-2.jpg')" class="rounded-0"></BCardImg>
                        </BCol>
                        <BCol md="8">
                            <BCardBody title="Card title">
                                <BCardText>This is a wider card with supporting text below as a natural
                                    lead-in to additional content.</BCardText>
                                <BCardText>
                                    <small class="text-muted">Last updated 3 mins ago</small>
                                </BCardText>
                            </BCardBody>
                        </BCol>
                    </BRow>
                </BCard>
            </BCol>
            <BCol lg="6">
                <BCard no-body>
                    <BRow no-gutters class="align-items-center">
                        <BCol md="8">
                            <BCardBody title="Card title">
                                <BCardText>This is a wider card with supporting text below as a natural
                                    lead-in to additional content.</BCardText>
                                <BCardText>
                                    <small class="text-muted">Last updated 3 mins ago</small>
                                </BCardText>
                            </BCardBody>
                        </BCol>
                        <BCol md="4">
                            <BCardImg :src="require('@/assets/images/small/img-3.jpg')" class="rounded-0"></BCardImg>
                        </BCol>
                    </BRow>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol md="4">
                <BCard bg-variant="primary" class="text-white-50">
                    <h5 class="mt-0 mb-4 text-white">
                        <i class="mdi mdi-bullseye-arrow me-3"></i> Primary Card
                    </h5>
                    <BCardText>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </BCardText>
                </BCard>
            </BCol>
            <BCol md="4">
                <BCard bg-variant="success" class="text-white-50">
                    <h5 class="mt-0 mb-4 text-white">
                        <i class="mdi mdi-check-all me-3"></i> Success Card
                    </h5>
                    <BCardText>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </BCardText>
                </BCard>
            </BCol>
            <BCol md="4">
                <BCard bg-variant="info" class="text-white-50">
                    <h5 class="mt-0 mb-4 text-white">
                        <i class="mdi mdi-alert-circle-outline me-3"></i> Info Card
                    </h5>
                    <BCardText>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </BCardText>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol md="4">
                <BCard bg-variant="warning" class="text-white-50">
                    <h5 class="mt-0 mb-4 text-white">
                        <i class="mdi mdi-alert-outline me-3"></i> Warning Card
                    </h5>
                    <BCardText>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </BCardText>
                </BCard>
            </BCol>
            <BCol md="4">
                <BCard bg-variant="danger" class="text-white-50">
                    <h5 class="mt-0 mb-4 text-white">
                        <i class="mdi mdi-block-helper me-3"></i> Danger Card
                    </h5>
                    <BCardText>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </BCardText>
                </BCard>
            </BCol>
            <BCol md="4">
                <BCard bg-variant="dark" class="text-white-50">
                    <h5 class="mt-0 mb-4 text-white">
                        <i class="mdi mdi-alert-circle-outline me-3"></i> Dark Card
                    </h5>
                    <BCardText>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </BCardText>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="4">
                <BCard header-class="bg-transparent border-primary" class="border border-primary">
                    <template v-slot:header>
                        <h5 class="my-0 text-primary">
                            <i class="mdi mdi-bullseye-arrow me-3"></i>Primary outline Card
                        </h5>
                    </template>
                    <BCardTitle class="mt-0">card title</BCardTitle>
                    <BCardText>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </BCardText>
                </BCard>
            </BCol>
            <BCol lg="4">
                <BCard header-class="bg-transparent border-danger" class="border border-danger">
                    <template v-slot:header>
                        <h5 class="my-0 text-danger">
                            <i class="mdi mdi-block-helper me-3"></i>Danger outline Card
                        </h5>
                    </template>
                    <BCardTitle class="mt-0">card title</BCardTitle>
                    <BCardText>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </BCardText>
                </BCard>
            </BCol>
            <BCol lg="4">
                <BCard header-class="bg-transparent border-success" class="border border-success">
                    <template v-slot:header>
                        <h5 class="my-0 text-success">
                            <i class="mdi mdi-check-all me-3"></i>Success outline Card
                        </h5>
                    </template>
                    <BCardTitle class="mt-0">card title</BCardTitle>
                    <BCardText>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </BCardText>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>
