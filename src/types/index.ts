export interface IOil {
  name: string
  type: string
  img: string
  price: IPrice
  modalContent: IOilModalContent
}

export interface IPrice {
  sum: number
  volume: string
}

export interface IOilModalContent {
  title: string
  description: string
  properties: string[]
  contraindications: string[]
}
