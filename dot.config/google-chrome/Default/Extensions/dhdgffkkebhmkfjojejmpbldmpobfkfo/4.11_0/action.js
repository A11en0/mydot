'use strict';Registry.require(["layout","i18n"],()=>{const d=Registry.get("i18n"),h=Registry.get("layout");d.init();window.sendMessage=(f,g)=>{f.origin="action";const k=a=>{e();g(a)};rea.extension.sendMessage(f,a=>{if(a&&a.i18n)return d.setLocale(a.i18n).always(()=>{e();g(a)});k(a)})};let c=null,b=null;const e=()=>{c&&(window.clearTimeout(c),c=null);b&&(b.remove(),b=null)};c=window.setTimeout(()=>{b=$('<div id="initialWait" class="lds-css ng-scope"><div class="lds-dual-ring"><div></div><div></div></div>');
$("body").append(b)},200);h.init("action.js",{fail:()=>{e();confirm(d.getMessage("An_internal_error_occured_Do_you_want_to_visit_the_forum_"))&&window.open("https://www.tampermonkey.net/bug")}})});