import Vue from 'vue/dist/vue';
import './index.css';

import { mode, makeMatrixChange } from '../src';

const urls = [
  'http://bgcdn.acohome.cn/100965.jpg',
  'http://bgcdn.acohome.cn/1501505.jpg',
  'http://bgcdn.acohome.cn/1501655.jpg',
  'http://bgcdn.acohome.cn/286477.jpg',
  'http://bgcdn.acohome.cn/328845.jpg'
];

const move = makeMatrixChange(document.getElementById('app'), {
  images: urls,
  row: 7,
  col: 9
});

const getRandom = (min, max) => Math.round(Math.random() * (max - min)) + min;

move.movePoint(mode[0]);

new Vue({
  el: '#option',
  data: {
    inSelect: 'flash',
    inList: [
      'flash',
      'bounceIn',
      'bounceInDown',
      'bounceInLeft',
      'bounceInRight',
      'bounceInUp',
      'fadeIn',
      'fadeInDown',
      'fadeInDownBig',
      'fadeInLeft',
      'fadeInLeftBig',
      'fadeInRight',
      'fadeInRightBig',
      'fadeInUp',
      'fadeInUpBig',
      'flipInX',
      'flipInY',
      'lightSpeedIn',
      'rotateIn',
      'rotateInDownLeft',
      'rotateInDownRight',
      'rotateInUpLeft',
      'rotateInUpRight',
      'rollIn',
      'zoomIn',
      'zoomInDown',
      'zoomInLeft',
      'zoomInRight',
      'zoomInUp',
      'slideInDown',
      'slideInLeft',
      'slideInRight',
      'slideInUp'
    ],
    outSelect: 'flash',
    outList: [
      'flash',
      'bounceOut',
      'bounceOutDown',
      'bounceOutLeft',
      'bounceOutRight',
      'bounceOutUp',
      'fadeOut',
      'fadeOutDown',
      'fadeOutDownBig',
      'fadeOutLeft',
      'fadeOutLeftBig',
      'fadeOutRight',
      'fadeOutRightBig',
      'fadeOutUp',
      'fadeOutUpBig',
      'flipOutX',
      'flipOutY',
      'lightSpeedOut',
      'rotateOut',
      'rotateOutDownLeft',
      'rotateOutDownRight',
      'rotateOutUpLeft',
      'rotateOutUpRight',
      'hinge',
      'rollOut',
      'zoomOut',
      'zoomOutDown',
      'zoomOutLeft',
      'zoomOutRight',
      'zoomOutUp',
      'slideOutDown',
      'slideOutLeft',
      'slideOutRight',
      'slideOutUp'
    ]
  },
  methods: {
    start() {
      move.movePoint(mode[getRandom(0, mode.length - 1)], {
        animate: true,
        classNameIn: 'animated ' + this.inSelect,
        classNameOut: 'animated ' + this.outSelect
      });
    }
  }
});