<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

/** * Invoice-detail component */
export default {

  components: { Layout, PageHeader },
};
</script>

<template>
  <Layout>
    <PageHeader title="Detail" pageTitle="Invoices" />

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardBody>
            <div class="invoice-title">
              <h4 class="float-end font-size-16">Order # 12345</h4>
              <div class="mb-4">
                <img src="@/assets/images/logo-dark.png" alt="logo" height="20" />
              </div>
            </div>
            <hr />
            <BRow>
              <BCol cols="6">
                <address>
                  <strong>Billed To:</strong>
                  <br />John Smith <br />1234 Main <br />Apt. 4B
                  <br />Springfield, ST 54321
                </address>
              </BCol>
              <BCol cols="6" class="text-sm-end">
                <address>
                  <strong>Shipped To:</strong>
                  <br />Kenny Rigdon <br />1234 Main <br />Apt. 4B
                  <br />Springfield, ST 54321
                </address>
              </BCol>
            </BRow>
            <BRow>
              <BCol cols="6" class="mt-3">
                <address>
                  <strong>Payment Method:</strong>
                  <br />Visa ending **** 4242 <br />jsmith@email.com
                </address>
              </BCol>
              <BCol cols="6" class="mt-3 text-sm-end">
                <address>
                  <strong>Order Date:</strong>
                  <br />October 16, 2019
                  <br />
                  <br />
                </address>
              </BCol>
            </BRow>
            <div class="p-2 mt-3">
              <h3 class="font-size-16">Order summary</h3>
            </div>
            <div class="table-responsive">
              <BTableSimple>
                <BThead>
                  <BTr>
                    <BTh style="width: 70px">No.</BTh>
                    <BTh>Item</BTh>
                    <BTh class="text-sm-end">Price</BTh>
                  </BTr>
                </BThead>
                <BTbody>
                  <BTr>
                    <BTd>01</BTd>
                    <BTd>Skote - Bootstrap 5 Admin Dashboard</BTd>
                    <BTd class="text-sm-end">$499.00</BTd>
                  </BTr>

                  <BTr>
                    <BTd>02</BTd>
                    <BTd>Skote - Bootstrap 4 Landing Template</BTd>
                    <BTd class="text-sm-end">$399.00</BTd>
                  </BTr>

                  <BTr>
                    <BTd>03</BTd>
                    <BTd>Veltrix - Bootstrap 4 Admin Template</BTd>
                    <BTd class="text-sm-end">$499.00</BTd>
                  </BTr>
                  <BTr>
                    <BTd colspan="2" class="text-sm-end">Sub Total</BTd>
                    <BTd class="text-sm-end">$1397.00</BTd>
                  </BTr>
                  <BTr>
                    <BTd colspan="2" class="border-0 text-sm-end">
                      <strong>Shipping</strong>
                    </BTd>
                    <BTd class="border-0 text-sm-end">$13.00</BTd>
                  </BTr>
                  <BTr>
                    <BTd colspan="2" class="border-0 text-sm-end">
                      <strong>Total</strong>
                    </BTd>
                    <BTd class="border-0 text-sm-end">
                      <h4 class="m-0">$1410.00</h4>
                    </BTd>
                  </BTr>
                </BTbody>
              </BTableSimple>
            </div>
            <div class="d-print-none">
              <div class="float-end">
                <BLink href="javascript:window.print()" class="btn btn-success waves-effect waves-light me-1"><i
                    class="fa fa-print"></i></BLink>
                <BLink href="#" class="btn btn-primary w-md waves-effect waves-light ms-1">Send</BLink>
              </div>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>