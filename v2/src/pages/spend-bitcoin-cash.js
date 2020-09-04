import React from "react"
import fbt from "fbt"
import SEO from "components/seo"
import { Container, Row } from "react-bootstrap"
import Sidebar from "components/sidebar/sidebar.js"
import LargeTile from "components/large-tile/large-tile.js"
import Cart from "assets/icons/spend/cart.svg"
import Pizza from "assets/icons/spend/pizza.svg"
import Gift from "assets/icons/spend/gift.svg"
import SpendImg from "assets/images/get-started/spend-bitcoin-cash.jpg"

const SpendPage = () => {
  const sideBarContent = [
    {
      title: fbt("Shop Online", "Spend page side column 'Shop online' header"),
      paragraph: fbt(
        "Spend Bitcoin Cash at some of your favourite online retailers.",
        "Spend page side column 'shop online' paragraph"
      ),
      icon: <Cart />,
    },
    {
      title: fbt(
        "Spend at Restaurants",
        "Spend page side column 'Shop restaurants' header"
      ),
      paragraph: fbt(
        "Visit restaurants or cafes that accept Bitcoin Cash.",
        "Spend page side column 'Shop restaurants' paragraph"
      ),
      icon: <Pizza />,
    },
    {
      title: fbt(
        "Shop in Person",
        "Spend page side column 'Shop in person' header"
      ),
      paragraph: fbt(
        "Drop in to over 5000 physical locations accepting Bitcoin Cash.",
        "Spend page side column 'Shop in person' paragraph"
      ),
      icon: <Gift />,
    },
  ]

  const largeTileContent = [
    {
      subtitle: fbt("What can I buy with Bitcoin Cash?", "Spend page subtitle"),
      title: fbt("Spend Bitcoin Cash", "Spend page title"),
      paragraph: (
        <fbt desc="Spend page main paragraph">
          Getting stBitcoin Cash isn’t just for speculation. It’s intended usage
          is a peer to peer electronic currency, which means, it should be
          spent. Spending Bitcoin Cash is fast, with near-instant transactions
          and sub-cent transaction fees, making it the most secure and widely
          used digital currency on the planet.
        </fbt>
      ),
    },
  ]

  return (
    <>
      <SEO title="Spend Bitcoin Cash" />
      <Container>
        <Row>
          <Sidebar
            content={sideBarContent}
            title={fbt(
              "Where can I spend Bitcoin Cash?",
              "sidebar title 'spend' page"
            )}
          />
          <LargeTile content={largeTileContent}>
            <img src={SpendImg} alt="Spend Bitcoin Cash" />
          </LargeTile>
        </Row>
      </Container>
      <Container>
        <h2 className="centerh2">
          <fbt desc="Spend page spend map header">
            Spend Bitcoin Cash in Person
          </fbt>
        </h2>
        <div>
          <iframe
            src="https://iframe.map.bitcoin.com/"
            title="Spend Bitcoin Cash Map"
            width="500"
            height="500"
            className="spendmap"
          />
          <h4 className="centerh4">
            Location data by{" "}
            <a href="https://map.bitcoin.com" target="_blank" rel="noreferrer">
              Bitcoin.com Maps
            </a>
          </h4>
        </div>
      </Container>
    </>
  )
}

export default SpendPage
