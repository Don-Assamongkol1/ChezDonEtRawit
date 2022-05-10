import React from 'react'

export const FoodDisplay = ({ direction }) => {
  return (
    <div className="food-grid-row">
      {/* <div className="items animate-right-one"> */}
      <div
        className={`items ${
          direction === 'right' ? 'animate-right-one' : 'animate-left-one'
        }`}
      >
        <a className="food-item-in-row" href="#">
          <img
            alt="Lich"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lich.png"
          />
        </a>
        <a className="food-item-in-row" href="#">
          <img
            alt="Lich"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/morphling.png"
          />
        </a>
        <a className="food-item-in-row" href="#">
          <img
            alt="Lich"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/axe.png"
          />
        </a>
        <a className="food-item-in-row" href="#">
          <img
            alt="Lich"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bane.png"
          />
        </a>
        <a className="food-item-in-row" href="#">
          <img
            alt="Lich"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/windrunner.png"
          />
        </a>
      </div>
      <div
        className={`items ${
          direction === 'right' ? 'animate-right-two' : 'animate-left-two'
        }`}
      >
        <a className="food-item-in-row" href="#">
          <img
            alt="Lich"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lich.png"
          />
        </a>
        <a className="food-item-in-row" href="#">
          <img
            alt="Lich"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/morphling.png"
          />
        </a>
        <a className="food-item-in-row" href="#">
          <img
            alt="Lich"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/axe.png"
          />
        </a>
        <a className="food-item-in-row" href="#">
          <img
            alt="Lich"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bane.png"
          />
        </a>
        <a className="food-item-in-row" href="#">
          <img
            alt="Lich"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/windrunner.png"
          />
        </a>
      </div>
    </div>
  )
}
