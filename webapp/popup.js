
$( "#btnenc" ).on( "click", function() {
  var maintext = document.getElementById('txtoenc');
  maintext = maintext.value;
  var key = document.getElementById('keyenc');
  key = key.value;
  var encryptedd = CryptoJS.AES.encrypt(maintext, key);
  document.getElementById("txteenc").value = encryptedd;
});

$( "#btndec" ).on( "click", function() {
  var maintext = document.getElementById('txtedec');
  maintext = maintext.value;
  var key = document.getElementById('keydec');
  key = key.value;
  var decryptedd = CryptoJS.AES.decrypt(maintext, key);
  decryptedd = decryptedd.toString(CryptoJS.enc.Utf8);
  document.getElementById("txtodec").value = decryptedd;
});

$( "#ehash" ).on( "click", function() {
    var hashe = document.getElementById('txtehas');
    hashe = hashe.value;
    var ehash = document.getElementById('txtehase');
    ehash = ehash.value;
    if (hashe==ehash){
        document.getElementById("ehash").innerHTML = "IS EQUAL ? <span style='color: #218838;' >YES</span>";
    }else{
        document.getElementById("ehash").innerHTML = "IS EQUAL ? <span style='color: #DC3545;' >NO</span>";
    }
});

$( "#btnhas" ).on( "click", function() {
    var maintext = document.getElementById('txtohas');
    maintext = maintext.value;
    var sha3val = $("#sha3v").val();
    if(sha3val==="1"){
        var hash = CryptoJS.SHA3(maintext, { outputLength: 512 });
        document.getElementById("txtehas").value = hash;
    }else if(sha3val==="2"){
        var hash = CryptoJS.SHA3(maintext, { outputLength: 384 });
        document.getElementById("txtehas").value = hash;
    }else if(sha3val==="3"){
        var hash = CryptoJS.SHA3(maintext, { outputLength: 256 });
        document.getElementById("txtehas").value = hash;
    }else if(sha3val==="4"){
        var hash = CryptoJS.SHA3(maintext, { outputLength: 224 });
        document.getElementById("txtehas").value = hash;
    }else if(sha3val==="5"){
        var hash = CryptoJS.SHA512(maintext);
        document.getElementById("txtehas").value = hash;
    }else if(sha3val==="6"){
        var hash = CryptoJS.SHA256(maintext);
        document.getElementById("txtehas").value = hash;
    }else if(sha3val==="7"){
        var hash = CryptoJS.SHA1(maintext);
        document.getElementById("txtehas").value = hash;
    }else if(sha3val==="8"){
        var hash = CryptoJS.RIPEMD160(maintext);
        document.getElementById("txtehas").value = hash;
    }else if(sha3val==="9"){
        var hash = CryptoJS.MD5(maintext);
        document.getElementById("txtehas").value = hash;
    }
});

