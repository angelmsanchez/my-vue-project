<template>
   <div class="phone">
  <div class="phone-back">
    <div class="phone-left-side">
      <div class="phone-antena"></div>
      <div class="phone-button top"></div>
      <div class="phone-button"></div>
      <div class="phone-button bottom"></div>
      <div class="phone-antena bottom"></div>
    </div>
    <div class="phone-bottom">
      <div class="phone-antena"></div>
      <div class="bottom-speaker">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="phone-screw">
        <div></div>
      </div>
      <div class="phone-charger">
      </div>
      <div class="phone-screw right:">
        <div></div>
      </div>
       <div class="bottom-speaker right:">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="phone-antena right:"></div>
    </div>
  </div>
  <div class="phone-screen"></div>
  <div class="phone-display">
    <div class="phone-notch">
      <div class="phone-speaker"></div>
    </div>
    <div class="display-content">
      <div class="notifications-bar">
        <div class="time">9:41</div>
        <div class="range"></div>
        <div class="wifi"></div>
        <div class="battery"></div>
      </div>
      <div class="nav">
        <div class="messages"></div>
        <div class="phone-number">+7 (999) 222-22-22</div>
        <div class="menu"></div>
      </div>
      <div class="current-plan">
        <div class="plan">
          <div>
            <div class="plan-header">CURRENT PLAN</div>
            <div class="plan-price"><span>$</span>29.95</div>
          </div>
          <div class="plan-date">
            <div>JAN 28TH</div>
            <div>FEB 28TH</div>
          </div>
        </div>
        <div class="text-question">You spend $20 over traffic last month.<br>Do you want to change plan?</div>
      </div>
      <div class="plan-box">
        <div class="plan-options">
          <div>
            <div>15<span>GB</span></div>
            <div>Internet</div>
          </div>
          <div>
            <div>1500<span>Mins</span></div>
            <div>Within Russia</div>
          </div>
        </div>
        <div class="plan-text"><strong>Free calls</strong> within the network</div>
        <a class="change-plan" href="">Change plan</a>
      </div>
      <div class="plan-list">
        <div class="plan-limit">
          <div class="limit-text">
            <div><strong>$3</strong><span>Until February 28</span></div>
            <span class="limit-subtext">Unlimited Apps</span>
          </div>
          <div class="limit-icon"></div>
        </div>
        <div class="plan-limit">
          <div class="limit-text">
            <div><strong>$0.15</strong><span>Per SMS</span></div>
            <span class="limit-subtext">Remove the limit for $1.5</span>
          </div>
          <div class="limit-icon upgrade"></div>
        </div>
      </div>
      <div class="bottom-icons">
        <div class="chart"><div></div></div>
        <div class="eye"><div></div></div>
        <div class="equalizer"><div></div><div></div><div></div></div>
      </div>
      <div class="home-button"></div>
    </div>
  </div>
  <div class="phone-reflections">
    <div class="reflection-1"></div>
    <div class="reflection-2"></div>
    <div class="reflection-3"></div>
    <div class="reflection-4"></div>
    <div class="reflection-5"></div>
    <div class="reflection-6"></div>
    <div class="reflection-7"></div>
  </div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss">
