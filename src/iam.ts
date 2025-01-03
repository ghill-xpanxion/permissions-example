import { DB } from "./data";
import { ActionType, User } from "./types";

export const checkCanAccess = (user: User, action: ActionType, resource: string) => {
    // gather access policies
    const systemRolePolicies = DB.systemRolePolicies.filter(policy => (
        policy.systemRoleId === user.systemRoleId
    ));

    const hospitalRoleIds = DB.hospitalMembers.filter(member => (
        member.userId === user.id
    )).map(member => member.hospitalRoleId);

    const hospitalRolePolicies = DB.hospitalRolePolicies.filter(policy => (
        hospitalRoleIds.includes(policy.hospitalRoleId)
    ))

    const accessPolicyIds = [
        ...systemRolePolicies.map(policy => policy.accessPolicyId),
        ...hospitalRolePolicies.map(policy => policy.accessPolicyId)
    ];
    const accessPolicies = DB.accessPolicies.filter(policy => accessPolicyIds.includes(policy.id))

    // if deny, deny
    const denyPolicy = accessPolicies.find(policy => (
        policy.effect === 'deny',
        policy.actions.some(policyAction => doesResourcePatternMatch(action, policyAction)),
        policy.resources.some(policyResource => doesResourcePatternMatch(resource, policyResource))
    ))

    if (denyPolicy) return false;

    // if allow, allow
    const allowPolicy = accessPolicies.find(policy => (
        policy.effect === 'allow',
        policy.actions.some(policyAction => doesResourcePatternMatch(action, policyAction)),
        policy.resources.some(policyResource => doesResourcePatternMatch(resource, policyResource))
    ))

    if (allowPolicy) return true;

    // otherwise, deny
    return false;
}

export const doesResourcePatternMatch = (pattern1: string, pattern2: string): boolean => { return true }