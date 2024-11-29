<script>
import Layout from '../../layouts/main';
import PageHeader from '@/components/page-header';
import pagination from "@/components/common/pagination"
import Transaction from '@/components/widgets/transaction';

/**
 * Products-order component
 */
export default {
  components: { Layout, PageHeader, Transaction, pagination },
  data() {
    return {
      pageCount: 5,
      transactions: [
        {
          id: '#SK2540',
          name: 'Neal Matthews',
          date: '07 Oct, 2019',
          total: '$400',
          status: 'Paid',
          payment: ['fab fa-cc-mastercard', 'Mastercard'],
          index: 1,
        },
        {
          id: '#SK2541',
          name: 'Jamal Burnett',
          date: '07 Oct, 2019',
          total: '$380',
          status: 'Chargeback',
          payment: ['fab fa-cc-visa', 'Visa'],
          index: 2,
        },
        {
          id: '#SK2542',
          name: 'Juan Mitchell',
          date: '06 Oct, 2019',
          total: '$384',
          status: 'Paid',
          payment: ['fab fa-cc-paypal', 'Paypal'],
          index: 3,
        },
        {
          id: '#SK2543',
          name: 'Barry Dick',
          date: '05 Oct, 2019',
          total: '$412',
          status: 'Paid',
          payment: ['fab fa-cc-mastercard', 'Mastercard'],
          index: 4,
        },
        {
          id: '#SK2544',
          name: 'Ronald Taylor',
          date: '04 Oct, 2019',
          total: '$404',
          status: 'Refund',
          payment: ['fab fa-cc-visa', 'Visa'],
          index: 5,
        },
        {
          id: '#SK2545',
          name: 'Jacob Hunter',
          date: '04 Oct, 2019',
          total: '$392',
          status: 'Paid',
          payment: ['fab fa-cc-paypal', 'Paypal'],
          index: 6,
        },
        {
          id: '#SK2546',
          name: 'William Cruz',
          date: '03 Oct, 2019',
          total: '$374',
          status: 'Paid',
          payment: ['fas fa-money-bill-alt', 'COD'],
          index: 7,
        },
        {
          id: '#SK2547',
          name: 'Dustin Moser',
          date: '02 Oct, 2019',
          total: '$350',
          status: 'Paid',
          payment: ['fab fa-cc-mastercard', 'Mastercard'],
          index: 8,
        },
        {
          id: '#SK2548',
          name: 'Clark Benson',
          date: '01 Oct, 2019',
          total: '$345',
          status: 'Refund',
          payment: ['fab fa-cc-visa', 'Visa'],
          index: 9,
        },
      ],
    };
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="Orders" pageTitle="Ecommerce" />

    <BRow>
      <BCol cols="12">
        <BCard no-body>
          <BCardBody>
            <BRow class="mb-2">
              <BCol sm="4">
                <div class="search-box me-2 mb-2 d-inline-block">
                  <div class="position-relative">
                    <input type="text" class="form-control" id="searchTableList" placeholder="Search..." />
                    <i class="bx bx-search-alt search-icon"></i>
                  </div>
                </div>
              </BCol>
              <BCol sm="8">
                <div class="text-sm-end">
                  <BButton variant="success" class="btn-rounded mb-2 me-2">
                    <i class="mdi mdi-plus me-1"></i> Add New Order
                  </BButton> 
                </div>
              </BCol>
            </BRow>

            <!-- Table data -->
            <Transaction :transactions="transactions" />
            <pagination />
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>