.phone {
  position: absolute;
  left: calc(50% - 8px);
  top: calc(50% - 2px);
  transform: translate(-50%, -50%) rotate(-30deg) skewX(30deg);
  &-back {
    position: absolute;
    top: -3px;
    transform: translate(-50%, -50%);
    height: 734px;
    width: 430px;
    background-image: linear-gradient(to bottom, #3a3b3f 70%, #1d1d1f);
    border-radius: 74px 40px 84px 50px;
    box-shadow:
      -26px 8px 8px -10px rgba(#000,0.3),
      -6px 6px 6px 0 rgba(#000,0.6),
      -30px 14px 10px -10px rgba(#000,0.5),
      -20px 40px 8px 0 rgba(#000,0.1),
      -20px 30px 8px 0 rgba(#000,0.1),
      inset 20px 0 15px -6px rgba(#000,.6),
      inset 2px 0 4px -2px rgba(#000,.6),
      inset 2px 0 1px -2px rgba(#fff,.1),
      inset 0 -15px 10px -10px rgba(#fff,.15);
    &:before{
     content: "";
     display: block;
     height: 300px;
     width: 100px;
     position: absolute;
     background-color: #fff;
     left: 16px;
     bottom: 40px;
     border-radius: 20px;
     filter: blur(5px);
     opacity: .10;
     transform: rotate(4deg);
    }
    &:after {
     content: "";
     display: block;
     height: 300px;
     width: 100px;
     position: absolute;
     background-color: #fff;
     left: 26px;
     bottom: 40px;
     border-radius: 20px;
     filter: blur(4px);
     opacity: .25;
     transform: rotate(2deg);
    }
  }
   &-screen{
    position: absolute;
    top: -16px;
    left: 14px;
    transform: translate(-50%, -50%);
    height: 710px;
    width: 400px;
    background-color: #000;
    border-radius: 48px 40px 52px 45px;
    box-shadow:
      -2px 0 0px -1px rgba(#fff,0.4),
      -1px 3px 3px -3px rgba(#fff,0.7);
  }
   &-display {
    position: absolute;
    z-index: 1;
    top: -23px;
    left: 20px;
    transform: translate(-50%, -50%);
    height: 690px;
    width: 378px;
    background-color: #FBFBFB;
    border-radius: 45px 37px 41px 41px;
  }
  &-notch{
    position: absolute;
    top: -1px;
    left: 50%;
    transform: translate(-50%);
    width: 210px;
    background-color: #131313;
    border-top: 6px solid #000;
    height: 21px;
    z-index: 3;
    border-radius: 0 0 20px 20px;
    &:after{
      content: "";
      display: block;
      height: 12px;
      width: 12px;
      background-color: transparent;
      position: absolute;
      left: -12px;
      top: -5px;
      border-radius: 50%;
      box-shadow: 5px -5px 0 -3px #000;
    }
    &:before{
      content: "";
      display: block;
      height: 12px;
      width: 12px;
      background-color: transparent;
      position: absolute;
      right: -12px;
      top: -5px;
      border-radius: 50%;
      box-shadow: -4px -4px 0 -3px #000;
  }
 }
  &-speaker{
    position: absolute;
    top: 6px;
    width: 58px;
    height: 6px;
    border-radius: 20px;
    background-color: #2b2b2b;
    overflow: hidden;
    box-shadow:
      0 0 0 1px rgba(#363637,1),
      inset -3px 3px 1px 0px #000000,
      inset -3px 4px 0px -1px rgba(#fff,.5);
    left: 50%;
    transform: translateX(-50%);
    &:after{
      content: "";
      display: block;
      height: 4px;
      width: 4px;
      background-color: #87888c;
      position: absolute;
      right: -1px;
      border-radius: 50%;
      top: -1px;
    }
     &:before{
      content: "";
      display: block;
      height: 4px;
      width: 4px;
      background-color: #898a8e;
      position: absolute;
      right: -2px;
      border-radius: 50%;
      top: 4px;
     }
  }
} 
.phone-left-side {
  position: absolute;
  left: 0;
  top: 60px;
  width: 30px;
  height: 100%;
  .phone-antena {
    position: absolute;
    height: 20px;
    width: 50px;
    left: -5px;
    top: 10px;
    border-radius: 50%;
    transform: rotate(-40deg) skewX(20deg);
    background-color: transparent;
    box-shadow:      0px -2px 1px -2px #000;
    &.bottom{
      top: auto;
      bottom: 128px;
    }
    &:after{
      content: "";
      display: block;
      height: 20px;
      width: 50px;
      position: absolute;
      transform: rotate(-2deg);
      left: -5px;
      top: 3px;
      border-radius: 50%;
      background-color: transparent;
      box-shadow: 0px -2px 1px -2px #000;
    }
  }
}
.phone-button { 
  position: absolute;
  top: 100px;
  left: 4px;
  height: 47px;
  width: 12px;
  background-color: #010101;
  border-radius: 30px;
  transform: skewY(-40deg);
  box-shadow:
    -32px -16px 10px 0 rgba(#000,.4),
    -4px 0 4px 0 rgba(#000,.4);
  &.bottom {
    top: 160px;
  }
  &.top {
    top: 48px;
    height: 29px;
    width: 14px;
    left: 2px;
    border-radius: 10px 10px 10px 3px;
    box-shadow:
      inset 2px 0 0 -1px rgba(#fff,.25);
    }
    &:after {
      height: 27px;
      width: 8px;
      left: 4px;
      top: 0px;
    }
    &:before {
      height: 28px;
      width: 8px;
      left: 6px;
      top: 0px;
      box-shadow: 1px 0 0 0 rgba(#000,0.4);
      }
  &:before {
    content: "";
    display: block;
    position: absolute;
    height: 45px;
    width: 10px;
    background-image: linear-gradient(to bottom, #6a6b6f 85%, #0b0b0b );
    border-radius: 20px;
  }
  &:after {
    content: "";
    display: block;
    position: absolute;
    left: -2px;
    top: -1px;
    height: 44px;
    width: 10px;
    background-color: #2d2d2f;
    border-radius: 20px;
    box-shadow:
      inset -1px -1px 0 -1px rgba(#fff,.6);
      }
}
.phone-bottom {
  position: absolute;
  bottom: 0;
  width: 100%;
  .bottom-speaker {
    position: absolute;
    display: flex;
    left: calc(50% - 120px);
    bottom: 6px;
    transform: skewX(-50deg);
    &.right  {
      left: calc(50% + 45px);
    div {
      height: 6px;
      width: 6px;
      background-color: #212121;
      box-shadow:
        inset -4px -3px 2px -2px rgba(#000,1),
        1px -1px 0 -1px rgba(#fff,.5);
      margin: 0 3px;
      border-radius: 50%;
      position: relative;
      overflow: hidden;
      &:after {
        content: "";
        display: block;
        height: 3px;
        width: 3px;
        background-color: #fff;
        border-radius: 50%;
        position: absolute;
        bottom: -1px;
        left: 3px;
        opacity: .4;
     }   
      }
  }
  .phone-screw {
    position: absolute;
    bottom: 5px;
    left: calc(50% - 38px);
    height: 9px;
    width: 9px;
    background-image: linear-gradient(to right, #1A1A1C 30%, #A1A2A7 60%, #1A1A1C 80%);
    border-radius: 50%;
    transform: translateX(-50%) skewX(-50deg);
    &.right {
      left: calc(50% + 36px);
    }
    div {
      height: 6px;
      width: 6px;
      border-radius: 50%;
      background-color: #252527;
      box-shadow:
        2px 2px 0 0 rgba(#000,0.9),
        inset -2px 1px 1px -1px rgba(#000,1);
      position: relative;
      &:after {
        content: "";
        display: block;
        height: 4px;
        width: 4px;
        background-color: #151515;
        transform: rotate(45deg);
        position: absolute;
        top: 1px;
        box-shadow:
          inset -1px -1px 0 0px rgba(#fff,.6);
      }
    }
   } 
  .phone-charger {
    position: absolute;
    left: 50%;
    bottom: 2px;
    background-image: linear-gradient(to right, #121214 5%, #434446 20%, #434446 60%, #7a7b80 75%, #1b1b1d 90%);
    transform: translateX(-50%) skewX(-50deg);
    height: 14px;
    width: 48px;
    overflow: hidden;
    border-radius: 15px 16px 24px 20px;
    box-shadow:
      1px 1px 1px -1px rgba(#fff,.4),
      inset -2px -2px 0 -1px #0e0e0e,
      inset -3px -3px 0 -1px #252527,
      inset 3px 3px 0 -1px #050505;
    &:after {
      content: "";
      display: block;
      height: 10px;
      width: 42px;
      background-color: #050505;
      border-radius: 20px 8px 16px 10px;
      box-shadow:
        1px 1px 0 -1px rgba(#fff,.4);
    }
  }
  .phone-antena {
    position: absolute;
    height: 20px;
    width: 50px;
    bottom: 8px;
    left: 60px;
    border-radius: 40%;
    opacity: .7;
    transform: rotate(-45deg) skewX(20deg) scaleY(-1);
    background-color: transparent;
    box-shadow:
      0px -2px 1px -2px #000;
    &.right {
      left: auto;
      right: 70px;
      box-shadow:
        0px -2px 1px -2px #000,
        19px -2px 0 -2px rgba(#fff, .4);
      &:after {
        box-shadow:
          0px -2px 1px -2px #000,
          19px -2px 0 -2px rgba(#fff, .4);
    }
    }
    &:after {
      content: "";
      display: block;
      height: 20px;
      width: 50px;
      position: absolute;
      transform: rotate(-2deg);
      left: -3px;
      top: 3px;
      border-radius: 40%;
      background-color: transparent;
      box-shadow:0px -2px 1px -2px #000;
    }
  }
.phone-reflections {
  position: absolute;
  top: -17px;
  left: 15px;
  transform: translate(-50%, -50%);
  height: 709px;
  width: 399px;
  border-radius: 48px 40px 52px 45px;
  background-color: transparent;
  z-index: 4;
  overflow: hidden;
  .reflection-1 {
    position: absolute;
    height: 200%;
    width: 120%;
    background-color: #fff;
    opacity: .1;
    left: -320px;
    top: -200px;
    transform: rotate(32deg);
    z-index: 10;
    }
  .reflection-2, .reflection-3 {
    position: absolute;
    height: 100%;
    left: -94px;
    width: 100px;
    border-radius: 100px;
    background-color: #000;
    top: calc(50% + 14px);
    transform: translateY(-50%);
    z-index: 11;
  }
  .reflection-3 {
    background: #6D6C71;
    left: -8px;
    height: 60%;
    width: 10px;
    opacity: .6;
    top: 70%;
  .reflection-4 {
    position: absolute;
    height: 60%;
    top: 0;
    background-color: #67686C;
    width: 16px;
    &:before {
      content: "";
      display: block;
      position: absolute;
      height: 100px;
      width: 100px;
      background-color: transparent;
      left: 16px;
      top: 4px;
      border-radius: 44px 40px 0 0;
      box-shadow: -20px 0px 0 0 #67686C;
    }
    &:after {
      content: "";
      display: block;
      height: 80px;
      width: 80px;
      background-color: transparent;
      position: absolute;
      border-radius: 60px 0 0 0;
      left: 0px;
      top: -1px;
      transform: rotate(15deg);
      box-shadow: -25px -3px 2px -8px #000;
    }
  }
  .reflection-5 {
    position: absolute;
    height: 50%;
    bottom: 0;
    left: 4px;
    width: 12px;
    background-color: #000;
    border-radius: 50%;
  .reflection-6 {
    position: absolute;
    width: 80px;
    height: 20px;
    background-color: #000;
    border-radius: 50%;
    transform: rotate(40deg);
    bottom: -4px;
    left: -14px;
    z-index: 12;
    &:after {
      content: "";
      display: block;
      position: absolute;
      height: 100px;
      width: 20px;
      background-color: #000;
      right: -17px;
      top: -78px;
      border-radius: 40%;
      transform: rotate(50deg);
    }
    &:before {
      content: "";
      display: block;
      position: absolute;
      height: 50px;
      width: 50px;
      background-color: transparent;
      top: -51px;
      left: 7px;
      transform: rotate(-20deg);
      border-radius: 40%;
      box-shadow: 4px 15px 1px -10px #000;
    }
  }
 .reflection-7 {
  position: absolute;
  bottom: -4px;
  left: 10px;
  height: 20px;
  width: 40px;
  border-radius: 20px 0px 6px 10px;
  transform: skewX(60deg) skewY(-10deg) scaleY(-1) scaleX(-1) scale(.8);
  background-color: #5c5d61;
  z-index: 13;
  &:after {
    content: "";
    display: block;
    height: 20px;
    width: 30px;
    background-color: #5c5d61;
    border-radius: 50%;
    position: absolute;
    top: -3px;
    right: 6px;
    transform: rotate(40deg) skewX(-54deg) skewY(47deg) scaleY(1) scaleX(1) ;
  }
   &:before {
     content: "";
     display: block;
     position: absolute;
     height: 18px;
     width: 15px;
     background-color: #5c5d61;
     left: 6px;
     bottom: -6px;
     border-radius: 2px;
     transform: rotate(253deg) skewX(10deg);
    }
  }
}
.display-content {
  position: absolute;
  top: 0;
  left: 0;
  height: 690px;
  width: 378px;
  border-radius: 45px 37px 41px 41px;
  overflow: hidden;
  &:before {
    content: "";
    display: block;
    position: absolute;
    height: 60%;
    width: 100%;
    top: -10%;
    background-image: linear-gradient(to top, #50d2f4, #3660f2);
    transform: skewY(-15deg);
  }
}
.notifications-bar {
  .time {
    color: #fff;
    font-size: 11px;
    position: absolute;
    left: 40px;
    top: 10px;
    }
  .range {
    position: absolute;
    height: 4px;
    width: 2px;
    background-color: #fff;
    right: 70px;
    top: 14px;
    &:after, &:before {
      content: "";
      display: block;
      position: absolute;
      height: 6px;
      width: 2px;
      background-color: #fff;
      bottom: 0;
      left: 4px;
    }
    &:before {
      height: 8px;
      left: 8px;
     } 
  }
  .wifi  {
    position: absolute;
    right: 40px;
    top: 10px;
  }
  .wifi, .wifi:before  {
	  display: inline-block;
	  border: 4px double transparent;
	  border-top-color: #fff;
	  border-radius: 50%;
  }
.wifi:before  {
  content: '';
  width: 0;
  height: 0;
  position: relative;
  top: -5px;
  } 

  
}
.battery {
  height: 5px;
  width: 12px;
  position: absolute;
  top: 12px;
  right: 20px;
  border-radius: 1px;
  border: 1px solid #fff;
  &:after {
    content: "";
    position: absolute;
    height: 2px;
    width: 1px;
    background-color: #fff;
    right: -3px;
    top: 1px;
  }
}
.nav {
  position: absolute;
  top: 70px;
  width: 100%;
  display: flex;
  padding: 0 20px;
  box-sizing: border-box;
  .phone-number {
    color: #fff;
    font-size: 14px;
    flex: 1;
    text-align: center;
    }
  .messages {
    margin: 0 10px;
    width: 14px;
    height: 10px;
    width: 16px;
    border: 1px solid #fff;
    border-radius: 3px;
    position: relative;
    &:before {
      content: "";
      display: block;
      position: absolute;
      background-color: #508af4;
      width: 3px;
      height: 4px;
      border-right: 1px solid #fff;
      border-bottom: 1px solid #fff;
      bottom: -3px;
      left: 4px;
      transform: rotate(35deg);
    }
    &:after {
      content: "3";
      position: absolute;
      top: -4px;
      right: -4px;
      display: block;
      height: 10px;
      width: 10px;
      border-radius: 50%;
      color: #708dbf;
      background-color: #fff;
      font-size: 9px;
      font-weight: bold;
      text-align: center;
      }
    }
  .menu {
    height: 1px;
    width: 10px;
    background-color: #fff;
    margin: 0 10px;
    position: relative;
    top: 7px;
    transform: scale(1.4);
    &:before {
      content: "";
      display: block;
      position: relative;
      width: 14px;
      top: -4px;
      height: 1px;
      left: -4px;
      background-color: #fff;
    }
    &:after {
      content: "";
      display: block;
      position: relative;
      width: 6px;
      height: 1px;
      top: 3px;
      background-color: #fff;
      left: 4px;
    }
    }
}
.current-plan {
  position: absolute;
  top: 110px;
  width: 100%;
  color: #fff;
  .plan {
    flex: 1;
    display: flex;
    padding-left: 40px;
    box-sizing: border-box;
    div:first-of-type {
      flex: 1;
    }
    &-header {
      font-weight: 300;
      font-size: 11px;
      margin-bottom: 3px;
      letter-spacing: 1px;
    }
    &-price {
      font-size: 2.5em;
      font-weight: 600;
      position: relative;
      left: -16px;
      }
      span {
        font-size: 20px;
        position: relative;
        top: -14px;
        left: -6px;
      }
    &-date {
      font-weight: 300;
      font-size: 11px;
      letter-spacing: 1px;
      flex: none;
      width: 120px;
      div:first-of-type {
        margin-bottom: 10px;
        padding-bottom: 10px;
        border-bottom: 1px solid rgba(#fff,.4);
      }
    }
  }
 .text-question {
   padding-left: 40px;
   margin-top: 20px;
   font-weight: 300;
   font-size: 15px;
   line-height: 1.4em;
  }
}
.plan-box {
  position: absolute;
  top: 270px;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  left: 50%;
  transform: translateX(-50%);
  width: 85%;
  box-sizing: border-box;
  color: #17222d;
  box-shadow: 0 20px 30px -10px rgba(#000,0.1);
  .plan-options {
    display: flex;
    margin-bottom: 20px;
    & > div {
      flex: 1;
      &:first-of-type {
        border-right: 1px solid rgba(#000, .2);
        }
      div {
        font-size: 11px;
        opacity: .6;
        padding-left: 30px;
        }
      div:first-of-type {
        font-weight: 700;
        font-size: 16px;
        opacity: 1;
        span {
          font-size: .8em;
          opacity: .6;
          font-weight: 400;
        }
      }
    }
  }
 }     
 .plan-text {
   font-size: 11px;
   text-align: center;
   margin-bottom: 20px;
 }
 .change-plan {
   display: block;
   text-decoration: none;
   text-align: center;
   color: #fff;
   font-weight: 400;
   font-size: 14px;
   background-image: linear-gradient(to right, #1a7eff, #44b9ff);
   padding: 10px 0;
   border-radius: 5px;
   margin-bottom: 20px;
  }
.plan-list {
  position: absolute;
  top: 460px;
  color: #17222d;
  box-sizing: border-box;
  width: 80%;
  .plan-limit {
    padding: 20px 40px;
    width: 100%;
    display: flex;
    &:first-of-type {
      border-bottom: 1px solid rgba(#000, 0.2);
    }
    .limit-icon {
      height: 30px;
      width: 30px;
      border: 1px solid rgba(#000,0.2);
      border-radius: 50%;
      position: relative;
      margin-right: 10px;
      top: 8px;
      &.upgrade {
        border: none;
        background-image: linear-gradient(to bottom, #50d2f4, #3660f2);
        box-shadow: 0 4px 10px -2px rgba(#3660f2, .8);
        &:after {
          border-color: #fff;
          width: 6px;
          left: 12px;
          top: 11px;
          transform: rotate(135deg);
        }
        &:before {
          content: "";
          display: block;
          height: 5px;
          width: 12px;
          border-bottom: 1px solid #17222d;
          border-left: 1px solid #17222d;
          transform: rotate(-45deg);
          position: absolute;;
          left: 12px;
          top: 15px;
          border-color: #fff;
          width: 6px;
          transform: rotate(135deg);
        }
      }  
      &:after {
        content: "";
        display: block;
        height: 5px;
        width: 12px;
        border-bottom: 1px solid #17222d;
        border-left: 1px solid #17222d;
        transform: rotate(-45deg);
        position: absolute;
        left: 10px;
        top: 9px;
      }
    }
    .limit-text {
      flex: 1;
      div {
        strong {
          font-size: 20px;
          opacity: 1;
        }
        span {
          font-size: 12px;
          opacity: .6;
          border-left: 1px solid #17222d;
          margin-left: 4px;
          padding-left: 4px;
        }
      } 
      .limit-subtext {
        opacity: .6;
        font-size: 11px;
        position: relative;
        top: -4px;
      }
    }
  } 
 .bottom-icons{
   display: flex;
   position: absolute;
   bottom: 30px;
   width: 100%;
   & > div{
     flex: 1;
     height: 20px;
     display: flex;
     align-items: center;
     justify-content: center;
   }
   }
   .equalizer{
     div{
       height: 18px;
       width: 1px;
       position: relative;
       background-color: #708dbf;
       &:nth-child(2){
         left: 5px;
         &:after{
           top: 11px;
        }
        }
       &:nth-child(3) {
         left: 10px;
         &:after {
            top: 4px;
        }
       }
       &:after {
         content: "";
         display: block;
         height: 4px;
         width: 4px;
         background-color: #708dbf;
         border: 1px solid #fff;
         border-radius: 5 0%;
         position: relative;
         left: -2px;
         top: 2px;
       }
    }
    }

   .eye {
     border-left: 1px solid rgba(#000,0.2);
     border-right: 1px solid rgba(#000,0.2);
     div {
       height: 6px;
       width: 6px;
       border: 2px solid #708dbf;
       border-radius: 50%;
       position: relative;
       &:after, &:before {
         content: "";
         display: block;
         height: 30px;
         width: 28px;
         border-top: 2px solid #708dbf;
         border-radius: 50%;
         position: absolute;
         top: -6px;
         left: -12px;
       }
       &:before {
         border-top: none;
         border-bottom: 2px solid #708dbf;
         top: -18px;
       }
      }
      }
   .chart{
     div{
      height: 6px;
      width: 1px;
      background-color: #708dbf;
      position: relative;
      top: 5px;
      transform: scale(1.4);
      &:after{
        content: "";
        display: block;
        height: 14px;
        width: 1px;
        background-color: #708dbf;
        position: absolute;;
        left: 4px;
        bottom: 0;
      }
      &:before{
        content: "";
        display: block;
        height: 10px;
        width: 1px;
        background-color: #708dbf;
        position: absolute;
        left: 8px;
        bottom: 0;
      }
      }
      }
        
        
 .home-button {
   position: absolute;
   left: 50%;
   transform: translateX(-50%);
   width: 120px;
   height: 4px;
   background-color: rgba(#000,0.15);
   bottom: 12px;
   border-radius: 4px;
  }
}
}
}
}
}
</style>
