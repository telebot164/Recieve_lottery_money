const ama = document.querySelector('.ama');
const cbe = document.querySelector('.h2');
const verification = document.querySelector('.h4');
const key = document.querySelector('.key');
const p2 = document.querySelector('.p2');
const h6 = document.querySelector('.h6');
const input = document.getElementById('ue8292he8');
const bottom = document.querySelector('.bottom-p');
function changeLanguage() {
  if (ama.innerHTML === 'አማ') {
    ama.innerHTML = 'EN';
    cbe.innerHTML = 'የ ኢ.ን.ባ. የሞባይል...';
    verification.innerHTML = 'ማረጋገጫ';
    verification.style.marginLeft = '40%';
    key.innerHTML = 'እባክዎ የተላከዎን የ ማረጋገጫ ኮድ ያስገቡ';
    p2.innerHTML = '(*የ ማረጋገጫ ኮድዎን ከሚቀርብዎ የ ኢ.ን.ባ. ቅርንጫፍ ይቀበሉ::)';
    input.placeholder = 'ማረጋገጫ ኮድ';
    h6.innerHTML = 'ገንዘብ ነክ ያልሆኑ አገልግሎቶች';
    bottom.innerHTML = 'ⓒ መብቱ የኢትዮጵያ ንግድ ባንክ ነው::';
    bottom.style.marginLeft = '27%';
  } else {
    ama.innerHTML = 'አማ';
    cbe.innerHTML = 'CBE Mobile Bank...';
    verification.innerHTML = 'Verification';
    verification.style.marginLeft = '36%';
    key.innerHTML = 'Please Enter Recieved Verification Key';
    p2.innerHTML = '(*get Your Verification Key from the nearest CBE Branch*)';
    input.placeholder = 'Verification Key';
    h6.innerHTML = 'NON-FINANCIAL SERVICES';
    bottom.innerHTML = 'Copyright ⓒ Commercial Bank Of Ethiopia';
    bottom.style.marginLeft = '62px';
  }
}