<script>
import Layout from '../../layouts/main';
import PageHeader from '@/components/page-header';
import Img1 from "@/assets/images/small/img-1.jpg";
import Img2 from "@/assets/images/small/img-2.jpg";
import Img3 from "@/assets/images/small/img-3.jpg";
import Img4 from "@/assets/images/small/img-4.jpg";
import Img5 from "@/assets/images/small/img-5.jpg";
import Img6 from "@/assets/images/small/img-6.jpg";
import Img7 from "@/assets/images/small/img-7.jpg";

/**
 * Carousel component
 */
export default {
    components: { Layout, PageHeader },
    data() {
        return {
            slide: 0,
            slide1: 0,
            sliding: null,

            Img1, Img2, Img3, Img4, Img5, Img6, Img7
        }
    },
}
</script>

<template>
    <Layout>
        <PageHeader title="Carousel" pageTitle="UI Elements" />

        <BRow>
            <BCol xl="6">
                <BCard no-body>
                    <BCardBody>
                        <BCardTitle>Slides only</BCardTitle>
                        <p class="card-title-desc">Here’s a carousel with slides only.
                            Note the presence of the <code>.d-block</code>
                            and <code>.img-fluid</code> on carousel images
                            to prevent browser default image alignment.</p>

                        <BCarousel :interval="3000" ride="carousel" class="carousel slide" id="carouselExampleSlidesOnly">
                            <BCarouselSlide active :img-src="Img1" />
                            <BCarouselSlide :img-src="Img2" />
                            <BCarouselSlide :img-src="Img3" />
                        </BCarousel>
                    </BCardBody>
                </BCard>
            </BCol>

            <BCol xl="6">
                <BCard no-body>
                    <BCardBody>
                        <BCardTitle>With controls</BCardTitle>
                        <p class="card-title-desc">Adding in the previous and next controls:</p>

                        <BCarousel class="carousel slide" ride="carousel" :interval="2000" controls>
                            <BCarouselSlide active :img-src="Img4" />
                            <BCarouselSlide :img-src="Img5" />
                            <BCarouselSlide :img-src="Img6" />
                        </BCarousel>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xl="6">
                <BCard no-body>
                    <BCardBody>
                        <BCardTitle>With indicators</BCardTitle>
                        <p class="card-title-desc">You can also add the indicators to the
                            carousel, alongside the controls, too.</p>

                        <BCarousel class="carousel slide" ride="carousel" :interval="2000" controls indicators>
                            <BCarouselSlide active :img-src="Img3" />
                            <BCarouselSlide :img-src="Img2" />
                            <BCarouselSlide :img-src="Img1" />
                        </BCarousel>
                    </BCardBody>
                </BCard>
            </BCol>

            <BCol xl="6">
                <BCard no-body>
                    <BCardBody>
                        <BCardTitle>With captions</BCardTitle>
                        <p class="card-title-desc">Add captions to your slides easily with the <code>.carousel-caption</code> element within any <code>.carousel-item</code>.</p>

                        <BCarousel class="carousel slide" ride="carousel" :interval="2000" controls>
                            <BCarouselSlide active :img-src="Img7">
                                <div class="carousel-caption d-none d-md-block text-white-50">
                                    <h5 class="text-white">First slide label</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </BCarouselSlide>
                            <BCarouselSlide :img-src="Img5">
                                <div class="carousel-caption d-none d-md-block text-white-50">
                                    <h5 class="text-white">Second slide label</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </BCarouselSlide>
                            <BCarouselSlide :img-src="Img4">
                                <div class="carousel-caption d-none d-md-block text-white-50">
                                    <h5 class="text-white">Third slide label</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </BCarouselSlide>
                        </BCarousel>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xl="6">
                <BCard no-body>
                    <BCardBody>
                        <BCardTitle>Crossfade</BCardTitle>
                        <p class="card-title-desc">Add <code>.carousel-fade</code> to your carousel to animate slides with a fade transition instead of a slide.</p>
                        <BCarousel class="carousel slide carousel-fade" ride="carousel" :interval="2000" controls indicators>
                            <BCarouselSlide active :img-src="Img1" />
                            <BCarouselSlide :img-src="Img2" />
                            <BCarouselSlide :img-src="Img3" />
                        </BCarousel>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>