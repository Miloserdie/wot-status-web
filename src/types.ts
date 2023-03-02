import {ReservesMapType} from "./utils/reservesVocabulary";

export type UserData = {
    access_token: string
    account_id: number
    expires_at: number
    nickname: string
};

export type ClanReserves = {
    bonus_type: string,
    type: ReservesMapType,
    in_stock: InStock[],
};

export type InStock = {
    status: 'active' | 'cannot_be_activated' | 'ready_to_activate',
    level: number,
    action_time: number,
    activated_at: number,
    active_till: number,
    amount: number,
    bonus_values: InStockBonusValues[]

};

export type InStockBonusValues = {
    battle_type: string,
    value: number
};