$( "#btnip" ).on( "click", function() {
    if (navigator.onLine) {
        $.getJSON('https://ipinfo.io', function(data){
            document.getElementById("ipi").value = data.ip;
            if(data.country==="AU"){
                document.getElementById("ipc").value = "Australia";
            }else if(data.country==="BE"){
                document.getElementById("ipc").value = "Belgium";
            }else if(data.country==="BR"){
                document.getElementById("ipc").value = "Brazil";
            }else if(data.country==="CA"){
                document.getElementById("ipc").value = "Canada";
            }else if(data.country==="CN"){
                document.getElementById("ipc").value = "China";
            }else if(data.country==="HK"){
                document.getElementById("ipc").value = "Hong Kong";
            }else if(data.country==="MO"){
                document.getElementById("ipc").value = "Macao";
            }else if(data.country==="CO"){
                document.getElementById("ipc").value = "Colombia";
            }else if(data.country==="DK"){
                document.getElementById("ipc").value = "Denmark";
            }else if(data.country==="DM"){
                document.getElementById("ipc").value = "Dominica";
            }else if(data.country==="EC"){
                document.getElementById("ipc").value = "Ecuador";
            }else if(data.country==="EG"){
                document.getElementById("ipc").value = "Egypt";
            }else if(data.country==="FI"){
                document.getElementById("ipc").value = "Finland";
            }else if(data.country==="FR"){
                document.getElementById("ipc").value = "France";
            }else if(data.country==="DE"){
                document.getElementById("ipc").value = "Germany";
            }else if(data.country==="GH"){
                document.getElementById("ipc").value = "Ghana";
            }else if(data.country==="GR"){
                document.getElementById("ipc").value = "Greece";
            }else if(data.country==="GL"){
                document.getElementById("ipc").value = "Greenland";
            }else if(data.country==="IS"){
                document.getElementById("ipc").value = "Iceland";
            }else if(data.country==="IN"){
                document.getElementById("ipc").value = "India";
            }else if(data.country==="ID"){
                document.getElementById("ipc").value = "Indonesia";
            }else if(data.country==="IR"){
                document.getElementById("ipc").value = "Iran";
            }else if(data.country==="IQ"){
                document.getElementById("ipc").value = "Iraq";
            }else if(data.country==="IE"){
                document.getElementById("ipc").value = "Ireland";
            }else if(data.country==="IT"){
                document.getElementById("ipc").value = "Italy";
            }else if(data.country==="JM"){
                document.getElementById("ipc").value = "Jamaica";
            }else if(data.country==="JP"){
                document.getElementById("ipc").value = "Japan";
            }else if(data.country==="KZ"){
                document.getElementById("ipc").value = "Kazakhstan";
            }else if(data.country==="KE"){
                document.getElementById("ipc").value = "Kenya";
            }else if(data.country==="KP"){
                document.getElementById("ipc").value = "Korea (North)";
            }else if(data.country==="KR"){
                document.getElementById("ipc").value = "Korea (South)";
            }else if(data.country==="KW"){
                document.getElementById("ipc").value = "Kuwait";
            }else if(data.country==="MY"){
                document.getElementById("ipc").value = "Malaysia";
            }else if(data.country==="MV"){
                document.getElementById("ipc").value = "Maldives";
            }else if(data.country==="MX"){
                document.getElementById("ipc").value = "Mexico";
            }else if(data.country==="MA"){
                document.getElementById("ipc").value = "Morocco";
            }else if(data.country==="NL"){
                document.getElementById("ipc").value = "Netherlands";
            }else if(data.country==="NZ"){
                document.getElementById("ipc").value = "New Zealand";
            }else if(data.country==="PA"){
                document.getElementById("ipc").value = "Panama";
            }else if(data.country==="PH"){
                document.getElementById("ipc").value = "Philippines";
            }else if(data.country==="PL"){
                document.getElementById("ipc").value = "Poland";
            }else if(data.country==="PT"){
                document.getElementById("ipc").value = "Portugal";
            }else if(data.country==="QA"){
                document.getElementById("ipc").value = "Qatar";
            }else if(data.country==="RO"){
                document.getElementById("ipc").value = "Romania";
            }else if(data.country==="RU"){
                document.getElementById("ipc").value = "Russian";
            }else if(data.country==="SA"){
                document.getElementById("ipc").value = "Saudi Arabia";
            }else if(data.country==="SG"){
                document.getElementById("ipc").value = "Singapore";
            }else if(data.country==="ES"){
                document.getElementById("ipc").value = "Spain";
            }else if(data.country==="SE"){
                document.getElementById("ipc").value = "Sweden";
            }else if(data.country==="CH"){
                document.getElementById("ipc").value = "Switzerland";
            }else if(data.country==="TW"){
                document.getElementById("ipc").value = "Taiwan";
            }else if(data.country==="TH"){
                document.getElementById("ipc").value = "Thailand";
            }else if(data.country==="TR"){
                document.getElementById("ipc").value = "Turkey";
            }else if(data.country==="UA"){
                document.getElementById("ipc").value = "Ukraine";
            }else if(data.country==="AE"){
                document.getElementById("ipc").value = "United Arab Emirates";
            }else if(data.country==="GB"){
                document.getElementById("ipc").value = "United Kingdom";
            }else if(data.country==="US"){
                document.getElementById("ipc").value = "United States of America";
            }else if(data.country==="VE"){
                document.getElementById("ipc").value = "Venezuela";
            }else{
                document.getElementById("ipc").value = data.country;
            }
            document.getElementById("ipl").value = data.loc;
            document.getElementById("ipo").value = data.org;
        });
    }else{
        document.getElementById("ipi").value = "You";
        document.getElementById("ipc").value = "Are";
        document.getElementById("ipl").value = "Offline";
        document.getElementById("ipo").value = "!!!";
    }
});







