import { TrackListDemo } from "@/utils/constants"
import { raceSliceInterface } from "./raceSlice"
import { trackSliceInterface } from "./trackslice"
export interface RootState{
    race:raceSliceInterface,
    track:trackSliceInterface
}