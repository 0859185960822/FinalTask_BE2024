<script>
import { categoriesData, rightbarArchiveData, popularData, badgeList } from "./data"

export default {
    data() {
        return {
            categoriesData, rightbarArchiveData, popularData, badgeList
        }
    },
}
</script>

<template>
    <BCard no-body>
        <BCardBody class="p-4">
            <div class="search-box">
                <p class="text-muted">Search</p>
                <div class="position-relative">
                    <input type="text" class="form-control rounded bg-light border-light" placeholder="Search..." />
                    <i class="mdi mdi-magnify search-icon"></i>
                </div>
            </div>

            <hr class="my-4" />

            <div>
                <p class="text-muted">Categories</p>
                <ul class="list-unstyled fw-medium">
                    <li v-for="(item, index) in categoriesData" :key="index">
                        <BLink href="javascript:void(0);" class="text-muted py-2 d-block">
                            <i class="mdi mdi-chevron-right me-1"></i>
                            {{ item.label }}
                            <span v-if="item.badge"
                                class="badge badge-soft-success rounded-pill badge-pill float-end ms-1 font-size-12">
                                {{ item.badgeCount }}
                            </span>
                        </BLink>
                    </li>
                </ul>
            </div>

            <hr class="my-4" />
            <div>
                <p class="text-muted">Archive</p>

                <ul class="list-unstyled fw-medium">
                    <li v-for="(item, index) in rightbarArchiveData" :key="index">
                        <BLink href="javascript:void(0);." class="text-muted py-2 d-block">
                            <i class="mdi mdi-chevron-right me-1"></i>
                            {{ item.year }}
                            <span class="badge badge-soft-success rounded-pill badge-pill float-end ms-1 font-size-12">
                                {{ item.badgeCount }}
                            </span>
                        </BLink>
                    </li>
                </ul>
            </div>
            <hr class="my-4" />
            <div>
                <p class="text-muted mb-2">Popular Posts</p>

                <div class="list-group list-group-flush">
                    <BLink v-for="(item, index) in popularData" :key="index" href="javascript:void(0);"
                        class="list-group-item text-muted py-3 px-2">
                        <div class="d-flex align-items-center">
                            <div class="me-3">
                                <img :src="item.image" alt="" class="avatar-md h-auto d-block rounded" />
                            </div>
                            <div class="flex-grow-1 overflow-hidden">
                                <h5 class="font-size-13 text-truncate">
                                    {{ item.title }}
                                </h5>
                                <p class="mb-0 text-truncate">{{ item.date }}</p>
                            </div>
                        </div>
                    </BLink>
                </div>
            </div>

            <hr class="my-4" />

            <div>
                <p class="text-muted">Tags</p>

                <div class="d-flex flex-wrap gap-2 widget-tag">
                    <div v-for="(badge, index) in badgeList" :key="index">
                        <BLink href="javascript:void(0);" class="badge bg-light font-size-12">{{ badge.label }}</BLink>
                    </div>
                </div>
            </div>
        </BCardBody>
    </BCard>
</template>