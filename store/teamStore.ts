// store/teamStore.ts
import { create } from 'zustand'

type TeamStore = {
  selectedTeam: string | null
  setTeam: (team: string | null) => void
  selectedLeague: string
  setLeague: (league: string) => void
}

export const useTeamStore = create<TeamStore>((set) => ({
  selectedTeam: null,
  setTeam: (team) => set({ selectedTeam: team }),
  selectedLeague: 'Alla',
  setLeague: (league) => set({ selectedLeague: league }),
}))
