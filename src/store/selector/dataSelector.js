import { dataAtom } from "../atom/dataAtom";
import { selector } from "recoil";

export const dataSelector = selector({
  key: "location-selector",
  get: ({ get }) => {
    const dataLocation = get(dataAtom);
    return dataLocation;
  },
});
