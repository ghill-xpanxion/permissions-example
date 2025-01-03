export type User = {
    id: number
    arn: string // system:user:{user_id}
    name: string
    systemRoleId?: number
}

export type SystemRole = {
    id: number
    arn: string // system:role:{role_id}
    name: string
}

export type SystemRolePolicy = {
    arn: string // system:role:{role_id}:policy:{policy_id}
    systemRoleId: number
    accessPolicyId: number
}

export type AccessPolicy = {
    id: number
    arn: string // system:access_policy:{access_policy_id}
    effect: 'allow' | 'deny'
    actions: string[]
    resources: string[]
}

export type Hospital = {
    id: number
    arn: string // system:hospital:{hospital_id}
    name: string
}

export type HospitalRole = {
    id: number
    arn: string // system:hospital:{hospital_id}:role:{hospital_role_id}
    name: string
    hospitalId: number
}

export type HospitalRolePolicy = {
    arn: string // system:hospital:{hospital_id}:role:{role_id}:policy:{policy_id}
    hospitalRoleId: number
    accessPolicyId: number
}

export type HospitalMember = {
    arn: string // system:hospital:{hospital_id}:member:{member_user_id}
    userId: number
    hospitalId: number
    hospitalRoleId: number
}

/* iam */
export type ActionType =
    "system:CreateUser"
    | "hospital:CreateVolunteer";
