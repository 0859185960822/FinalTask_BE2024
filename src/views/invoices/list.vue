<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import { listData } from "./data"
/** * Invoice-list component */
export default {
  components: { Layout, PageHeader },
  data() {
    return {
      listData
    }
  }
};
</script>

<template>
  <Layout>
    <PageHeader title="Invoice List" pageTitle="Invoices" />

    <BRow>
      <BCol xl="4" sm="6" v-for="(card, index) in listData" :key="index">
        <BCard no-body>
          <BCardBody>
            <BRow>
              <BCol lg="4">
                <div class="text-lg-center">
                  <img v-if="card.imgSrc" :src="card.imgSrc" class="avatar-sm me-3 mx-lg-auto mb-3 mt-1 float-start float-lg-none rounded-circle" alt="img" />
                  <span v-else class="avatar-sm me-3 mx-lg-auto mb-3 mt-1 float-start float-lg-none d-flex">
                    <span :class="`avatar-title rounded-circle bg-${card.avatarClass}-subtle text-${card.textClass} font-size-16`">
                      {{ card.avatar }}
                    </span>
                  </span>
                  <h5 class="mb-1 font-size-15 text-truncate">{{ card.userTitle }}</h5>
                  <BLink href="#" class="text-muted">@Skote</BLink>
                </div>
              </BCol>
              <BCol lg="8">
                <div>
                  <router-link :to="card.linkTo" class="d-block text-primary text-decoration-underline mb-2">{{
                    card.invoiceNumber }}</router-link>
                  <h5 class="text-truncate mb-4 mb-lg-5">{{ card.invoiceTitle }}</h5>
                  <ul class="list-inline mb-0">
                    <li class="list-inline-item me-3">
                      <h5 class="font-size-14" data-toggle="tooltip" data-placement="top" title="Amount">
                        <i class="bx bx-money me-1 text-muted"></i> {{ card.amount }}
                      </h5>
                    </li>
                    <li class="list-inline-item ms-1">
                      <h5 class="font-size-14" data-toggle="tooltip" data-placement="top" title="Due Date">
                        <i class="bx bx-calendar me-1 text-muted"></i> {{ card.dueDate }}
                      </h5>
                    </li>
                  </ul>
                </div>
              </BCol>
            </BRow>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol cols="12">
        <div class="text-center my-3">
          <BLink href="javascript:void(0);" class="text-success"><i class="bx bx-loader bx-spin font-size-18 align-middle me-2"></i>
            Load more
          </BLink>
        </div>
      </BCol>
    </BRow>
  </Layout>
</template>