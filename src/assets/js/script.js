
const feeds = [
    {
        "title": "Start beginning with us",
        "desc": "$300 Bonus plus 25 Free Spins",
        "bgImg": "https://image.freepik.com/free-vector/casino-mascot-logo-design_142989-268.jpg",
        "gameLogo": "https://feniksscasino-lv-cdn-static.gt-cdn.net/game_assets/feca/110/1x1-en.png?resize=220px:*",
        "game": "Royal Panda",
        "bonusType": "Beginner Bonus"
    },
    {
        "title": "Bonus of the month 1",
        "desc": "$100 Bonus plus 10 Free Spins",
        "bgImg": "https://image.freepik.com/free-vector/casino-mascot-logo-design_142989-268.jpg",
        "gameLogo": "https://image.freepik.com/free-vector/casino-mascot-logo-design_142989-268.jpg",
        "game": "Royal Panda",
        "bonusType": "Welcome Bonus"
    },
    {
        "title": "Bonus of the month 2",
        "desc": "$250 Bonus plus 25 Free Spins",
        "bgImg": "https://content.optibet.lv/optibet_lv/banner-managers/5f65346d1d031500121c1249/4ad2b0de-9986-47c7-875f-fb78ee44edf5",
        "gameLogo": "https://www.askgamblers.com/uploads/game_screenshots/other/95/71/59/0f86b2a5f99ee56b656a9ffb07635c4c8d/40-super-hot-slot-egt-interactive.jpg",
        "game": "Book of ra",
        "bonusType": "Welcome Bonus"
    },
    {
        "title": "Bonus of the month 3",
        "desc": "$350 Bonus plus 35 Free Spins",
        "bgImg": "https://image.freepik.com/free-vector/casino-mascot-logo-design_142989-268.jpg",
        "gameLogo": "https://bonanza-slot.com/wp-content/uploads/content-manager/slot/F-FAjFk76FQQDIkK.jpg",
        "game": "Bonanza",
        "bonusType": "Welcome Bonus"
    },
    {
        "title": "Bonus of the month 4",
        "desc": "$450 Bonus plus 45 Free Spins",
        "bgImg": "https://image.freepik.com/free-vector/casino-mascot-logo-design_142989-268.jpg",
        "gameLogo": "https://www.askgamblers.com/uploads/game_screenshots/other/95/71/59/0f86b2a5f99ee56b656a9ffb07635c4c8d/40-super-hot-slot-egt-interactive.jpg",
        "game": "Royal Panda",
        "bonusType": "Welcome Bonus"
    }
]
const newCasinos = [
    {
        "slotImage": "https://feniksscasino-lv-cdn-static.gt-cdn.net/game_assets/feca/110/1x1-en.png?resize=220px:*",
        "slotName":  "Book Of Ra",
        "spins": "100",
        "bonus": "200"
    },
    {
        "slotImage": "https://www.askgamblers.com/uploads/game_screenshots/other/95/71/59/0f86b2a5f99ee56b656a9ffb07635c4c8d/40-super-hot-slot-egt-interactive.jpg",
        "slotName":  "40 super hot",
        "spins": false,
        "bonus": "300"
    },
    {
        "slotImage": "https://bonanza-slot.com/wp-content/uploads/content-manager/slot/F-FAjFk76FQQDIkK.jpg",
        "slotName":  "Bonanza",
        "spins": "150",
        "bonus": false
    },
    {
        "slotImage": "https://feniksscasino-lv-cdn-static.gt-cdn.net/game_assets/feca/110/1x1-en.png?resize=220px:*",
        "slotName":  "Book Of Ra",
        "spins": "100",
        "bonus": "200",
        "rating": 3
    },
    {
        "slotImage": "https://feniksscasino-lv-cdn-static.gt-cdn.net/game_assets/feca/110/1x1-en.png?resize=220px:*",
        "slotName":  "Book Of Ra",
        "spins": "100",
        "bonus": false,
        "rating": 2
    },
    {
        "slotImage": "https://www.askgamblers.com/uploads/game_screenshots/other/95/71/59/0f86b2a5f99ee56b656a9ffb07635c4c8d/40-super-hot-slot-egt-interactive.jpg",
        "slotName":  "40 super hot",
        "spins": false,
        "bonus": "300",
        "rating": 1
    },
    {
        "slotImage": "https://bonanza-slot.com/wp-content/uploads/content-manager/slot/F-FAjFk76FQQDIkK.jpg",
        "slotName":  "Bonanza",
        "spins": "150",
        "bonus": false
    },
    {
        "slotImage": "https://feniksscasino-lv-cdn-static.gt-cdn.net/game_assets/feca/110/1x1-en.png?resize=220px:*",
        "slotName":  "Book Of Ra",
        "spins": false,
        "bonus": "200"
    }
]


