<script>
import Loader from "./loader";

export default {
  components: {
    Loader,
  },
  props: {
    updating: {
      type: Boolean,
    },
  },
};
</script>

<template>
  <Loader :loading="updating">
    <BCard no-body>
      <BCardBody>
        <BCardTitle class="mb-4">Top Cities Selling Product</BCardTitle>

        <div class="text-center">
          <div class="mb-4">
            <i class="bx bx-map-pin text-primary display-4"></i>
          </div>
          <h3>1,456</h3>
          <p>San Francisco</p>
        </div>

        <div class="table-responsive mt-4">
          <BTableSimple class="table-centered">
            <BTbody>
              <BTr>
                <BTd style="width: 140px">
                  <p class="mb-0">San Francisco</p>
                </BTd>
                <BTd style="width: 120px">
                  <h5 class="mb-0">1,456</h5>
                </BTd>
                <BTd>
                  <BProgress :value="94" variant="primary" height="5px"></BProgress>
                </BTd>
              </BTr>
              <BTr>
                <BTd>
                  <p class="mb-0">Los Angeles</p>
                </BTd>
                <BTd>
                  <h5 class="mb-0">1,123</h5>
                </BTd>
                <BTd>
                  <BProgress :value="82" variant="success" height="5px"></BProgress>
                </BTd>
              </BTr>
              <BTr>
                <BTd>
                  <p class="mb-0">San Diego</p>
                </BTd>
                <BTd>
                  <h5 class="mb-0">1,026</h5>
                </BTd>
                <BTd>
                  <BProgress :value="70" variant="warning" height="5px"></BProgress>
                </BTd>
              </BTr>
            </BTbody>
          </BTableSimple>
        </div>
      </BCardBody>
    </BCard>
  </Loader>
</template>
