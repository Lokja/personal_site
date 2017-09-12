import breyaIMG from '../images/breya.jpg'
import intetIMG from '../images/intet.jpg'

class Deck {
  constructor(commander, decklist, id, img) {
    this.commander = commander
    this.decklist = decklist
    this.deckid = id
    this.img = img
  }
}

let breyaDeck = ["Scrap Trawler", "Command Tower", "Temple of Enlightenment",
  "Goblin Welder", "Spirebluff Canal", "Servo Schematic", "Thopter Foundry",
  "Thopter Spy Network", "Island", "Mountain", "Plains", "Swamp", "Sol Ring"]
let intetDeck = ["Mirri's Guile", "Dragonspeaker Shaman", "Kodama's Reach",
  "Cultivate", "Atarka, World Render", "Sensei's Divining Top", "Crystal Ball",
  "Command Tower", "Spearbreaker Behemoth", "Dack Fayden", "Nantuko Elder",
  "Sol Ring"]

let breya = new Deck('Breya, Etherium Sculptor', breyaDeck, 0, breyaIMG)
let intet = new Deck('Intet, the Dreamer', intetDeck, 1, intetIMG)

var decks = {data: [breya, intet]}

export default decks