$(document).ready(() => {
    displayFeedImages();
    feedSlider();
    displayNewCasinoGames();

})

const feedSlider = () => {
    const pause = 8000;
    let index = 0;
    let feed = $('.feeds-slider .feed'); // array of all feeds

    setInterval(() => {
        feed.map(el => $(feed[el]).removeClass('active')); // go trough every feed and remove class 'active' from element it has one;
        if (index < feed.length - 1) { // check if index is less than feed length;
            index++ // add 1 to index;
        } else { // if index is more than feed length;
            index = 0; // set index to 0 so we don't get value undefined when index will be bigger than feed length
        }
        $(feed[index]).addClass('active') // add class 'active' to specific feed;
    }, pause)

}

const displayFeedImages = () => {
    const feedSlider = $('.feeds-slider');
    feeds.map((feed, index) => {

        feedSlider.append(`<div style="background-image: url(${feed.bgImg});" class="feed ${index === 0 ? 'active' : ''}">
                <p class="feed__title">${feed.title}</p>
                <p class="feed__desc">${feed.desc}</p>
                <p class="feed__game">
                    <img src="${feed.gameLogo}" alt="game picture">
                    ${feed.game} <span class="feed__game__point"></span> ${feed.bonusType}
                </p>
                <p class="feed__bonus-claim">
                    <a href="#claim/bonus">Claim Bonus <i class="fas fa-external-link-alt"></i></a>
                </p>
            </div>`)

    })
}

const displayNewCasinoGames = () => {
    const newCasinoGames = $('.new-casinos__games');
    newCasinos.map(casino => {
        newCasinoGames.append(
            `
                <div class="new-casinos__games__game">
          
                    <header class="new-casinos__games__game__header">
                        <img src="${casino.slotImage}" alt="${casino.slotName}">
                        <div class="new-casinos__games__game__header__middle">
                            <p>${casino.slotName}</p>
                            <div class="stars-outer">
                                <div class="${casino.rating} stars-inner"></div>
                            </div>
                        </div>
                        <div class="new-casinos__games__game__header__right">
                            <i class="fas fa-info-circle"></i>
                        </div>
                    </header>
                    <div class="new-casinos__games__game__bonuses">
                            <div style="${casino.spins === false && 'display: none;'}" class="${casino.spins !== false ? 'new-casinos__games__game__bonuses__bonus spin' : ''}">
                                <p>Spins</p>
                                <span>${casino.spins}</span>
                            </div>
                            <div style="${casino.bonus === false && 'display: none;'}" class="${casino.bonus !== false ? 'new-casinos__games__game__bonuses__bonus' : ''}">
                                <p>Bonus</p>
                                <span>${'$' + casino.bonus}</span>
                            </div>
                    </div>
            <div class="new-casinos__games__game__claim">
                <a href="#bonus/claim"><button>Claim Bonus</button></a>
            </div>
          </div>
            `
        )
        getRating(casino.rating) // execute this function for every feed
    })
}
// Ratings for casino games;

// rating parameter takes value which is data type of double. Ex. 4.1;
function getRating(rating) {
    if (!rating) return; // if there is not rating, we return nothing;
    const starsTotal = 5; // total rating stars;

    const starPercentage = (rating / starsTotal) * 100; // get percentage width;
    const starPercentageRounded = `${Math.round(starPercentage)}%`; // round percentage width, because if we have for Ex. starPercentage of 68.4, we round it to 68;
    $(`.${rating}.stars-inner`).css('width', starPercentageRounded) // set star color width of our star percentage we calculated;
