<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import { colorGroups } from '@/views/ui/colorsData'
/**
 * Colors component
 */
export default {
  components: { Layout, PageHeader },
  data() {
    return {
      colorGroups
    }
  }
};
</script>

<template>
  <Layout>
    <PageHeader title="Colors" pageTitle="UI Elements" />

    <BRow>
      <BCol xl="3" md="6" v-for="(colorGroup, index) in colorGroups" :key="'color-group-' + index">
        <BCard no-body>
          <BCardBody class="text-center">
            <div class="rounded overflow-hidden">
              <div class="color-box p-4" v-for="color in colorGroup.variants" :key="'color-' + color.class" :class="color.class">
                <h5 class="my-2" :class="color.text ? color.text : 'text-white'"> {{ color.title }} </h5>
              </div>
            </div>

            <h5 class="mb-0 mt-3" :class="colorGroup.text ? colorGroup.text : 'text-white'"> {{ colorGroup.name }} </h5>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

  </Layout>
</template>