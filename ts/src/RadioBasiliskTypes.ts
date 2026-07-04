// Typed models for the RadioBasilisk SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Music {
  album?: string
  artist: string
  cover_image?: string
  duration?: number
  id?: string
  played_at: string
  title: string
}

export type MusicListMatch = Partial<Music>

