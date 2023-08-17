// export default function Header() {
//   return `
//           <div class="ComponentHeader" style="width: 100%; height: 100%; position: relative">
//           <div class="Header" style="width: 1440px; height: 90px; left: 0px; top: 0px; position: absolute">
//               <div class="Background" style="width: 1440px; height: 90px; left: 0px; top: 0px; position: absolute; background: white"></div>
//               <div class="ElementBottomBorder" style="width: 1440px; height: 1px; left: 0px; top: 89px; position: absolute; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)">
//                   <div class="BottomBorder" style="width: 1440px; height: 1px; left: 0px; top: 0px; position: absolute; background: #EBEBEB"></div>
//               </div>

//               <img class="MenuIcon" style="width: 27px; height: 16px; left: 1373px; top: 37px; position: absolute" src="../../../src/image/MenuIcon.png" alt="Menu" />
//               <div class="Navigation" style="width: 805px; height: 21px; left: 156px; top: 34px; position: absolute">
//                   <div class="Technology" style="left: 0px; top: 0px; position: absolute; opacity: 0.20"><span style="color: #1D1F24; font-size: 14px; font-family: Oswald; font-weight: 500; text-transform: uppercase; letter-spacing: 1.75px; word-wrap: break-word">TECHNOLOG</span><span style="color: #1D1F24; font-size: 14px; font-family: Oswald; font-weight: 500; text-transform: uppercase; word-wrap: break-word">Y</span></div>
//                   <div class="News" style="left: 485px; top: 0px; position: absolute; opacity: 0.20"><span style="color: #1D1F24; font-size: 14px; font-family: Oswald; font-weight: 500; text-transform: uppercase; letter-spacing: 1.75px; word-wrap: break-word">NEW</span><span style="color: #1D1F24; font-size: 14px; font-family: Oswald; font-weight: 500; text-transform: uppercase; word-wrap: break-word">S</span></div>
//                   <div class="Finance" style="left: 580px; top: 0px; position: absolute; opacity: 0.20"><span style="color: #1D1F24; font-size: 14px; font-family: Oswald; font-weight: 500; text-transform: uppercase; letter-spacing: 1.75px; word-wrap: break-word">Financ</span><span style="color: #1D1F24; font-size: 14px; font-family: Oswald; font-weight: 500; text-transform: uppercase; word-wrap: break-word">e</span></div>
//                   <div class="Video" style="left: 386px; top: 0px; position: absolute; opacity: 0.20"><span style="color: #1D1F24; font-size: 14px; font-family: Oswald; font-weight: 500; text-transform: uppercase; letter-spacing: 1.75px; word-wrap: break-word">VIDE</span><span style="color: #1D1F24; font-size: 14px; font-family: Oswald; font-weight: 500; text-transform: uppercase; word-wrap: break-word">O</span></div>
//                   <div class="Ideas" style="left: 147px; top: 0px; position: absolute; opacity: 0.20"><span style="color: #1D1F24; font-size: 14px; font-family: Oswald; font-weight: 500; text-transform: uppercase; letter-spacing: 1.75px; word-wrap: break-word">IDEA</span><span style="color: #1D1F24; font-size: 14px; font-family: Oswald; font-weight: 500; text-transform: uppercase; word-wrap: break-word">S</span></div>
//                   <div class="Entertainment" style="left: 696px; top: 0px; position: absolute; opacity: 0.20"><span style="color: #1D1F24; font-size: 14px; font-family: Oswald; font-weight: 500; text-transform: uppercase; letter-spacing: 1.75px; word-wrap: break-word">ENTERTAINMEN</span><span style="color: #1D1F24; font-size: 14px; font-family: Oswald; font-weight: 500; text-transform: uppercase; word-wrap: break-word">T</span></div>
//                   <div class="Leadership" style="left: 245px; top: 0px; position: absolute; opacity: 0.20"><span style="color: #1D1F24; font-size: 14px; font-family: Oswald; font-weight: 500; text-transform: uppercase; letter-spacing: 1.75px; word-wrap: break-word">LEADERSHI</span><span style="color: #1D1F24; font-size: 14px; font-family: Oswald; font-weight: 500; text-transform: uppercase; word-wrap: break-word">P</span></div>
//               </div>
//               <div class="Logo" style="width: 60px; height: 30px; left: 38px; top: 28px; position: absolute">
//                   <div class="Deck" style="left: 0px; top: 0px; position: absolute; color: #1D1F24; font-size: 24px; font-family: Lato; font-weight: 700; line-height: 30px; word-wrap: break-word">Deck</div>
//                   <div class="ElementShape" style="width: 4px; height: 4px; left: 56px; top: 20px; position: absolute">
//                       <div class="Background" style="width: 4px; height: 4px; left: 0px; top: 0px; position: absolute; background: #FF565C"></div>
//                   </div>
//               </div>
//           </div>
//       </div>
//       `;
// }
import menuIcon from "image/MenuIcon.png";

// <img class="MenuIcon" src="../../image/MenuIcon.png" alt="Menu" />
export default function Header() {
  return `
    <div class="ComponentHeader">
    <div class="Header">
    <div class="Background"></div>
    <div class="ElementBottomBorder">
    <div class="BottomBorder"></div>
    </div>
    <img class="MenuIcon" src="${menuIcon}" alt="Menu" />
                  <div class="Navigation">
                      <div class="Technology">TECHNOLOG<span>Y</span></div>
                      <div class="News">NEW<span>S</span></div>
                      <div class="Finance">Financ<span>e</span></div>
                      <div class="Video">VIDE<span>O</span></div>
                      <div class="Ideas">IDEA<span>S</span></div>
                      <div class="Entertainment">ENTERTAINMEN<span>T</span></div>
                      <div class="Leadership">LEADERSHI<span>P</span></div>
                  </div>
                  <div class="Logo">
                      <div class="Deck">Deck</div>
                      <div class="ElementShape">
                          <div class="Background"></div>
                      </div>
                  </div>
              </div>
          </div>
      `;
}
