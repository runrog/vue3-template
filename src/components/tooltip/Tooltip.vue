<template>
  <component
    :class="classes"
    :is="tag"
    @click.prevent="wrapperClick"
    @mouseover="checkTrigger"
    @mouseleave="removeTip"
    ref="el">
    <slot></slot>
    <span
      ref="tooltip"
      class="name-tip"
      @mouseover.stop
      :class="{
        'name-active-tip': active
      }"
      :style="{
        backgroundColor: dark ? darkColor : null,
        left: tipCoords.left,
        right: tipCoords.right,
        top: tipCoords.top,
        pointerEvents: !active ? 'none' : null,
      }">
        {{ override || text }}
      <div
        ref="arrow"
        :style="{
          ['border' + startCase(position) + 'Color']: dark ? darkColor : null,
          left: arrowCoords.left,
          right: arrowCoords.right,
          top: arrowCoords.top,
        }"
        class="name-tooltip-arrow"
        :class="arrowClasses[position]"></div>
    </span>
  </component>
</template>

<script>
import _ from 'lodash';

export default {
  name: 'tool-tip',
  data() {
    return {
      active: false,
      darkColor: '#27282b',
      debounce: null,
      tipCoords: {
        left: null,
        right: null,
        top: null,
      },
      arrowCoords: {
        left: null,
        right: null,
        top: null,
      },
      arrowClasses: {
        top: 'name-at',
        bottom: 'name-ab',
        right: 'name-ar',
        left: 'name-al',
      },
    };
  },
  props: {
    text: {
      type: String,
      required: true,
      default: '',
    },
    override: {
      type: [String, Boolean],
      required: false,
      default: false,
    },
    tag: {
      type: String,
      required: false,
      default: 'div',
    },
    position: {
      type: String,
      required: false,
      default: 'top',
    },
    classes: {
      type: Array,
      required: false,
      default() {
        return [];
      },
    },
    ellipsis: {
      type: Boolean,
      required: false,
      default: false,
    },
    dark: {
      type: Boolean,
      required: false,
      default: false,
    },
    onClick: {
      type: Function,
      require: false,
      default: () => {},
    },
    wait: {
      type: Number,
      require: false,
      default: 100,
    },
  },
  methods: {
    checkTrigger() {
      if ((this.ellipsis && this.overflown()) || !this.ellipsis) {
        clearTimeout(this.debounce);
        this.debounce = setTimeout(this.moveTip, this.wait);
      }
    },
    moveTip() {
      const $toolTip = this.$refs.tooltip;
      const $el = this.$refs.el;
      const $arrow = this.$refs.arrow;
      document.body.appendChild($toolTip);

      const focus = this.ellipsis ? $el.parentNode : $el;
      const windowWidth = window.innerWidth;
      const triggerHeight = ~~($el.offsetHeight);
      const triggerWidth = ~~(focus.offsetWidth);
      const triggerOffsetLeft = this.getOffsets(focus).left;
      const triggerOffsetTop = this.getOffsets($el).top;
      const toolTipWidth = ~~($toolTip.offsetWidth);
      const toolTipHeight = ~~($toolTip.offsetHeight);

      const liveArrowHeight = ~~($arrow.offsetHeight);
      const liveArrowWidth = ~~($arrow.offsetWidth);

      // NOTE: If margins are needed on a tip icon, make sure to add it to the
      // DOM read element and not a psuedo class like :before or :after, because that won't
      // be calculated into the tip position. That is a DOM limitation.

      let leftValue;
      let topValue;

      if (this.position === 'top' || this.position === 'bottom') {
        if (toolTipWidth <= triggerWidth) {
          // if tip is smaller than tip trigger
          leftValue = (triggerOffsetLeft) + ((triggerWidth - toolTipWidth) / 2);
          this.tipCoords.left = `${leftValue}px`;
        } else if (toolTipWidth > triggerWidth) {
          leftValue = (triggerOffsetLeft) - ((toolTipWidth - triggerWidth) / 2);
          // if tip will bleed off to the right or left of window
          if ((leftValue + toolTipWidth) >= (windowWidth)) {
            leftValue = triggerOffsetLeft - (toolTipWidth - triggerWidth);
            this.arrowCoords.left = 'auto';
            this.arrowCoords.right = `${(triggerWidth / 2) - (liveArrowWidth / 2)}px`;
          } else if (leftValue <= 0) {
            leftValue = triggerOffsetLeft;
            this.arrowCoords.right = 'auto';
            this.arrowCoords.left = `${(triggerWidth / 2) - (liveArrowWidth / 2)}px`;
          }
          this.tipCoords.left = `${leftValue}px`;
        }
        if (this.position === 'top') {
          topValue = (triggerOffsetTop - toolTipHeight) - (liveArrowHeight);
          this.tipCoords.top = `${topValue}px`;
        } else if (this.position === 'bottom') {
          topValue = (triggerOffsetTop + triggerHeight) + (liveArrowHeight);
          this.tipCoords.top = `${topValue}px`;
        }
      }
      if (this.position === 'right' || this.position === 'left') {
        if (triggerHeight >= toolTipHeight) {
          topValue = (triggerOffsetTop) + ((triggerHeight - toolTipHeight) / 2);
          this.tipCoords.top = `${topValue}px`;
        } else if (triggerHeight < toolTipHeight) {
          topValue = (triggerOffsetTop) - ((toolTipHeight - triggerHeight) / 2);
          this.tipCoords.top = `${topValue}px`;
        }
        if (this.position === 'right') {
          leftValue = (triggerOffsetLeft + triggerWidth) + liveArrowWidth;
          this.tipCoords.left = `${leftValue}px`;
        } else if (this.position === 'left') {
          leftValue = (triggerOffsetLeft) - (toolTipWidth + liveArrowWidth);
          this.tipCoords.left = `${leftValue}px`;
        }
        // Vertically center arrows for left/right positioned tips
        const arrowTop = (toolTipHeight / 2) - (liveArrowHeight / 2);
        this.arrowCoords.top = `${arrowTop}px`;
      }
      this.active = true;
    },
    resetCoords() {
      this.tipCoords.left = null;
      this.tipCoords.right = null;
      this.tipCoords.top = null;
      this.arrowCoords.left = null;
      this.arrowCoords.right = null;
      this.arrowCoords.top = null;
    },
    removeTip() {
      clearTimeout(this.debounce);
      this.active = false;
      const $toolTip = this.$refs.tooltip;
      const $el = this.$refs.el;
      $el.appendChild($toolTip);
      this.resetCoords();
    },
    // Make sure we get the correct offsets if trigger is in a relative parent
    getOffsets(tipIcon) {
      const trigger = tipIcon.getBoundingClientRect();
      const { top } = trigger;
      const { left } = trigger;
      return { top: ~~(top), left: ~~(left) };
    },
    overflown() {
      const $el = this.$refs.el;
      const parent = window.getComputedStyle($el.parentNode, null);
      let parentL = parent.getPropertyValue('padding-left');
      parentL = ~~(parentL.split('px')[0]);
      let parentR = parent.getPropertyValue('padding-right');
      parentR = ~~(parentR.split('px')[0]);
      return ~~($el.offsetWidth) > ~~($el.parentNode.offsetWidth - parentL - parentR);
    },
    wrapperClick() {
      this.removeTip();
      this.onClick();
    },
    startCase(text) {
      return _.startCase(text);
    },
  },
};
</script>

<style scoped lang="scss">
.name-tip {
  background-color: $black;
  border-radius: 2px;
  color: $white;
  font-size: 9pt;
  max-width: 250px;
  opacity: 0;
  padding: 8px 12px;
  position: fixed;
  z-index: 99999999;
}

.name-ab {
  border-bottom: 6px solid $black;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  left: 0;
  margin: 0 auto;
  right: 0;
  top: -5px;
}

.name-at {
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid $black;
  bottom: -5px;
  left: 0;
  margin: 0 auto;
  right: 0;
}

.name-ar {
  border-bottom: 6px solid transparent;
  border-right: 6px solid $black;
  border-top: 6px solid transparent;
  left: -5px;
}

.name-al {
  border-bottom: 6px solid transparent;
  border-left: 6px solid $black;
  border-top: 6px solid transparent;
  right: -5px;
}

.name-active-tip {
  opacity: 1;
  transition-duration: .2s;
}

.name-tooltip-arrow {
  height: 0;
  position: absolute;
  width: 0;
}
</style>
