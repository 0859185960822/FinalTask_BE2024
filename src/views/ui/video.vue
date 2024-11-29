<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import { videos } from '@/views/ui/videodata';

/**
 * Video component
 */
export default {
  components: { Layout, PageHeader },
  data() {
    return {
      videos
    }
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="Video" pageTitle="UI Elements" />

    <BRow>
      <BCol lg="6" v-for="video in videos" :key="video.id">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>{{ video.title }}</BCardTitle>
            <p class="card-title-desc">Aspect ratios can be customized with modifier classes.</p>

            <div :class="`ratio ratio-${video.aspect}`">
              <iframe class="embed-responsive-item" :src="video.url"></iframe>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
   
  </Layout>
</template>