// Global Import
window.jQuery = window.$ = require('jquery');
var bootstrap = require("bootstrap-sass/assets/javascripts/bootstrap.js");
import swal from 'sweetalert2';
window.swal = swal;

// import module
import Scroll from './modules/scroll.js';

$(document).ready(function() {
  Scroll.init();
});
