import { atom } from "recoil";

export const dataAtom = atom({
  key: "location-atom",
  default: { desc: "", img: "", place: "", zoom: 15 },
});