function clipb1() {
    var copyText = document.getElementById("txtoenc");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand("copy");
    function myFunction4() {
        document.getElementById("c1").innerText = "copy";
    }
    document.getElementById("c1").innerText = "ok";
    setTimeout(function() { myFunction4(); }, 600);
}
function clipb2() {
    var copyText = document.getElementById("keyenc");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand("copy");
    function myFunction4() {
        document.getElementById("c2").innerText = "copy";
    }
    document.getElementById("c2").innerText = "ok";
    setTimeout(function() { myFunction4(); }, 600);
}
function clipb3() {
    var copyText = document.getElementById("txteenc");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand("copy");
    function myFunction4() {
        document.getElementById("c3").innerText = "copy";
    }
    document.getElementById("c3").innerText = "ok";
    setTimeout(function() { myFunction4(); }, 600);
}
function clipb4() {
    var copyText = document.getElementById("txtedec");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand("copy");
    function myFunction4() {
        document.getElementById("c4").innerText = "copy";
    }
    document.getElementById("c4").innerText = "ok";
    setTimeout(function() { myFunction4(); }, 600);
}
function clipb5() {
    var copyText = document.getElementById("keydec");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand("copy");
    function myFunction4() {
        document.getElementById("c5").innerText = "copy";
    }
    document.getElementById("c5").innerText = "ok";
    setTimeout(function() { myFunction4(); }, 600);
}
function clipb6() {
    var copyText = document.getElementById("txtodec");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand("copy");
    function myFunction4() {
        document.getElementById("c6").innerText = "copy";
    }
    document.getElementById("c6").innerText = "ok";
    setTimeout(function() { myFunction4(); }, 600);
}
function clipb7() {
    var copyText = document.getElementById("txtohas");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand("copy");
    function myFunction4() {
        document.getElementById("c7").innerText = "copy";
    }
    document.getElementById("c7").innerText = "ok";
    setTimeout(function() { myFunction4(); }, 600);
}
function clipb8() {
    var copyText = document.getElementById("txtehas");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand("copy");
    function myFunction4() {
        document.getElementById("c8").innerText = "copy";
    }
    document.getElementById("c8").innerText = "ok";
    setTimeout(function() { myFunction4(); }, 600);
}
function clipb9() {
    var copyText = document.getElementById("barcode");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand("copy");
    function myFunction4() {
        document.getElementById("c9").innerText = "copy";
    }
    document.getElementById("c9").innerText = "ok";
    setTimeout(function() { myFunction4(); }, 600);
}
function clipb10() {
    var copyText = document.getElementById("randpass");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand("copy");
    function myFunction4() {
        document.getElementById("c10").innerText = "copy";
    }
    document.getElementById("c10").innerText = "ok";
    setTimeout(function() { myFunction4(); }, 600);
}











// function myFunction1() {
//     var xxx = document.getElementById("keyenc");
//     if (xxx.type === "password") {
//         xxx.type = "text";
//     } else {
//         xxx.type = "password";
//     }
// }
// function myFunction2() {
//     var xxx = document.getElementById("keydec");
//     if (xxx.type === "password") {
//         xxx.type = "text";
//     } else {
//         xxx.type = "password";
//     }
// }


function generateHexString(length) {
    var ret = "";
    while (ret.length < length) {
        ret += Math.random().toString(16).substring(2);
    }
    return ret.substring(0, length);
}
document.getElementById("barcode").value = generateHexString(58);
function refreshkey() {
    document.getElementById("barcode").value = generateHexString(58);
    $( "#qrcode" ).empty();
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        width : 200,
        height : 200
    });

    function makeCode () {
        var elText = document.getElementById("barcode");

        if (!elText.value) {
            elText.focus();
            return;
        }

        qrcode.makeCode(elText.value);
    }

    makeCode();

    $("#barcode").
    on("blur", function () {
        makeCode();
    }).
    on("keydown", function (e) {
        if (e.keyCode == 13) {
            makeCode();
        }
    });
}



var qrcode = new QRCode(document.getElementById("qrcode"), {
    width : 200,
    height : 200
});

