var _sbjs = _sbjs || [];
var year = 365*24*60;
_sbjs.push(['_setSessionLength', year]);

function encode_data(a){return encodeURIComponent(a).replace(/\!/g,"%21").replace(/\~/g,"%7E").replace(/\*/g,"%2A").replace(/\'/g,"%27").replace(/\(/g,"%28").replace(/\)/g,"%29")}function decode_data(a){try{return decodeURIComponent(a).replace(/\%21/g,"!").replace(/\%7E/g,"~").replace(/\%2A/g,"*").replace(/\%27/g,"'").replace(/\%28/g,"(").replace(/\%29/g,")")}catch(b){try{return unescape(a)}catch(c){return""}}}function set_cookie(a,b,c,d,e){var f,g;if(c){var h=new Date;h.setTime(h.getTime()+60*c*1e3),f="; expires="+h.toGMTString()}else f="";g=d&&!e?";domain=."+d:"",document.cookie=encode_data(a)+"="+encode_data(b)+f+g+"; path=/"}function get_cookie(a){for(var b=encode_data(a)+"=",c=document.cookie.split(";"),d=0;d<c.length;d++){for(var e=c[d];" "===e.charAt(0);)e=e.substring(1,e.length);if(0===e.indexOf(b))return decode_data(e.substring(b.length,e.length))}return null}function destroy_cookie(a){set_cookie(a,"",-1)}var SBJS_CURRENT_COOKIE="sbjs_current",SBJS_FIRST_COOKIE="sbjs_first",SBJS_FIRST_ADD_COOKIE="sbjs_first_add",SBJS_SESSION_COOKIE="sbjs_session",SBJS_REFERER_COOKIE="sbjs_referer",SBJS_UDATA_COOKIE="sbjs_udata",SBJS_COOKIE_EXPIRES=1e6,_sbjs=_sbjs||[];_sbjs.push(["_addOrganicSource","bing.com","q","bing"]),_sbjs.push(["_addOrganicSource","yahoo.com","p","yahoo"]),_sbjs.push(["_addOrganicSource","about.com","q","about"]),_sbjs.push(["_addOrganicSource","aol.com","q","aol"]),_sbjs.push(["_addOrganicSource","ask.com","q","ask"]),_sbjs.push(["_addOrganicSource","globososo.com","q","globo"]),_sbjs.push(["_addOrganicSource","go.mail.ru","q","go.mail.ru"]),_sbjs.push(["_addOrganicSource","rambler.ru","query","rambler"]),_sbjs.push(["_addOrganicSource","tut.by","query","tut.by"]),function(){function a(b){for(var c=a.options,d=c.parser[c.strictMode?"strict":"loose"].exec(b),e={},f=14;f--;)e[c.key[f]]=d[f]||"";return e[c.q.name]={},e[c.key[12]].replace(c.q.parser,function(a,b,d){b&&(e[c.q.name][b]=d)}),e}function b(a){return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}function c(){var a,b,c=document.referrer||N;a="undefined"!=typeof R?R:void 0,b="undefined"!=typeof Q?Q:!0,set_cookie(SBJS_REFERER_COOKIE,K+"="+c,SBJS_COOKIE_EXPIRES,a,!b)}function d(){var a;if("undefined"!=typeof $.utm_source||"undefined"!=typeof $.utm_medium||"undefined"!=typeof $.utm_campaign||"undefined"!=typeof $.utm_content||"undefined"!=typeof $.utm_term||"undefined"!=typeof $.gclid||"undefined"!=typeof $[Y])c(),a=e(w);else if(g(x))c(),a=e(x);else if(!get_cookie(SBJS_SESSION_COOKIE)&&g(y))c(),a=e(y);else{if(get_cookie(SBJS_FIRST_COOKIE)||get_cookie(SBJS_CURRENT_COOKIE))return get_cookie(SBJS_CURRENT_COOKIE);c(),a=e(z)}return a}function e(b){switch(b){case w:q=w,r="undefined"!=typeof $.utm_source?$.utm_source:"undefined"!=typeof $.gclid?"google":N,s="undefined"!=typeof $.utm_medium?$.utm_medium:"undefined"!=typeof $.gclid?"cpc":N,t="undefined"!=typeof $.utm_campaign?$.utm_campaign:"undefined"!=typeof $[Y]?$[Y]:"undefined"!=typeof $.gclid?"google_cpc":N,u=$.utm_content||N,v=$.utm_term||N;break;case x:q=x,r=r||f(document.referrer),s=B,t=N,u=N,v=N;break;case y:q=y,r=r||f(document.referrer),s=s||A,t=N,u=a(document.referrer).path,v=N;break;case z:q=z,r=W||z,s=X||z,t=N,u=N,v=N;break;default:q=O,r=O,s=O,t=O,u=O,v=O}var c={sbjs_type:q,sbjs_source:r,sbjs_medium:s,sbjs_campaign:t,sbjs_content:u,sbjs_term:v};return m(c)}function f(b){return a(b).host.replace("www.","")}function g(a){var b=document.referrer;switch(a){case x:return!!b&&h(b)&&i(b);case y:return!!b&&h(b)&&j(b);default:return!1}}function h(a){if("undefined"!=typeof R&&R.length>0){if(Q){var c=new RegExp("^(.*\\.)?"+b(R)+"$","i");return!f(a).match(c)}return f(a)!==f(R)}return f(a)!==f(location.href)}function i(c){var d="yandex",e="text",f="google",g=new RegExp("^(.*\\.)?"+b(d)+"\\..{2,9}$"),h=new RegExp(".*"+b(e)+"=.*"),i=new RegExp("^(www\\.)?"+b(f)+"\\..{2,9}$");if(a(c).query&&a(c).host.match(g)&&a(c).query.match(h))return r=d,!0;if(a(c).host.match(i))return r=f,!0;if(!(a(c).query&&"undefined"!=typeof U&&U.length>0))return!1;for(var j=0;j<U.length;j++){if(U[j].length>=3&&a(c).host.match(new RegExp("^(.*\\.)?"+b(U[j][1])+"$","i"))&&a(c).query.match(new RegExp(".*"+b(U[j][2])+"=.*","i")))return r=U[j][3]||U[j][1],!0;if(j+1===U.length)return!1}}function j(c){if(!("undefined"!=typeof V&&V.length>0))return r=f(c),!0;for(var d=0;d<V.length;d++){if(V[d].length>1&&a(c).host.match(new RegExp("^(.*\\.)?"+b(V[d][1])+"$","i")))return r=V[d][3]||V[d][1],s=V[d][2]||A,!0;if(d+1===V.length)return r=f(c),!0}}function k(a,b){for(var c=a+"";c.length<b;)c="0"+c;return c}function l(a){var b,c=a.getTimezoneOffset()/60,d=a.getHours();b="undefined"!=typeof Z&&"number"==typeof Z&&Z%1===0?Z:0,a.setHours(d+c+b);var e,f=a.getFullYear(),g=k(a.getMonth(),2),h=k(a.getDate(),2),i=k(a.getHours(),2),j=k(a.getMinutes(),2),l=k(a.getSeconds(),2);return e=f+"-"+g+"-"+h+" "+i+":"+j+":"+l}function m(a){return C+"="+a.sbjs_type+"|"+D+"="+a.sbjs_source+"|"+E+"="+a.sbjs_medium+"|"+F+"="+a.sbjs_campaign+"|"+G+"="+a.sbjs_content+"|"+H+"="+a.sbjs_term}function n(){var a="|"+M+"="+navigator.userAgent;return"undefined"!=typeof T&&T.length>0?L+"="+T+a:L+"="+N+a}function o(){var a=new Date;return I+"="+l(a)+"|"+J+"="+location.href}function p(){var a,b,c;a="undefined"!=typeof S&&S>0?S:30,b="undefined"!=typeof R?R:void 0,c="undefined"!=typeof Q?Q:!0,set_cookie(SBJS_CURRENT_COOKIE,d(),SBJS_COOKIE_EXPIRES,b,!c),get_cookie(SBJS_FIRST_COOKIE)||set_cookie(SBJS_FIRST_ADD_COOKIE,o(),SBJS_COOKIE_EXPIRES,b,!c),get_cookie(SBJS_FIRST_COOKIE)||set_cookie(SBJS_FIRST_COOKIE,get_cookie(SBJS_CURRENT_COOKIE),SBJS_COOKIE_EXPIRES,b,!c),set_cookie(SBJS_SESSION_COOKIE,"1",a,b,!c),set_cookie(SBJS_UDATA_COOKIE,n(),SBJS_COOKIE_EXPIRES,b,!c)}for(var q,r,s,t,u,v,w="utm",x="organic",y="referral",z="typein",A="referral",B="organic",C="typ",D="src",E="mdm",F="cmp",G="cnt",H="trm",I="fd",J="ep",K="ref",L="uip",M="uag",N="(none)",O="(Houston, we have a problem)",P=0;P<_sbjs.length;P++){if("_setBaseHost"===_sbjs[P][0]){var Q,R=_sbjs[P][1];Q=_sbjs[P].length>2?_sbjs[P][2]:!0}if("_setSessionLength"===_sbjs[P][0])var S=parseInt(_sbjs[P][1]);if("_setUserIP"===_sbjs[P][0])var T=_sbjs[P][1];if("_addOrganicSource"===_sbjs[P][0]){var U=U||[];U.push(_sbjs[P])}if("_addReferralSource"===_sbjs[P][0]){var V=V||[];V.push(_sbjs[P])}if("_setTypeinAttributes"===_sbjs[P][0])var W=_sbjs[P][1]||z,X=_sbjs[P][2]||z;if("_setCampaignParam"===_sbjs[P][0])var Y=_sbjs[P][1];if("_setTimeZoneOffset"===_sbjs[P][0])var Z=parseInt(_sbjs[P][1])}var $=function(){for(var a={},b=window.location.search.substring(1),c=b.split("&"),d=0;d<c.length;d++){var e=c[d].split("=");if("undefined"==typeof a[e[0]])a[e[0]]=e[1];else if("string"==typeof a[e[0]]){var f=[a[e[0]],e[1]];a[e[0]]=f}else a[e[0]].push(e[1])}return a}();a.options={strictMode:!1,key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}},p()}.call(this);var get_sbjs=function(){function a(a){return a.replace("sbjs_","")}for(var b={},c=[SBJS_CURRENT_COOKIE,SBJS_FIRST_COOKIE,SBJS_FIRST_ADD_COOKIE,SBJS_REFERER_COOKIE,SBJS_UDATA_COOKIE],d=0;d<c.length;d++){var e;b[a(c[d])]={},e=get_cookie(c[d])?get_cookie(c[d]).split("|"):[];for(var f=0;f<e.length;f++){var g=e[f].split("="),h=g.splice(0,1);h.push(g.join("=")),b[a(c[d])][h[0]]=decode_data(h[1])}}return b}();

// �������� ���� ���������� ��� ���������
var hash = get_cookie('wt_uid');
if(hash == null){
    hash = uniqueid();
}
set_cookie('wt_uid',hash,year);

function submitForm(formObj){
    setHidden(formObj,'wt_uid',hash);

    var GUcid = getCid();
    if(GUcid != ""){
        setHidden(formObj,'cid',GUcid);
    }

    // �������� ���� � �������
    setHidden(formObj,'UTM_SOURCE',get_sbjs.current.src);
    setHidden(formObj,'UTM_MEDIUM',get_sbjs.current.mdm);
    setHidden(formObj,'UTM_CAMPAIGN',get_sbjs.current.cmp); //utm_campaign
    setHidden(formObj,'UTM_TERM',get_sbjs.current.trm);
    setHidden(formObj,'TRAFF_TYPE',get_sbjs.current.typ); //��� �������. ��������� ��������: utm, organic, referral, typein. ������ �� ����.

    setHidden(formObj,'FIRST_UTM_SOURCE',get_sbjs.first.src);
    setHidden(formObj,'FIRST_UTM_MEDIUM',get_sbjs.first.mdm);
    setHidden(formObj,'FIRST_UTM_CAMPAIGN',get_sbjs.first.cmp); //utm_campaign

    if(formObj.NAME && formObj.NAME.value==''){
        formObj.NAME.focus();
        alert('����������, ������� ���� ���!');
        return false;
    }

    if(formObj.EMAIL && formObj.EMAIL.value==''){
        formObj.EMAIL.focus();
        alert('����������� ������������ ���� E-mail!');
        return false;
    }


    if(formObj.EMAIL){
        var b=/^[a-z0-9_\-\.\+]+@([a-z0-9]+[\-\.])*[a-z0-9]+\.[a-z]{2,6}$/i;
        if( !b.test( formObj.EMAIL.value ) ) {
            formObj.EMAIL.focus();
            alert('����������, ������� ���������� ����� E-mail!');
            return false;
        }

    }


    // ���������� ��������� ������ ���� ��� ���������������� ����� ��������
    if(formObj.PH_COUNTRY != undefined && formObj.PH_CODE != undefined && formObj.PH_NUMBER != undefined){
        // �������� ���� ������
        if(formObj.PH_COUNTRY && formObj.PH_COUNTRY.value == ""){
            alert('������� ��������� ��� ������');
            formObj.PH_COUNTRY.focus();
            return false;
        }
        var c=/^\d{0,9}$/i;
        if(!c.test(formObj.PH_COUNTRY.value)){
            formObj.PH_COUNTRY.focus();
            alert('��� ������ ����� ���� ������ ������');
            return false;
        }



        if(formObj.PH_CODE && formObj.PH_CODE.value == ""){
            alert('������� ��������� ���');
            formObj.PH_CODE.focus();
            return false;
        }
        var c=/^\d{0,9}$/i;
        if(!c.test(formObj.PH_CODE.value)){
            formObj.PH_CODE.focus();
            alert('��� ����� ���� ������ ������');
            return false;
        }

        if(formObj.PH_NUMBER && formObj.PH_NUMBER.value == ""){
            alert('������� ��������� �����');
            formObj.PH_NUMBER.focus();
            return false;
        }
        var c=/^\d{0,9}$/i;
        if(!c.test(formObj.PH_NUMBER.value)){
            formObj.PH_NUMBER.focus();
            alert('����� ����� ���� ������ ������');
            return false;
        }
        setHidden(formObj,'PHONE_RAF','+' + formObj.PH_COUNTRY.value + formObj.PH_CODE.value + formObj.PH_NUMBER.value);
        //return false;
    }else{
        if(formObj.PHONE && formObj.PHONE.value==''){
            formObj.PHONE.focus();
            alert('����������, ������� ��� ����� ��������!');
            return false;
        }

        if(formObj.PHONE){
            var c=/^(\+?\d+\s*)?(\(\d+\))?\s*-?\s*([\d\- ]*)$/i;
            if(!c.test(formObj.PHONE.value)){
                formObj.PHONE.focus();
                alert('����������, ������� ���������� ����� ��������!');
                return false;
            }
        }
    }





    return true;
}

function getCid(){
    var cookie = get_cookie('_ga');
    if(cookie){
        var arrayCookiesInfo = cookie.split('.');
        var r = "";
        if(arrayCookiesInfo[2]){
            r += arrayCookiesInfo[2];
            r += ".";
        }



        if(arrayCookiesInfo[2]){
            r += arrayCookiesInfo[3];
        }

        return r;
    }
    return "";
}


function setHidden(formObj,name,valuer){
    var input  = document.createElement("input");
    input.type = "hidden";
    input.name = name;
    input.value = valuer;
    formObj.appendChild(input);
}

function uniqueid(){
    var idstr=String.fromCharCode(Math.floor((Math.random()*25)+65));
    do {

        var ascicode=Math.floor((Math.random()*42)+48);
        if (ascicode<58 || ascicode>64){
            idstr+=String.fromCharCode(ascicode);
        }
    } while (idstr.length<32);
    return (idstr);
}/**
 * Created by informix on 02.02.15.
 */