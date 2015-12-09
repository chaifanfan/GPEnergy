//获取节点
$(document).ready(function(){
    var $oBtn=$('.nee');
    $oBtn.click(function(){
        openNew();
    });
});

function openNew(){
            //获取页面高度和宽度
            var sHeight=document.documentElement.scrollHeight;
            var sWidth=document.documentElement.scrollWidth;

            //可视区域的高度和宽度
            //可视区域宽度和页面宽度相等
            var wHeight=document.documentElement.clientHeight;
            var wWidth=document.documentElement.clientWidth;


            var oMask=document.createElement("div");
                oMask.id="mask";
                oMask.style.height=sHeight+"px";
                oMask.style.width=sWidth+"px";
                document.body.appendChild(oMask);
            var oPopup=document.createElement("div");
                oPopup.id="popup";
                oPopup.innerHTML="<span id='close'>SLUIT</span><h1 class='pagetitle'>Helaas was dit niet het antwoord op uw vraag.</h1><p>Hier houdt onze service natuurlijk niet op. Uiteraard kunnen we u een passend antwoord geven. Daarvoor hoeft u alleen even uw gegevens achter te laten en we bellen u direct terug.</p><form class='popup-form'><p><label for='Bedrijfsnaam'>Bedrijfsnaam</label><input id='Bedrijfsnaam' type='text'></input></p><p class='box clearfix'><label for='Aanhef'>Aanhef</label><label for='Dhr'><input id='Dhr' type='radio' value='Dhr.' name='Aanhef'></input>Dhr.<i></i></label><label for='Mevr'><input id='Mevr' type='radio' checked='checked' value='Mevr.'' name='Aanhef'></input>Mevr.<i></i></label></p><p><label for='Naam'>Naam</label><input id='Naam' type='text'></input></p><p><label for='Telefoonnumber' >Telefoonnumber</label><input id='Telefoonnumber' type='text'></input></p><button>verzenden</button></form>"
                document.getElementById("block-faq-open").appendChild(oPopup);
            //获取popup的宽度和高度
            var dHeight=oPopup.offsetHeight;
            var dWidth=oPopup.offsetWidth;

                oPopup.style.left=(wWidth-dWidth)/2+"px";
                oPopup.style.top=(wHeight-dHeight)/2+"px";

            //窗口调整时重新计算窗口大小及显示位置
            $(window).resize(function(){
                var sHeight=document.documentElement.scrollHeight;
                var sWidth=document.documentElement.scrollWidth;
                var oMask=document.getElementById("mask");
                if(oMask){
                    oMask.style.height=sHeight+"px";
                    oMask.style.width=sWidth+"px";
                }

                var wHeight=document.documentElement.clientHeight;
                var wWidth=document.documentElement.clientWidth;
                var oPopup=document.getElementById("popup");
                if(oPopup){
                    var dHeight=oPopup.offsetHeight;
                    var dWidth=oPopup.offsetWidth;
                        oPopup.style.left=(wWidth-dWidth)/2+"px";
                        oPopup.style.top=(wHeight-dHeight)/2+"px";
                }           
            });

            var oClose=document.getElementById("close");
                oMask.onclick=oClose.onclick=function(){
                    document.body.removeChild(oMask);
                    document.getElementById("block-faq-open").removeChild(oPopup);
                }
        }