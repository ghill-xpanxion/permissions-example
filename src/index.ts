import { checkCanAccess } from "./iam";
import { User } from "./types";

export const createUser = (user: User) => {
    // check that the current user can create users
    const canAccess = checkCanAccess(
        user,
        "system:CreateUser",
        "system:users:*"
    );

    // create the user
}

export const associateVolunteer = (user: User, hospitalId: number) => {
    const canAccess = checkCanAccess(
        user,
        "hospital:CreateVolunteer",
        `system:hospitals:${hospitalId}:member:*`
    )
}