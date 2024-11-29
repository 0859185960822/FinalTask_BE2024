<script>
// import { menuItems } from "./horizontal-menu";

// pinia stateful management
import { useAuthStore } from '@/state/pinia'
const auth = useAuthStore()

export default {
  data() {
    return {
      menuItems: auth.userMenu,
    };
  },
  mounted() {
    var links = document.getElementsByClassName("side-nav-link-ref");
    var matchingMenuItem = null;
    for (var i = 0; i < links.length; i++) {
      if (window.location.pathname === links[i].pathname) {
        matchingMenuItem = links[i];
        break;
      }
    }

    if (matchingMenuItem) {
      matchingMenuItem.classList.add("active");
      var parent = matchingMenuItem.parentElement;

      /**
       * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
       * We should come up with non hard coded approach
       */

      if (parent) {
        parent.classList.add("active");
        const parent2 = parent.parentElement;
        if (parent2) {
          parent2.classList.add("active");
          const parent3 = parent2.parentElement;
          if (parent3) {
            parent3.classList.add("active");
            const parent4 = parent3.parentElement;
            if (parent4) {
              parent4.classList.add("active");
              const parent5 = parent4.parentElement;
              if (parent5) {
                parent5.classList.add("active");
                const parent6 = parent5.parentElement;
                if (parent6) {
                  parent6.classList.add("active");
                }
              }
            }
          }
        }
      }
    }
  },
  methods: {
    /**
     * Returns true or false if given menu item has child or not
     * @param item menuItem
     */
    hasItems(item) {
      return item.subItems !== undefined ? item.subItems.length > 0 : false;
    },
  },
};
</script>
<template>
  <div class="topnav">
    <BContainer fluid>
      <nav class="navbar navbar-light navbar-expand-lg topnav-menu active">
        <div class="collapse navbar-collapse active" id="topnav-menu-content">
          <ul class="navbar-nav">
            <!-- Menu data -->
            <template v-for="(item, index) of menuItems" :key="index">
              <li class="nav-item dropdown">

                <router-link v-if="item.subItems.length == 0 && item.isTitle == false" class="nav-link dropdown-toggle arrow-none side-nav-link-ref" id="topnav-components" :to="{name:item.link}" role="button">
                  <i :class="`${item.icon} me-2`"></i>{{ $t(item.label) }}
                  <div class="arrow-down" v-if="hasItems(item)"></div>
                </router-link>

                <BLink v-if="item.subItems.length != 0 && item.isTitle == false" class="nav-link dropdown-toggle arrow-none" id="topnav-components" role="button">
                  <i :class="`${item.icon} me-1`"></i>
                  {{ $t(item.label) }}
                  <div class="arrow-down"></div>
                </BLink>

                <div class="dropdown-menu" aria-labelledby="topnav-dashboard" v-if="hasItems(item)" :class="{ 'dropdown-mega-menu-xl px-2': item.subItems.length > 11 }">
                  <template v-for="(subitem, index) of item.subItems">
                    <router-link class="col dropdown-item side-nav-link-ref" :key="index" v-if="item.subItems.length < 12 && !hasItems(subitem)" :to="{name:subitem.link}">{{ $t(subitem.label) }}</router-link>
                    <div v-if="item.subItems.length > 11" :key="index">
                      <BRow v-if="index % 3 == 0">
                        <BCol lg="4"><router-link class="dropdown-item side-nav-link-ref" :to="{name:subitem.link}">{{ $t(item.subItems[index].label) }}</router-link></BCol>
                        <BCol lg="4" v-if="item.subItems[index + 1].link"><router-link class="dropdown-item side-nav-link-ref" :to="{name:item.subItems[index + 1].link}">{{ $t(item.subItems[index + 1].label) }}</router-link></BCol>
                        <BCol lg="4" v-if="item.subItems[index + 2]"><router-link class="dropdown-item side-nav-link-ref" :to="{name:item.subItems[index + 2].link}">{{ $t(item.subItems[index + 2].label) }}</router-link></BCol>
                      </BRow>
                    </div>

                    <div class="dropdown" v-if="hasItems(subitem)" :key="index">

                      <BLink class="dropdown-item dropdown-toggle" href="javascript: void(0);">{{ $t(subitem.label) }}
                        <div class="arrow-down"></div>
                      </BLink>
                      <div class="dropdown-menu">
                        <template v-for="(subSubitem, index) of subitem.subItems">
                          <router-link class="dropdown-item side-nav-link-ref" :key="index" v-if="!hasItems(subSubitem)" :to="{name:subSubitem.link}">{{ $t(subSubitem.label) }}</router-link>
                          <div class="dropdown" v-if="hasItems(subSubitem)" :key="index">
                            <BLink class="dropdown-item dropdown-toggle" href="javascript: void(0);">{{ $t(subSubitem.label) }}
                              <div class="arrow-down"></div>
                            </BLink>
                            <div class="dropdown-menu">
                              <template v-for="(
                                  subSubSubitem, index
                                ) of subSubitem.subItems" :key="index">
                                <router-link class="dropdown-item side-nav-link-ref" :to="{name:subSubSubitem.link}" routerLinkActive="active">{{ $t(subSubSubitem.label) }}</router-link>
                              </template>
                            </div>
                          </div>
                        </template>
                      </div>
                    </div>

                    <!-- <div class="dropdown" v-if="!hasItems(subitem)" :key="'nested-child' + index">
                      <router-link class="dropdown-item side-nav-link-ref" :key="index" :to="subitem.link">{{ $t(subitem.label) }}</router-link>
                    </div> -->
                  </template>
                </div>
              </li>
            </template>
          </ul>
        </div>
      </nav>
    </BContainer>
  </div>
</template>