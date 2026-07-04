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
# @!attribute [rw] cover_image
#   @return [String, nil]
#
# @!attribute [rw] duration
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] played_at
#   @return [String]
#
# @!attribute [rw] title
#   @return [String]
Music = Struct.new(
  :album,
  :artist,
  :cover_image,
  :duration,
  :id,
  :played_at,
  :title,
  keyword_init: true
)

# Match filter for Music#list (any subset of Music fields).
#
# @!attribute [rw] album
#   @return [String, nil]
#
# @!attribute [rw] artist
#   @return [String, nil]
#
# @!attribute [rw] cover_image
#   @return [String, nil]
#
# @!attribute [rw] duration
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] played_at
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
MusicListMatch = Struct.new(
  :album,
  :artist,
  :cover_image,
  :duration,
  :id,
  :played_at,
  :title,
  keyword_init: true
)

