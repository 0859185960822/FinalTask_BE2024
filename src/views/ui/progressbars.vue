<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

/**
 * Progressbar component
 */
export default {
  components: { Layout, PageHeader },
};
</script>

<template>
  <Layout>
    <PageHeader title="Progress Bars" pageTitle="UI Elements" />

    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Default Examples</BCardTitle>
            <p class="card-title-desc">
              Progress components are built with two
              HTML elements, some CSS to set the width, and a few attributes.
            </p>
            <BProgress :value="25" :max="100" class="mb-4"></BProgress>
            <BProgress :value="50" :max="100" class="mb-4"></BProgress>
            <BProgress :value="75" :max="100" class="mb-4"></BProgress>
            <BProgress :value="100"></BProgress>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Backgrounds</BCardTitle>
            <p class="card-title-desc">
              Use background utility classes to
              change the appearance of individual progress bars.
            </p>
            <BProgress :value="25" :max="100" class="mb-4" variant="success"></BProgress>
            <BProgress :value="50" :max="100" class="mb-4" variant="info"></BProgress>
            <BProgress :value="75" :max="100" class="mb-4" variant="warning"></BProgress>
            <BProgress :value="100" variant="danger"></BProgress>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Labels Example</BCardTitle>
            <p class="card-title-desc">
              Add labels to your progress bars by placing text within the
              <code class="highlighter-rouge">.progress-bar</code>.
            </p>
            <BProgress :value="25" :max="100" show-value></BProgress>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Multiple bars</BCardTitle>
            <p class="card-title-desc">Include multiple progress bars in a progress component if you need.</p>
            <BProgress class="mt-2" :max="100">
              <BProgressBar :value="45 * (6 / 10)"></BProgressBar>
              <BProgressBar :value="45 * (2.5 / 10)" variant="success"></BProgressBar>
              <BProgressBar :value="45 * (1.5 / 10)" variant="info"></BProgressBar>
            </BProgress>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Height</BCardTitle>
            <p class="card-title-desc">
              We only set a
              <code class="highlighter-rouge">height</code> value on the
              <code class="highlighter-rouge">.progress-bar</code>, so if you change
              that value the outer
              <code class="highlighter-rouge">.progress</code>
              will automatically resize accordingly.
            </p>
            <BProgress height="3px" :value="25" class="mb-3"></BProgress>
            <BProgress height="20px" :value="25"></BProgress>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Animated stripes</BCardTitle>
            <p class="card-title-desc">
              The striped gradient can also be
              animated. Add
              <code class="highlighter-rouge">.progress-bar-animated</code> to
              <code class="highlighter-rouge">.progress-bar</code> to animate the
              stripes right to left via CSS3 animations.
            </p>
            <BProgress :value="75" :max="100" animated></BProgress>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody class="pb-0">
            <BCardTitle>Striped</BCardTitle>
            <p class="card-title-desc">
              Add
              <code class="highlighter-rouge">.progress-bar-striped</code>
              to any
              <code class="highlighter-rouge">.progress-bar</code> to apply a
              stripe via CSS gradient over the progress bar’s background color.
            </p>
            <BProgress :value="10" :max="100" class="mb-4" animated></BProgress>
            <BProgress :value="25" :max="100" class="mb-4" variant="success" animated></BProgress>
            <BProgress :value="50" :max="100" class="mb-4" variant="info" animated></BProgress>
            <BProgress :value="75" :max="100" class="mb-4" variant="warning" animated></BProgress>
            <BProgress :value="100" :max="100" class="mb-4" variant="danger" animated></BProgress>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>