function makeCode () {
    var elText = document.getElementById("barcode");

    if (!elText.value) {
        elText.focus();
        return;
    }

    qrcode.makeCode(elText.value);
}

makeCode();

$("#barcode").
on("blur", function () {
    makeCode();
}).
on("keydown", function (e) {
    if (e.keyCode == 13) {
        makeCode();
    }
});


$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});


$( "#barcode" ).keyup(function() {
    $( "#qrcode" ).empty();
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        width : 200,
        height : 200
    });

    function makeCode () {
        var elText = document.getElementById("barcode");

        if (!elText.value) {
            elText.focus();
            return;
        }
        qrcode.makeCode(elText.value);
    }

    makeCode();

    $("#barcode").
    on("blur", function () {
        makeCode();
    }).
    on("keydown", function (e) {
        if (e.keyCode == 13) {
            makeCode();
        }
    });
});














$( "#bcr" ).click(function() {
    refreshkey();
});
$( "#c1" ).click(function() {
    clipb1();
});
$( "#c2" ).click(function() {
    clipb2();
});
$( "#c3" ).click(function() {
    clipb3();
});
$( "#c4" ).click(function() {
    clipb4();
});
$( "#c5" ).click(function() {
    clipb5();
});
$( "#c6" ).click(function() {
    clipb6();
});
$( "#c7" ).click(function() {
    clipb7();
});
$( "#c8" ).click(function() {
    clipb8();
});
$( "#c9" ).click(function() {
    clipb9();
});
$( "#c10" ).click(function() {
    clipb10();
});


$(function () {
    $('[data-toggle="popover"]').popover()
})













// $('.dropdown-toggle').dropdown();

console.clear();

const sliderProps = {
    fill: "#007BFF",
    background: "rgba(255, 255, 255, 0.214)",
};

const slider = document.querySelector(".range__slider");
const sliderValue = document.querySelector(".length__title");

slider.querySelector("input").addEventListener("input", event => {
    sliderValue.setAttribute("data-length", event.target.value);
    applyFill(event.target);
});
applyFill(slider.querySelector("input"));
function applyFill(slider) {
    const percentage = (100 * (slider.value - slider.min)) / (slider.max - slider.min);
    const bg = `linear-gradient(90deg, ${sliderProps.fill} ${percentage}%, ${sliderProps.background} ${percentage +
    0.1}%)`;
    slider.style.background = bg;
    sliderValue.setAttribute("data-length", slider.value);
}

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
};

function secureMathRandom() {
    return window.crypto.getRandomValues(new Uint32Array(1))[0] / (Math.pow(2, 32) - 1);
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
    return String.fromCharCode(Math.floor(secureMathRandom() * 10) + 48);
}
function getRandomSymbol() {
    const symbols = '~!@#$%^&*()_+{}":?><;.,';
    return symbols[Math.floor(Math.random() * symbols.length)];
}

const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("slider");

const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");

const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copy-btn");
const resultContainer = document.querySelector(".result");
const copyInfo = document.querySelector(".result__info.right");
const copiedInfo = document.querySelector(".result__info.left");

let generatedPassword = false;
generateBtn.addEventListener("click", () => {
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numberEl.checked;
    const hasSymbol = symbolEl.checked;
    generatedPassword = true;
    resultEl.innerText = generatePassword(length, hasLower, hasUpper, hasNumber, hasSymbol);
    document.getElementById("randpass").value = resultEl.innerText;
});

function generatePassword(length, lower, upper, number, symbol) {
    let generatedPassword = "";
    const typesCount = lower + upper + number + symbol;
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);
    if (typesCount === 0) {
        return "";
    }
    for (let i = 0; i < length; i++) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
        });
    }
    return generatedPassword.slice(0, length)
        .split('').sort(() => Math.random() - 0.5)
        .join('');
}

function disableOnlyCheckbox(){
    let totalChecked = [uppercaseEl, lowercaseEl, numberEl, symbolEl].filter(el => el.checked)
    totalChecked.forEach(el => {
        if(totalChecked.length == 1){
            el.disabled = true;
        }else{
            el.disabled = false;
        }
    })
}

[uppercaseEl, lowercaseEl, numberEl, symbolEl].forEach(el => {
    el.addEventListener('click', () => {
        disableOnlyCheckbox()
    })
})

