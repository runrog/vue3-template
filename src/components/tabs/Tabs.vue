<template>
  <div class="adminUi-sm-tabs">
    <ul class="adminUi-sm-tabsMenu">
      <li
        v-for="tab in shownTabs"
        :key="tab.title"
        :class="{
          'adminUi-sm-activeTab': activeTab === tab.title,
        }"
        class="adminUi-sm-tab"
        @click.prevent="setActiveTab(tab.title)"
        :style="{
          'border-bottom-color': activeTab === tab.title ? border : null
        }">
        <a
          class="adminUi-sm-tabLink"
          :class="{
            'adminUi-sm-activeTabLink': activeTab === tab.title,
          }"
          :href="'#' + tab.title">
          {{ tab.title }}
        </a>
      </li>
    </ul>
    <div class="adminUi-sm-tabContent">
      <div v-for="tab in shownTabs" :key="tab.title" v-show="activeTab === tab.title">
        <component :props="{ activeTab, ...props }" :is="tab.render"></component>
      </div>
    </div>
  </div>
</template>

<script>
import DefaultTab from './DefaultTab.vue';

export default {
  name: 'global-tabs',
  computed: {
    shownTabs() {
      return this.tabs.filter(tab => this.hasCondition(tab));
    },
  },
  data() {
    return {
      activeTab: null,
    };
  },
  props: {
    tabs: {
      type: Array,
      required: false,
      default: () => [{
        title: 'Tab One',
        render: DefaultTab,
      }],
    },
    border: {
      type: String,
      required: false,
      default: '#ffffff',
    },
    activeOverride: {
      type: [String, Boolean],
      required: false,
      default: false,
    },
    props: {
      type: Object,
      required: false,
      default: () => ({}),
    },
  },
  created() {
    this.activeTab = this.activeOverride || this.shownTabs[0].title;
  },
  methods: {
    setActiveTab(title) {
      this.activeTab = title;
    },
    hasCondition(tab) {
      const has = typeof tab.condition !== 'undefined';
      return !has || (has && tab.condition);
    },
  },
};
</script>

<style scoped lang="scss">
.adminUi-sm-tabs {
  @include clear-fix;
  margin-bottom: 10px;
  position: relative;
}

.adminUi-sm-tabsMenu {
  list-style: none;
  margin: 0;
  margin-left: 10px;
  padding: 0;
  text-align: left;
}

.adminUi-sm-tab {
  border: 1px solid $black;
  border-bottom: 0;
  cursor: default;
  display: inline-block;
  padding: 5px 10px;

  &:hover {
    cursor: pointer;
  }
}

.adminUi-sm-activeTab {
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}

.adminUi-sm-tabLink {
  color: $black;
  font-size: 10pt;
  text-decoration: none;

  &:hover {
    color: $black;
  }
}

.adminUi-sm-activeTabLink {
  color: #ff0000;
}

.adminUi-sm-tabContent {
  border-bottom: 0;
  border-top: 1px solid $black;
  font-size: 11pt;
  margin-top: -1px;
  min-height: 10px;
  padding-bottom: 10px;
  padding-top: 10px;
}

[class^='adminUi-sm-tabContent-'] {
  display: none;
}
</style>
