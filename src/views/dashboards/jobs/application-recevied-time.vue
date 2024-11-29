<script>
/**
 * Application Recevied Time
 */
export default {
    components: {
    },
    data() {
        return {
            series: [{
                name: 'Received Application',
                data: [34, 44, 54, 21, 12, 43, 33, 80, 66]
            }],
            chartOptions: {
                chart: {
                    type: 'line',
                    height: 378,
                    toolbar: {
                        show: false,
                    },
                },
                stroke: {
                    width: 3,
                    curve: 'smooth'
                },
                labels: ['8 PM', '9 PM', '10 PM', '11 PM', '12 PM', '1 AM', '2 AM',
                    '3 AM', '4 AM'
                ],
                dataLabels: {
                    enabled: false
                },
                colors: ["#556ee6", "#34c38f", "#f1b44c", "#50a5f1"],
                markers: {
                    hover: {
                        sizeOffset: 4
                    }
                }
            },
        };
    },
};
</script>
<template>
    <BCard no-body>
        <BCardBody>
            <div class="d-flex">
                <BCardTitle>Applications Received Time</BCardTitle>
                <BDropdown class="ms-auto" toggle-tag="a" menu-class="dropdown-menu-end" toggle-class="font-size-16 p-0" variant="white" right>
                    <template #button-content>
                        <i class="mdi mdi-dots-horizontal"></i>
                    </template>
                    <BDropdownItem href="#">Action</BDropdownItem>
                    <BDropdownItem href="#">Another action</BDropdownItem>
                    <BDropdownItem href="#">Something else here</BDropdownItem>
                    <BDropdownDivider />
                    <BDropdownItem href="#">Separated link</BDropdownItem>
                </BDropdown>
            </div>

            <apexchart class="apex-charts" type="line" dir="ltr" height="378" :series="series" :options="chartOptions">
            </apexchart>
        </BCardBody>
    </BCard>
</template>
