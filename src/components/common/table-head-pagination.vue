<script>
    export default {
        name: "TableHeadPagination",
        props: ["TableHeadPagination"],
        data(){
            return {
                column: this.$props.TableHeadPagination.Column,
                sortKey: this.$props.TableHeadPagination.SortKey,
                sortOrder: this.$props.TableHeadPagination.SortOrder,
                limitOrder: this.$props.TableHeadPagination.LimitOrder,
                searchData: this.$props.TableHeadPagination.SearchData,
                linkPagination: null
            }
        },
        mounted(){},
        emits: ['dataTableAction'],
        methods:{
            dataTableAction(){
                let dataTableAction = {
                    SortKey: this.sortKey,
                    LimitOrder: this.limitOrder,
                    SearchData: this.searchData,
                    LinkPagination: this.linkPagination
                }
                this.$emit('dataTableAction', dataTableAction)
            },
            setOrder(columnName){
                this.sortKey = columnName;
                this.dataTableAction();
            },
            setLinkPagination(linkPagination){
                if(linkPagination != null){
                    this.linkPagination = linkPagination;
                    this.dataTableAction();
                }
            }
        }
    };
</script>
<template>
    <hr/>
    <BRow>
        <BCol cols="6">
            <div class="d-flex justify-content-start">
                <span class="p-1">Tampilkan</span> 
                <select class="form-control form-control-sm" style="width: 7.5%;" v-model="this.limitOrder" v-on:change="dataTableAction()">
                    <option value="10" selected>10</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                    <option value="200">200</option>
                    <option value="500">500</option>
                </select>
                <span class="p-1">data</span>
            </div>
        </BCol>
        <BCol cols="6">
            <div class="d-flex justify-content-end p-1">
                <input
                    type="text"
                    class="form-control w-50 p-1"
                    placeholder="Cari Data ..."
                    v-model="this.searchData"
                    v-on:change="dataTableAction()"
                />
            </div>
        </BCol>
        <BCol cols="12">
            <div class="table-responsive mt-2">
                <table class="table table-bordered table-striped mb-0">
                    <thead class="table-dark">
                        <tr>
                            <th
                                v-for="column in column"
                                :key="column.name"
                                @click="column.name != '-' ? setOrder(column.name) : ''"
                                :style="column.name != '-' ? 'width:' + column.width + ';' + 'cursor:pointer;' : 'width:' + column.width + ';'"
                                class="text-center"
                            >
                                {{ column.label }}
                                <i
                                    :class="
                                        column.name != '-'
                                        ? sortKey === column.name
                                        ? sortOrder[column.name] > 0
                                            ? 'bx bx-sort-up'
                                            : 'bx bx-sort-down'
                                        : 'bx bx-move-vertical'
                                        : ''
                                    "
                                ></i>
                            </th>
                        </tr>
                    </thead>
                    <slot></slot>
                </table>
            </div>
        </BCol>
        <BCol cols="6">
            <div class="d-flex justify-content-start pt-2">
                Menampilkan data ke {{ TableHeadPagination.PageFrom ? TableHeadPagination.PageFrom : 0 }} 
                sampai {{ TableHeadPagination.PageTo ? TableHeadPagination.PageTo : 0 }} 
                dari total {{ TableHeadPagination.PageTotal ? TableHeadPagination.PageTotal : 0 }} data.
            </div>
        </BCol>
        <BCol cols="6">
            <div class="d-flex justify-content-end">
                <ul class="pagination">
                    <li
                        v-for="(page, index) in TableHeadPagination.PaginationLinks"
                        v-bind:class="{ active: page.active }"
                        :key="index"
                        class="page-item"
                    >
                        <div 
                            :disabled="page.url == null ? true : false" 
                            v-on:click="setLinkPagination(page.url)"
                            class="page-link c-page-link-number" 
                        >
                            <div v-html="page.label"></div>
                        </div>
                    </li>
                </ul>
            </div>
        </BCol>   
    </BRow>
</template>