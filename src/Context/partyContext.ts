import CheckersParty from "amaurycoudr-checkers";
import { PartyState } from "amaurycoudr-checkers/PublicApi/PublicApi";
import { PlayJSON } from "amaurycoudr-checkers/utils/type";
import create from "zustand";

interface PartyContext {
  party?: CheckersParty;
  partyState?: PartyState;
  leaveParty: () => void;
  startParty: () => void;
  play: (play: PlayJSON) => void;
}

const usePartyContext = create<PartyContext>((set) => {
  return {
    party: undefined,
    leaveParty: () => {
      return set({ party: undefined, partyState: undefined });
    },
    startParty: () => {
      const newParty = new CheckersParty();
      return set({ party: newParty, partyState: newParty.getState() });
    },
    play: (play: PlayJSON) =>
      set((state) => {
        const partyState = state.party?.play(play);
        return { ...state, partyState };
      }),
  };
});

export default usePartyContext;
