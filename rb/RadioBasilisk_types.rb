# frozen_string_literal: true

# Typed models for the RadioBasilisk SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Music entity data model.
#
# @!attribute [rw] album
#   @return [String, nil]
#
# @!attribute [rw] artist
#   @return [String]
#
# @!attribute [rw] coverImage
#   @return [String, nil]
#
# @!attribute [rw] duration
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] playedAt
#   @return [String]
#
# @!attribute [rw] title
#   @return [String]
Music = Struct.new(
  :album,
  :artist,
  :coverImage,
  :duration,
  :id,
  :playedAt,
  :title,
  keyword_init: true
)

# Request payload for Music#list.
#
# @!attribute [rw] album
#   @return [String, nil]
#
# @!attribute [rw] artist
#   @return [String, nil]
#
# @!attribute [rw] coverImage
#   @return [String, nil]
#
# @!attribute [rw] duration
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] playedAt
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
MusicListMatch = Struct.new(
  :album,
  :artist,
  :coverImage,
  :duration,
  :id,
  :playedAt,
  :title,
  keyword_init: true
)

