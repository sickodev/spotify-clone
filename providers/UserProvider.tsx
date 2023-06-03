"use client";

import { MyUserContextProvider } from "@/hooks/useUser";
import React from "react";

type Props = {
    children: React.ReactNode;
};

const UserProvider = ({ children }: Props) => {
    return <MyUserContextProvider>{children}</MyUserContextProvider>;
};

export default UserProvider;
