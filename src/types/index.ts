export interface IOil {
  name: string
  type: string
  img: string
  modalContent: IOilModalContent
}

export interface IOilModalContent {
  title: string
  description: string
  properties: string[]
  contraindications: string[]
}
