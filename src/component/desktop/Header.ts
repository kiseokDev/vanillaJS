import menuIcon from "image/MenuIcon.png";

export default function Header() {
  return `
<div class="ComponentHeader">
    <div class="Header">
        <div class="Background"></div>
        <div class="ElementBottomBorder">
            <div class="BottomBorder"></div>
        </div>
        <img class="MenuIcon" src=${menuIcon} alt="Menu" />
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
// export default function Header() {
//   return `
//     <div class="ComponentHeader">
//         <div class="Header">
//             <div class="Background"></div>
//             <div class="ElementBottomBorder">
//                 <div class="BottomBorder"></div>
//             </div>
//             <img class="MenuIcon" src=${menuIcon} alt="Menu" />
//             <div class="Navigation">
//                 <div class="Technology">TECHNOLOG<span>Y</span></div>
//                 <div class="News">NEW<span>S</span></div>
//                 <div class="Finance">Financ<span>e</span></div>
//                 <div class="Video">VIDE<span>O</span></div>
//                 <div class="Ideas">IDEA<span>S</span></div>
//                 <div class="Entertainment">ENTERTAINMEN<span>T</span></div>
//                 <div class="Leadership">LEADERSHI<span>P</span></div>
//             </div>
//             <div class="Logo">
//                     <div class="Deck">Deck</div>
//                     <div class="ElementShape">
//                         <div class="Background"></div>
//                     </div>
//             </div>
//         </div>
//     </div>
//     <div class="Background">
//         <div class="Image">
//             <div class="Mask"></div>
//             <div class="Mask"></div>
//             <img class="GreenChameleon176136" src=${chameloen} />
//         </div>
//     </div>
//       `;
// }
