import { AccessPolicy, Hospital, HospitalMember, HospitalRole, HospitalRolePolicy, SystemRole, SystemRolePolicy, User } from "./types";

export const DB: {
    users: User[]
    systemRoles: SystemRole[]
    systemRolePolicies: SystemRolePolicy[]
    accessPolicies: AccessPolicy[]
    hospitals: Hospital[]
    hospitalRoles: HospitalRole[]
    hospitalRolePolicies: HospitalRolePolicy[]
    hospitalMembers: HospitalMember[]
} = {
    /* base system */
    users: [
        {
            id: 1,
            arn: 'system:user:1',
            name: 'Zach',
            systemRoleId: 1,
        },
        {
            id: 2,
            arn: 'system:user:2',
            name: 'Charlie',
        },
        {
            id: 3,
            arn: 'system:user:3',
            name: 'Eric',
        },
    ],
    systemRoles: [
        {
            id: 1,
            arn: 'system:role:1',
            name: 'super-admin'
        },
    ],
    systemRolePolicies: [
        {
            arn: 'system:role:1:policy:1',
            systemRoleId: 1,
            accessPolicyId: 1,
        }
    ],


    /* policies */
    accessPolicies: [
        {
            id: 1,
            arn: 'system:access_policy:1',
            effect: 'allow',
            actions: ['system:CreateUser'],
            resources: ['system:user:*']
        },
        {
            id: 2,
            arn: 'system:access_policy:2',
            effect: 'allow',
            actions: ["*"],
            resources: ["system:hospital:1:*"]
        }
    ],

    /* hospitals */
    hospitals: [
        {
            id: 1,
            arn: 'system:hospital:1',
            name: 'St. Anthony\'s',
        }
    ],
    hospitalRoles: [
        {
            id: 1,
            arn: 'system:hospital:1:role:1',
            name: 'Owner',
            hospitalId: 1
        },
        {
            id: 2,
            arn: 'system:hospital:1:role:2',
            name: 'Volunteer',
            hospitalId: 1,
        }
    ],
    hospitalRolePolicies: [
        {
            arn: 'system:hospital:1:role:1:policy:1',
            hospitalRoleId: 1,
            accessPolicyId: 1,
        },
        {
            arn: 'system:hospital:1:role:1:policy:2',
            hospitalRoleId: 1,
            accessPolicyId: 2,
        },
    ],
    hospitalMembers: [
        {
            arn: 'system:hospital:1:member:2',
            userId: 2,
            hospitalId: 1,
            hospitalRoleId: 1
        },
        {
            arn: 'system:hospital:1:member:3',
            userId: 3,
            hospitalId: 1,
            hospitalRoleId: 2,
        }
    ],

}
