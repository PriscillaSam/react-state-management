import { v4 as uuidV4 } from "uuid";

const grudges = [
  {
    id: uuidV4(),
    person: "Leonelle",
    reason: "Parked too close to me in the parking lot",
    forgiven: false
  },
  {
    id: uuidV4(),
    person: "Hilda",
    reason: "Did not brew another cup of coffee after drinking the last cup",
    forgiven: false
  },
  {
    id: uuidV4(),
    person: "Carmel",
    reason: "Failed to wish me a happy birthday but ate my cake",
    forgiven: false
  },
  {
    id: uuidV4(),
    person: "Winona",
    reason: "Generally obnoxious and unrepentant about that fact.",
    forgiven: false
  },
  {
    id: uuidV4(),
    person: "Paige",
    reason: "Cut me in the line at Safeway and made eye contact",
    forgiven: false
  },
  {
    id: uuidV4(),
    person: "Mary",
    reason: "Ate the last doughnut and left the box.",
    forgiven: false
  },
  {
    id: uuidV4(),
    person: "Sam",
    reason: "Blatantly refused to help me fix my bug.",
    forgiven: false
  }
];

export default grudges;
