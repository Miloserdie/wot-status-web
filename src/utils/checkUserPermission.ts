import {getUserClanInfoReq} from "../api/worldOfTanksApi";

export const checkUserPermission = async (accountId: number) => {
    const {role} = await getUserClanInfoReq(accountId);

    return role === 'commander'
        || role === 'combat_officer'
        || role === 'personnel_officer'
        || role === 'executive_officer';
};