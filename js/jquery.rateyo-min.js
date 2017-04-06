!function($){"use strict";function t(){var t=!1;return function(r){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(r)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(r.substr(0,4)))&&(t=!0)}(navigator.userAgent||navigator.vendor||window.opera),t}function r(t,r,n){return t===r?t=r:t===n&&(t=n),t}function n(t,r,n){if(!(t>=r&&t<=n))throw Error("Invalid Rating, expected value between "+r+" and "+n);return t}function e(t){return void 0!==t}function a(t,r,n){var e=n/100*(r-t);return e=Math.round(t+e).toString(16),1===e.length&&(e="0"+e),e}function i(t,r,n){if(!t||!r)return null;n=e(n)?n:0,t=m(t),r=m(r);var i=a(t.r,r.r,n),o=a(t.b,r.b,n);return"#"+i+a(t.g,r.g,n)+o}function o(a,l){function c(t){e(t)||(t=l.rating),P=t;var r=t/X,n=r*G;r>1&&(n+=(Math.ceil(r)-1)*J),h(l.ratedFill),n=l.rtl?100-n:n,Q.css("width",n+"%")}function u(){K=D*l.numStars+H*(l.numStars-1),G=D/K*100,J=H/K*100,a.width(K),c()}function f(t){var r=l.starWidth=t;return D=window.parseFloat(l.starWidth.replace("px","")),N.find("svg").attr({width:l.starWidth,height:r}),Q.find("svg").attr({width:l.starWidth,height:r}),u(),a}function g(t){return l.spacing=t,H=parseFloat(l.spacing.replace("px","")),N.find("svg:not(:first-child)").css({"margin-left":t}),Q.find("svg:not(:first-child)").css({"margin-left":t}),u(),a}function m(t){return l.normalFill=t,(l.rtl?Q:N).find("svg").attr({fill:l.normalFill}),a}function h(t){if(l.multiColor){var r=P-L,n=r/l.maxValue*100,e=l.multiColor||{};t=i(e.startColor||d.startColor,e.endColor||d.endColor,n)}else Z=t;return l.ratedFill=t,(l.rtl?N:Q).find("svg").attr({fill:l.ratedFill}),a}function v(t){t=!!t,l.rtl=t,m(l.normalFill),c()}function y(t){l.multiColor=t,h(t||Z)}function w(t){l.numStars=t,X=l.maxValue/l.numStars,N.empty(),Q.empty();for(var r=0;r<l.numStars;r++)N.append($(l.starSvg||p)),Q.append($(l.starSvg||p));return f(l.starWidth),m(l.normalFill),g(l.spacing),c(),a}function b(t){return l.maxValue=t,X=l.maxValue/l.numStars,l.rating>t&&q(t),c(),a}function k(t){return l.precision=t,q(l.rating),a}function x(t){return l.halfStar=t,a}function S(t){return l.fullStar=t,a}function C(t){var r=t%X,n=X/2,e=l.halfStar,a=l.fullStar;return a||e?(a||e&&r>n?t+=X-r:(t-=r,r>0&&(t+=n)),t):t}function F(t){var r=N.offset(),n=r.left,e=n+N.width(),a=l.maxValue,i=t.pageX,o=0;if(i<n)o=L;else if(i>e)o=a;else{var s=(i-n)/(e-n);if(H>0){s*=100;for(var c=s;c>0;)c>G?(o+=X,c-=G+J):(o+=c/G*X,c=0)}else o=s*l.maxValue;o=C(o)}return l.rtl&&(o=a-o),o}function j(t){return l.readOnly=t,a.attr("readonly",!0),B(),t||(a.removeAttr("readonly"),Y()),a}function q(t){var e=t,i=l.maxValue;return"string"==typeof e&&("%"===e[e.length-1]&&(e=e.substr(0,e.length-1),i=100,b(i)),e=parseFloat(e)),n(e,L,i),e=parseFloat(e.toFixed(l.precision)),r(parseFloat(e),L,i),l.rating=e,c(),U&&a.trigger("rateyo.set",{rating:e}),a}function z(t){return l.onInit=t,a}function I(t){return l.onSet=t,a}function V(t){return l.onChange=t,a}function W(t){var n=F(t).toFixed(l.precision),e=l.maxValue;n=r(parseFloat(n),L,e),c(n),a.trigger("rateyo.change",{rating:n})}function E(){t()||(c(),a.trigger("rateyo.change",{rating:l.rating}))}function A(t){var r=F(t).toFixed(l.precision);r=parseFloat(r),R.rating(r)}function M(t,r){l.onInit&&"function"==typeof l.onInit&&l.onInit.apply(this,[r.rating,R])}function O(t,r){l.onChange&&"function"==typeof l.onChange&&l.onChange.apply(this,[r.rating,R])}function T(t,r){l.onSet&&"function"==typeof l.onSet&&l.onSet.apply(this,[r.rating,R])}function Y(){a.on("mousemove",W).on("mouseenter",W).on("mouseleave",E).on("click",A).on("rateyo.init",M).on("rateyo.change",O).on("rateyo.set",T)}function B(){a.off("mousemove",W).off("mouseenter",W).off("mouseleave",E).off("click",A).off("rateyo.init",M).off("rateyo.change",O).off("rateyo.set",T)}this.node=a.get(0);var R=this;a.empty().addClass("jq-ry-container");var _=$("<div/>").addClass("jq-ry-group-wrapper").appendTo(a),N=$("<div/>").addClass("jq-ry-normal-group").addClass("jq-ry-group").appendTo(_),Q=$("<div/>").addClass("jq-ry-rated-group").addClass("jq-ry-group").appendTo(_),X,D,G,H,J,K,L=0,P=l.rating,U=!1,Z=l.ratedFill;this.rating=function(t){return e(t)?(q(t),a):l.rating},this.destroy=function(){return l.readOnly||B(),o.prototype.collection=s(a.get(0),this.collection),a.removeClass("jq-ry-container").children().remove(),a},this.method=function(t){if(!t)throw Error("Method name not specified!");if(!e(this[t]))throw Error("Method "+t+" doesn't exist!");var r=Array.prototype.slice.apply(arguments,[]),n=r.slice(1);return this[t].apply(this,n)},this.option=function(t,r){if(!e(t))return l;var n;switch(t){case"starWidth":n=f;break;case"numStars":n=w;break;case"normalFill":n=m;break;case"ratedFill":n=h;break;case"multiColor":n=y;break;case"maxValue":n=b;break;case"precision":n=k;break;case"rating":n=q;break;case"halfStar":n=x;break;case"fullStar":n=S;break;case"readOnly":n=j;break;case"spacing":n=g;break;case"rtl":n=v;break;case"onInit":n=z;break;case"onSet":n=I;break;case"onChange":n=V;break;default:throw Error("No such option as "+t)}return e(r)?n(r):l[t]},w(l.numStars),j(l.readOnly),l.rtl&&v(l.rtl),this.collection.push(this),this.rating(l.rating,!0),U=!0,a.trigger("rateyo.init",{rating:l.rating})}function l(t,r){var n;return $.each(r,function(){if(t===this.node)return n=this,!1}),n}function s(t,r){return $.each(r,function(n){if(t===this.node){var e=r.slice(0,n),a=r.slice(n+1,r.length);return r=e.concat(a),!1}}),r}function c(t){var r=o.prototype.collection,n=$(this);if(0===n.length)return n;var e=Array.prototype.slice.apply(arguments,[]);if(0===e.length)t=e[0]={};else{if(1!==e.length||"object"!=typeof e[0]){if(e.length>=1&&"string"==typeof e[0]){var a=e[0],i=e.slice(1),s=[];return $.each(n,function(t,n){var e=l(n,r);if(!e)throw Error("Trying to set options before even initialization");var o=e[a];if(!o)throw Error("Method "+a+" does not exist!");var c=o.apply(e,i);s.push(c)}),s=1===s.length?s[0]:s}throw Error("Invalid Arguments")}t=e[0]}return t=$.extend({},f,t),$.each(n,function(){if(!l(this,r))return new o($(this),$.extend({},t))})}function u(){return c.apply(this,Array.prototype.slice.apply(arguments,[]))}var p='<?xml version="1.0" encoding="utf-8"?><svg version="1.1"xmlns="http://www.w3.org/2000/svg"viewBox="0 12.705 512 486.59"x="0px" y="0px"xml:space="preserve"><polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 "/></svg>',f={starWidth:"32px",normalFill:"gray",ratedFill:"#f39c12",numStars:5,maxValue:5,precision:1,rating:0,fullStar:!1,halfStar:!1,readOnly:!1,spacing:"0px",rtl:!1,multiColor:null,onInit:null,onChange:null,onSet:null,starSvg:null},d={startColor:"#c0392b",endColor:"#f1c40f"},g=/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i,m=function(t){if(!g.test(t))return null;var r=g.exec(t);return{r:parseInt(r[1],16),g:parseInt(r[2],16),b:parseInt(r[3],16)}};o.prototype.collection=[],window.RateYo=o,$.fn.rateYo=u}(window.jQuery),$(function(){$("#rateYo").rateYo({rating:3,starWidth:"20px",normalFill:"#183c53",ratedFill:"#BC0033",spacing:"5px"})});