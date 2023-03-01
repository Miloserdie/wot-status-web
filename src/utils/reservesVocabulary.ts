export type ReservesMapType = keyof typeof reservesMap;

const reservesMap = {
    'BATTLE_PAYMENTS': 'БОЙОВІ ВИПЛАТИ',
    'MILITARY_MANEUVERS': 'ВІЙСЬКОВІ НАВЧАННЯ',
    'TACTICAL_TRAINING': 'ТАКТИЧНА ПІДГОТОВКА',
    'ADDITIONAL_BRIEFING': 'ДОДАТКОВИЙ ІНСТРУКТАЖ',

};

export const reservesName = (type: ReservesMapType): string => {
    return reservesMap[type] || 'РЕЗЕРВ НЕ ЗНАЙДЕНО';
};

export type InStockStatusMapType = keyof typeof inStockStatusMap;

const inStockStatusMap = {
    'active': 'Активований',
    'cannot_be_activated': 'Активація неможлива',
    'ready_to_activate': 'Готовий до активації'
};

export const inStockStatus = (status: InStockStatusMapType): string => {
    return inStockStatusMap[status] || 'Не активний';
}

export type bonusNameMapType = keyof typeof bonusNameMap;

const bonusNameMap = {
    'BATTLE_PAYMENTS': 'Бонус до кридитів',
    'MILITARY_MANEUVERS': 'Бонус довільного досвіду',
    'TACTICAL_TRAINING': 'Бонус бойового досвіду',
    'ADDITIONAL_BRIEFING': 'Бонус до досвіду єкіпажу',
}

export const bonusName = (type:bonusNameMapType): string => {
    return bonusNameMap[type] || 'Бонус не знайдено'
}