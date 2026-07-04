# Typed models for the RadioBasilisk SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Music:
    artist: str
    played_at: str
    title: str
    album: Optional[str] = None
    cover_image: Optional[str] = None
    duration: Optional[int] = None
    id: Optional[str] = None


@dataclass
class MusicListMatch:
    album: Optional[str] = None
    artist: Optional[str] = None
    cover_image: Optional[str] = None
    duration: Optional[int] = None
    id: Optional[str] = None
    played_at: Optional[str] = None
    title: Optional[str] = None

