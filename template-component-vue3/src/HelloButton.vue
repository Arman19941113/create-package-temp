<script lang="ts">
export default {
  name: 'HelloButton',
}
</script>

<script setup lang="ts">
import { PropType } from 'vue'
import { useSlots, computed, ref, reactive } from 'vue'

const props = defineProps({
  theme: {
    type: String as PropType<'default' | 'primary' | 'success' | 'warning' | 'danger'>,
    default: 'default',
    validator: (value: string): boolean => ['default', 'primary', 'success', 'warning', 'danger'].includes(value),
  },
  round: {
    type: Boolean,
    default: false,
  },
})

const slots = useSlots()
const hasSlots = computed(() => Boolean(slots.default))

const isClicked = ref(false)
function handleClick() {
  isClicked.value = true
  setTimeout(() => {
    isClicked.value = false
  }, 300)
}

const buttonClass = reactive(['my-button', 'my-button-' + props.theme, {
  'my-button-is-round': props.round,
  'my-button-is-clicked': isClicked,
}])
const buttonStyle = reactive({ padding: hasSlots.value ? '0 7px' : undefined })
</script>

<template>
  <button :class="buttonClass" :style="buttonStyle" @click="handleClick">
    <slot></slot>
  </button>
</template>

<style>
  .my-button {
    position: relative;
    border-radius: 2px;
    font-size: 14px;
    height: 32px;
    padding: 0 14px;
    vertical-align: middle;
    cursor: pointer;
    color: var(--textColor2);
    transition: color .3s, border-color .3s, background-color .3s;
    &.my-button-is-clicked::after {
      display: block;
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      opacity: .3;
      border-radius: 2px;
      animation: my-button-fade-default .3s linear;
    }
    &.my-button-is-round {
      border-radius: 16px;
      &::after {
        border-radius: 16px;
      }
    }
    &:focus {
      outline: none;
    }

    &.my-button-default {
      color: var(--textColor2);
      border: 1px solid var(--borderColor1);
      background-color: var(--whiteColor);
      &:hover,
      &:focus {
        color: var(--primaryColor);
        border-color: var(--primaryColor);
        background-color: var(--whiteColor);
        transition: color .3s, border-color .3s, background-color .3s;
      }
      &:active {
        color: var(--primaryColorDark);
        border-color: var(--primaryColorDark);
        background-color: var(--whiteColor);
        transition: color .3s, border-color .3s, background-color .3s;
      }
    }

    @define-mixin button-theme $theme, $light, $dark {
      color: var(--whiteColor);
      border: 1px solid $theme;
      background-color: $theme;
      &:hover,
      &:focus {
        color: var(--whiteColor);
        border-color: $light;
        background-color: $light;
        transition: color .3s, border-color .3s, background-color .3s;
      }
      &:active {
        color: var(--whiteColor);
        border-color: $dark;
        background-color: $dark;
        transition: color .3s, border-color .3s, background-color .3s;
      }
    }
    &.my-button-primary {
      @mixin button-theme var(--primaryColor), var(--primaryColorLight), var(--primaryColorDark);
    }
    &.my-button-success {
      @mixin button-theme var(--successColor), var(--successColorLight), var(--successColorDark);
      &.my-button-is-clicked::after {
        animation-name: my-button-fade-success;
      }
    }
    &.my-button-warning {
      @mixin button-theme var(--warningColor), var(--warningColorLight), var(--warningColorDark);
      &.my-button-is-clicked::after {
        animation-name: my-button-fade-warning;
      }
    }
    &.my-button-danger {
      @mixin button-theme var(--dangerColor), var(--dangerColorLight), var(--dangerColorDark);
      &.my-button-is-clicked::after {
        animation-name: my-button-fade-danger;
      }
    }
  }

  @keyframes my-button-fade-default {
    25% {
      box-shadow: 0 0 4px 4px var(--primaryColor);
    }
  }
  @keyframes my-button-fade-success {
    25% {
      box-shadow: 0 0 4px 4px var(--successColor);
    }
  }
  @keyframes my-button-fade-warning {
    25% {
      box-shadow: 0 0 4px 4px var(--warningColor);
    }
  }
  @keyframes my-button-fade-danger {
    25% {
      box-shadow: 0 0 4px 4px var(--dangerColor);
    }
  }
  @keyframes my-button-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
