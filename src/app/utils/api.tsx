import { Card, ApiResponse, Entry } from './interfaces';
import { v4 as uuidv4 } from 'uuid';

export async function getAnimals(): Promise<Card[]> {
  const res = await fetch('https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=10');
  const data: ApiResponse = await res.json();
  
  return data.entries.map((entry: Entry) => {
    return {
      id: uuidv4(),
      url: entry.fields.image.url,
      flipped: false,
      value: entry.fields.image.uuid
    }
  })
}
