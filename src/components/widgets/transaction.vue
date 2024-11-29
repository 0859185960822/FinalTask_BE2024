<script>
import Loader from "./loader";
import { Img7, Img4 } from "@/assets/images/product/data"

/**
 * Transactions component
 */
export default {
  components: {
    Loader,
  },
  props: {
    transactions: {
      type: Array,
      default: function () {
        return [];
      },
    },
    updating: {
      type: Boolean,
    },
  },
  data() {
    return {
      showModal: false, Img7, Img4
    };
  },
};
</script>

<template>
  <Loader :loading="updating">
    <div class="table-responsive mb-0">
      <BTableSimple class="align-middle table-nowrap">
        <BThead class="table-light">
          <BTr>
            <BTh style="width: 20px">
              <div class="form-check font-size-16 align-middle">
                <input class="form-check-input" type="checkbox" id="transactionCheck01" />
                <label class="form-check-label" for="transactionCheck01"></label>
              </div>
            </BTh>
            <BTh class="align-middle">Order ID</BTh>
            <BTh class="align-middle">Billing Name</BTh>
            <BTh class="align-middle">Date</BTh>
            <BTh class="align-middle">Total</BTh>
            <BTh class="align-middle">Payment Status</BTh>
            <BTh class="align-middle">Payment Method</BTh>
            <BTh class="align-middle">View Details</BTh>
          </BTr>
        </BThead>
        <BTbody>
          <BTr v-for="data in transactions" :key="data.id">
            <BTd>
              <div class="form-check font-size-16">
                <input class="form-check-input" type="checkbox" :id="`transactionCheck${data.index}`" />
                <label class="form-check-label" :for="`transactionCheck${data.index}`"></label>
              </div>
            </BTd>
            <BTd>
              <BLink href="javascript: void(0);" class="text-body fw-bold">{{
                data.id
              }}</BLink>
            </BTd>
            <BTd>{{ data.name }}</BTd>
            <BTd>{{ data.date }}</BTd>
            <BTd>{{ data.total }}</BTd>
            <BTd>
              <span class="badge badge-pill badge-soft-success font-size-11" :class="{
                'badge-soft-danger': `${data.status}` === 'Chargeback',
                'badge-soft-warning': `${data.status}` === 'Refund',
              }">{{ data.status }}</span>
            </BTd>
            <BTd>
              <i :class="`fab ${data.payment[0]} me-1`"></i>
              {{ data.payment[1] }}
            </BTd>
            <BTd>
              <BButton variant="primary" class="btn-sm btn-rounded" @click="showModal = !showModal">
                View Details
              </BButton>
            </BTd>
          </BTr>
        </BTbody>
      </BTableSimple>
    </div>
  </Loader>
  <BModal v-model="showModal" title="Order Details" centered>
    <p class="mb-2">Product id: <span class="text-primary">#SK2540</span></p>
    <p class="mb-4">Billing Name: <span class="text-primary">Neal Matthews</span></p>

    <div class="table-responsive">
      <BTableSimple class="align-middle table-nowrap">
        <BThead>
          <BTr>
            <BTh scope="col">Product</BTh>
            <BTh scope="col">Product Name</BTh>
            <BTh scope="col">Price</BTh>
          </BTr>
        </BThead>
        <BTbody>
          <BTr>
            <BTh scope="row">
              <div>
                <img :src="Img7" alt="" class="avatar-sm">
              </div>
            </BTh>
            <BTd>
              <div>
                <h5 class="text-truncate font-size-14">Wireless Headphone (Black)</h5>
                <p class="text-muted mb-0">$ 225 x 1</p>
              </div>
            </BTd>
            <BTd>$ 255</BTd>
          </BTr>
          <BTr>
            <BTh scope="row">
              <div>
                <img :src="Img4" alt="" class="avatar-sm">
              </div>
            </BTh>
            <BTd>
              <div>
                <h5 class="text-truncate font-size-14">Phone patterned cases</h5>
                <p class="text-muted mb-0">$ 145 x 1</p>
              </div>
            </BTd>
            <BTd>$ 145</BTd>
          </BTr>
          <BTr>
            <BTd colspan="2">
              <h6 class="m-0 text-right">Sub Total:</h6>
            </BTd>
            <BTd>
              $ 400
            </BTd>
          </BTr>
          <BTr>
            <BTd colspan="2">
              <h6 class="m-0 text-right">Shipping:</h6>
            </BTd>
            <BTd>
              Free
            </BTd>
          </BTr>
          <BTr>
            <BTd colspan="2">
              <h6 class="m-0 text-right">Total:</h6>
            </BTd>
            <BTd>
              $ 400
            </BTd>
          </BTr>
        </BTbody>
      </BTableSimple>
    </div>
    <template v-slot:modal-footer>
      <BButton variant="secondary" @click="showModal = !showModal">Close</BButton>
    </template>
  </BModal>
</template>