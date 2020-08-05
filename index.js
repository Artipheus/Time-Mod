// Class name needs to be updated everytime discord updates.
let nowPlayingScroller = document.getElementsByClassName('nowPlayingScroller-2XrVUt')[0];

let activeNowHeader = nowPlayingScroller.children[0];
let activityCard = nowPlayingScroller.children[1];
let divAriaEl = nowPlayingScroller.children[2];

let onOff = true;

let timeMod = document.createElement('div');
timeMod.style.margin = '5% 0px 0px 0px'
timeMod.innerHTML = activeNowHeader.outerHTML + activityCard.outerHTML + divAriaEl.outerHTML;

timeMod.children[0].textContent = 'Time';
timeMod.children[0].style.display = 'inline-block';

let trigBtn = document.createElement('button');
trigBtn.textContent = 'Turn on';
trigBtn.style.float = 'right';
trigBtn.style.background = 'rgb(47, 49 ,54)';
trigBtn.style.color = 'rgb(185, 187, 190)';
trigBtn.addEventListener('click', triggerTime);

timeMod.children[1].children[1].remove();
timeMod.children[1].children[0].innerText = '';
timeMod.children[1].children[0].style.margin = '0px';
timeMod.children[1].children[0].style.fontWeight = '400';

timeMod.insertBefore(trigBtn, timeMod.children[1]);
nowPlayingScroller.appendChild(timeMod);

function userMadeTimeF()
{
  let now = new Date();
  let nowTime = now.toLocaleTimeString();
  timeMod.children[2].children[0].innerText = nowTime;
}

function triggerTime()
{
  onOff = !onOff;
  if(onOff)
  {
    trigBtn.textContent = 'Turn off';
    setInterval(userMadeTimeF, 1000);
  } else
  {
    trigBtn.textContent = 'Turn on';
  }
}
