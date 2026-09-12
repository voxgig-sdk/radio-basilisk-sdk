import { RadioBasiliskEntityBase } from '../RadioBasiliskEntityBase';
import type { RadioBasiliskSDK } from '../RadioBasiliskSDK';
import type { Control } from '../types';
import type { Music, MusicListMatch } from '../RadioBasiliskTypes';
declare class MusicEntity extends RadioBasiliskEntityBase<Music> {
    constructor(client: RadioBasiliskSDK, entopts: any);
    make(this: MusicEntity): MusicEntity;
    list(this: any, reqmatch?: MusicListMatch, ctrl?: Control): Promise<MusicEntity[]>;
}
export { MusicEntity };
