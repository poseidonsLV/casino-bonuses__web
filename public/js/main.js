const feeds=[{title:"Start beginning with us",desc:"$300 Bonus plus 25 Free Spins",bgImg:"https://image.freepik.com/free-vector/casino-mascot-logo-design_142989-268.jpg",gameLogo:"https://feniksscasino-lv-cdn-static.gt-cdn.net/game_assets/feca/110/1x1-en.png?resize=220px:*",game:"Royal Panda",bonusType:"Beginner Bonus"},{title:"Bonus of the month 1",desc:"$100 Bonus plus 10 Free Spins",bgImg:"https://image.freepik.com/free-vector/casino-mascot-logo-design_142989-268.jpg",gameLogo:"https://image.freepik.com/free-vector/casino-mascot-logo-design_142989-268.jpg",game:"Royal Panda",bonusType:"Welcome Bonus"},{title:"Bonus of the month 2",desc:"$250 Bonus plus 25 Free Spins",bgImg:"https://content.optibet.lv/optibet_lv/banner-managers/5f65346d1d031500121c1249/4ad2b0de-9986-47c7-875f-fb78ee44edf5",gameLogo:"https://www.askgamblers.com/uploads/game_screenshots/other/95/71/59/0f86b2a5f99ee56b656a9ffb07635c4c8d/40-super-hot-slot-egt-interactive.jpg",game:"Book of ra",bonusType:"Welcome Bonus"},{title:"Bonus of the month 3",desc:"$350 Bonus plus 35 Free Spins",bgImg:"https://image.freepik.com/free-vector/casino-mascot-logo-design_142989-268.jpg",gameLogo:"https://bonanza-slot.com/wp-content/uploads/content-manager/slot/F-FAjFk76FQQDIkK.jpg",game:"Bonanza",bonusType:"Welcome Bonus"},{title:"Bonus of the month 4",desc:"$450 Bonus plus 45 Free Spins",bgImg:"https://image.freepik.com/free-vector/casino-mascot-logo-design_142989-268.jpg",gameLogo:"https://www.askgamblers.com/uploads/game_screenshots/other/95/71/59/0f86b2a5f99ee56b656a9ffb07635c4c8d/40-super-hot-slot-egt-interactive.jpg",game:"Royal Panda",bonusType:"Welcome Bonus"}],newCasinos=[{slotImage:"https://feniksscasino-lv-cdn-static.gt-cdn.net/game_assets/feca/110/1x1-en.png?resize=220px:*",slotName:"Book Of Ra",spins:"100",bonus:"200"},{slotImage:"https://www.askgamblers.com/uploads/game_screenshots/other/95/71/59/0f86b2a5f99ee56b656a9ffb07635c4c8d/40-super-hot-slot-egt-interactive.jpg",slotName:"40 super hot",spins:!1,bonus:"300"},{slotImage:"https://bonanza-slot.com/wp-content/uploads/content-manager/slot/F-FAjFk76FQQDIkK.jpg",slotName:"Bonanza",spins:"150",bonus:!1},{slotImage:"https://feniksscasino-lv-cdn-static.gt-cdn.net/game_assets/feca/110/1x1-en.png?resize=220px:*",slotName:"Book Of Ra",spins:"100",bonus:"200",rating:3},{slotImage:"https://feniksscasino-lv-cdn-static.gt-cdn.net/game_assets/feca/110/1x1-en.png?resize=220px:*",slotName:"Book Of Ra",spins:"100",bonus:!1,rating:2},{slotImage:"https://www.askgamblers.com/uploads/game_screenshots/other/95/71/59/0f86b2a5f99ee56b656a9ffb07635c4c8d/40-super-hot-slot-egt-interactive.jpg",slotName:"40 super hot",spins:!1,bonus:"300",rating:1},{slotImage:"https://bonanza-slot.com/wp-content/uploads/content-manager/slot/F-FAjFk76FQQDIkK.jpg",slotName:"Bonanza",spins:"150",bonus:!1},{slotImage:"https://feniksscasino-lv-cdn-static.gt-cdn.net/game_assets/feca/110/1x1-en.png?resize=220px:*",slotName:"Book Of Ra",spins:!1,bonus:"200"}];$(document).ready(()=>{displayFeedImages(),feedSlider(),displayNewCasinoGames()});const feedSlider=()=>{let s=0,e=$(".feeds-slider .feed");setInterval(()=>{e.map(s=>$(e[s]).removeClass("active")),s<e.length-1?s++:s=0,$(e[s]).addClass("active")},8e3)},displayFeedImages=()=>{const a=$(".feeds-slider");feeds.map((s,e)=>{a.append(`<div style="background-image: url(${s.bgImg});" class="feed ${0===e?"active":""}">
                <p class="feed__title">${s.title}</p>
                <p class="feed__desc">${s.desc}</p>
                <p class="feed__game">
                    <img src="${s.gameLogo}" alt="game picture">
                    ${s.game} <span class="feed__game__point"></span> ${s.bonusType}
                </p>
                <p class="feed__bonus-claim">
                    <a href="#claim/bonus">Claim Bonus <i class="fas fa-external-link-alt"></i></a>
                </p>
            </div>`)})},displayNewCasinoGames=()=>{const e=$(".new-casinos__games");newCasinos.map(s=>{e.append(`
                <div class="new-casinos__games__game">
          
                    <header class="new-casinos__games__game__header">
                        <img src="${s.slotImage}" alt="${s.slotName}">
                        <div class="new-casinos__games__game__header__middle">
                            <p>${s.slotName}</p>
                            <div class="stars-outer">
                                <div class="${s.rating} stars-inner"></div>
                            </div>
                        </div>
                        <div class="new-casinos__games__game__header__right">
                            <i class="fas fa-info-circle"></i>
                        </div>
                    </header>
                    <div class="new-casinos__games__game__bonuses">
                            <div style="${!1===s.spins&&"display: none;"}" class="${!1!==s.spins?"new-casinos__games__game__bonuses__bonus spin":""}">
                                <p>Spins</p>
                                <span>${s.spins}</span>
                            </div>
                            <div style="${!1===s.bonus&&"display: none;"}" class="${!1!==s.bonus?"new-casinos__games__game__bonuses__bonus":""}">
                                <p>Bonus</p>
                                <span>${"$"+s.bonus}</span>
                            </div>
                    </div>
            <div class="new-casinos__games__game__claim">
                <a href="#bonus/claim"><button>Claim Bonus</button></a>
            </div>
          </div>
            `),getRating(s.rating)})};function getRating(s){var e;s&&(e=`${Math.round(s/5*100)}%`,$(`.${s}.stars-inner`).css("width",e))}