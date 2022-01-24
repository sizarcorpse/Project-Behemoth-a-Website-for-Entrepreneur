import { merge } from "lodash";
import Autocomplete from "./Autocomplete";
import MuiTooltip from "./MuiTooltip";

export default function ComponentsOverrides(theme) {
  return merge(Autocomplete(theme), MuiTooltip(theme));
}
