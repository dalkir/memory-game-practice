export interface Entry {
  meta: {
    name: string,
    slug: string,
    tags: [],
    type: string,
    uuid: string,
    space: string,
    author: {},
    locale: string,
    excerpt: string,
    private: false,
    category: null,
    segments: [],
    created_at: string,
    updated_at: string,
    published_at: string,
    unpublish_at: null,
    version_type: string,
    category_name: null,
    category_slug: null,
    available_locales: []
  }
  fields: {
    image: {
      url: string,
      tags: [],
      uuid: string,
      title: string,
      alt_text: null,
      description: null,
      content_type: string
    }
  }
}

export interface ApiResponse {
  entries: Entry[],
  meta: {
    total_entries: number,
    per_page: number,
    current_page: number,
    total_pages: number,
  };
}

export interface Card {
  id: string,
  url: string,
  flipped: boolean,
  value: string,
}

interface FlippedCard {
  id: string,
  value: string
}

export interface GameData {
  playerName: string,
  failures: number,
  correct: number,
  flippedCards: string[],
  currentFlipped: FlippedCard[]
}

export interface Action {
  type: string;
  payload: {
    id: string,
    value: string
  };
}
