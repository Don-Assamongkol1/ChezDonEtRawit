import React from 'react'

{
  /* <a class="homepage_HeroIcon_2HjRW" href="/hero/bloodseeker" style="background-image: url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bloodseeker.png&quot;);"><div class="homepage_HeroNameContainer_33qmd"><img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" class="homepage_PrimaryStatIcon_1sfR5"><div class="homepage_HeroName_1mNhY">Bloodseeker</div></div><div class="homepage_FadeContainer_3iytC"><div class="fade_FadeContainer_1JDI3 fade_Bottom_1NXAh"><div class="fade_Fade_1keus" style="background: linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.733) 75%, rgb(0, 0, 0) 100%);" ne="0.910588889508146"></div></div></div></a> */
}

export const FoodDisplay = ({ direction }) => {
  return (
    <div className="food-grid-row">
      <div
        className={`items animate-right-one ${
          direction === 'right' ? '' : 'reverse-animation-direction'
        }`}
      >
        <div className="food-item-in-row" href="#">
          <img
            alt="Lich"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lich.png"
          />
        </div>
        <div className="food-item-in-row" href="#">
          <img
            alt="Lich"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/morphling.png"
          />
        </div>
        <div className="food-item-in-row" href="#">
          <img
            alt="Lich"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/axe.png"
          />
        </div>
        <div className="food-item-in-row" href="#">
          <img
            alt="Lich"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bane.png"
          />
        </div>
        <div className="food-item-in-row" href="#">
          <img
            alt="Lich"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/windrunner.png"
          />
        </div>
      </div>
      <div
        className={`items animate-right-two ${
          direction === 'right' ? '' : 'reverse-animation-direction'
        }`}
      >
        <div className="food-item-in-row" href="#">
          <img
            alt="Lich"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lich.png"
          />
        </div>
        <div className="food-item-in-row" href="#">
          <img
            alt="Lich"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/morphling.png"
          />
        </div>
        <div className="food-item-in-row" href="#">
          <img
            alt="Lich"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/axe.png"
          />
        </div>
        <div className="food-item-in-row" href="#">
          <img
            alt="Lich"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bane.png"
          />
        </div>
        <div className="food-item-in-row" href="#">
          <img
            alt="Lich"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/windrunner.png"
          />
        </div>
      </div>
    </div>
  )
}

{
  /* <a
className="anchor-image"
href="#"
style={{
  backgroundImage:
    'url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bloodseeker.png',
}}
>
<div className="hide">Blood Suckha</div>
</a> */
}
